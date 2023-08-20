import SigninView from "../view";
import { lightTheme } from "../../../global/theme/default";
import { ThemeProvider } from 'styled-components/native';
import { render } from "react-native-testing-library";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PixelRatio } from "react-native";
import 'jest-styled-components/native'

const handleLoginWithGoogleMock = () => {
  console.log("function handleLoginWithGoogleMock");
};
const objectWidthAndHeight = {
  width: PixelRatio.getPixelSizeForLayoutSize(120),
  height: PixelRatio.getPixelSizeForLayoutSize(120),
}

const ThemeProviderMock = (props: any) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={lightTheme}>
        {props.children}
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

describe('View Screen Login', () => {
  it('should render correctly', () => {
    const viewRender = render(
      <SigninView
        handleLoginWithGoogle={handleLoginWithGoogleMock}
        objectWidthAndHeight={objectWidthAndHeight}
      />
      , { wrapper: ThemeProviderMock });
    expect(viewRender).toBeDefined();
  });
})
