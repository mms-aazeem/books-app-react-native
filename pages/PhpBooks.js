import React from "react";
import { StyleSheet, Image, Text, View, TextInput, KeyboardAvoidingView, StatusBar, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const PhpBooks = ({ navigation }) => {
  return (
   
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>  PHP Programming</Text>
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


        <View style={styles.booksContainer}>
          <View 
            style={styles.books}>
              <Image 
                source={require('../assets/book1.jpg')}
                style= {{width: '100%', height: undefined}}
              />
            <View style={{flexDirection: 'row', left: 10}}>

                <Text  style={{left: 3, fontSize: 13}}>
                  Name : 
                </Text>
                <Text  style={{left: 5,fontWeight: 'bold', fontSize: 13}}>
                Jumping into C++ 
                </Text>

                <View style={{right: 150, top: 30, flexDirection: 'row'}}>

                  <Text  style={{left: 7, fontSize: 13, marginRight: 10}}>
                    Author : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Mr. Jhon 
                  </Text>

                </View>

                <View style={{right: 260, top: 60, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Price : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    550 Rs. 
                  </Text>

                </View>

                <View style={{right: 352, top: 90, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Description : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Basic to Advanced PHP 
                  </Text>

                </View>
            </View>
          </View>
        </View>
        
        <View style={styles.booksContainer}>
          <View 
            style={styles.books}>
              <Image 
                source={require('../assets/book2.jpg')}
                style= {{width: '100%', height: undefined}}
              />
            <View style={{flexDirection: 'row', left: 10}}>

                <Text  style={{left: 3, fontSize: 13}}>
                  Name : 
                </Text>
                <Text  style={{left: 5,fontWeight: 'bold', fontSize: 13}}>
                Jumping into C++ 
                </Text>

                <View style={{right: 150, top: 30, flexDirection: 'row'}}>

                  <Text  style={{left: 7, fontSize: 13, marginRight: 10}}>
                    Author : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Mr. Jhon 
                  </Text>

                </View>

                <View style={{right: 260, top: 60, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Price : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    550 Rs. 
                  </Text>

                </View>

                <View style={{right: 352, top: 90, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Description : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Basic to Advanced PHP 
                  </Text>

                </View>
            </View>
          </View>
        </View>

        <View style={styles.booksContainer}>
          <View 
            style={styles.books}>
              <Image 
                source={require('../assets/book4.jpg')}
                style= {{width: '100%', height: undefined}}
              />
            <View style={{flexDirection: 'row', left: 10}}>

                <Text  style={{left: 3, fontSize: 13}}>
                  Name : 
                </Text>
                <Text  style={{left: 5,fontWeight: 'bold', fontSize: 13}}>
                Jumping into C++ 
                </Text>

                <View style={{right: 150, top: 30, flexDirection: 'row'}}>

                  <Text  style={{left: 7, fontSize: 13, marginRight: 10}}>
                    Author : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Mr. Jhon 
                  </Text>

                </View>

                <View style={{right: 260, top: 60, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Price : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    550 Rs. 
                  </Text>

                </View>

                <View style={{right: 352, top: 90, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Description : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Basic to Advanced PHP 
                  </Text>

                </View>
            </View>
          </View>
        </View>

        <View style={styles.booksContainer}>
          <View 
            style={styles.books}>
              <Image 
                source={require('../assets/book1.jpg')}
                style= {{width: '100%', height: undefined}}
              />
            <View style={{flexDirection: 'row', left: 10}}>

                <Text  style={{left: 3, fontSize: 13}}>
                  Name : 
                </Text>
                <Text  style={{left: 5,fontWeight: 'bold', fontSize: 13}}>
                Jumping into C++ 
                </Text>

                <View style={{right: 150, top: 30, flexDirection: 'row'}}>

                  <Text  style={{left: 7, fontSize: 13, marginRight: 10}}>
                    Author : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Mr. Jhon 
                  </Text>

                </View>

                <View style={{right: 260, top: 60, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Price : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    550 Rs. 
                  </Text>

                </View>

                <View style={{right: 352, top: 90, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Description : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Basic to Advanced PHP 
                  </Text>

                </View>
            </View>
          </View>
        </View>

        <View style={styles.booksContainer}>
          <View 
            style={styles.books}>
              <Image 
                source={require('../assets/book2.jpg')}
                style= {{width: '100%', height: undefined}}
              />
            <View style={{flexDirection: 'row', left: 10}}>

                <Text  style={{left: 3, fontSize: 13}}>
                  Name : 
                </Text>
                <Text  style={{left: 5,fontWeight: 'bold', fontSize: 13}}>
                Jumping into C++ 
                </Text>

                <View style={{right: 150, top: 30, flexDirection: 'row'}}>

                  <Text  style={{left: 7, fontSize: 13, marginRight: 10}}>
                    Author : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Mr. Jhon 
                  </Text>

                </View>

                <View style={{right: 260, top: 60, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Price : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    550 Rs. 
                  </Text>

                </View>

                <View style={{right: 352, top: 90, flexDirection: 'row'}}>

                  <Text  style={{left: 10, fontSize: 13, marginRight: 10}}>
                    Description : 
                  </Text>
                  <Text  style={{left: 10,fontWeight: 'bold', fontSize: 13}}>
                    Basic to Advanced PHP 
                  </Text>

                </View>
            </View>
          </View>
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
    marginLeft: 10
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
    backgroundColor: '#fff',
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
  },

  books: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    borderWidth: 1,
    width: 100,
    height: 120
  }

});

export default PhpBooks;
