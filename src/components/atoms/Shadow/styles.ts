import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  shadowIOS: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
  },
  shadowANDROID: {
    elevation: 20,
    shadowColor: '#000',
  },
});

export default styles;
