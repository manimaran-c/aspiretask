import AppStyles from 'app/config/AppStyles';
import Images from 'app/config/Images';
import NavigationService from 'app/navigation/NavigationService';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export interface IHeaderProps {
  showBack?: boolean;
}

const Header: React.FC<IHeaderProps> = ({showBack = false}) => {
  return (
    <View style={[styles.header]}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => {
            NavigationService.goBack();
          }}
          style={styles.backView}
        >
          <Image source={Images.back} style={styles.backImg} />
        </TouchableOpacity>
      ) : (
        <>
          <View />
        </>
      )}
      <Images.logo width={26} height={26} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppStyles.colors.COLOR_BG,
    height: 56,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  backView: {
    width: 45,
    height: 45,
    justifyContent: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
});
export default Header;
