import { Link } from "react-router-dom"


export default function Transaction({ transaction }) {
    
    return (
        <tr className="transaction">
            <td>
                {transaction.date}
            </td>
            <td>
                <Link to={`/transactions/${transaction.id}`}>{transaction.transaction}</Link>
            </td>
            <td style={transaction.transaction === 'Income' ? { color: "green" } : { color: "red" }}>
                {transaction.amount}
            </td>
        </tr>
    )
}