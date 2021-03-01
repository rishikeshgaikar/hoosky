import React from 'react';
import {ImageBackground} from 'react-native';
import {View, StyleSheet, Image} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/consts/Scale';
import {images} from '../../utils/theme/Images';
const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    height: horizontalScale(520),
    width: '100%',
    marginTop: verticalScale(20),
    // backgroundColor: '#e1e4e8',
  },
});
class ProgressiveImage extends React.Component {
  render() {
    return (
      <ImageBackground
        source={images.newlogo}
        resizeMode={'contain'}
        style={styles.container}>
        <Image {...this.props} />
      </ImageBackground>
    );
  }
}
export default ProgressiveImage;
