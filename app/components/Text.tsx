/**
 * Common Text Component
 */
import React from 'react';
import {Text as RText, StyleSheet, TextProps} from 'react-native';
import AppStyles from 'app/config/AppStyles';

interface Props extends TextProps {
  children?: any;
}

const Text: React.FC<Props> = ({children, ...props}: Props) => {
  return <RText style={[styles.text, props.style]}>{children}</RText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.colors.COLOR_WHITE,
  },
});
export default Text;
