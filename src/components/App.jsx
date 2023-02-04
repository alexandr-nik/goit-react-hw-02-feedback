import { Component } from 'react';
import { Section } from './Section';
import { Feedback } from './Feedback';
import { Statistic } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onBtnClick = (e, el) => {
    this.setState(prevState => ({
      [el]: prevState[el] + 1,
    }));
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
      <>
        <Section title="Please leave feedback">
          <Feedback
            onBtnClick={this.onBtnClick}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          <Statistic
            state={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section>
      </>
    );
  }
}
