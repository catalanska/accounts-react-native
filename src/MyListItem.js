import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    height: 70,
    width: 70,
    resizeMode: 'contain',
    margin: 0,
  },
  row: {
    height: 70,
    flex: 1,
    flexDirection: 'row',
  },
});

const MyListItem = ({ image, title, account }) => (
  <View style={styles.row}>
      <Image
        style={styles.image}
        source={image}
      />
      <Text style={{backgroundColor: 'steelblue'}}>
        {title}
      </Text>
      <Text style={{backgroundColor: 'red'}}>
        {account}
      </Text>
    </View>
);

MyListItem.propTypes = {
  image: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
};

export default MyListItem;
