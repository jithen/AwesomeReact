import React, {Component} from 'react';
import { StatusBar, Platform, Button, ScrollView, TextInput, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import WebServiceHandler from 'react-native-web-service-handler';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      phoneNumber: '',
      email: ''
    };
    this.state = {
      hasError: false,
      message: ''
    }
  }

  static navigationOptions = ({navigation, screenProps}) => {
     return {
         title:'REGISTER',
         headerStyle:{ backgroundColor: '#ffffff'},
         headerTitleStyle:{fontSize:20},
         headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()}>
                      <Image source={require('../assets/back.png')} style={{height: 20, width: 20,marginLeft:10,}}/>
                  </TouchableOpacity>
      }
    }

    async performRegistration() {
      await WebServiceHandler.post('https://0l6uyhjowi.execute-api.eu-central-1.amazonaws.com/dev/users',{'Content-Type': 'application/json'},{'name':'Jith', 'email':'jj@gmail.com'})
       .then((val)=>{
         console.log('Success');
         console.log('callapi: ' + JSON.stringify(val));
       })
       .catch((error) => console.log('callapi Fail:'+ JSON.stringify(error)));
    }

    _onPress = () => {
      console.log(this.state.firstName);
      if (this.state.firstName == null || this.state.firstName == '') {
        this.setState ({
          hasError: true,
          message: "Error Message: Username is not provided."
        });
      } else {
        this.setState ({
          hasError: false
        });
        return this.performRegistration();
      }
    };

    render() {
      return (
        <ScrollView>
          <TextInput style={styles.firstNameTextInput} placeholder = "First Name" onChangeText={(firstName) => this.setState({firstName: firstName})} value={this.state.text} defaultValue='' />
          <TextInput style={styles.otherTextInput} placeholder = "Last Name or Given Name" onChangeText={(lastName) => this.setState({lastName: lastName})} value={this.state.text} />
          <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="date"
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon = { false }
            customStyles={{
              dateInput: styles.dateInput
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          <TextInput style={styles.otherTextInput} placeholder = "Phone Number" onChangeText={(phoneNumber) => this.setState({phoneNumber: phoneNumber})} value={this.state.text} />
          <TextInput style={styles.otherTextInput} placeholder = "Email Id" onChangeText={(phoneNumber) => this.setState({email: email})} value={this.state.text} />
          <Text style={this.state.hasError ? styles.error : {display: 'none'}}>
            {this.state.message}
          </Text>
          <View style={styles.loginButton}>
            <Button onPress={this._onPress} title="Register" color="#FFFFFF"/>
          </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  firstNameTextInput: {
    height: 40,
    marginLeft: 50,
    marginRight:50,
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    // textAlign: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2E9298',
    // borderColor: '#CBCBCD',
    // borderWidth: 1
  },
  otherTextInput: {
    height: 40,
    marginLeft: 50,
    marginRight:50,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    // textAlign: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2E9298',
    // borderColor: '#CBCBCD',
    // borderWidth: 1
  },
  datePicker: {
    marginLeft: 50,
    width: 275,
    marginRight:0,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2E9298',
  },
  dateInput: {
    marginLeft: 0,
    alignItems: 'flex-start',
    borderWidth: 0
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    width: 200,
    height: 60,
    marginLeft: 90,
    marginRight: 50,
    marginTop: 0,
    marginBottom: 250,
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // // marginLeft: width - 180,
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#000000',
    // shadowOffset: {
    //  width: 0,
    //  height: 3
    // },
    // shadowRadius: 10,
    // shadowOpacity: 0.25,
  },
  error: {
    fontWeight: 'bold',
    height: 40,
    marginLeft: 50,
    marginRight:50,
    marginTop: 10,
    marginBottom: 10,
    color: 'red'
  },
  loginButton: {
    backgroundColor: '#2E9298',
    width: 200,
    height: 60,
    marginLeft: 90,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 100,
    borderRadius: 10,
    padding: 10,
  },
  thumbnail: {
    flex: 1,
    height: 160,
    width: 160,
    marginLeft: 100,
    marginRight: 50,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
