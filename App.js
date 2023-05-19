import { ScrollView, StyleSheet , View } from 'react-native';
import Card from './assets/components/Card';
import axios from 'axios';
import { useState,useEffect } from 'react';





export default function App() {
  const [data,setData] = useState([])
  const [reloading,setReloading] = useState(false)
  
  useEffect(()=>{
      getData();
  },[]) 
  
  const getData = async()=>{
       try{
        const resposta = await axios.get("https://valorant-api.com/v1/agents")
        setData(resposta.data['data'])
        setReloading(true)
   
       }
       catch(err){
             alert("não consegui retornar dadods da api")
       }
  }





  return (
    <ScrollView>
    <View style={styles.container}>
      {
        reloading && data.map((agentes)=>{
              return(
                <Card titulo = {agentes['displayName']} descricao = {agentes['description']} imagem = {agentes['displayIcon']}/>
              )
        })
      }
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection : "column",
    padding:"5%",
    gap:30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
