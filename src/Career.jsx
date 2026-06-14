import { Link } from 'react-router'
import './index.css'

export default function Career() {
    return (
        <>
            <Link to="/" className="home-icon">
                ⌂
            </Link>
            <div className="nav-items">
                <h1 className="main-heading">career</h1>
                <div className="page-content">
                    <p className="stub-text">coming soon...</p>
                </div>
            </div>
        </>
    )
}
