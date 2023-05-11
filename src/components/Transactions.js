import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from './Transaction.js';

const API = process.env.REACT_APP_API_URL;


export default function Transactions({ total, setTotal }) {

    const [transactions, setTransactions] = useState([]);
    let currentTotal = 0;

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((response) => {
            setTransactions(response.data)
        })
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
                    transactions.map((transaction) => {
                        transaction.category === 'Income' ? 
                        currentTotal += parseInt(transaction.amount) :
                        currentTotal -= parseInt(transaction.amount)
                        return <Transaction key={transaction.id} transaction={transaction} />;
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}