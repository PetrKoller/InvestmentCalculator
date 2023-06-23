import InputGroup from "../InputGroup/InputGroup";
import styles from "./UserInput.module.css";
import {useState} from "react";
function UserInput(props) {
    const initialData = {
        currentSavings: 10000,
        yearlyContribution: 1200,
        expectedReturn: 11,
        duration: 10
    }
    const [currentSavings, setCurrentSavings] = useState(initialData.currentSavings);
    const [yearlyContribution, setYearlyContribution] = useState(initialData.yearlyContribution);
    const [expectedReturn, setExpectedReturn] = useState(initialData.expectedReturn);
    const [duration, setDuration] = useState(initialData.duration);
    const currentSavingsChangeHandler = (event) => {
        setCurrentSavings(+event.target.value);
    };
    const yearlyContributionChangeHandler = (event) => {
        setYearlyContribution(+event.target.value);
    }
    const expectedReturnChangeHandler = (event) => {
        setExpectedReturn(+event.target.value);
    }
    const durationChangeHandler = (event) => {
        setDuration(+event.target.value);
    }

    const resetButtonHandler = () => {
        setCurrentSavings(initialData.currentSavings);
        setYearlyContribution(initialData.yearlyContribution);
        setExpectedReturn(initialData.expectedReturn);
        setDuration(initialData.duration);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userInput = {
            currentSavings: currentSavings,
            yearlyContribution: yearlyContribution,
            expectedReturn: expectedReturn,
            duration: duration
        }
        props.onUserInputAdded(userInput);
        resetButtonHandler();
    }

    return <form  className={styles.form} onSubmit={submitHandler}>
        <InputGroup>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input value={currentSavings} type="number" id="current-savings" onChange={currentSavingsChangeHandler}/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input value={yearlyContribution} type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler}/>
            </p>
        </InputGroup>
        <InputGroup>
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input value={expectedReturn} type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input value={duration} type="number" id="duration" onChange={durationChangeHandler}/>
            </p>
        </InputGroup>
        <p className={styles.actions}>
            <button type="reset" className={styles.buttonAlt} onClick={resetButtonHandler}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </p>
    </form>;
}

export default UserInput