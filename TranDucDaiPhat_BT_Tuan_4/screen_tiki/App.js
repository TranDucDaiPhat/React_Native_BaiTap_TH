import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(1);
  const cost = 141800;

  const setTotalCost = (cost) => {
    return cost.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
  }

  const [total, setTotal] = useState(setTotalCost(cost));

  const decreaseCount = () => {
    if (count > 1) {
      let newCount = count-1;
      setCount(newCount);
      setTotal(setTotalCost(newCount*cost)); 
    }
  }

  const increaseCount = () => {
    let newCount = count+1;
    setCount(newCount);
    setTotal(setTotalCost(newCount*cost));
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.item_info}>
          <View style={{flexDirection:'row', marginBottom: 25}}>
            <View>
              <Image source={require('./assets/book.png')}  style={{width:110, height: 135}} />
            </View>

            <View style={{justifyContent: 'space-between', marginLeft: 20}}>
              <Text style={styles.item_name}>{'Nguyên hàm tích phân và ứng dụng'}</Text>
              <Text style={styles.item_provide}>{'Cung cấp bởi Tiki Trading'}</Text>
              <Text style={styles.cost}>{'141.800 đ'}</Text>
              <Text style={styles.item_discount}>{'141.800 đ'}</Text>

              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'row', width: '30%', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={styles.button_quantity} onPress={decreaseCount}>
                    <Text>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.item_count}>{count}</Text>

                  <TouchableOpacity style={styles.button_quantity} onPress={increaseCount}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={{fontWeight: 700, fontSize: 14, color: '#134FEC'}}>{'Mua sau'}</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection:'row', marginBottom: 35}}>
            <Text style={{fontWeight: 700, fontSize: 14, marginRight: 25}}>{'Mã giảm giá đã lưu'}</Text>
            <Text style={{fontWeight: 700, fontSize: 14, color: '#134FEC'}}>{'Xem tại đây'}</Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.discount_code}>
              <View style={styles.button_discount}></View>
              <Text style={{fontWeight: 700, fontSize: 18}}>{'Mã giảm giá'}</Text>
            </View>

            <TouchableOpacity style={styles.button_ApDung}>
              <Text style={{fontWeight: 700, fontSize: 20, color: 'white'}}>{'Áp dụng'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gift_voucher}>
          <Text style={{fontWeight: 700, fontSize: 12}}>{'Bạn có phiếu quà tặng Tiki/Got it/ Urbox?'}</Text>
          <Text style={{fontWeight: 700, fontSize: 12, color: '#134FEC'}}>{'Nhập tại đây?'}</Text>
        </View>

        <View style={styles.temporary_cost}>
          <Text style={{fontWeight: 700, fontSize: 18}}>{'Tạm tính'}</Text>
          <Text style={styles.cost}>{total}</Text>
        </View>
        
        <View style={styles.order}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight: 700, fontSize: 18, color: '#808080'}}>{'Thành tiền'}</Text>
            
            <Text style={styles.cost}>{total}</Text>
          </View>

          <TouchableOpacity style={styles.button_order}>
             <Text style={{fontWeight: 700, fontSize: 20, color: 'white'}}>{'TIẾN HÀNH ĐẶT HÀNG'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  body: {
    flex: 1,
    backgroundColor: '#C4C4C4'
  },
  item_info: {
    backgroundColor: 'white',
    padding: 25
  },
  item_name: {
    fontWeight: 700,
    fontSize: 13
  },
  item_provide: {
    fontWeight: 700,
    fontSize: 13
  },
  cost: {
    fontWeight: 700, 
    fontSize: 18, 
    color: '#EE0D0D'
  },
  item_discount: {
    fontWeight: 700,
    fontSize: 12,
    color: '#808080'
  }, 
  button_quantity: {
    width: 21,
    height: 21,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_count: {
    fontWeight: 700,
    fontSize: 15
  },
  button_ApDung: {
    width: 100,
    height: 45,
    backgroundColor:'#0A5EB7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_discount: {
    width: 32,
    height: 16,
    backgroundColor: '#F2DD1B',
    marginRight: 15,
  }, 
  discount_code: {
    flexDirection:'row', 
    justifyContent: 'center', 
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#808080',
    width: 208,
    height: 45,
  },
  gift_voucher: {
    backgroundColor: 'white',
    flexDirection:'row', 
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  temporary_cost: {
    backgroundColor: 'white',
    flexDirection:'row', 
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  }, 
  order: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 25,
    backgroundColor: 'white',
  },
  button_order: {
    backgroundColor: '#E53935',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  }
});
