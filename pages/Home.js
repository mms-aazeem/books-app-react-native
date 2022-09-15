import React from "react";
import { StyleSheet, Image, Text, View, TextInput, KeyboardAvoidingView, StatusBar, ScrollView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Home = ({ navigation }) => {

  return (

   
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>  Welcome to  AzM Books</Text>
        
      </View>

      <View style={{flexDirection: 'row'}}>      
        <Text 
          style=
          {{
            flexDirection: 'row', 
            right: -300, 
            marginBottom: 10, 
            backgroundColor: '#707070', 
            padding: 7, 
            color: '#eceff1',
            borderRadius: 20
          }}
          onPress={() => navigation.navigate("LogIn")}
          >
          Logout </Text>
      </View>
    
    

      <ScrollView>

        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{left: 30, fontWeight:'bold'}}>C++ Programming</Text>
            <Text 
              style={{left: 200, fontWeight:'bold', textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate("CplusBooks")}> See all</Text>
        </View>

        <View style={{flexDirection: 'row'}}>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk2-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk3-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk4-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>



        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{left: 30, fontWeight:'bold'}}>PHP Programming</Text>
            <Text 
              style={{left: 200, fontWeight:'bold', textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate("PhpBooks")}> See all</Text>
        </View>

        <View style={{flexDirection: 'row'}}>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk2-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk3-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk4-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>



        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{left: 30, fontWeight:'bold'}}>.NET Programming</Text>
            <Text 
              style={{left: 200, fontWeight:'bold', textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate("DotNetBooks")}> See all</Text>
        </View>

        <View style={{flexDirection: 'row'}}>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk2-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk1-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk3-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.books}>
              <Image 
                source={require('../assets/bk4-logo.png')}
                style= {{width: '100%', height: undefined}} 
              />
            </TouchableOpacity>

        </View>


      </ScrollView>

      <StatusBar style="auto" />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede7f6",
  },

  title: {
    fontSize: 25,
    color: '#fff',
  },

  titleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#003539',
    paddingTop: 50,
    height: 100,
    width: '100%',
    borderBottomEndRadius: 85,
  },

  search: {
    width: '88%',
    padding: 10,
    borderColor: '#003539',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
  },

  booksContainer: {
    marginTop: 10,
    borderColor: 'red',
    padding: 2,
    borderWidth: 1
  },

  books: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 10,
    borderWidth: 1,
    width: 100,
    height: 120
  }

});

export default Home;
