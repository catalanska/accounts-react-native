import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './src/List';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

const App = () => (
      <View style={styles.container}>
        <List
           data={[
            { id: 1,
              key: 'Marcel Barros',
              account: 'ES10 6857 39 20312031353496',
              image: require('./images/Marcel_Barros.jpg'),
            },
            { id: 2,
              key: 'Laura Arnedo',
              account: 'ES10 2058 01 20312031353425',
              image: require('./images/Laura_Arnedo.jpg'),
            },
          ]}
        />
      </View>
    );

    export default App;
