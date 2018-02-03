// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import MyListItem from './MyListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('MyListItem should', () => {
  test('render correctly when no params', () => {
    const rendered = renderer.create(<MyListItem />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  test('render correctly when params are passed', () => {
    const item = <MyListItem id={1} title='test' image={1} account='f00' />;

    const rendered = renderer.create(item).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
