import ResultsTable from "./components/ResultsTable/ResultsTable";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState(null)
  const userInputAddedHandler = (userInput) => {
    setUserInput(userInput);
  }

  const yearlyData = []; // per-year results
  if(userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  let result = <h1 align="center">No data available</h1>
  if(yearlyData.length > 0) {
    result = <ResultsTable data={yearlyData} initialSavings={userInput.currentSavings}/>
  }

  return (
    <div>
      <Header/>
      <UserInput onUserInputAdded={userInputAddedHandler}/>
      {result}
    </div>
  );
}

export default App;
