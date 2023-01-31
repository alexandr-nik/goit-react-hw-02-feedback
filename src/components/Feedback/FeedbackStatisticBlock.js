import {
  FeedStatisticText,
  FeedStatisticBlockText,
} from './FeedbackStatisticBlock.module';

export const FeedbackStatisticBlock = ({
  good,
  neutral,
  bad,
  total,
  persentage,
}) => {
  return (
    <FeedStatisticBlockText>
      <FeedStatisticText>Good: {good}</FeedStatisticText>
      <FeedStatisticText>Neutral: {neutral}</FeedStatisticText>
      <FeedStatisticText>Bad: {bad}</FeedStatisticText>
      <FeedStatisticText>Total: {total()}</FeedStatisticText>
      <FeedStatisticText>Positive feedback: {persentage()}%</FeedStatisticText>
    </FeedStatisticBlockText>
  );
};
