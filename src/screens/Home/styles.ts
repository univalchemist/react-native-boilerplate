import { StyleSheet } from 'react-native'

import { WHITE } from '@/constants'
import { font, RH, RW } from '@/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D77CA',
    paddingHorizontal: RW(16),
    paddingVertical: RH(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    ...font('bold', 18, 'white', 28),
  },
  button: {
    width: '100%',
    borderRadius: RW(5),
    backgroundColor: '#222126',
    paddingVertical: RH(10),
    marginTop: RH(15),
  },
  buttonText: {
    ...font('bold', 18, WHITE, 28),
    width: '100%',
    textAlign: 'center',
  },
})
