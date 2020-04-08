import * as React from 'react';
import { View, Text, StyleSheet ,Image , TouchableOpacity , ScrollView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Programma iwlagan paytidagi Write Screendagi asosiy postlar
export function WriteScreen({ navigation }) {
  return (
  <ScrollView style={style.background_write}>
   <TouchableOpacity onPress={() => navigation.navigate('Post')} activeOpacity={0.4}><Userblock first_name_of_user='Bobur'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Malika'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Shoxa'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Nurik'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Sevara'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Sherobod'/></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.4}><Userblock first_name_of_user='Shaxboz'/></TouchableOpacity>
   </ScrollView>
  );
}

export const Userblock = ({first_name_of_user}) => {
  return (
         <View>
         <View style={style.user_block}>
            <View style={style.main_image_contagner}>
                 <Image style={style.image_contagner} source = {require('../../assets/imagetest.jpg')}/>
            </View>
            <View style={style.user_yr_block}>
                <View style={style.user_nickname_contaigner}>
                   <Text style={{fontWeight:'bold'}}>{first_name_of_user}</Text>
                </View>
            </View>
         </View> 
             <View style={style.user_bottom_block_contegner}>
                 <View>
                    <Text>За одну ночь нельзя изменить жизнь.
                  Но за одну ночь можно изменить мысли, 
                  которые навсегда изменят твою жизнь.
                   </Text>
                </View>
             </View>
             <View style={style.user_bottom_tab}>
                <View style={style.user_post_like}>
                  <MaterialCommunityIcons style={{paddingEnd:5}} name="heart" size={28} color="red" />
                  <Text style={{color:'green'}}>467</Text>  
                </View>
                <View style={style.user_comment_button}><MaterialCommunityIcons name="chat" size={28} color="gray" /></View>
             </View>
         </View>
          );
};

const style = StyleSheet.create({
  user_block: {
      flexDirection: 'row',
      borderBottomColor: '#ebebeb',
      borderColor:'#fff',
      borderWidth:1,
      height:50,

  },
  user_bottom_text:{
    borderWidth:1,
  },
  user_bottom_block_contegner: {
   padding:7,
   height:100,
   //borderWidth:1,
  },
  user_bottom_tab:{
  borderBottomWidth:1,
  borderTopWidth:1,
  flexDirection: 'row',
  justifyContent:'space-between',
  borderBottomColor: '#ebebeb',
  borderTopColor: '#ebebeb',
  height:35,
  paddingStart:5,
  paddingEnd:5,
  //borderColor:'#fff',
  },
  user_post_like:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    //borderWidth:1,
  },
  user_comment_button:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    //borderWidth:1,
  },

  user_nickname_contaigner:{
    flex:1,
   // borderWidth:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  main_image_contagner:{
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex:0.16,
      paddingLeft:8,
     // borderWidth:1,
      
  },
  image_contagner: {
   borderWidth:2,
   height:35,
   width:35,
   backgroundColor:'#fafafa',
   borderColor: '#f0f0f0',
  },

  background_write: {
    backgroundColor: 'white',
  }
})