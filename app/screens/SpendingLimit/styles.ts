import AppStyles from 'app/config/AppStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.COLOR_BG,
  },
  header: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 24,
    color: AppStyles.colors.COLOR_WHITE,
    marginLeft: 24,
    marginTop: 15,
  },
  bottomView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: AppStyles.colors.COLOR_WHITE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  limitView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limitText: {
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    fontSize: 14,
    color: AppStyles.colors.COLOR_TEXT_BLACK,
    marginLeft: 20,
  },
  placeholder: {
    marginTop: 20,
    fontSize: 13,
    color: AppStyles.colors.COLOR_TEXT_SECONDARY,
  },
  saveBtn: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#0000001F',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 5,
  },
  saveBtnHeight: {
    height: 56,
  },
  saveBtnLbl: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    fontSize: 16,
    color: AppStyles.colors.COLOR_WHITE,
  },
  inputView: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
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
    color: AppStyles.colors.COLOR_WHITE,
  },

  limitInput: {
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 24,
    marginHorizontal: 15,
    width: '80%',
    height: 50,
  },
  underline: {
    backgroundColor: AppStyles.colors.COLOR_UNDERLINE,
    height: 1,
  },
  moneyView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  moneyChip: {
    height: 40,
    backgroundColor: AppStyles.colors.COLOR_PRIMARY_TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 90,
    borderRadius: 4,
  },
  moneyText: {
    fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
    fontSize: 12,
    color: AppStyles.colors.COLOR_PRIMARY,
  },
});
export default styles;
