import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalenderComp = ({ transferValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [theDate, setTheDate] = useState('');

  useEffect(() => {
    transferValue(theDate);
  }, [theDate]);

  const getDateValue = date => {
    setStartDate(date);
    const theYear = date.getFullYear();
    let theMonth = '';
    let theDay = date.getDate();

    if (date.getMonth() + 1 < 10) {
      theMonth = `0${date.getMonth() + 1}`;
    } else {
      theMonth = `${date.getMonth() + 1}`;
    }

    if (date.getDate() < 10) {
      theDay = `0${date.getDate()}`;
    } else {
      theDay = `${date.getDate()}`;
    }

    setTheDate(`${theYear}-${theMonth}-${theDay}`);
  };

  return (
    <Default>
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={getDateValue}
        inline
      />
      <Textdeco>
        <Disable>예약 불가</Disable>
        <Today>오늘</Today>
        <Choose>선택</Choose>
      </Textdeco>
    </Default>
  );
};

export default CalenderComp;

const Default = styled.div`
  margin-top: 5px;
  font-weight: 200;

  .react-datepicker {
    border: none;
  }

  .react-datepicker__header {
    background-color: white;
    border: none;
  }

  .react-datepicker__month-container {
    width: 290px;
  }

  .react-datepicker__current-month {
    margin: 5px 0;
    font-weight: 200;
  }

  .react-datepicker__day {
    margin: 0.2rem;
    font-weight: 200;
  }

  .react-datepicker__day--today {
    background-color: #ffc000;
  }

  .react-datepicker__day--selected {
    border-radius: 0;
    background-color: #5940ac;

    &:hover {
      border-radius: 0;
      background-color: #5940ac;
    }
  }

  .react-datepicker__day--keyboard-selected {
    color: black;
    background-color: white;
  }

  .react-datepicker__day--outside-month {
    color: #bbb;
  }

  .react-datepicker__navigation-icon::before {
    top: 12px;
    width: 5px;
    height: 5px;
    border-width: 1px 1px 0 0;
  }
`;

const Textdeco = styled.div`
  position: relative;
  padding-top: 20px;
  font-size: 12px;
`;

const Disable = styled.span`
  padding-right: 10px;

  &::before {
    content: '■';
    padding-right: 5px;
    color: #ccc;
  }
`;

const Today = styled.span`
  padding-right: 10px;

  &::before {
    content: '■';
    padding-right: 5px;
    color: #ffc000;
  }
`;

const Choose = styled.span`
  padding-right: 10px;

  &::before {
    content: '■';
    padding-right: 5px;
    color: #5940ac;
  }
`;
