import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {DotView, Header, Loader, Text} from 'app/components';
import styles from './styles';
import {cardMenu} from 'app/models/mock/CardMenu';
import NavigationService from 'app/navigation/NavigationService';
import Images from 'app/config/Images';
import {ProgressBar, Switch} from 'react-native-paper';
import AppStyles from 'app/config/AppStyles';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {useDispatch, useSelector} from 'react-redux';
import * as debitcardActions from 'app/store/actions/debitcardActions';
import IState from 'app/models/reducers';

const deviceHeight = Dimensions.get('window').height;
let topPadding = 500;
let bottomPadding = deviceHeight / 2;
const pinHideText = '***';

const DebitCard: React.FC = () => {
  const dispatch = useDispatch();
  const debitCard = useSelector((state: IState) => state.debitcardReducer);
  const [showCard, setShowCard] = useState(false);
  const debitCardInfo = debitCard.cardDetails;
  const debitCardNumber = debitCardInfo.cardNumber.split('-');

  useEffect(() => {
    dispatch(debitcardActions.onCardRequest());
  }, []);

  const onToggleLimit = (index: number) => {
    if (index === 1) {
      dispatch(debitcardActions.disableLimit());
    }
  };

  const onMenuPressed = (index: number) => {
    if (index === 1) {
      NavigationService.navigate('SpendingLimit');
    }
  };

  const calculateProgress = () => {
    const limit = Number(debitCard.limitAmount);
    const amountSpend = Number(debitCard.amountSpend);
    if (amountSpend > limit) {
      return 1;
    } else {
      const percentage = amountSpend / limit;
      return percentage;
    }
  };
  const getSubMenuText = (index: number) => {
    if (index === 1 && debitCard.limitEnabled) {
      return 'Your weekly spending limit is S$ ' + debitCard.limitAmount;
    }
    return cardMenu[index].subTitle;
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Debit Card</Text>
      <Text style={styles.availBalText}>Available balance</Text>
      <View style={styles.inputView}>
        <View style={styles.currencyView}>
          <Text style={styles.currencyText}>S$</Text>
        </View>
        <Text style={styles.amountText}>{debitCard.balance}</Text>
      </View>
      <SlidingUpPanel
        containerStyle={styles.bottomView}
        backdropOpacity={0}
        draggableRange={{top: topPadding, bottom: bottomPadding}}
      >
        <View
          onLayout={event => {
            var {height} = event.nativeEvent.layout;
            topPadding = height + 20;
          }}
        >
          <View style={[styles.cardContainerView]}>
            <TouchableOpacity
              style={styles.showHideView}
              onPress={() => setShowCard(!showCard)}
              activeOpacity={1}
            >
              {showCard ? (
                <Images.hide_eye
                  style={styles.showHideImg}
                  width={16}
                  height={16}
                />
              ) : (
                <Images.show_eye
                  style={styles.showHideImg}
                  width={16}
                  height={16}
                />
              )}
              <Text style={styles.showHideText}>
                {showCard ? 'Hide card number' : 'Show card number'}
              </Text>
            </TouchableOpacity>
            <View style={styles.cardView}>
              <Images.logo_aspire
                style={styles.cardLogo}
                width={74}
                height={21}
              />
              <Text style={styles.cardNameTxt}>
                {debitCardInfo && debitCardInfo.cardHolderName}
              </Text>
              <View style={styles.cardNumView}>
                {showCard ? (
                  <Text style={[styles.cardNumTxt, styles.zeroMarginLeft]}>
                    {debitCardNumber[0]}
                  </Text>
                ) : (
                  <DotView style={styles.zeroMarginLeft} />
                )}

                {showCard ? (
                  <Text style={styles.cardNumTxt}>{debitCardNumber[1]}</Text>
                ) : (
                  <DotView />
                )}

                {showCard ? (
                  <Text style={styles.cardNumTxt}>{debitCardNumber[2]}</Text>
                ) : (
                  <DotView />
                )}
                <Text style={styles.cardNumTxt}>{debitCardNumber[3]}</Text>
              </View>
              <View style={styles.dateView}>
                <Text style={styles.titleTxt}>{'Thru: '}</Text>
                <Text style={styles.titleTxt}>
                  {debitCardInfo.cardValidity}
                </Text>
                <Text style={[styles.titleTxt, styles.valueTxt]}>
                  {'CVV: '}
                </Text>
                <Text style={[showCard ? styles.titleTxt : styles.hideText]}>
                  {showCard ? debitCardInfo.cardCvv : pinHideText}
                </Text>
              </View>
              <Images.visa_logo
                style={styles.visaLogo}
                width={59}
                height={20}
              />
            </View>
          </View>
          {debitCard.limitEnabled && (
            <View style={styles.chartView}>
              <View style={styles.limitContainer}>
                <Text style={styles.limitText}>Debit card spending limit</Text>
                <View style={styles.limitView}>
                  <Text style={styles.limitActual}>
                    S$ {debitCard.amountSpend}
                  </Text>
                  <Text style={styles.separator}>|</Text>
                  <Text style={styles.limitTotal}>
                    S$ {debitCard.limitAmount}
                  </Text>
                </View>
              </View>
              <ProgressBar
                progress={calculateProgress()}
                style={styles.progressbar}
                color={AppStyles.colors.COLOR_PRIMARY}
              />
            </View>
          )}

          {cardMenu.map((value, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.menuView,
                  index === cardMenu.length - 1 && styles.bottomMargin,
                ]}
                key={index.toString()}
                disabled={value.disabled}
                onPress={() => onMenuPressed(index)}
              >
                <value.imageIcon
                  style={styles.menuImage}
                  width={32}
                  height={32}
                />
                <View style={[value.showSwitch && styles.menuWidth]}>
                  <Text style={styles.menuText}>{value.title}</Text>
                  <Text style={styles.menuSubText}>
                    {getSubMenuText(index)}
                  </Text>
                </View>
                {value.showSwitch && (
                  <Switch
                    style={styles.switch}
                    color={AppStyles.colors.COLOR_PRIMARY}
                    value={index === 1 ? debitCard.limitEnabled : false}
                    disabled={index === 1 ? !debitCard.limitEnabled : true}
                    onValueChange={() => onToggleLimit(index)}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </SlidingUpPanel>
      <Loader />
    </View>
  );
};

export default DebitCard;
