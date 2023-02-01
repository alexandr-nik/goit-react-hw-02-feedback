import PropTypes from 'prop-types';
import { SectionTitle } from './SectionTitle';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedBlock, FeedTitle } from './Feedback.module';

export const Feedback = ({
  state,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  onBtnClick,
}) => {
  return (
    <FeedBlock>
      <FeedTitle>Please leave feedback</FeedTitle>
      <FeedbackOptions state={state} onBtnClick={onBtnClick} />
      <SectionTitle
        state={state}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        countTotalFeedback={countTotalFeedback}
      />
    </FeedBlock>
  );
};
Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
