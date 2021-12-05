import React, {Components} from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const Ind = () => {
   return (
   	  <div> <App/> </div>
   );
};

ReactDOM.render(<App/>, document.querySelector('#root'));