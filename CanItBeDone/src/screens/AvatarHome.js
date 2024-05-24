import {Dimensions} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import Svg, {
  Circle,
  Rect,
  Path,
  Defs,
  Ellipse,
  G,
  Symbol,
} from 'react-native-svg';
import TestAvatar from '../components/TestAvatar';
import MaleFemaleSilhoutte from '../components/MaleFemaleSilhoutte';

const {height, width} = Dimensions.get('window');

const MaleComponent = () => (
  <Svg viewBox="120 30 300 400" preserveAspectRatio="xMidYMin">
    <G id="male_silhouette">
      <Path
        fill="#605454"
        fill-opacity="0"
        id="path_male"
        d="M280.8 100.3c-5 0-10 1.7-13.4 7-2 3-2.5 9-2.3 17-.04.187-.06.387-.09.58-.504-.822-1.063-1.38-1.51-1.38-.6 0-1.4.3-1.4 2.2 0 1.8 1.3 7.4 1.7 8.8.342 1.196.837 2.522 2.218 2.266.407 3.853.576 8.6 1.783 9.634.15.195.45.468.81.77.02 4.99.06 9.45-.1 10.83-4.4 3.6-14.5 12.5-16.5 13-1.353.204-2.27 1.05-3.96 1.793-1.172-.295-2.332-.485-3.48-.527-4.984-.182-9.78 2.16-14.954 8.234-9 11-2.2 30-5 36.7-3 6.7-3.5 10.7-4.3 20.4-.8 9.7-7.4 11.3-7 37.3.4 26 2.2 28 1.4 33.2-.74 4.61.22 2.827.688 6.12.086 1.15-.03 2.54-.686 4.48-2 5.6.3 10.6-.2 12.6-.6 2-.2 1.8.3 2.5s1 2 1.8 2.2c.8.2 2.5.2 3-.2.8 1.3 1.7 3.5 2.4 3.6 1.6.3 4.5 2 5.5.8 1.6 0 4 1 7.8-1.6.2.7 1 2.8 1.4 3 .3.7 2 1 2-.4 0-1.8.2-6.4-.8-9-1.2-2.8-.6-7.8-1.2-9.6-.5-1.8-2-5-4-7-1.644-1.644-3.42-1.742-4.446-5.108.355-4.118.49-3.438-.452-7.69-1-4.5 1.8-28.002 5.2-36.302 3.5-8.5 1.8-19.8 3.5-22 1.027-1.41 4.104-3.946 6.394-16.715.194.6.436 1.38.608 1.914 4.3 14 6 25.5 3.6 34-2.3 8.39 1 11.19.5 18.99l-.1-.09c-.4 7.6.4 17.7-2.4 27.4-2.7 9.7-5.5 47.6-3.5 69.4 2 21.7-2 38.7-3.2 47.2-1.2 8.4 1.6 22.5 3.2 35.8 1.6 13.4 4 24.6 2.4 28.7-1.7 4 .7 9-1.3 11.4-2 2.4-3.2 6.4-6 8.8-3 2.5-7.7 7.7-10.5 9.3-3 1.6-3.3 8.5 3.6 9.7 7 1.2 16-1.6 18-5.2 2.2-3.7 1.4-8 5.8-7.7 4.4.4 5.6-3.2 4.4-8.5-1.2-5.2-.4-7.2 0-7.6.4-.4 1.2-3.3 0-6.5s.4-27.4 5-36c4.3-8.3 3.5-18.8 2-27-1.7-8-2.5-14.4.7-21.3 3.2-6.8 4.4-18.5 7.7-33 3.2-14.6 13-23.4 13-60l-.08-.08c.027-.04.06-.08.085-.12 1.686 1.89 3.51 3.29 5.415 4.27-3.125 11.1-3.222 26.53-.512 39.82 3 15.7-.3 16 2.3 24.2 2.5 8.3-.3 10.6 4.2 23.7 4.6 13-5 22 1.2 47.6 6.3 25.6.8 35-.6 36.7-1.4 1.7-1.4 6 0 8.5 1.4 2.6.3 11.4-1.7 15-2 3.3-2.6 12.7 8.6 12.7 11 0 17-5 14.8-10.4-2.2-5.4-6.8-12.2-5.3-16 1.4-3.6.8-5.4 0-10-1-4.5 4.5-28 7-37.3 2.7-9.4 4-27 1.8-37.6-2.3-10.6-4.8-37-.6-49.6 2.605-7.75 4.054-15.317 4.78-24.49l.037.04c-.142 3.064 3.316 1.862 4.33.36.864.3 1.617.832 2.294 1.44-1.24.014-3.03.394-3.84 1.044-1 .7-.9 1.7.3 1.5 1.3-.2 2.3-.2 2.7-.2.8 0 2.3.3 3.5 0 1.4-.6 2.5-1.9 4-2.6 1.6-.7 2.1-2 3.4-3.2 1.5-1.3 3-2.2 4-3.5 1-1.6 1.2-3.3 1-4-.99-3.36-.52-9.256-1.957-14.798 1.212-2.135 2.364-4.517 1.555-8.805-.8-5.2-1.7-45.2-4.5-54.2-2.8-8.9-4.6-9.4-4.4-18.4.2-8.8-2-14.7-3.6-18.2-1.6-3.6 3.4-16.1-1.6-31.3-2.33-7.04-6.23-11.185-10.72-13.07-1.315-1.35-3.035-2.26-5.28-2.53-11-1.2-1.3-1-4.5-1-3.3 0-20.2-14.7-20.2-18.7 0-1.33.012-4.38.04-7.8.55-.61.96-1.19 1.16-1.7.86-2.33 1.26-5.966 1.356-8.04 1.247.026 1.647-1.47 2.04-2.66.4-1.3 1.7-6.1 1.7-8.3 0-2 .1-2.8-1.3-3-.3-.06-.915.62-1.495 1.46-.12-.26-.25-.516-.405-.76-.6-6 2-23.2-16.6-23.2zm36.83 127.444c.38 2.835.838 5.36 1.37 7.356 2.4 9 5.5 12 5.2 17-.2 5 2.8 17.3 5.2 23.8 2.3 6.4 8.9 33.7 8.3 36.4-.51 2.55-1.01 3.23-.538 4.97-.953 1.19-2.74 2.62-4.062 5.53-1.7 3.9-1.9 7.6-2.4 8.6-.6 1-.3 4.6-1 5.6-.8 1-1 3.7-1.3 5-.203.536-.333.993-.43 1.416-.05.103-.107.22-.142.3.407-5.446.572-11.45.572-18.415 0-11.78-1.158-22.42-3.587-32.37-.245-2.13-.797-4.25-1.713-6.32-.04-.082-.07-.16-.108-.243-1.167-3.76-2.525-7.436-4.092-11.05l-.216.35c-4.49-12.652-3.217-16.28-4.584-18.85-1.5-3.3-2-15.002.5-20.202 1.01-2.19 2.02-5.495 3.03-8.854zM232.3 329.4h.1c0 .7-.2 2 .3 3.2-.8-.8-1.4-.7-2.4-.6.7-1.7 1-2 2-2.6zm104.8 3.5c.085.01.167.027.252.04-.26 2.266.042 4.03 1.09 5.97-.348.343-.683.72-.942 1.09-.67-1.724-1.437-2.887-2.38-3.686 1.128-1.903.764-3.414 1.98-3.414zm-3.536 6.75c.047.085.084.163.135.25.7 1.186 1.09 2.018 1.39 2.715-.77-.362-1.52-.51-2.2-.508.11-.506.2-.995.2-1.408.142-.37.303-.72.46-1.05z"
      />
    </G>
  </Svg>
);

const FemaleComponent = () => (
  <Svg viewBox="120 30 300 400" preserveAspectRatio="xMidYMin">
    <G id="female_silhouette">
      <Path
        fill="#1b0606"
        id="path_female"
        d="M282 112.7c-9.7 0-13.6 5.8-15 11.6-.8 3-1 5.8-1 8.2l.3 3v.5c0-.2 0-.4-.3-.6l-.6-.8-.7-.3c-.4 0-.7 0-1 .4l-.4 1c-.2 1 0 2 .3 3.4.6 3 1.2 4 1.5 4.6l1 1.8c.5 1 1 1.3 1.5 1.5h.7l1 5c.2 1 .5 2 1 3 0 .4.3.7.5 1 0 2.7-.4 6-1 8.8-1 3.5-2 5.4-2.8 6.4l-1.6 2c-2 1.6-4 2.4-6.5 2.7h-5.3-.2v.2h-.3c-6-3.6-14.6-5.6-19.8 2.4-6.6 10.2-1 23.4-1.6 32.2-.2 3.6-.2 27.7-5 36.5-2.6 4.5-6 13-11.7 33.7-3 12-8 20.7-8.7 22.8v.4c-.3.6-.5 1.2-.5 1.8-.8 4.2-1.7 12.5-2.4 17-.2 1.2.5 11 .7 11.4 1 3 .8 7.5 1 9 0 1.6 1.6 1.6 2.7-.6.7 3 3 2.8 3 0-.2-1.2-1-4-2.4-6.2.3-1.4.5-3 .4-4 1.7 0 4.5.6 5 .3 1-.5 2-.7 3-.8v.3c.7 2.7 3.4 3.2 4 0 .3-2-.7-6.3-2-7.5-.3-1-.2-2.4 0-3.5.2-1.8 1.2-6.2-4-11.8l.3-.6v-.4c.2-2.5 1.4-6.4 11.3-22.3 4.4-7.2 8-13.6 10.7-19 1-1.8 1.7-3.4 2.4-5l2.4-5c0 3.2-.4 6-.6 7.6 0 .2 0 .5-.2.8l-2 10.2c-1 3.8-1.5 6.3-1.6 8.3v.2c0 4 .2 7.4.4 10l.5 3.2v1c0 4 0 7.6-.2 9.5-.2 3.8-1.5 15.6-1.5 19.2 0 5.2.4 10.4.7 13.6.6 5.6 1.6 12.7 3.3 22.7l3 15.8 1 6.8c0 .8.2 1.8 0 2.6 0 7.3 1 12.3 2 15.2.5 1.6 1.5 3.7 2.8 5.8 1.2 1.8 2.6 3.6 3.4 4.6 0 .3 0 .6.2 1 0 .6.5 2 1 4.5l3 9c1.4 4.5 2.8 8 3.8 10 .8 1.7 2.3 4.4 4 6.2 1.8 2.2 3.6 4.7 4.6 6.2 1.8 2.8 4 6.5 6.4 10.8l1.2 2.3c0 1 .3 2 .6 3l.5 2.8.2 2c0 1.8.2 4.4 0 7.6 0 2.6 0 5.2-.3 7.6l-.7 5-.7 2.6c-1 3-1.5 5-1.6 7.2v7c-3.3 3-5 6-5 8.7-.3 2 .4 3.3 1.5 4.3-.4 2-.2 4 .2 5.3.3 1.3 1.3 4 4 5 4 1.6 8 1 11.6-.7 1.6-1 3-2 4-3 1-.8 1.7-2 1.8-2.8.2-.5 0-1.2 0-1.8 0-.7-.3-1.5-.5-2.4l-1.6-6-.5-1.8c.5-1.2.8-2.5 1-3.7l.5-2c1.2-5.3 2.8-9 5-11 1.3-1 4-2 5.6-3.7 2-2.3 3-4 3.4-5.7.4-1.8 0-3.4-.8-4.6l-.8-1.4-2.3-3-2.6-3.6-1.6-3.2 1.6-4.8c2-6 4.3-13.5 5.8-21.4 1.5-7.3 1.8-12.4 1.8-15v-2c0-3.5-.5-6.8-1.3-10.6-.7-3.7-1.5-7-1.8-10.2-.5-4.2.3-9 .8-11.6.6-3.2 1.5-7 3.2-13 1.6-6 3.5-12.4 5-18.7l4.4-18.7c.8-3.6 2.6-11.5 3.8-19 1.4-8.5 1.7-14 1.7-18.4v-.8c0-1.6-.2-3.3-.4-5l.3.2.4.3c.6.2 1.3 0 1.7-.6.5-.5 1-1.7 1-2.7.5-.2 1.4-1.3 1.6-2 .8-.4 2.5-1 3-1.7 3 0 7-4 7.4-8 .8-.3 1.3-1 1.6-1.6 0-.2.3-.6.6-1v-.4c.4-.4.7-1 1-1.5l3.6-5.4c2.3-3.6 5.7-9.3 8.2-15 1.4-3.5 2.7-7 3.6-10l1-3.7.3-1.3v-1-.5c-.2-1.5-.8-3-2-4.7-1.5-2.3-4.2-5.6-7.5-9.3-2.2-2.5-4-5.4-5.6-7.7-1.3-2-3-5-4.8-8.7-1.6-3.3-3-6.5-4-9-1-2.4-1.3-3.8-1.5-4.5v-.4c-1.2-3.8-3-8-5.3-12-2.5-3.7-5.4-6.2-8.4-7.5-3-1.2-5.8-1-8-.6-.2 0-.4 0-.7.2h-.2c-.5-.2-1.4-.2-2.3 0-1.7.4-5 .4-8.3-1.2-3.8-1.7-5.5-4.4-6-7v-.7c0-1 0-2.7.2-5.3.3-2.7.8-5.6 1.4-8.8l1-6.2c.2-.2.3-.3.3-.5.4-1.7.6-3.2.7-4.5v-2c.2-.2.2-.4.2-.6.3.2.6.2 1 0h.3c.2-.3.7-.7 1-1.5l.6-1.4c.5-.7 1-2 1.7-5 .3-1.6.2-2.7 0-3.4 0-.4 0-.6-.2-.8 0 0 0-.2-.2-.3l-1-.2c-.2 0-.4.2-.6.4-.3.2-.5.5-.6.8l-.3.5v-.2-3.2c0-2.3-.2-5.2-1-8-1-3-2.3-5.7-4.8-7.8-2.5-2-5.8-3.4-10.5-3.0h-.4zm32.6 98.8c.4 1.8 1 3.6 1.8 5.5 1.8 4.2 4.4 7.4 7 10.4l4 4.3c2.8 2.8 8.2 8 12.7 16.5l-1 5.3c-.3 2.7-.8 6.2-2 10.4-1 4-2.8 7.8-4.3 10.5-.7 1.4-1.4 2.6-2 3.3l-.7 1-.3.6c-.3.3-.5 1-.7 1.5.2-.5 0 .4-.3 1-1 .3-3 .2-5 .2-1-.3-1.8-.6-2.4-.6-1.4-.2-3-.6-5-.5l.5 1.4c-1.7-3.8-3.6-7.6-5-10.3l-.4-.6-1-2c-1.2-2.4-2.6-4.3-4-6L304 261c-.4-.3-.8-.7-1-1.2-.7-.8-1.2-1.7-1.4-3.4 0-1.5 0-3.7.7-7.2.8-3.8 1.6-6.6 2.4-9l2.2-5.6.7-1.7c1.2-3 4.2-10 7.3-21.2zm5.4 75c-.3 0-.7.4-1.2.7v-.4c.4-.2.8-.4 1.2-.4zm3.7 4c-.6.4-2 2.2-2.4 3l-.4.3c0-.2 0-.3-.2-.5 0-.4-.2-.7-.3-1 1-.5 2-1 3.2-1.8zm3.7 3.2c-.6.5-1.7 2-2.2 2.4-.2.3-1.6 2.2-2 3l-.7 2.6v-.4l-.5-2.6c.7-.6 1.8-1.7 2.2-3 1-.5 2-1.4 3.2-2zM213 324.2c1 0 2 1.6 2.2 3.2 0 .8.3 1.5.6 2.4h-.4c-.8 0-1.8 0-2.7.3-.3-.5-1.2-1-2.4-1v-.6c1.7-1 .5-3 2.4-4 0-.2.3-.2.4-.2zm70.5 3.3c.5.3 1 .6 1.6.6h1c-.5 3.6-1 8-1.3 14.7-.4 7.4-.6 10.5-1 14-.2 1.7-.7 4-1.8 8.5-1.2 4.4-2.4 9-3.4 14-.7 3.6-1.2 6.3-1.4 8.4-.5 4.3-1 12.3 1 19.4l.6 2 .6 3v.3s-.3-1 0 .4c-.3-.3-.4-.6-.6-1l-2-4-1.7-3.5-.2-1c-.2-.5-.3-1-.2-1.4v-.8c0-.3 0-.8.2-1.4v-4.3-13-5l-.4-11.8-.2-9 1-3.6c.3-1.2-.7 3 1.5-5.4 1-4.4 1.8-7.7 2-10.4l.4-2.8c2.4-1.8 3.7-4 4.3-6l.2-1z"
      />
    </G>
  </Svg>
);

export default function AvatarScreen() {
  return (
    <View style={styles.container}>
      <MaleFemaleSilhoutte />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarView: {
    margin: 10,
    width: width / 2 - 20,
    height: height / 2,
    borderWidth: 1,
    borderBlockColor: 'red',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});