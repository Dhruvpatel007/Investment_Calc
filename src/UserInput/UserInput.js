import { useState } from "react";

const UserInput = () => {
  const intialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1000,
    "expected-return": 7,
    duration: 10
  };

  const [UserInput, setUserInput] = useState(intialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(UserInput);
  };
  const resetHandler = () => {
    setUserInput(intialUserInput);
  };
  const onChangeHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="current-savings"
            value={UserInput["current-savings"]}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            value={UserInput["yearly-contribution"]}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
            value={UserInput["expected-return"]}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={UserInput["duration"]}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
