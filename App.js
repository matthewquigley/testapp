import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image  } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image 
              source={require('./assets/moarlogo.png')}
              style={{width: 300, height: 100}}
              resizeMode="contain"
          />

          {/* <StatusBar style="auto" /> */}
          <TextInput
            placeholder="User Name"
            style={{ marginBottom: 20 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{ marginBottom: 20 }}
          />
          <TouchableOpacity style={{ marginBottom: 20 }}>
            <Text>Login</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>Test Git. The username/password used here is the same password used to login to Windows on your computer.</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003d5a',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1
  }
});
