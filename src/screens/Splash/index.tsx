import React, { useEffect, useRef, useState } from 'react'
import { View, Image, Animated, Easing } from 'react-native'

import logo from '@/assets/images/logo.png'
import styles from './styles'

interface Props {
  onLoadEnd: () => void
}

const Splash: React.FC<Props> = ({ onLoadEnd }) => {
  const opacity = useRef(new Animated.Value(0))
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    opacity.current.setValue(0)
    Animated.timing(opacity.current, {
      toValue: 1,
      duration: 3000,
      easing: Easing.inOut(Easing.elastic(2)),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setLoaded(true)
      }
    })
  }, [])

  useEffect(() => {
    if (loaded) {
      onLoadEnd()
    }

    return () => {
      console.log('Unmount splash screen')
    }
  }, [loaded, onLoadEnd])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.View
          style={[
            {
              opacity: opacity.current,
            },
          ]}
        >
          <Image source={logo} style={styles.logo} />
        </Animated.View>
      </View>
    </View>
  )
}

export default Splash
