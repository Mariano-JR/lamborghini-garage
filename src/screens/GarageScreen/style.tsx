import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#1E1E20'
  },

  cameraBox: {
    position: 'relative',
    width: 350,
    height: '90%',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10
  },

  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#FFF',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },

  topRight: {
    top: 0,
    right: 0,
    transform: [{rotate: '90deg'}]
  },

  bottonLeft: {
    bottom: 0,
    left: 0,
    transform: [{rotate: '-90deg'}]
  },

  bottonRight: {
    bottom: 0,
    right: 0,
    transform: [{rotate: '180deg'}]
  }
});