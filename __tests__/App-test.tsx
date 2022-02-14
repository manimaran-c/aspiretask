/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../app/App';
import renderer, {act} from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('rn-sliding-up-panel', () => 'SlidingUpPanel');

it('renders correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
});
