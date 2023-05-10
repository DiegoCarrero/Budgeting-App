import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
import Transaction from './Transaction'

export default function Transactions({ total, setTotal }) {

    const [transactions, setTransactions] = useState([]);
    let currentTotal = 0;

    // fetches all transactions from backend
    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then(response => setTransactions(response.data.transactions))
        .catch((error) => console.error('catch', error))
    }, []);

    useEffect(() => setTotal(currentTotal));

    return (
        <div className="transactions">
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
                        currentTotal += transaction.amount;
                        return <Transaction key={index} transaction={transaction} id={id} />;
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}