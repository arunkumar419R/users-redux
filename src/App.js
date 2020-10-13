import React from 'react';
import './App.css';
import UsersContainer from './components/UsersContainer'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      
      <UsersContainer></UsersContainer> 

    </div>
    </Provider>
  );
}

export default App;
