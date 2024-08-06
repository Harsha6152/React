import React from 'react';
import './App.css';
import NewComp from './Comp/NewComp';
class App extends React.Component {
  styles = {
    fontstyle: "bold",
    color: "red"
  };
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;







//................................tutorial about components and props..............................
//import logo from './logo.svg';
//import './App.css';
//import FC from './components/FunctionalComp';
//import { ClassComp, ClassComp1 } from "./components/ClassComponent";
//import Click from './components/Click';
//import Count from './components/Count';
//import ParentComp from './components/ParentComp';
//import ClassProps from './ClassProps';
//import FunProps from './components/FucProps';
//function App() {
//return (
// <div>
// <h1>Hello! welcome to harsha</h1>
//<h1>this video is about components</h1>
{/* <ClassProps name="learner 1" place="placex" ><p>child component</p></ClassProps>
      <ClassProps name="learner 2" place="placey" ><button>Click</button></ClassProps>
      <ClassProps name="learner 3" place="placez" />
      <FunProps name="learner 4" place="placeA" />
      * <FC />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Count />
      <ParentComp />*/}
// </div>
// );
//}
//..............................................................................

