import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {

    const [transaction, setTransaction] = useState({});
    const navigate = useNavigate();
    let index = useParams();

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data.transactions))
        .catch((error) => navigate("/not-found"));
    }, [])

    function deleteTransaction() {

    }

    return (
        <div className="Transaction-Details">
            <article>
                <h3>{transaction.transaction}</h3>
                <p>From: {transaction.from}</p>
                <p>Date: {transaction.date}</p>
                <p>Amount: {transaction.amount}</p>
                <p>Category: {transaction.category}</p>
            </article>

            <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
            </Link>

            <button onClick={deleteTransaction} >Delete</button>
        </div>
    )
}