import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import IconBox from '../../components/Atoms/IconBox';
import { useSelector } from 'react-redux';
const ProfileScreen = () => {
  const backgroundImage = require("../../assets/images/profile_background.png");
  const pullUpIcon = <Image style={styles.icon} source={require('../../assets/icons/pullup_icon.jpg')} />
  const calendarIcon = <Image style={styles.icon} source={require('../../assets/icons/calendar_icon.png')} />
  const firstName = useSelector((state) => state.profile.firstName)

  return (
    <ImageBackground source={backgroundImage} style={styles.container} >


      <View style={styles.profilePictureContainer}>
        <View style={styles.profilePictureCircle}>
          <Image style={styles.profilePictureImage} source={require("../../assets/icons/profile_icon.png")} />
        </View>

      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{firstName}</Text>
      <View style={styles.profileDetailContainer}>
        <IconBox
          title={"5 Days"}
          subTitle={"since last training"}
          Icon={pullUpIcon}
        />
        <IconBox
          title={"5 Days"}
          subTitle={"since last training"}
          Icon={calendarIcon}
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
  icon: {
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
export default ProfileScreen