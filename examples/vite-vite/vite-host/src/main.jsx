import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

//@ts-ignore
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//   <React.StrictMode>
//     <h1>MF HOST Demo</h1>
//     <App />
//   </React.StrictMode>
// );

render(<App />, document.getElementById('app'));
