import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Card from './Card';
import { robots } from './robots'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
