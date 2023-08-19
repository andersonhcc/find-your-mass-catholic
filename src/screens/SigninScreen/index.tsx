import {SigninView} from "./view";
import { UserModel } from "../../models/User";
import { PixelRatio } from "react-native";

const user = new UserModel();

export const SignIn = () => {

  const handleLoginWithGoogle = async () => {
    const response = await user.login();
    console.log(response);
  }

  const imageResponsiveInIOSandAndroid = {
    width: PixelRatio.getPixelSizeForLayoutSize(120),
    height: PixelRatio.getPixelSizeForLayoutSize(120),
  };

  return (
    <SigninView
     handleLoginWithGoogle={handleLoginWithGoogle}
     objectWidthAndHeight={imageResponsiveInIOSandAndroid}
    />
  )

}
