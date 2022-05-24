import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Project1 from './Project1/Project1';
// import './Project1/Project1.css';
// import SoloProject1 from './SoloProject1/SoloProject1';
// import './SoloProject1/SoloProject1.css';
// import Page1 from './Page1/Page1';
// import './Page1/Page1.css';
import Project2 from './Project2/Project2';
import './Project2/Project2.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Project2/>
);





// ReactDOM.render(
//   <Page/>,document.getElementById("root")
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
