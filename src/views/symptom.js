import React, { Component } from 'react';

class SymptomView extends Component {
  renderQuestions(questions) {
    return questions.map((question, index) => {
      return (
        <li data-test-symptom-question key={`symQues-${index}`}>
          {question}
        </li>
      );
    });
  }

  renderSymptoms() {
    let symptoms = this.props.data.user.symptoms;

    return symptoms.map(symptom => {
      return (
        <div key={symptom.id} className="symptom card" data-test-symptom-card>
          <header className="card-header">
            <p className="card-header-title" data-test-symptom-title>
              {symptom.name}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <p data-test-symptom-description>{symptom.description}</p>

              <ul>
                {this.renderQuestions(symptom.questions)}
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
