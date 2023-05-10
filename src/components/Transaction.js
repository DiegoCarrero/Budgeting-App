import { Link } from "react-router-dom"


export default function Transaction({ transaction, id }) {
    
    return (
        <tr className="transaction">
            <td>
                {transaction.date}
            </td>
            <td>
                <Link to={`/transactions/${id}`}>{transaction.transaction}</Link>
            </td>
            <td>
                {transaction.amount}
            </td>
        </tr>
    )
}