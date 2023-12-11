import React, { FC, ReactNode } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  Platform,
  View,
} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ReactNode;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  onPress,
  title,
  disabled,
  buttonStyle,
  textStyle,
  icon,
  ...props
}) => {
  const buttonColor = disabled ? '#ccc' : '#051526';
  const textColor = disabled ? '#000' : '#fff';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
        {title}
      </Text>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 7,
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    marginLeft: 5,
  },
});

export default PrimaryButton;
