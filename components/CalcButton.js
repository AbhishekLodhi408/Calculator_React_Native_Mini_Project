import {View, Text, StyleSheet, Pressable} from 'react-native';
function CalcButton({children}){
    return(
        <Pressable android_ripple={{color:'#786c3a'}}
        style={({pressed})=>pressed ? styles.pressed:null}>
            <View style={styles.rootContainer}>
              <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default CalcButton;

styles=StyleSheet.create({
    rootContainer:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#f0e24d',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:36,
        fontWeight:'bold'
    },
    pressed:{
        opacity:.5
    }
});