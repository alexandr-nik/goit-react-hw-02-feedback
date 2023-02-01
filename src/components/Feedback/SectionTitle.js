import PropTypes from 'prop-types';
import {
  FeedStatistic,
  FeedStatisticTitle,
  FeedStatisticText,
} from './SectionTitle.module';
import { FeedbackStatisticBlock } from './FeedbackStatisticBlock';
export const SectionTitle = ({
  state,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  const { good, neutral, bad } = state;
  return (
    <FeedStatistic>
      <FeedStatisticTitle>Statistic</FeedStatisticTitle>
      {countTotalFeedback() !== 0 ? (
        <FeedbackStatisticBlock
          good={good}
          neutral={neutral}
          bad={bad}
          total={() => countTotalFeedback()}
          persentage={() => countPositiveFeedbackPercentage()}
        />
      ) : (
        <FeedStatisticNoFeedback />
      )}
    </FeedStatistic>
  );
};
const FeedStatisticNoFeedback = () => {
  return <FeedStatisticText>No feedback given</FeedStatisticText>;
};
SectionTitle.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};
