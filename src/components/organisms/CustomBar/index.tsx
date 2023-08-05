import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from 'styled-components';

export const CustomBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();

  const animationPadding = useSharedValue(14);

  const animation = useAnimatedStyle(() => {
    'worklet';
    return {
      padding: animationPadding.value,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
              //animationPadding.value = withTiming(18);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}>
              <View style={{ alignItems: 'center', padding: 4 }}>
                <Animated.View
                  style={[
                    {
                      padding: 15,
                      borderRadius: 99,
                      backgroundColor: isFocused ? '#FF8C0050' : 'transparent',
                    },
                  ]}>
                  {options.tabBarIcon &&
                    options.tabBarIcon({
                      focused: isFocused,
                      color: isFocused ? colors.primary : '#535353',
                      size: 20,
                    })}
                </Animated.View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  content: {
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    borderRadius: 99,
    gap: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
