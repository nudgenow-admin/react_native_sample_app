/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { Nudge } from 'nudge_react_native_v2';
import { Header } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  useEffect(() => {
    // prod-tech api key
    Nudge.init(
      'hD1ZnyzKA3ukf7kCRFSlqVp2ktrRhkWj+AcDV6yn4xtilDmOmAslDe4YJdpd5n6m+Dxvw47U3MsJVP3UW9NuLw==',
      true,
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ height: '100%' }}>
        <Header />
        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => Nudge.userIdentifier('rn_test_july_25_1')}>
            <Text style={styles.text}>Identify Test</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.button, marginTop: 10 }}
            onPress={() =>
              Nudge.track('sample_event_july_25_1', { amount: 100 })
            }>
            <Text style={styles.text}>Track Test</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.button, marginTop: 10 }}
            onPress={() => Nudge.userSignOut()}>
            <Text style={styles.text}>Signout Test</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 6,
    elevation: 3,
  },
  text: {
    color: '#fff',
  },
});

export default App;
