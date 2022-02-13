import AppStyles from 'app/config/AppStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppStyles.colors.COLOR_TEXT_BLACK,
    fontFamily: AppStyles.fonts.FONT_BOLD,
    fontSize: 16,
  },
});
export default styles;
