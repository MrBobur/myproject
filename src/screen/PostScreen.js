import * as React from 'react';
import {View, Text,Button } from 'react-native';

export function PostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PostScreen</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}