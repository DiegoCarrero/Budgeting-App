import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div>
            <h1>Page not found. Please go back to <Link to='/'>homepage</Link>.</h1>
        </div>
    )
}