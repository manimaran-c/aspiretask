import 'react-native';
import React from 'react';
import {DotView, Header, Text} from 'app/components';
import renderer from 'react-test-renderer';

it('text renders correctly across screens', () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('header renders correctly across screens', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('dotView renders correctly across screens', () => {
  const tree = renderer.create(<DotView />).toJSON();
  expect(tree).toMatchSnapshot();
});
