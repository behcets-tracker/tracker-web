import React, { Component } from 'react';

class SymptomView extends Component {
  renderSymptoms() {
    let symptoms = this.props.data.user.symptoms;

    return symptoms.map(symptom => {
      return (
        <div key={symptom.id} className="symptom card">
          <header className="card-header">
            <p className="card-header-title">
              {symptom.name}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
            <p>{symptom.description}</p>

            <ul>
              <li>{symptom.questions}</li>
            </ul>
            </div>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Symptoms</h1>
        <div>
          {this.renderSymptoms()}
        </div>
      </div>
    );
  }
}

export default SymptomView;
