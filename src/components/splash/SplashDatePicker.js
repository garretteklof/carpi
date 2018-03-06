import React from 'react';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import moment from 'moment';

export const SplashSingleDatePicker = () => (
  <SingleDatePicker
    date={moment().subtract(1, 'day')}
    onDateChange={() => {}}
    focused={false}
    onFocusChange={() => {}}
    noBorder
    readOnly
    disabled
  />
);

export const SplashDateRangePicker = () => (
  <DateRangePicker
    startDateId="start"
    endDateId="end"
    startDate={moment().subtract(6, 'days')}
    endDate={moment().subtract(2, 'days')}
    onDatesChange={() => {}}
    focusedInput={null}
    onFocusChange={() => {}}
    disabled
    readOnly
    noBorder
  />
);
