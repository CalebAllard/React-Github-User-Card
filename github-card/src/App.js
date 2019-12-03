import React from 'react';
import CardList from './components/CardList'
import './App.css';

class App extends React.Component{
  
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users/caleballard/followers")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({users: data})
      });
  };
 
  render(){
    return (
      <div className="App">
        <h1>Followers List</h1>
        <CardList data={this.state.users} />
      </div>
    );
  }
}

export default App;
