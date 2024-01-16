import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'
import { APP_LANGUAGES } from '@/constants'

import styles from './styles'

const Home: React.FC = () => {
  const { onChangeLanguage, appLang, isRTL } = useApp()
  const { onSignOut } = useAuth()

  console.log({ appLang, isRTL })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Home-Home-${t('lorem')}`}</Text>
      <TouchableOpacity style={styles.button} onPress={onSignOut}>
        <Text style={styles.buttonText}>{t('signOut')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          onChangeLanguage({
            lng: appLang === APP_LANGUAGES.en ? APP_LANGUAGES.en : APP_LANGUAGES.en,
          })
        }
      >
        <Text style={styles.buttonText}>{t('changeLanguage')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
