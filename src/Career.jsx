import { Link } from 'react-router'
import './index.css'

export default function Career() {
    return (
        <>
            <Link to="/" className="home-icon">
                ⌂
            </Link>
            <div className="page-container">
                <h1 className="main-heading">Career</h1>
                <div className="page-content">
                    <p className="stub-text">Coming soon...</p>
                </div>
            </div>
        </>
    )
}
