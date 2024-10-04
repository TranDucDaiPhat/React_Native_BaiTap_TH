import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';



export default function App() {

  return (
    <View  style={styles.container}>
      <ScrollView style={{width:'95%'}}>

        <View style={{marginVertical: 55, alignItems: 'center'}}>
          <Image source={require('./assets/eye.png')} style={{width:140,height:140}} />
        </View>

        <View style={{ alignItems:'center'}}>

          <View style={styles.section}>
            <FontAwesome style={styles.icon} name="user-o" size={25} color="#386FFC" />
            <TextInput
              style={styles.input}
              placeholder="Please input user name"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.section}>
          <EvilIcons name="lock" size={45} color="#386FFC" />
            <TextInput
              style={styles.input}
              placeholder="Please input password"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Text style={styles.message}>{`Register`}</Text>
          <Text style={styles.message}>{`Forgot Password`}</Text>
        </View>

        <View style={{marginVertical: 45}}>
          <View style={{alignItems: 'center', borderBottomWidth: 1, paddingVertical: 6, borderBottomColor: '#386FFC'}}>
            <Text style={[styles.loginSuggestion, styles.message]}>{`Other Login Methods`}</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/add-user.png')} style={{width:74,height:74}} />
          <Image source={require('./assets/wifi.png')} style={{width:74,height:74}} />
          <Image source={require('./assets/facebook-icon.png')} style={{width:74,height:74, borderRadius: 6}} />
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
    alignItems: 'center',
    backgroundColor: 'white'
  },
  section: {
    height: 54,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    borderColor: '#C4C4C4',
    borderBottomWidth: 1
  },
  icon: {
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
  },
  button: {
    height: 48,
    width: '90%',
    marginTop: 25,
    backgroundColor: '#386FFC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35
  },
  textButton: {
    fontWeight: 700,
    fontSize: 20,
    color: 'white'
  },
  message: {
    fontWeight: 400,
    fontSize: 18,
  },
  loginSuggestion: {
    position: 'absolute', 
    backgroundColor: 'white', 
    paddingHorizontal:5
  }
});
