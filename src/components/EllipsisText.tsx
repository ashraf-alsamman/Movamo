import React from 'react';
import { Text } from 'react-native';

interface EllipsisTextProps {
  text: string;
  maxLength: number;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({ text, maxLength }) => {
  if (!text || typeof text !== 'string') {
    console.error('Invalid text or text is not a string');
    return null;
  }

  if (!maxLength || typeof maxLength !== 'number') {
    console.error('Invalid maxLength or maxLength is not a number');
    return null;
  }

  if (text.length <= maxLength) {
    return <Text>{text}</Text>;
  }

  const truncatedText = `${text.substring(0, maxLength)}...`;

  return <Text>{truncatedText}</Text>;
};

export default EllipsisText;
