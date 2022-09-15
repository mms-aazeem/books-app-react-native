import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


const Index = ({ navigation }) => {
  return (
   
    <View style={styles.container}>
        <View>
            <Image 
                source={require('../assets/logo.png')}
                style={{maxHeight: 300, bottom: 80, marginLeft: 20, marginBottom: 15}} 
            />
        </View>

        
            <TouchableOpacity
                onPress={() => navigation.navigate("LogIn")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.registerButton}
            >
                <Text style={styles.registerText}>Register</Text>

            </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 20,
    bottom: 150,
    textAlign: 'justify',
    fontWeight: 'bold'
  },

  loginButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#003539',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '85%',
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25
  },

  loginText: {
      color: '#fff',
      fontWeight: 'bold'
  },

  registerButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#fff',
    color: '#003539',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '85%',
    borderColor: '#003539',
    borderWidth: 1,
    borderRadius: 25
  },

  registerText: {
    color: '#003539',
    fontWeight: 'bold'
  },
});

export default Index;
