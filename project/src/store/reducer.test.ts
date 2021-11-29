import {reducer} from './reducer';
import {initialState} from '../const';

describe('Reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(reducer(void 0, {type: 'UNNOUT '}))
      .toEqual(initialState);
  });
});

