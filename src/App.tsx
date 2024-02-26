import { useState } from "react";
import * as chrono from "chrono-node";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "./App.css";
import TimeZoneSelect from "./TimeZone";

dayjs.extend(utc);
dayjs.extend(timezone);

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    "America/Los_Angeles"
  );

  const date = chrono.parseDate(inputValue);

  const handleTimeZoneChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formattedDate = date
    ? dayjs.utc(date).tz(selectedTimeZone).format("YYYY-MM-DD hh:mm:ss A (Z)")
    : inputValue === ""
    ? "please add some text in the input box to get date accordingly"
    : "sorry, could not process your input text to date";

  return (
    <>
      <TimeZoneSelect
        selectedTimeZone={selectedTimeZone}
        handleTimeZoneChange={handleTimeZoneChange}
      />
      <div className="inputDiv">
        <label>
          Input:
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <p>{formattedDate}</p>
    </>
  );
}

export default App;

