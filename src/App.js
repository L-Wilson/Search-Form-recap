import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import './App.css';

var students = [
  "Anjali",
  "Anna D",
  "Anna S",
  "Anthony",
  "Gutu",
  "Axel",
  "Binu",
  "Carlos",
  "Emina",
  "Eullin",
  "Feli",
  "Felix",
  "Johanna",
  "Katrin",
  "Khalil",
  "Liang",
  "Lindsay",
  "Matthias",
  "Nele",
  "Pernille",
  "Samanta",
  "Tom",
  "Ziggy"
]

class App extends Component {
  constructor(props) {
    console.log("hello from props App.js" + props)
    super(props)
    this.state = {
      search: "e"
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {


    return (
      <div className="App">
        <Searchbar
          onSearch={this.handleChange}
          search={this.state.search}
        />

        <ul>
          {students
            .filter(s => s.includes(this.state.search.toUpperCase()))
            .map(s => (
              <li>{s}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
