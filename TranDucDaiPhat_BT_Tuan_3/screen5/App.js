import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function App() {
  const imgFacebook = 'https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png';
  const imgZalo = 'https://icons.iconarchive.com/icons/twitter/twemoji-alphabet/256/Letter-Z-icon.png';
  const imgGoogle = 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png';
  return (
    <View style={styles.container}>

      <View style={{flex:1, width:'90%'}}>

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View  style={{flex:1,}}>
          <TextInput
            style={styles.email}
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
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
       
        <View style={{flex:1, alignItems: 'center'}}>
          <Text>{`When you agree to terms and conditions`}</Text>
          <Text style={{color:'#5D25FA'}}>{`For got your password?`}</Text>
          <Text>{`Or login with`}</Text>
        </View>

        <View style={styles.iconWrapper}>
          <View style={[styles.icon, styles.facebook]}>
            <Image src={imgFacebook} style={styles.img}/> 
          </View>

          <View style={[styles.icon, styles.zalo]}>
            <Image src={imgZalo} style={styles.img}/>
          </View>

          <View style={[styles.icon, styles.google]}>
            <Image src={imgGoogle} style={styles.img}/>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
    backgroundColor: ''
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
  },
  email: {
    height: 54,
    backgroundColor: '#C4C4C44D',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  passwordSection: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C44D',
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
    marginTop: 25,
    backgroundColor: '#E53935',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontWeight: 700,
    fontSize: 20,
    color: 'white'
  },
  img: {
    width: 45,
    height: 45,
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebook: {
    backgroundColor: '#4a6ea9',
  },
  zalo: {
    backgroundColor: '#3b88c3',
  },
  google: {
    backgroundColor: '#d2d2d2',
  }
});
