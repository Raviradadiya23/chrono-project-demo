import React from "react";
import { timeZones } from "./utils";

type PropTypes = {
  selectedTimeZone: string;
  handleTimeZoneChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TimeZoneSelect: React.FC<PropTypes> = (props) => {
  const { selectedTimeZone, handleTimeZoneChange } = props;

  return (
    <div>
      <label htmlFor="timeZoneSelect">Select Time Zone: </label>
      <select
        id="timeZoneSelect"
        value={selectedTimeZone}
        onChange={handleTimeZoneChange}
      >
        <option value="">Select...</option>
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeZoneSelect;
