import { StyleSheet } from 'react-native'

import { RW } from '@/utils'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#222126',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: RW(200),
    height: RW(200),
    resizeMode: 'contain',
  }
})
