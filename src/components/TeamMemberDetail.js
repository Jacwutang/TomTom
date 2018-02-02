import React from 'react';
import {View, Text,Image,Linking} from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';
// import FontAwesome, { Icons } from 'react-native-vector-icons';


export default (props) => {
  const {title,name,thumbnail_image, github, linkedin} = props;

  return(
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
          style={styles.thumbnailStyle}
          source={ { uri: thumbnail_image} }
          />
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}> {title} </Text>
          <Text> {name} </Text>
        </View>

      </CardSection>

    <CardSection>
      <View style={styles.buttonWrapperStyle}>

        <View style={styles.buttonContentStyle}>
          <Button onPress={() => Linking.openURL(url)}>

          </Button>

          <Button onPress={() => Linking.openURL(url)}>

          </Button>
        </View>

      </View>

    </CardSection>


    </Card>
  );
}

const styles = {
  buttonContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  buttonWrapperStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },

  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },

  imageStyle:{
    height: 300,
    flex: 1,
    width: null,
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  headerTextStyle:{
    fontSize: 18,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

}
