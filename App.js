import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, SetName] = useState('');

  return (

  <ScrollView>
    <View style={styles.body}>
      <Text style={styles.text}>
      Please write your name:
      </Text>
      <TextInput 
       multiline
       style={styles.input}
       placeholder = 'NAME:'
       onChangeText={(value) => SetName(value)}
       keyboardType= 'default'
       maxLength={5}
       //editable={false}
       />

  <Text style={styles.text}>
    Please write your password:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'PASSWORD:'
       keyboardType= 'numeric'
       secureTextEntry
       maxLength={4}/>
      
  <Text style={styles.text}>
      Please write your email:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'EMAIL:'/>

   
   <Text style={styles.text}>
      Please write your Phone number:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'PHONE NUMBER:'/>

   <Text style={styles.text}>
      Please write your home address:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'ADDRESS:'/>

   <Text style={styles.text}>
      Please write your home date of birth:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'DATE OF BIRTH:'/>


  <Text style={styles.text}>
      Please write your stack:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'STACK:'/>

  <Text style={styles.text}>
      Please write your year of experience:
      </Text>
      <TextInput style={styles.input}
       placeholder = 'YEAR OF EXPERIENCE:'/>



    </View>
    </ScrollView>  
);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 40,
    
  },
  text: {
    color: '#000000',
    fontSize: 30,
    margin: 10,
    fontStyle: 'italic',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default App;

