import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const API = 'https://6705fa99031fd46a83118e8c.mockapi.io/item';

function Item(props) {
  return (
    <View style={styles.itemWrapper}>
      <Image 
        src={props.image} 
        style={{width: 95, height: 95, flex: 2}}
      />

      <View style={{flex: 4, paddingHorizontal: 15, height: '100%'}}>
        <Text numberOfLines={1}>{props.name}</Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text>Shop </Text>
          <Text numberOfLines={1} style={{fontWeight:'bold'}}>{props.shop}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btnChat}>
        <Text style={{color:'white', fontWeight:'bold'}}>Chat</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen 
          name='Shop' 
          component={ShopScreen} 
          options={{
            headerTitle: 'Chat',
            headerLeft: () => (
              <AntDesign 
                name="arrowleft" 
                size={25} 
                color="white" 
                style={{padding: 5}} 
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons 
                name="cart-check" 
                size={25} 
                color="white" 
                style={{padding:5}}
              />
            ),
          headerStyle: {
            backgroundColor: '#1BA9FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ShopScreen() {

  function getAPI() {
    fetch(API)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => {
          console.error(error);
    });
  }

  const [items, setItems] = useState([])

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView> 

        <View style={{padding: 15}}>
          <Text>{'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!'}</Text>
        </View>

        {
          items.map((item) => {
            return <Item image={item.image} name={item.name} shop={item.shop} />
          })
        }

        <View></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    flexDirection: 'row',
    padding: 9,
    backgroundColor: 'white',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnChat: {
    width: 85,
    height: 40,
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
