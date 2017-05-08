import React, { Component } from 'react';
import InputField from '../components/presentational/input-field';
import { withRouter } from 'react-router';

class SignUpView extends Component {

  /**
   * The initial state of the compoennt
   *
   * @property state
   */
  state = {
    emailAddress: '',
    name: '',
    displayName: ''
  }

  /**
   * Determine if the submit button should be disabled by checking for
   * the presence of:
   *   - email address
   *   - name
   *   - display name
   *
   * @property isDisabledbtn
   * @returns Boolean
   */
  get isDisabledBtn() {
    return !this.state.emailAddress && !this.state.name && !this.state.displayName;
  }

  /**
   * Handle the `onChange` event and set the appropriate state to the
   * events value.
   *
   * @function handleInputChange
   * @param { string } stateKey
   * @param { React.SyntheticEvent } event
   */
  handleInputChange = (stateKey, event) => {
    this.setState({[stateKey]: event.target.value});
  }

  render () {
    return (
      <div className="section">
        <div className="container">
          <h1>Sign up</h1>
          <div className="columns">
            <div className="column">
              <InputField
                labelName="Email Address"
                value={this.state.emailAddress}
                placeholder='example@domain.com'
                stateKey="emailAddress"
                handleChange={this.handleInputChange}
                />

              <InputField
                labelName="Name"
                value={this.state.name}
                placeholder='Jimmy Doe'
                stateKey="name"
                handleChange={this.handleInputChange}
                />

              <InputField
                labelName="Display Name"
                value={this.state.displayName}
                placeholder='@jimmyDoe'
                stateKey="displayName"
                handleChange={this.handleInputChange}
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
        </div>
      </div>
    );
  }

  /**
   * Take the current state of the component and call the `createUser`
   * method from the container component. This will create a user on
   * the backend.
   *
   * This is so the only container component touches data and the view
   * stays "dumb".
   *
   * @function createUser
   */
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
