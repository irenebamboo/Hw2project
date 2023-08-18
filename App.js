import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function App() {


  //const setCbground = require('./src/image/baboso3.jpg')

  const [count, setCount] = useState(0)
  //const [cbground, setCbground] = useState(0)

  const [cimage, setCimage] = useState(0)

  const imgList = {
    img0: require('./src/image/baboso3.jpg'),
    img1: require('./src/image/Charmander.jpg'),
    img2: require('./src/image/Jigglypuff.jpg')
  }



  const pikachuButton = () => {
    setCount(count + 1)
    console.log('我按到皮卡丘了')
  }

  const ebuButton = () => {
    setCount(0)
    console.log('我按到伊布了')

  }


  const changeImg = () => {
    setCimage((cimage + 1) % 3)

  }

  // const baboButton = () => {

  //   console.log('我按到妙蛙了')

  // }


  return (


    <ImageBackground source={imgList["img" + cimage]} style={styles.container}>


      <Text style={styles.catchText}>CATCH ME!</Text>
      <Text style={styles.pikachuText}>{count} times!</Text>


      <TouchableOpacity style={{ width: 0, height: 0, backgroundColor: 'transparent', marginHorizontal: 145 }} onPress={() => pikachuButton()}>

        <Image
          style={{ width: 110, height: 100 }}
          source={require('./src/image/pikachu3-removebg.png')}
        />
      </TouchableOpacity>


      <TouchableOpacity style={{ width: 0, height: 0, backgroundColor: 'transparent', marginHorizontal: 30 }} onPress={() => ebuButton()}>

        <Image
          style={{ width: 100, height: 110 }}
          source={require('./src/image/ebu3-removebg.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ width: 0, height: 0, backgroundColor: 'transparent', marginHorizontal: 270 }} onPress={() => changeImg()}>

        <Image
          style={{ width: 100, height: 110 }}
          source={require('./src/image/baboso-removebg.png')}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />




    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 140,
  },

  catchText: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 10,


  },

  pikachuText: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 10,
  },

  image: {
    flex: 1,
    //justifyContent: 'center',
  },



},

);
