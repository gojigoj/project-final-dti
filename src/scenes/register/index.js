import React from 'react'
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next';
import { BackgroundWave, ButtonRounded, FooterAuth } from '_atoms'
import { TextInputGroupRegister } from '_molecules'
import { Colors } from '_styles'
import { Typography } from '_styles';

const index = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-25}
      style={styles.container}
    >
      <StatusBar
        backgroundColor={Colors.PRIMARY_LIGHT}
        hidden= {false}
      />
      <BackgroundWave
        isTopTransparent={false}
      />
      <View
        style={styles.bodyWrapper}
      >
        <View
          style={styles.layoutWrapper}
        >
          <Text
            style={styles.titleStyle}
          >
            {t('registrasi')}
          </Text>
          <TextInputGroupRegister />
          <ButtonRounded
            onPressFunc={() => navigation.navigate('Main')} 
            buttonText={t('register')}
          />
          <FooterAuth
            isLoginScreen={false} 
            footerDesc={t('have_account_desc')}
            footerTitle={t('login')}
            onPressFunc={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bodyWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutWrapper: {
    width: '100%',
    padding: 40,
    marginBottom: 16,
  },
  titleStyle: {
    color: Colors.PRIMARY,
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
  }
})
