import { FeedStatistic, 
    FeedStatisticTitle, FeedStatisticText} from './SectionTitle.module';
import { FeedbackStatisticBlock } from './FeedbackStatisticBlock';
export const SectionTitle = ({state, countPositiveFeedbackPercentage, countTotalFeedback})=>{
    const { good, neutral, bad } = state;
return (<FeedStatistic>
    <FeedStatisticTitle>Statistic</FeedStatisticTitle>  
    {countTotalFeedback() !== 0 ? (
    <FeedbackStatisticBlock
      good={good}
      neutral={neutral}
      bad={bad}
      total={()=>countTotalFeedback()}
      persentage={()=>countPositiveFeedbackPercentage()}
    />
  ) : (
    <FeedStatisticNoFeedback />
  )}
  </FeedStatistic> )
}
const FeedStatisticNoFeedback = () => {
    return <FeedStatisticText>No feedback given</FeedStatisticText>;
  };