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
          <Fontisto name="locked" size={95} color="black" />
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={[styles.title, styles.text]}>FORGET{'\n'}PASSWORD</Text>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={[styles.message, styles.text]}>{`Provide your account's email for which you want to reset your password`}</Text>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <View style={styles.searchSection}>
            <Fontisto style={styles.searchIcon} name="email" size={25} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <View style={{width: '90%'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>NEXT</Text>
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
    fontSize: 25,
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
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#C4C4C4',
    color: '#424242',
  },
});
