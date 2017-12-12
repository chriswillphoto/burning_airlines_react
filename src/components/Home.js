import React, { PureComponent as Component } from 'react';

class Home extends Component {
  constructor () {
    super();
    this.state = {
      username: "",
      password: "",
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit( this.state.username );
    this.setState( { content: "" } );
    //redirect to SearchForm.js
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit = { this._handleSubmit }>
          Name: <input onChange = { (event) => this.setState({ username: event.target.value })} value = { this.state.username } />
          Password: <input onChange = { (event) => this.setState({ password: event.target.value })} value = { this.state.password } />
          <input type = "submit" value = "Login" />
        </form>
      </div>
    );
  }
}

export default Home;
