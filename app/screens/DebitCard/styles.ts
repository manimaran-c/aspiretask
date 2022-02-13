import AppStyles from 'app/config/AppStyles';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const cardWidth = deviceWidth - 48;
const cardHeight = (cardWidth * 2) / 3 - 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.COLOR_BG,
  },
  header: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 24,
    marginLeft: 24,
  },
  availBalText: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    marginLeft: 24,
    marginTop: 35,
  },
  inputView: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 24,
  },
  currencyView: {
    backgroundColor: AppStyles.colors.COLOR_PRIMARY,
    width: 40,
    height: 24,
    borderRadius: 3,
    justifyContent: 'center',
  },
  currencyText: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 13,
    textAlign: 'center',
  },
  amountText: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 24,
    marginLeft: 10,
  },
  bottomView: {
    flex: 1,
    marginTop: 80,
    backgroundColor: AppStyles.colors.COLOR_WHITE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  cardContainerView: {
    marginTop: -70,
  },
  cardView: {
    backgroundColor: AppStyles.colors.COLOR_PRIMARY,
    width: cardWidth,
    height: cardHeight,
    borderRadius: 10,
    padding: 24,
  },
  showHideView: {
    flexDirection: 'row',
    backgroundColor: AppStyles.colors.COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: -38,
    position: 'absolute',
    height: 44,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  showHideImg: {
    marginLeft: 15,
  },
  showHideText: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    fontSize: 12,
    color: AppStyles.colors.COLOR_PRIMARY,
    marginLeft: 10,
    marginRight: 12,
    width: 115,
  },
  cardLogo: {
    alignSelf: 'flex-end',
  },
  visaLogo: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  cardNameTxt: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 22,
    letterSpacing: 0.53,
    marginTop: 25,
  },
  cardNumTxt: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    fontSize: 14,
    letterSpacing: 3.46,
    marginLeft: 24,
  },
  zeroMarginLeft: {
    marginLeft: 0,
  },
  cardNumView: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  dateView: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 4,
  },
  titleTxt: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    fontSize: 13,
    letterSpacing: 1.56,
  },
  hideText: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 24,
    letterSpacing: 2.88,
    marginTop: Platform.OS === 'android' ? -2 : 0,
  },
  valueTxt: {
    marginLeft: 32,
  },
  menuView: {
    flexDirection: 'row',
    marginTop: 32,
  },
  menuImage: {
    marginRight: 12,
  },
  menuText: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    color: AppStyles.colors.COLOR_TEXT_PRIMARY,
    marginTop: 5,
  },
  menuSubText: {
    fontSize: 13,
    color: AppStyles.colors.COLOR_TEXT_BLACK_TRANSPARENT,
    marginTop: 2,
  },
  switch: {
    transform:
      Platform.OS === 'ios'
        ? [{scaleX: 0.75}, {scaleY: 0.75}]
        : [{scaleX: 1}, {scaleY: 1}],
    flex: 0.15,
  },
  menuWidth: {
    flex: 0.85,
  },
  cardRange: {top: deviceHeight - 200, bottom: 400},
  chartView: {
    marginTop: 26,
  },
  limitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  limitView: {
    flexDirection: 'row',
  },
  limitText: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    color: AppStyles.colors.COLOR_TEXT_BLACK,
    fontSize: 13,
  },
  limitTotal: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    color: AppStyles.colors.COLOR_TEXT_BLACK_TRANSPARENT,
    fontSize: 13,
  },
  limitActual: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    color: AppStyles.colors.COLOR_PRIMARY,
    fontSize: 13,
  },
  separator: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    color: AppStyles.colors.COLOR_TEXT_PRIMARY,
    fontSize: 13,
    marginHorizontal: 5,
  },
  progressbar: {
    height: 15,
    marginTop: 6,
    borderRadius: 30,
    backgroundColor: AppStyles.colors.COLOR_PRIMARY_TRANSPARENT,
  },
});
export default styles;
