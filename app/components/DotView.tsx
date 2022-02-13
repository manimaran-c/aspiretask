import React from 'react';
import {StyleSheet, TextProps, View} from 'react-native';
import AppStyles from 'app/config/AppStyles';

interface Props extends TextProps {
  count?: number;
}

const DotView: React.FC<Props> = ({count = 4, ...props}: Props) => {
  var elements = [];
  for (var i = 0; i < count; i++) {
    elements.push(
      <View
        style={[styles.dotView, i === 0 && styles.zeroMarginLeft]}
        key={i.toString()}
      />,
    );
  }

  return <View style={[styles.dotContainer, props.style]}>{elements}</View>;
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    marginLeft: 24,
  },
  dotView: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: AppStyles.colors.COLOR_WHITE,
    marginLeft: 6,
  },
  zeroMarginLeft: {
    marginLeft: 0,
  },
});
export default DotView;
