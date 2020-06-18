import React from 'react';
import Order from './components/Order';
import store from './redux/redux-store';
import {Provider} from "react-redux";


function App() {
  return (
      <Provider store={store}>
          <div style={{padding:25}}>
            <div className="App">
            <Order />
            </div>
         </div>
      </Provider>
  );
}

export default App;
