import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";



const LogIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
          
            <View>
                <Image 
                    source={require('../assets/logo.png')}
                    style={{maxHeight: 200, bottom: 80, marginLeft: 20, marginBottom: 15}} 
                />
            </View>
          
            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your username..'></TextInput>
            </View>
    
            <View style={styles.txtbox}>
              <TextInput secureTextEntry={true} placeholder='Enter your password..'></TextInput>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Login</Text>

            </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text>Create a new account ? </Text>
            <Text 
              style={styles.registerText}
              onPress={() => navigation.navigate("Register")}
              >
                Register
            </Text>
          </View>

        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtbox: {
    width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    color: '#003539',
  },

  loginButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#003539',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '90%',
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },

  loginText: {
      color: '#fff',
      fontWeight: 'bold'
  },

  registerText: {
    color: '#003539',
    fontWeight: 'bold'
  },
  });

export default LogIn;
