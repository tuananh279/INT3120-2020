/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ShareScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesome5 name={'bars'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
            Chia sẻ ứng dụng của Awabe
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
          <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
        </View>
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tuananh99xl')}
                style={{width: 100, height: 100, marginLeft: 10}}
              >
                <FontAwesome5 name={'facebook'} color={'#0973b9'} size={90}></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Chia sẻ Facebook
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end Chia sẻ facebook */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress ={()=> Linking.openURL('https://twitter.com/mktspecter')}
                style={{width: 100, height: 100, marginLeft: 10}}>
                  <FontAwesome5 name={'twitter'} color={'#0973b9'} size={90}></FontAwesome5>
                </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Chia sẻ Twitter
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Chia sẻ twitter */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress ={()=> Linking.openURL('https://mail.google.com/')}
                style={{width: 100, height: 100, marginLeft: 10}}
              ><FontAwesome5 name={'envelope'} color={'#0973b9'} size={90}></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Chia sẻ Gmail
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Chia sẻ gmail */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress ={()=> Linking.openURL('https://www.facebook.com/messages')}
                style={{width: 100, height: 100, marginLeft: 10}}
              ><FontAwesome5 name={'facebook-messenger'} color={'#0973b9'} size={90}></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Chia sẻ Messenger
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Chia sẻ messenger */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress ={()=> Linking.openURL('https://www.twitch.tv/')}
                style={{width: 100, height: 100, marginLeft: 10}}
              ><FontAwesome5 name={'twitch'} color={'#0973b9'} size={90}></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Chia sẻ Twitch
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Chia sẻ twitch */}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#12a6e4',
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  iconitem: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',

    margin: 20,
  },
  itemtool: {
    marginTop: 5,
    marginLeft: 40,
  },
});
