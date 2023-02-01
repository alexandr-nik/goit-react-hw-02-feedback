import PropTypes from 'prop-types';
import { FeedBlockBtn, FeedBtn } from './FeedbackOptions.module';
export const FeedbackOptions = ({ onBtnClick }) => {
  return (
    <FeedBlockBtn>
      <FeedBtn onClick={e => onBtnClick(e)} value="good" color={'#5dd95d'}>
        good
      </FeedBtn>
      <FeedBtn onClick={e => onBtnClick(e)} value="neutral" color={'#ffa603a8'}>
        neutral
      </FeedBtn>
      <FeedBtn onClick={e => onBtnClick(e)} value="bad" color={'#fd0000ed'}>
        bad
      </FeedBtn>
    </FeedBlockBtn>
  );
};
FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
