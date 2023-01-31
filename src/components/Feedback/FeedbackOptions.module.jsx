import styled from 'styled-components';

export const FeedBlockBtn = styled.div`
  display: flex;
  gap: 10px;
`;
export const FeedBtn = styled.button.attrs({ type: 'button' })`
  width: 70px;
  cursor: pointer;
  padding: 4px;
  border: 1px solid black;
  border-radius: 43px;
  transition: all 250ms ease;
  :hover {
    background: ${props => props.color};
  }
`;
