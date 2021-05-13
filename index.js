import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, StyleSheet, Text} from 'react-native';

export default class FadeAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  FadeIn() {
    const {duration, onFadeOut} = this.props;
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start(({finished}) => {
      setTimeout(() => {
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => {
          if (onFadeOut) {
            onFadeOut();
          }
        });
      }, 500);
    });
  }

  render() {
    const {description, color} = this.props;
    return (
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: this.state.fadeAnim,
            backgroundColor: color,
          },
        ]}>
        <Text
          style={styles.fadingText}>
          {description}
        </Text>
      </Animated.View>
    );
  }
}

FadeAlert.PropTypes = {
    description: PropTypes.string,
    color: PropTypes.string,
    duration: PropTypes.number,
    onFadeOut: PropTypes.func,
};

FadeAlert.defaultProps = {
    description: 'Warning!',
    color: '#FFFFFF',
    duration: 3000,
    onFadeOut: () => {},
};

const styles = StyleSheet.create({
  fadingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    position: 'absolute',
    top: 25,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  fadingText: {padding: 10, marginTop: 2},
});


