import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const phones = [
  {
    name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
    color: 'blue',
    supplier: 'Cung cấp bởi Tiki Tradding',
    cost: '1.790.000 đ',
    img: require('./assets/blue_phone.png'),
  },
  {
    name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
    color: 'red',
    supplier: 'Cung cấp bởi Tiki Tradding',
    cost: '1.790.000 đ',
    img: require('./assets/red_phone.png'),
  },
  {
    name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
    color: 'black',
    supplier: 'Cung cấp bởi Tiki Tradding',
    cost: '1.790.000 đ',
    img: require('./assets/black_phone.png'),
  },
  {
    name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
    color: 'white',
    supplier: 'Cung cấp bởi Tiki Tradding',
    cost: '1.790.000 đ',
    img: require('./assets/white_phone.png'),
  },
]



function DetailsScreen({ route, navigation }) {

  const [currentPhone, setCurrentPhone] = useState(phones[0]);
  useEffect(() => {
    if (route.params?.newPhone) {
      setCurrentPhone(route.params.newPhone);
    }
  }, [route.params?.newPhone]);
  return (
    <View style={styles.container}> 
      <View style={styles.body}>

        <View style={{alignItems: 'center'}}>
          <Image source={currentPhone.img} style={styles.img_item} />
        </View>

        <Text style={styles.text}>{'Điện Thoại Vsmart Joy 3 - Hàng chính hãng'}</Text>
        
        <View style={{flexDirection:'row', marginVertical: 15}}>
          <View style={styles.rate}> 
            <Entypo name="star" size={25} color="#E0E41A" />
            <Entypo name="star" size={25} color="#E0E41A" />
            <Entypo name="star" size={25} color="#E0E41A" />
            <Entypo name="star" size={25} color="#E0E41A" />
            <Entypo name="star" size={25} color="#E0E41A" />
          </View>
          
          <Text style={styles.text}>{'(Xem 828 đánh giá)'}</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={styles.cost}>{currentPhone.cost}</Text>

          <Text style={styles.discount}>{'1.790.000 đ'}</Text>
        </View>

        <View style={styles.message}>
          <Text style={{fontWeight: 700,fontSize: 12,color: 'red', marginRight: 15}}>{'Ở ĐÂU RẺ HƠN HOÀN TIỀN'}</Text>

          <AntDesign name="questioncircleo" size={22} color="black" />
        </View>

        <TouchableOpacity 
          style={styles.choose_color} 
          onPress={() => navigation.navigate('ChooseColor', {'currentPhone': currentPhone, 'phones': phones})}
        >
          <Text style={styles.text}>{'4 MÀU-CHỌN MÀU'}</Text>

          <AntDesign style={{position:'absolute', right:10}} name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_button}>{'CHỌN MUA'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function ChooseColor({route, navigation}) {
  const {currentPhone, phones} = route.params;
  const [newPhone, setNewPhone] = useState(currentPhone);
  const changePhone = (color) => {
    phones.forEach((phone, index) => {
      if (phone.color == color) {
        setNewPhone(phones[index]);
      }
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{flexDirection:'row', marginBottom: 15,}}>
          <Image source={newPhone.img} style={styles.small_img_item} />

          <Text style={styles.text}>{'Điện Thoại Vsmart Joy 3\nHàng chính hãng'}</Text>
        </View>

        <View style={{backgroundColor: '#C4C4C4', padding: 15}}>
          <Text style={{fontSize: 18, fontWeight: 400}}>{'Chọn một màu bên dưới:'}</Text>
          <View style={styles.view_color_button}>
            <TouchableOpacity 
              style={[styles.button_color, {backgroundColor:'white'}]} 
              onPress={() => changePhone('white')} 
            />
            <TouchableOpacity 
              style={[styles.button_color, {backgroundColor:'#F30D0D'}]} 
              onPress={() => changePhone('red')} 
            />
            <TouchableOpacity 
              style={[styles.button_color, {backgroundColor:'#000000'}]} 
              onPress={() => changePhone('black')} 
            />
            <TouchableOpacity 
              style={[styles.button_color, {backgroundColor:'#234896'}]} 
              onPress={() => changePhone('blue')} 
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, {backgroundColor: '#1952E294'}]} 
            onPress={() => navigation.navigate('DetailsScreen', {'newPhone': newPhone})} 
          >
            <Text style={styles.text_button}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}></Stack.Screen>
        <Stack.Screen name="ChooseColor" component={ChooseColor}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  img_item: {
    width: 301,
    height: 375,
    marginBottom: 15,
  },
  small_img_item: {
    width: 115,
    height: 145,
    marginRight: 15,
  },
  text: {
    fontWeight: 400,
    fontSize: 15,
  },
  rate: {
    flexDirection: 'row',
    width: '50%',
  },
  cost: {
    fontWeight: 700,
    fontSize: 18,
    width: '50%',
  },
  discount: {
    fontWeight: 700,
    fontSize: 15,
    color: 'gray',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  choose_color: {
    borderWidth: 1,
    borderRadius: 15,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  button: {
    height: 45,
    backgroundColor: '#CA1536',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65,
  },
  text_button: {
    fontWeight: 700,
    fontSize: 20,
    color: 'white',
  },
  button_color: {
    width: 85,
    height: 85,
    marginVertical: 10,
  },
  view_color_button: {
    alignItems: 'center',
    
  }
});
