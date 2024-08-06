import React from "react";
import './App.css';
import Input1 from "./components/Input1";
//import ClassTimer from "./components/ClassTimer";
//import HookTimer from "./components/HookTimer";
//import DocTitle from "./components/DocTitle";
//import DocTitle1 from "./components/DocTitle1";
//import Counter1 from "./components/Counter1";
//import Counter2 from "./components/Counter2";
//import FocusInput from "./components/FocusInput";
//import Countermemo from './components/Countermemo'
//import ParentComponent from './components/ParentComponent'
//import Datafecthwithreducer from "./Datafecthwithreducer";
//import Datafetching1 from "./components/Datafetching1";
//import ComponentA from "./components/ComponentA"
//import ComponentB from "./components/ComponentB"
//import ComponentC from "./components/ComponentC"
///export const CountContext = React.createContext()
//import Counterforreducer2 from "./components/Counterforreducer2";
//import Reducer3 from "./components/Reducer3";
//import CounterforReducer from "./components/CounterforReducer";
//import DataFectching from "./components/DataFectching";
//import CompC from "./components/CompC";
//import UseEffecthook1 from "./components/UseEffecthook1";
//import ClassMouse from "./components/ClassMouse";
//import HookMouse from "./components/HookMouse";
//import MouseContainer from "./components/MouseContainer";
//import IntervalClassCounter from "./components/IntervalClassCounter";
//import Intervalhook from "./Intervalhook";
//import ClassCounteruseeffect from "./components/ClassCounteruseeffect";
//import HookCounter from "./components/HookCounter";
//import HookCounterTwo from "./components/HookCounterTwo";
//import HC3 from "./components/HC3";
//import Hook4 from "./components/Hook4";
//export const UserContext = React.createContext()
//export const ChannelContext = React.createContext()
{/*....................................contextwithreducer..........
  const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state

  }
}*/}
function App() {
  //const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <Input1 />






      {/*
      <Counter1 />
      <Counter2 />
      <DocTitle />
      <DocTitle1 />
      <ClassTimer />
      <HookTimer />
      <FocusInput />
      <Countermemo />
      <ParentComponent />
      <Datafecthwithreducer />
      <Datafetching1 />
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count-{count}
        <ComponentA />
        <ComponentB />
        <ComponentC />  
        </CountContext.Provider>
        <Reducer3 />
      <Counterforreducer2 />
      <CounterforReducer />
      <UserContext.Provider value={'harsha'}>
        <ChannelContext.Provider value={'jaladi'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>
       <DataFectching />
      <IntervalClassCounter />
      <Intervalhook />
      <MouseContainer />
      <HookMouse />
      <ClassMouse />
     <UseEffecthook1 />
      <ClassCounteruseeffect />
      <HookCounter />
      <HookCounterTwo />
      <HC3 />
      <Hook4 />*/}
    </div>

  );
}

export default App;
