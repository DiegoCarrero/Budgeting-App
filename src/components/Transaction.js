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
            <td className="amounts"
                style={transaction.category === 'Income' ? 
                { backgroundColor: "green", color: "white" } : 
                { backgroundColor: "red", color: "white" }}
            >
                ${transaction.amount}
            </td>
        </tr>
    )
}