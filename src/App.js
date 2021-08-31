import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  
  constructor(){
    super()

    this.state={
      change:`hi im abdi`
    }
  }
  
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.change}
          </p>

          <button onClick={()=> this.setState({change: `hi im paul`}) }  >change name</button>

        </header>
      </div>
    );
  }
}


export default App;
