import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Header, Text} from 'app/components';
import styles from './styles';
import Images from 'app/config/Images';
import {Button} from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import NumberFormat from 'react-number-format';
import AppStyles from 'app/config/AppStyles';
import {useDispatch, useSelector} from 'react-redux';
import * as debitcardActions from 'app/store/actions/debitcardActions';
import IState from 'app/models/reducers';

const currencyValues = ['5,000', '10,000', '15,000'];
const SpendingLimit: React.FC = () => {
  const debitCard = useSelector((state: IState) => state.debitcardReducer);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(debitCard.limitAmount);

  const onSave = () => {
    dispatch(debitcardActions.updateLimit(limit.replace(',', '')));
    NavigationService.goBack();
  };

  const onMoneyTap = (value: string) => {
    setLimit(value);
  };
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <Text style={styles.header}>Spending limit</Text>
      <View style={styles.bottomView}>
        <View style={styles.limitView}>
          <Images.meter width={16} height={16} />
          <Text style={styles.limitText}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.inputView}>
          <View style={styles.currencyView}>
            <Text style={styles.currencyText}>S$</Text>
          </View>
          <NumberFormat
            value={limit}
            displayType={'text'}
            thousandSeparator={true}
            allowLeadingZeros={false}
            renderText={value => (
              <TextInput
                style={styles.limitInput}
                keyboardType="number-pad"
                returnKeyType="done"
                value={value}
                onChangeText={text => {
                  setLimit(text);
                }}
              />
            )}
          />
        </View>
        <View style={styles.underline} />

        <Text style={styles.placeholder}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        <View style={styles.moneyView}>
          {currencyValues.map(value => {
            return (
              <TouchableOpacity
                style={styles.moneyChip}
                key={value}
                onPress={() => onMoneyTap(value)}
              >
                <Text style={styles.moneyText}>S$ {value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Button
          style={styles.saveBtn}
          labelStyle={styles.saveBtnLbl}
          contentStyle={styles.saveBtnHeight}
          mode="contained"
          onPress={onSave}
          uppercase={false}
          color={
            limit !== ''
              ? AppStyles.colors.COLOR_PRIMARY
              : AppStyles.colors.COLOR_DISABLED
          }
          disabled={limit === ''}
        >
          Save
        </Button>
      </View>
    </View>
  );
};

export default SpendingLimit;
