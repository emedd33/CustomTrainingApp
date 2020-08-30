import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native';
import DrawerIcon from '../../components/Atoms/DrawerIcon';
import IconBox from '../../components/Atoms/IconBox';
const HomeScreen = ({ navigation }) => {
  const backgroundImage = require("../../assets/images/profile_background.png");
  const pullUpIcon = <Image style={styles.pullupIcon} source={require('../../assets/images/pull-up-icon.jpg')} />


  return (
    <ImageBackground source={backgroundImage} style={styles.container} >


      <View style={styles.profilePictureContainer}>
        <View style={styles.profilePictureCircle}>
          <Image style={styles.profilePictureImage} source={require("../../assets/images/profile_image.png")} />
        </View>

      </View>
      <View style={styles.profileDetailContainer}>
        <IconBox
          title={"5 Days"}
          subTitle={"since last training"}
          Icon={pullUpIcon}
        />
        <IconBox
          title={"5 Days"}
          subTitle={"since last training"}
          Icon={pullUpIcon}
        />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePictureContainer: {
    flex: 0.5,
    marginTop: 130,
  },
  profilePictureCircle: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profilePictureImage: {
    height: 100,
    width: 100,
    opacity: 0.5,
  },
  profileDetailContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  profileDetailBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    height: 130,
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  pullupIcon: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  profileDetailBoxTextContainer: {
    marginRight: 100,
    display: "flex",
    justifyContent: "center",
  },
  profileDetailBoxTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  profileDetailBoxSubTitle: {
    opacity: 0.5
  }
})
export default HomeScreen