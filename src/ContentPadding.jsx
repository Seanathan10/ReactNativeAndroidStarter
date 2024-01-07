/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

export function ContentPadding({amount}) {
  return (
    <View>
      {Array.from({length: amount}).map((_, index) => (
        <Text key={index}>
          &nbsp;
        </Text>
      ))}
    </View>
  );
}
