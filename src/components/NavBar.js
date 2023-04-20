import { Link } from "react-router-dom"


export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to='/transactions'>
                <h1>Budgeting App</h1>
            </Link>
            <Link to='/transactions/new'>
                <button>New Transaction</button>
            </Link>
        </div>
    )
}