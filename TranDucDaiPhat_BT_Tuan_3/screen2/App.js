import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#C7F4F6','#00CCF9']} 
      locations={[0.8, 1]}
    >
      <View style={styles.body}>

        <View style={{flex:2, paddingTop:67}}>
          <View style={styles.circle} />
        </View>

        <View style={{flex:1}}>
          <Text style={[styles.title, styles.text]}>GROW {'\n'} YOUR BUSINESS</Text>
        </View>

        <View style={{flex:1}}>
          <Text style={[styles.message, styles.text]}>We will help you to grow your business using online server</Text>
        </View>

        <View style={styles.buttonView}>
          <View style={{width:'50%'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex:1}}>
            <Text style={[styles.message, styles.text]}>HOW WE WORK?</Text>
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
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderRadius: 100,
    borderWidth: 15,
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
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontWeight: 700,
    fontSize: 20,
  }
});
