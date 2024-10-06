import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [listCheck, setListCheck] = useState({
    lowerCase: false,
    upCase: false,
    number: false,
    specialSymbol: false
  });

  const [password, setPassword] = useState('');
  const [lenPassword, setLenPassword] = useState('');

  const check = (input) => {
    listCheck[input] = !listCheck[input];
    setListCheck(
      {
        lowerCase: listCheck.lowerCase,
        upCase: listCheck.upCase,
        number: listCheck.number,
        specialSymbol: listCheck.specialSymbol
      }
    );
  }

  const generatePassword = () => {
    // Kiểm tra đã nhập hay chưa
    if (lenPassword.trim().length == 0) {
      alert('Vui lòng nhập độ dài chuỗi');
      return;
    }

    // kiểm tra đã check ít nhất 1 mục trong các lựa chọn chưa
    let count = 0;
    for (let nameCheck in listCheck) {
      if (listCheck[nameCheck] == true) {
        count++;
      }
    }

    if (count == 0) {
      alert('Bạn chưa chọn loại mật khẩu');
      return;
    }

    let len = Number(lenPassword);
    // Kiểm tra giá trị nhập có phải là số nguyên không
    if (!isNaN(len)) {
      if (len < 4) {
        alert('Độ dài phải chuỗi lớn hơn 4');
        return;
      }

      // xử lý tạo password
      let numOfWord;
      let password = '';

      for (let nameCheck in listCheck) {
        if (listCheck[nameCheck] == true) {
          numOfWord = Math.ceil(len / count);
          len -= numOfWord;
          count--;
          switch (nameCheck) {
            case 'lowerCase':
              password += randomPassword(numOfWord, 97, 122);
              break;
            case 'upCase':
              password += randomPassword(numOfWord, 65, 90);
              break;
            case 'number':
              password += randomPassword(numOfWord, 48, 57);
              break;
            case 'specialSymbol':
              password += randomPassword(numOfWord, 33, 47);
              break;
            default:
              alert('Lỗi');
          }
        }
      }
      // Render kết quả ra màn hình
      setPassword(password);
    } else {
      alert('Vui lòng nhập độ dài chuỗi là số nguyên');
    }
  }

  const randomPassword = (len, min, max) => {
    let i = 0;
    let s = ''
    while (i < len) {
      s += String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
      i++;
    }
    return s;
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>

        <Text style={styles.title}>PASSWORD{'\n'}GENERATOR</Text>

        <TextInput 
          style={styles.password_field} 
          editable={false}
          value={password}
        />
        
        <View style={styles.line}>
          <Text style={styles.text}>{'Password length'}</Text>

          <TextInput style={styles.password_length} onChangeText={(text)=>setLenPassword(text)} />
        </View>

        <View style={styles.line}>
          <Text style={styles.text}>{'Include lower case letters'}</Text>

          <TouchableOpacity>
            <Ionicons
              name={listCheck.lowerCase ? "checkbox" : "square"} 
              size={27} 
              color="white"
              onPress= {() => check('lowerCase')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.line}>
          <Text style={styles.text}>{'Include upcase letters'}</Text>

          <TouchableOpacity>
            <Ionicons
              name={listCheck.upCase ? "checkbox" : "square"} 
              size={27} 
              color="white"
              onPress= {() => check('upCase')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.line}>
          <Text style={styles.text}>{'Include number'}</Text>

          <TouchableOpacity>
            <Ionicons
              name={listCheck.number ? "checkbox" : "square"} 
              size={27} 
              color="white"
              onPress= {() => check('number')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.line}>
          <Text style={styles.text}>{'Include special symbol'}</Text>

          <TouchableOpacity>
            <Ionicons
              name={listCheck.specialSymbol ? "checkbox" : "square"} 
              size={27} 
              color="white"
              onPress= {() => check('specialSymbol')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={[styles.text, {fontSize: 18}]}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9B9BC4',
    paddingHorizontal: 15,
    paddingTop: 45,
    paddingBottom: 35,
  },
  body: {
    flex: 1,
    backgroundColor: '#23235B',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title:{
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: 25,
    color: 'white',
    marginVertical: 45,
  },
  password_field: {
    width: '100%',
    height: 45,
    backgroundColor: '#151537',
    paddingHorizontal: 15,
    marginBottom: 45,
    fontSize: 18,
    color: 'white',
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
    color: 'white',
  },
  password_length: {
    width: 120,
    height: 35,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  line: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    width: '100%',
    marginBottom: 25,
  }, 
  button: {
    height: 55,
    width: '90%',
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  }
});
