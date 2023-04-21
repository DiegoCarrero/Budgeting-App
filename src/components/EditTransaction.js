import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditTransaction() {

    const [transaction, setTransaction] = useState({
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    const navigate = useNavigate();
    let index = useParams();
        
    function handleTextChange(event) {
        setTransaction({...transaction, [event.target.id]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        editTransaction(transaction);
    }

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data.transactions))
        .catch((error) => console.error('catch', error))
    }, [index])

    function editTransaction() {
        axios.put(`${API}/transactions/${index}`, transaction)
        .then(navigate(`/transactions/${index}`))
        .catch((error) => console.error('catch', error))
    }

    return (
        <div className="Edit-Transaction">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input 
                    type="text" 
                    id="date" 
                    name="date"
                    placeholder="Date"
                    value={transaction.date}
                    onChange={handleTextChange}
                    required
                />

                <label htmlFor="transaction">Transaction:</label>
                <input 
                    type="text"
                    id="transaction"
                    name="transaction"
                    placeholder="Transaction"
                    value={transaction.transaction}
                    onChange={handleTextChange} 
                    required
                />

                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder={0}
                    value={transaction.amount}
                    onChange={handleTextChange} 
                    required
                />

                <label htmlFor="from">From:</label>
                <input 
                    type="text"
                    id="from"
                    name="from"
                    placeholder="from"
                    value={transaction.from}
                    onChange={handleTextChange} 
                    required
                />

                <label htmlFor="category">Select a Category:</label>
                <select 
                    name="category" 
                    id="category"
                    value={transaction.category}
                    onChange={handleTextChange}  
                    required
                >
                    <option></option>
                    <option value='Income'>Income</option>
                    <option value='Rent'>Rent</option>
                    <option value='Groceries' >Groceries</option>
                    <option value='Restaurants'>Restaurants</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Gas'>Gas</option>
                    <option value='Gym Membership'>Gym Membership</option>
                    <option value='Miscellaneous'>Miscellaneous</option>
                </select>

                <button type="submit">Edit Transaction</button>
            </form>
        </div>
    )
}