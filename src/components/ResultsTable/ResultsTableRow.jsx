const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

function ResultsTableRow(props) {
	return (
		<tr>
			<td>{props.data.year}</td>
			<td>{formatter.format(props.data.savingsEndOfYear)}</td>
			<td>{formatter.format(props.data.yearlyInterest)}</td>
			<td>{formatter.format(props.data.savingsEndOfYear - props.initialSavings - props.data.yearlyContribution * props.data.year)}</td>
			<td>{formatter.format(props.initialSavings + props.data.yearlyContribution * props.data.year)}</td>
		</tr>
	)
}

export default ResultsTableRow;