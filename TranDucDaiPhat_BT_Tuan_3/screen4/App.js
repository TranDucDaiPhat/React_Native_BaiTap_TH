import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#C7F4F6','#00CCF9']} 
      locations={[0.8, 1]}
    >
      <View style={styles.body}>

        <View style={{flex:2, justifyContent: 'flex-end'}}>
          <Text style={[styles.title, styles.text]}>CODE</Text>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={[styles.verify, styles.text]}>VERIFICATION</Text>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={[styles.message, styles.text]}>{`Enter ontime password sent on
++849092605798`}</Text>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <View style={styles.searchSection}>
            <TextInput style={styles.input} textAlign={'center'} />
            <TextInput style={styles.input} textAlign={'center'} />
            <TextInput style={styles.input} textAlign={'center'} />
            <TextInput style={styles.input} textAlign={'center'} />
            <TextInput style={styles.input} textAlign={'center'} />
            <TextInput style={styles.input} textAlign={'center'} />
          </View>
        </View>

        <View style={styles.buttonView}>
          <View style={{width: '90%'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>VERIFY CODE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00CCF9'
  }, 
  body: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 60,
  },
  verify: {
    fontWeight: 700,
    fontSize: 20,
  },
  message: {
    fontWeight: 700,
    fontSize: 15,
  },
  buttonView: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    height: 48,
    marginTop: 25,
    backgroundColor: '#E3C000',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontWeight: 700,
    fontSize: 20,
  },

  searchSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 24,
    justifyContent: 'center'
  },
});
