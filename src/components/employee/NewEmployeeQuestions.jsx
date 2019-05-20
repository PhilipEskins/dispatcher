import React from 'react';
import NewEmployeeForm from './NewEmployeeForm';

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
    this.goToForm = this.goToForm.bind(this);
  }

  componentWillMount() {
    this.visableOnPage();
  }

  display(value) {
    if (value===true) {
      this.setState({questions: true});
    } else {
      this.setState({questions: false});
    }
  }

  goToForm() {
    console.log(this.state.questions);
    let formPage = <NewEmployeeForm technician={this.state.questions}/>;
    if (this.state.currentDisplay === 'form') {
      this.setState({renderThis: formPage});
    }
  }

  visableOnPage() {
    let initialPage = <div><h1>New Employee Questions works</h1>
      <h2>Is the new employee a technician?</h2>
      <button type='button' onClick={() => {
        // this.display(true);
        this.setState({questions: true});
        this.setState({currentDisplay: 'form'});
        // this.goToForm();
      }}>Yes</button>
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
