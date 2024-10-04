import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';



export default function App() {
  const [checked, setChecked] = useState('first');

  return (
    <View  style={styles.container}>
      <ScrollView>

        <View style={{alignItems:"center", marginBottom: 45, marginTop: 85}}>
          <Text style={styles.title}>REGISTER</Text>
        </View>

        <View style={{ alignItems:'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Name"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
          />

          <View style={styles.passwordSection}>
            <TextInput
              style={styles.password}
              placeholder="Password"
              underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.eyeIcon} name="eye" size={25} color="black" />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Birthday"
          />

        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15}}>
          <View style={styles.radioButonView}>
            <RadioButton
              value="male"
              status={ checked === 'male' ? 'checked' : 'unchecked' }
              color='red'
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </View>

          <View style={styles.radioButonView}>
            <RadioButton
              value="female"
              status={ checked === 'female' ? 'checked' : 'unchecked' }
              color='red'
              onPress={() => setChecked('female')}
            />
            <Text>Female</Text>
          </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <Text>{`When you agree to terms and conditions`}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
  },
  input: {
    height: 54,
    width: '80%',
    backgroundColor: '#C4C4C44D',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15
  },
  passwordSection: {
    height: 54,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C44D',
    marginBottom: 15
  },
  eyeIcon: {
    paddingHorizontal: 15,
  },
  password: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
    height: 48,
    width: '80%',
    marginTop: 25,
    backgroundColor: '#E53935',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  textButton: {
    fontWeight: 700,
    fontSize: 20,
    color: 'white'
  },
  radioButonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
