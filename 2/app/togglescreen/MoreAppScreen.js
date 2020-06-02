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

export default function MoreAppScreen({navigation}) {
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
            Ứng dụng khác của Awabe
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
          <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
        </View>
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('SubStructure')}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/awabetranslate.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Ứng dụng Awabe Translate
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end Awabe Translate */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/korapp.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Học tiếng Hàn Awabe
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end tiếng Hàn Awabe */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/japapp.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Học tiếng Nhật Awabe
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end tiếng Nhật Awabe */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/cnapp.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Học tiếng Trung Awabe
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end tiếng Trung Awabe */}
        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/korralpha.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Bảng chữ cái tiếng Hàn Hangul
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end chữ cái tiếng Hàn Hangul */}

        <TouchableOpacity
          >
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/cnalpha.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Bảng chữ cái tiếng Trung Giản Thể
              </Text>
            </View>
          </View>
        </TouchableOpacity>

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
