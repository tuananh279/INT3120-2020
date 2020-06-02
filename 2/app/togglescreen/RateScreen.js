/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function StructureScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesome5 name={'bars'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
            Đánh giá
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tuananh99xl')}>
            <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
      <View
            style={{height: 500, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tuananh99xl')}>
              <FontAwesome5 name={'external-link-alt'} color={'#000'} size={30}></FontAwesome5>
            </TouchableOpacity>
          </View>
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
    height: 50,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
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
