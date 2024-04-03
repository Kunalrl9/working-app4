import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const UploadPhoto = () => {

     renderInner = () =>(
        <Text>Hello</Text>
    );
     renderHeader = () =>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>
                </View>
            </View>
        </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
        <BottomSheet
            ref={this.bs}
            snapPoints={[330, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
        />
      <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <View style={{height:100,
                width:100,
                borderRadius:15,
                justifyContent:'center',
                alignItems:'center'}}>
                    <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Picsart_24-02-25_17-16-10-147.png?alt=media&token=5e8f8d9c-fdf8-48f5-b97d-3f851294f8d7'}}
                    style={{height:100,width:100}}
                    imageStyle={{borderRadius:15}}>
                        <View style={{flex:1,
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <AntDesign name="camera" size={24} color="black" style={{
                            opacity:0.4,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1,
                            borderColor:'#fff',
                            borderRadius:10,
                        }} />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default UploadPhoto;

const styles = StyleSheet.create({
container:{
    flex:1,
},
header:{
    backgroundColor:"#FFFFFF",
    shadowColor:'#333333',
    shadowOffset:{width:-1, height: -3},
    shadowRadius:2,
    shadowOpacity:0.4,
    paddingTop:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
},
panelHeader:{
    alignItems:'center',
},
panelHandle:{
    width:40,
    height:8,
    borderRadius:4,
    borderBlockColor:'$000040',
    marginBottom:10,
}
});