import {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {colorSchemeProps, Props, themeType} from './types';
import {lightTheme} from "../../theme/default";

const useAppearance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(
    Appearance.getColorScheme() || 'light',
  );

  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) {
        setCurrentTheme(colorScheme);
      }
    },
    [],
  );

  const theme = useMemo(() => {
    if (currentTheme === 'light') {
      return lightTheme;
    }
    return lightTheme;
  }, [currentTheme]);

  useEffect(() => {
    const event = Appearance.addChangeListener(handleChangeAppearance);

    return () => event.remove();
  }, [handleChangeAppearance]);

  return {currentTheme, theme};
};

export default useAppearance;
