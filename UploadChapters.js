import React from 'react';
import {Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UploadChapters = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
                      <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        top:580,
                        left:170,
                        backgroundColor:'#EEEEEE',
                        width:50,
                        height:50,
                        borderRadius:10,
                        shadowColor:'purple',
                        elevation:8,}}>
                      </View>
                      <View>
                          <AntDesign name="plus" size={34} color="black" style={{
                            top:540,
                            left:180,
                          }}/>
                        </View>
            </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    });
  export default UploadChapters;