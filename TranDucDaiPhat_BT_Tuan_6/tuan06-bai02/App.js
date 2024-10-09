import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

const API = 'https://6705fa99031fd46a83118e8c.mockapi.io/bikes';

function Item(props) {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={props.onPress}>
      <View style={{width:'100%', alignItems:'center'}}>
        <Image src={props.image} style={styles.imageItem} />

        <Text numberOfLines={1} style={{paddingHorizontal:5}}>{props.name}</Text>
        <Text>{props.price}</Text>
      </View>

      
      <AntDesign name="hearto" size={24} color="black" style={{position:'absolute', padding:11}} />
    </TouchableOpacity>
  )
}

function ItemsScreen({ navigation }) {

  const [items, setItems] = useState([]);

  function getAPI() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error))
  }

  function render() {
    let listItem = [];
    let len = items.length;
    for(let i = 0; i < len; i+=2) {
      if (i < len-1) {
        listItem.push(
          <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between', marginVertical: 7}}>
            {
              renderLine(i, 2)
            }
          </View>
        )
      } else {
        listItem.push(
          <View style={{marginVertical: 7}}>
            <Item image={items[i].image} name={items[i].name} price={items[i].price} description={items[i].description} onPress={() => {navigation.navigate('ItemDetailScreen', {'item': items[i]})}}/>
          </View>
        )
      }
    }
    return listItem;
  }

  function renderLine(index, numOfLine) {
    let listItem = [];
    for(let i = index; i < index+numOfLine; i++) {
      listItem.push(
        <Item 
          image={items[i].image} 
          name={items[i].name} 
          price={items[i].price} 
          description={items[i].description} 
          onPress={() => {navigation.navigate('ItemDetailScreen', {'item': items[i]})}}
        />
      )
    }
    return listItem;
  }

  useEffect(() => {
    getAPI();
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{width:'100%', paddingVertical: 35}}>
          <Text style={{fontSize:21,fontWeight: 700, color:'#E94141'}}>{'The world’s Best Bike'}</Text>
        </View>

        <View style={styles.buttonTypeWrapper}>
          <TouchableOpacity style={styles.buttonType} onPress={()=>{navigation.navigate('ItemsScreen')}}>
            <Text style={styles.textButtonType}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonType,{opacity:0.4}]} onPress={()=>{navigation.navigate('ItemsScreen')}}>
            <Text style={styles.textButtonType}>Roadbike</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonType,{opacity:0.4}]} onPress={()=>{navigation.navigate('ItemsScreen')}}>
            <Text style={styles.textButtonType}>Mountain</Text>
          </TouchableOpacity>
        </View>

        {
          render()
        }
      </ScrollView>
    </View>
  )
}

function IntroduceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.introduceTitle}>{'A premium online store for sporter and their stylish choice'}</Text>

      <View style={styles.imageWrapper}>
        <Image source={require('./assets/bike.png')} style={{width:290, height:272}} />
      </View>

      <Text style={[styles.introduceTitle, {fontWeight: 700}]}>{'POWER BIKE\nSHOP'}</Text>

      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ItemsScreen')}}>
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

function ItemDetailScreen({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image src={item.image} style={{width:380, height:270, padding:5,}} />

          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={{fontWeight:700, fontSize:18, marginTop: 15,}}>{'Description'}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>


          <TouchableOpacity style={{position:'absolute',padding:5,}}>
            <AntDesign 
              name="arrowleft" 
              size={33} color="black" 
              onPress={() => {navigation.navigate('ItemsScreen')}}
            />
          </TouchableOpacity>
      </ScrollView>
      <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center', position:'absolute',bottom:20}}>
        <AntDesign name="hearto" size={33} color="black" />

        <TouchableOpacity style={styles.button} >
          <Text style={styles.textButton}>{'Add to card'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='IntroduceScreen' component={IntroduceScreen} />
        <Stack.Screen name='ItemsScreen' component={ItemsScreen} />
        <Stack.Screen name='ItemDetailScreen' component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  introduceTitle: {
    paddingHorizontal: 10,
    display: 'flex',
    fontSize: 21,
    fontWeight: 400,
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: 360,
    backgroundColor: '#E941411A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    marginVertical: 25,
  }, 
  button: {
    height: 62,
    width: '75%',
    backgroundColor: '#E94141',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginVertical: 45,
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    fontWeight: 400,
  },
  textButtonType: {
    color: '#E94141',
    fontSize: 20,
    fontWeight: 400,
  },
  buttonType: {
    width: 105,
    borderRadius: 7,
    borderColor: '#E9414187',
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonTypeWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  itemWrapper: {
    width: 180,
    height: 200,
    backgroundColor: '#E941411A',
    borderRadius: 15,
  },
  imageItem: {
    width:160, 
    height:120, 
    borderRadius:15,
    marginVertical:5,
  },
  itemName: {
    fontSize: 27,
    fontWeight: 400,
    marginTop: 15,
  },
  itemPrice: {
    fontSize: 21,
    fontWeight: 400,
    marginTop: 15,
  },
  itemDescription: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 15,
  },
});
