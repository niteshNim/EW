import React,{Component} from 'react';
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import  Home  from   './component/homecomponent/home.js'
class App extends Component 
{

  render()
  {
    return(
      <Home/>
    );
  }
}
export default App;
