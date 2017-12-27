import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList';

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

ReactDOM.render(
    < TrackList tracks={tracks} />,
    document.getElementById('app')
);