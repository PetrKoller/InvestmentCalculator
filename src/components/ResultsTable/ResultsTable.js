import styles from "./ResultsTable.module.css"
import ResultsTableRow from "./ResultsTableRow";

function ResultsTable(props) {
    return <table className={styles.result}>
        <thead>
        <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map(x => <ResultsTableRow key={x.year} data={x} initialSavings={props.initialSavings}/> )}
        </tbody>
    </table>;
}

export default ResultsTable;