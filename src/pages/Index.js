import Transactions from "../components/Transactions"
import { useState } from "react";


export default function Index() {

    const [total, setTotal] = useState(0);

    function totalColor() {
        if (total <= 0) {
            return { backgroundColor: 'red', color: 'white' }
        } else if (total <= 100) {
            return { backgroundColor: 'yellow', color: 'black' }
        } else {
            return { backgroundColor: 'green', color: 'white' }
        }
    }

    return (
        <div className="Index">
            <h2>Bank Account: <span style={totalColor()}>${total}</span></h2>
            <Transactions total={total} setTotal={setTotal} />
        </div>
    )
}