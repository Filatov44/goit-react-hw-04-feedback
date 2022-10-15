import React from 'react';
import PropTypes from 'prop-types'
import {
  StyledFeedbackButtonWrapper,
  StyledFeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeavFeedback }) {
  return (
    <StyledFeedbackButtonWrapper>
      {options.map(option => {
        return (
          <StyledFeedbackButton
            type="button"
            key={option}
            onClick={() => onLeavFeedback(option.toLowerCase())}
          >
            {option}
          </StyledFeedbackButton>
        );
      })}
    </StyledFeedbackButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeavFeedback: PropTypes.func.isRequired,
};
