import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
import Transaction from './Transaction'

export default function Transactions() {

    const [transactions, setTransactions] = useState([]);

    // fetches all transactions from backend
    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then(response => setTransactions(response.data.transactions))
        .catch((error) => console.error('catch', error))
    }, [])

    return (
        <div className="Transactions">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    transactions.map((transaction, id) => {
                        return <Transaction key={index} transaction={transaction} id={id} />;
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}