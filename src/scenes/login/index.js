import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, StatusBar, Platform } from 'react-native'
import { useTranslation } from 'react-i18next';
import { BackgroundWave, TitleApp, ButtonRounded, FooterAuth } from '_atoms'
import { TextInputGroupLogin } from '_molecules'
import { Colors } from '_styles'

const loginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-150}
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
          <TitleApp />
          <TextInputGroupLogin />
          <ButtonRounded
            onPressFunc={() => navigation.navigate('Main')} 
            buttonText={t('login')}
          />
          <FooterAuth
            isLoginScreen={true} 
            footerDesc={t('no_account_desc')}
            footerTitle={t('registrasi')}
            onPressFunc={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default loginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
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
})



