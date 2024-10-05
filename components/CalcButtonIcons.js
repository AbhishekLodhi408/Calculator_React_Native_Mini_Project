import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
function CalcButtonIcons({children}){
    return(
        <Pressable android_ripple={{color:'#786c3a'}}
        style={({pressed})=>pressed ? styles.pressed:null}>
            <View style={styles.rootContainer}>
              <Ionicons name={children} size={48} color="black"/>
            </View>
        </Pressable>
    );
}

export default CalcButtonIcons;

styles=StyleSheet.create({
    rootContainer:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#f0e24d',
        alignItems:'center',
        justifyContent:'center'
    },
    pressed:{
        opacity:.5
    }
});