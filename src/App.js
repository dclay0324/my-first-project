import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import PageHeader from './components/PageHeader';
import logo from './logo.svg';
import './App.css';

class App3 extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <PageHeader/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App2 extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" id="App-logo" alt="logo" />
          <img src={logo} className="App-logo2" id="App-logo" alt="logo" />
          <img src={logo} className="App-logo3" id="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } 
}

class Test extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hi {this.props.title}</p>
      </div>
    )
  }
}

class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <h2>My name is Winnie.</h2>
      <Test title="Su"/>
      <Test title="Vincent"/>
      <Test title="Su Vincent"/>
    </div>
  }
}

class Main extends React.Component {
  render() {
    return <div>
      <Welcome/>
      <Welcome/>
    </div>
  }
}

class Hello extends React.Component{
  render(){
    return(
      <div>
        <p>title: {this.props.title}</p>
        <p>name: {this.props.name}</p>
        <p>id: {this.props.id}</p>
      </div>
    );
  }
}

class PropsTest extends React.Component {
  render(){
    return(
      <div>
      <Hello title="World" name="User" id="1654"/>
      <Hello title="WORLD" name="User" id="1654"/>
      </div>
    )
  }
}

class StateTest extends React.Component {
  constructor(props){
    console.log(2)
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World',
      title: 'TITLE'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(4)
    if (nextProps.title != prevState.title) {
      return {
        title: nextProps.title 
      };
    }
    return null;
  }

  changeText = () => {
    console.log(3)
    //this.setState({myState: 'Vincent'})
    this.setState({ saySomething: 'How are you?' })
  }

  render() {
    console.log(1)
    return (
      <div className="StateTest">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={this.changeText}>Click</button>
      </div>
    );
  }
}

//export default PropsTest;
//export default StateTest;
export default App3;
//export default Main;