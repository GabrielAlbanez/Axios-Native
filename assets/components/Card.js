import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';


export default function Card(props) {
  return (
    <View style={styles.containerCard}  key={props.id}>
      <Text style={{ fontSize: 35,fontWeight: 'bold', textAlign: 'center'}}>{props.titulo}</Text>
      <Image style={styles.imagemVenda} source={{uri: props.imagem}}></Image>
      <Text style={{ fontSize: 20}}>{props.descricao}</Text>
    
    </View> 
  )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerCard: {
      width: windowWidth / 1.2,
      backgroundColor: '#fefefe',
      alignItems: 'center',
      justifyContent: 'center',
      gap:30,
      shadowColor: "#FF0000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 6.00,
      borderRadius: 20,
      padding: 10,
      marginBottom: 15,
      marginTop: 15,
      elevation: 93,
    },
  
    imagemVenda: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 10,
      resizeMode: 'contain'
    },
  
  });
