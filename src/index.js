import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList';
import {configureStore} from './store';
import * as actions from './actions';

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
    < TrackList tracks={tracks} />,
    document.getElementById('app')
);