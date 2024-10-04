import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, Fontisto } from '@expo/vector-icons';



export default function App() {

  return (
    <View  style={styles.container}>
      <ScrollView style={{width:'95%'}}>

        <View style={{width: '85%', marginVertical: 75, marginLeft: '5%'}}>
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={{ alignItems:'center'}}>

          <View style={styles.section}>
            <FontAwesome style={styles.icon} name="user" size={25} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Name"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.section}>
            <Fontisto style={styles.icon} name="locked" size={25} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.icon} name="eye" size={25} color="black" />
          </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <Text style={styles.message}>{`CREATE ACCOUNT`}</Text>
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
    backgroundColor: '#FBCB00'
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
  },
  section: {
    height: 54,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    marginBottom: 35,
    borderColor: '#F2F2F2',
    borderWidth: 1
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
    backgroundColor: '#060000',
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
    fontWeight: 700,
    fontSize: 20,
  }
});
