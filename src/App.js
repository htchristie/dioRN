import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';  

const bgDark = '#010409';
const txtDark = '#C9D1D9';
const accentDark = '#4D565E';

const instaUrl = 'https://www.instagram.com/';
const twitterUrl = 'https://twitter.com/';
const linkedinUrl = 'https://www.linkedin.com/';
const pinterestUrl = 'https://br.pinterest.com/';
const githubUrl = 'https://github.com/';

const instaIcon = 'https://img.icons8.com/material-rounded/48/ffffff/instagram-new.png';
const twitterIcon = 'https://img.icons8.com/material-rounded/48/ffffff/twitter-squared.png';
const linkedinIcon = 'https://img.icons8.com/material-rounded/48/ffffff/linkedin--v1.png';
const pinterestIcon = 'https://img.icons8.com/material-rounded/48/ffffff/pinterest--v1.png';
const githubIcon = 'https://img.icons8.com/material-rounded/48/ffffff/github.png';

const App = () => {

  const handleRedirect = async (profileUrl) => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(profileUrl);
    if(res) {
      console.log('link aprovado');
      await Linking.openURL(profileUrl);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={bgDark} barStyle="light-content"/>
      <View style={style.header}>
        <Image style={style.header} source={require('./imgs/header.jpg')}/>
        <Image style={style.avatar} source={require('./imgs/profile-2.jpg')}/>
      </View>
      <View style={style.content}>
        <Text style={[style.defaultText, style.name]}>Christie</Text>
        <Text style={[style.defaultText, style.nickname]}>@htchristie</Text>
        <Text style={[style.defaultText, style.description]}>frontend development student, music lover and photography enthusiast</Text>
      </View>
      <View style={style.connect}>
        <Text style={[style.defaultText, style.cta]}>Connect with me on:</Text>
        <View style={style.links}>
          <Pressable onPress={() => { handleRedirect(instaUrl); }}>
            <Image style={style.icon} source={{uri: instaIcon}} />
          </Pressable>
          <Pressable onPress={() => { handleRedirect(twitterUrl); }}>
            <Image style={style.icon} source={{uri: twitterIcon}} />
          </Pressable>
          <Pressable onPress={() => { handleRedirect(pinterestUrl); }}>
            <Image style={style.icon} source={{uri: pinterestIcon}} />
          </Pressable>
          <Pressable onPress={() => { handleRedirect(linkedinUrl); }}>
            <Image style={style.icon} source={{uri: linkedinIcon}} />
          </Pressable>
          <Pressable onPress={() => { handleRedirect(githubUrl); }}>
            <Image style={style.icon} source={{uri: githubIcon}} />
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  )}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: bgDark,
    flex: 1,
  },
  header: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: 200,
  },
  content: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
    marginVertical: 20,
    flex: 1,
  },
  avatar: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: '75%',
    left: '5%',
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
  },
  defaultText: {
    color: txtDark,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: accentDark,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    textAlign: 'right',
  },
  connect: {
    flex: 1,
  },
  cta: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 16,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginEnd: 15,
  },
});