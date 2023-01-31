import { Component } from 'react';
import { Feedback } from '../components/Feedback';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onBtnClick = e => {
    switch (e.target.value) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        break;
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return Math.ceil(good + neutral + bad);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((100 * good) / this.countTotalFeedback());
  };
  render() {
    return (
      <Feedback
        state={this.state}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        onBtnClick={this.onBtnClick}
      />
    );
  }
}
