import React, { Component } from 'react';
import InputField from '../components/presentational/input-field';
import { withRouter } from 'react-router';

class SignUpView extends Component {

  state = {
    emailAddress: '',
    name: '',
    displayName: ''
  }

  get isDisabledBtn() {
    return !this.state.emailAddress && !this.state.name && !this.state.displayName;
  }

  handleInput = (stateKey, event) => {
    this.setState({[stateKey]: event.target.value});
  }

  render () {
    return (
      <div className="columns" style={{maxWidth: "1040px", margin: "0 auto"}}>
        <h1>Sign up</h1>
        <div className="column">
          <InputField
            labelName="Email Address"
            value={this.state.emailAddress}
            placeholder='example@domain.com'
            stateKey="emailAddress"
            handleChange={this.handleInput}
            />

          <InputField
            labelName="Name"
            value={this.state.name}
            placeholder='Jimmy Doe'
            stateKey="name"
            handleChange={this.handleInput}
            />

          <InputField
            labelName="Display Name"
            value={this.state.displayName}
            placeholder='@jimmyDoe'
            stateKey="displayName"
            handleChange={this.handleInput}
            />

          <div className="control is-grouped" style={{marginTop: "15px"}}>
            <p className="control">
              <button
                disabled={this.isDisabledBtn}
                className="button is-primary"
                onClick={this.createUser}>
                Submit
              </button>
            </p>
            <p className="control">
              <button className="button is-link">Cancel</button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  createUser = () => {
    const {
      emailAddress,
      name,
      displayName
    } = this.state;

    this.props.createUser(emailAddress, name, displayName);
  }
}

export default withRouter(SignUpView);
