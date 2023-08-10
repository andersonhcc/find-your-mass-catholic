import {useNavigation} from '@react-navigation/native';

const useAppNavigation = () => {
  const navigation = useNavigation();

  return navigation;
};
export default useAppNavigation;
