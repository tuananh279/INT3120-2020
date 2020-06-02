/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking
} from 'react-native';
import firebase from 'firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ListView from 'deprecated-react-native-listview';
import Sound from 'react-native-sound'; 
import tts from 'react-native-tts';

tts.getInitStatus().then(() => {
  tts.setDefaultLanguage('en-IE');
  tts.voices().then(voices => console.log(voices.find(v => v.language === 'en-IE')));
}, (err) => {
  if (err.code === 'no_engine') {
    tts.requestInstallEngine();
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyCLMf3Ryr-Wiv1PqbQYMSLB2DsEnh14ESY",
  authDomain: "awabeclone.firebaseapp.com",
  databaseURL: "https://awabeclone.firebaseio.com",
  projectId: "awabeclone",
  storageBucket: "awabeclone.appspot.com",
  messagingSenderId: "204081702585",
  appId: "1:204081702585:web:20e8723ded05576dc09d68",
  measurementId: "G-Q0JJ235WKX"
};

  // Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default class GeneralConversation extends Component {
  constructor(props) {
    super(props);
    this.itemRef = firebase.database();
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
    }
  }
  listenForItems(itemRef) {
    var items = [];
    this.itemRef.ref('generalconversation').on('child_added', (dataSnapshot) => {
      items.push({
        name: dataSnapshot.val(),
        key: dataSnapshot.key
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }
  showDB() {
    this.itemRef.ref('generalconversation').child(this.state.text).on('value', function(snapshot){
      alert(snapshot.val())
    });
    console.log(this.state.text);
  }
  addDB(word){
    alert('Đã thêm vào mục Yêu thích');
  
    this.itemRef.ref('data').push({
      name : word
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* toggle menu slide */}
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FontAwesome5 name={'chevron-left'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
              General Conversation
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tuananh99xl')}>
              <FontAwesome5 name={'facebook'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listitem}>
        <ListView  dataSource={this.state.dataSource} 
        renderRow = {(rowData) => 
          <View style={styles.item}>
            <View style={({flex: 1, width: '20%', height: '100%'}, styles.canchinh1)}>
              <TouchableOpacity onPress={() => tts.speak(rowData.key)}>
               <FontAwesome5 name={'volume-up'} size={30} color={'#81D4FA'} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 3,height: '100%', justifyContent:'center', alignItems: 'center', width: '60%'}}>            
              <Text style={{fontSize: 20, fontWeight: '500'}} >{rowData.key}</Text>
              <Text style={{color: '#9E9E9E', fontSize: 20, fontWeight: '500' }}>{rowData.name}</Text>
            </View>            
            <View style={({flex: 1, width: '20%',height: '100%'}, styles.canchinh2)}>
            <TouchableOpacity onPress={() => this.addDB(rowData.key)}>
               <FontAwesome5 name={'star'} size={30} color={'#81D4FA'} />
               </TouchableOpacity>
            </View>
          </View>
        }>
        </ListView>
        </View>
      </View>  
    );
  }
  componentDidMount() {
    this.listenForItems(this.itemRef);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    backgroundColor: '#12a6e4',
    marginBottom: 5,
    flexDirection: 'row',
  },
  search: {
    height: 50,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
  },
  canchinh1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  canchinh2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  listitem: {
    flex: 1,    
    width: '98%',
    marginLeft: 10,
    marginRight: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    height: 75,
    marginBottom: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0973b9',
    flexDirection: 'row',
  }
});
