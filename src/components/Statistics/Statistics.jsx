import React from "react";
import PropTypes from 'prop-types';
import {
  StyledStatisticWrapper,
  StyledStatistic,
  StyledStatisticPercent,
} from 'components/Statistics/Statistic.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
    return (
      <StyledStatisticWrapper>
        <StyledStatistic>Good: {good}</StyledStatistic>
        <StyledStatistic>Neutral: {neutral}</StyledStatistic>
        <StyledStatistic>Bad: {bad}</StyledStatistic>
        <StyledStatistic>Total: {total}</StyledStatistic>
        <StyledStatisticPercent>
          Positive feedback: {positivePercentage} %
        </StyledStatisticPercent>
      </StyledStatisticWrapper>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};