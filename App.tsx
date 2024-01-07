/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { ContentPadding } from './src/ContentPadding';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  changeNavigationBarColor('transparent', false); // The second parameter is for light/dark theme.

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View
            style={{backgroundColor: isDarkMode ? Colors.black : Colors.white}}>
            {Array.from({length: 100}).map((_, index) => (
              <Text style={styles.text} key={index}>
                This is line #{index + 1} calculated using &#123;index&#40;{index}&#41; + 1&#125;
              </Text>
            ))}
            <ContentPadding amount={ 2 }/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default App;
