import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import HttpRequests from '../httpRequests/httpRequests';
import { useEffect, useState } from 'react';

const httpRequests = new HttpRequests();


const Home = () => {

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    
    httpRequests.getProducts()
      .then(response => {
        setProducts(response.data.products);
        //console.log(response.data.products);
      })
      .catch(error => {
        console.log(error.response.data);
      });


  }, [])

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <View style={{flexDirection:'row'}}>
        <View style={{width:'20%'}}>
          <TouchableOpacity style={styles.myDrawerButton} onPress={()=>{
            navigation.openDrawer();
          }}>
            <EntypoIcons name='menu' size={30} color={'black'}/>
          </TouchableOpacity>
        </View>
        <View style={{width:'80%'}}>

        </View>
      </View>
      <Text>ეს არის მთავარი</Text>
      <Text>ეს არის მთავარი</Text>
      <FlatList 
        data={products}
        renderItem={({item}) => (
            <View style={{position:'relative'}}>
              <Image source={{uri:item.thumbnail}} style={{width:'100%', height:300, marginBottom:10}} />
              <View style={{position:'absolute'}}>
                <Text>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  myDrawerButton:{
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50,
    borderRadius:25,
    margin:10,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  }
})