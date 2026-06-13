import { Link } from 'react-router'
import './index.css'

const stories = [{ slug: 'was-i-alive', title: 'Was I Alive?' }]

export default function Writing() {
    return (
        <>
            <Link to="/" className="home-icon">
                ⌂
            </Link>
            <div className="page-container">
                <h1 className="main-heading">writing</h1>
                <div className="page-content">
                    <ul className="stories-list">
                        {stories.map((story) => (
                            <li key={story.slug}>
                                <Link to={`/writing/${story.slug}`} className="story-link">
                                    {story.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
