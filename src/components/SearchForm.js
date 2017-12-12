import React, { PureComponent as Component } from 'react';
import Home from './Home';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json'

class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      content: { origin: "", destination: "", seats_left: 0}
     };

     const fetchAirplanes = () => {
       axios.get(SERVER_URL).then( results => this.setState (
         {airplanes: results.data} ) );
     }

     fetchAirplanes();
  }

  //Attached to the form itself, listening for the form to be submitted
  _handleSubmit(e) {
    // e.preventDefault();
    // console.log( this.state.content );
    //need to change where content object is sent to
    this.props.onSubmit( this.state.content );
    this.setState( { content: "" } );
  }


  _handleChangeFor = (propertyName) => (event) => {
    const { content } = this.state;
    const newContent = {
      ...content,
      [propertyName]: event.target.value
    };
    this.setState({ content: newContent });
  }

  // Origin: <input onChange = { (event) => this.setState({ content[origin]: event.target.value })} value = { this.state.content.origin } />
  // Destination: <input onChange = { (event) => this.setState({ content.destination: event.target.value })} value = { this.state.content.destination } />

  render() {
    return (
      <div>
        <form onSubmit = { this._handleSubmit }>
          Origin: <input type="text" onChange={this._handleChangeFor('origin')} value={this.state.content.origin}/>
          Destination: <input type="text" onChange={this._handleChangeFor('destination')} value={this.state.content.destination}/>
          <input type = "submit" value = "Search" />
        </form>
        <ListFlights
          origin = { this.state.content.origin }
          destination = { this.state.content.destination }
          seats_left = { this.state.content.seats_left }
        />
      </div>
    );
  }
}

function ListFlights(props) {
  return (
    <div>
      <h2>LOOK AT THE COMMENTS BELOW IN CODE</h2>
    </div>
  );
}

  // { props.content.map( s => <p key = { s.id }>
  // { s.content.origin }
  // { s.content.destination }
  // { s.content.seats_left}
  // </p>)}

export default SearchForm;
