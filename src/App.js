import './App.css';
import ReactDOM from 'react-dom'
import Lottie from 'lottie-web';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(Lottie.loadAnimation);



const App = (props) => {

  return (
    <>
      <h1 className='d-flex flex-row justify-content-center mt-4' >Simple counter</h1>
      <div className='d-flex flex-row justify-content-center bg-black mt-5' id='timer'>
        
        <lord-icon
          src="https://cdn.lordicon.com/uutnmngi.json"
          trigger="loop"
          colors="primary:#4be1ec,secondary:#cb5eee"
          stroke="100"
          state="loop"
          style={{ width: "80px", height: "80px" }}>
        </lord-icon>
        
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num1 % 10}</p>
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num2 % 10}</p>
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num3 % 10}</p>
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num4 % 10}</p>
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num5 % 10}</p>
        <p className='m-2 p-3 mb-2 bg-dark text-white'>{props.num6 % 10}</p>
      </div>
    </>
  );
};

export default App;