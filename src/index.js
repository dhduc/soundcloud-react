import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList/index';
import {configureStore} from './store';
import * as actions from './actions';
import {Provider} from 'react-redux';

const tracks = [
    {
        id: 1,
        title: 'Shape of you'
    },
    {
        id: 2,
        title: 'That what I like'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <TrackList />
  </Provider>,
  document.getElementById('app')
);