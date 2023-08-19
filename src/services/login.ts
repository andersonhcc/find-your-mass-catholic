import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const login = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { user } = await GoogleSignin.signIn();
    return user;
  } catch (err) {
    console.log(err);
  }
}
