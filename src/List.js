import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MyListItem from './MyListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default class List extends React.Component {

  _renderItem = ({item}) => (
  <MyListItem
    id={item.id}
    title={item.key}
    image={item.image}
    account={item.account}
  />
);

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { id: 1,
              key: 'Marcel Barros',
              account: 'ES10 6857 39 20312031353496',
              image: require('../images/Marcel_Barros.jpg'),
            },
            { id: 2,
              key: 'Laura Arnedo',
              account: 'ES10 2058 01 20312031353425',
              image: require('../images/Laura_Arnedo.jpg'),
            },
          ]}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
