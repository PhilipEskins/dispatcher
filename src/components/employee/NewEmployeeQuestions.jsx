import React from 'react';

class NewEmployeeQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentDisplay: 'question',
      renderThis: null,
    };
    this.display = this.display.bind(this);
    this.visableOnPage = this.visableOnPage.bind(this);
  }

  componentWillMount() {
    this.visableOnPage();
  }

  display(value) {
    if (value===true) {
      this.setState({questions: <p>Yes</p>});
    } else {
      this.setState({questions: <p>No</p>});
    }
  }

  visableOnPage() {
    let initialPage = <div><h1>New Employee Questions works</h1>
      <h2>Is the new employee a technician?</h2>
      <button type='button' onClick={() => this.display(true)}>Yes</button>
      <button type='button' onClick={() => this.display(false)}>No</button></div>;

    if (this.state.currentDisplay === 'question') {
      this.setState({renderThis: initialPage});
    }
  }

  render() {
    return(
      <div>
        {this.state.renderThis}
      </div>
    );
  }
}

export default NewEmployeeQuestions;
