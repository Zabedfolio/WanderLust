"use client"

import {Calendar, DateField, DatePicker, Label} from "@heroui/react";

const DepartureDate = ({ departureDate, setDepartureDate }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
      <DatePicker className="w-full" name="date" value={departureDate} onChange={setDepartureDate}>
        <Label className="text-sm font-medium text-gray-500">Departure date</Label>
        <DateField.Group fullWidth className="mt-2 rounded-xl border border-gray-200 bg-slate-50">
          <DateField.Input className="w-full text-sm text-gray-700">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
          <DateField.Suffix className="pr-2">
            <DatePicker.Trigger className="text-cyan-600">
              <DatePicker.TriggerIndicator />
            </DatePicker.Trigger>
          </DateField.Suffix>
        </DateField.Group>
        <DatePicker.Popover className="rounded-2xl border border-gray-200 bg-white shadow-lg">
          <Calendar aria-label="Event date" className="rounded-xl bg-white">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({year}) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
  </div>
  );
};

export default DepartureDate;