import { useParams, Link } from 'react-router'
import './index.css'

const storyContent = {
    'was-i-alive': {
        title: 'Was I Alive?',
        content: `
            <p>The question haunted me for years. Not the philosophical kind that everyone grapples with at 3 AM. But something simpler, more devastating: Was I actually present?</p>
            
            <p>I moved through moments like a ghost passing through walls. School days blurred together. Friendships formed and dissolved without my noticing. Even when I was laughing, even when I was supposedly having fun, some part of me felt like I was watching from outside my own body.</p>
            
            <p>It wasn't until much later that I understood: you don't get to choose when you start living. Sometimes you just wake up one day and realize you've been asleep the whole time. And by then, so much time has already slipped through your fingers.</p>
            
            <p>Now, I'm trying to be more present. To feel the weight of moments as they happen. To answer that question differently.</p>
            
            <p>Am I alive? Yes. Finally.</p>
        `,
    },
}

export default function StoryPage() {
    const { slug } = useParams()
    const story = storyContent[slug]

    if (!story) {
        return (
            <>
                <Link to="/" className="home-icon">
                    ⌂
                </Link>
                <div className="page-container">
                    <h1 className="page-title">Story Not Found</h1>
                    <div className="page-content">
                        <p>Sorry, this story doesn't exist.</p>
                        <Link to="/writing" className="back-link">
                            ← Back
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Link to="/" className="home-icon">
                ⌂
            </Link>
            <div className="page-container story-page">
                <Link to="/writing" className="back-link">
                    ← Back
                </Link>
                <h1 className="story-title">{story.title}</h1>
                <div className="story-content" dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
        </>
    )
}
