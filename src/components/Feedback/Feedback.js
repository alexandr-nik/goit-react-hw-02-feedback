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
