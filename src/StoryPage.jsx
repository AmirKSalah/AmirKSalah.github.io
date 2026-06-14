import { useParams, Link } from 'react-router'
import './index.css'

const storyContent = {
    'was-i-alive': {
        title: 'Was I Alive?',
        content: `
<p>Was I alive?</p>

<p>I know I died, but before that, was I alive?</p>

<p>My limbs feel cold and numb against the examination wall. Researchers scurry back and forth, scribbling notes on their clipboards and whispering to one another. I am not sure what they could be observing. I never move or eat.</p>

<p>My life is largely purposeless. I exist only through the researchers' eyes. I am supposed to be under constant supervision, but in small gaps when the room is empty, it is as if the world stops. It is pitch black, and the soundproof walls make it dead silent, and my ears twitch. I am extremely frightened by the world stopping.</p>

<p>I cannot move much, or very quickly. My limbs are a lost cause. They are always numb, and I wonder if they have any nerves at all. I can move my head and neck. The rate is extremely slow, perhaps a few degrees of swivel per day if I am focusing. The researchers make sure to note this down.</p>

<p>Of course, I cannot move my mouth or tongue, rendering me mute. This has made my mind much sharper. I write long stories and imagined autobiographies in my head which will never be seen or heard by anyone else, and come up with thought experiments to test myself with. Even though I've never had an education, I think I am the smartest person I know.</p>

<p>I am unsure of the nature of my existence. Why was I made as such a low-functioning member of my species, artificially kept alive? My brain becomes very foggy, but if I try hard enough, I can conjure memories of life before the facility. The sun on my golden-brown tanned skin, the wind pushing my hair back as I surf and splash into the water.</p>

<p>My appearance now is not consistent with these memories. When I crane my neck down and see my naked body, perpetually suspended on the facility wall, my skin is far paler. My limbs are withered and useless. I have both sex organs, and have heard the researchers describe my phenotype as androgynous. I am not sure if this was an error or by design.</p>

<p>Today — as if the days have any bearing on my life in the sterile facility room — it is just me and one observer. This is odd, as there are usually numerous people in the room with me at any given moment. But not today.</p>

<p>The observer is a hunched-over, graying man. I have seen him many times before, his wrinkles seeming to deepen each time. He looks into my eyes with reserved pity. I do not mind being alone with him, especially compared to the others; his gaze has always felt less violating.</p>

<p>We continue in silence for an inordinate period of time. He idly stares at his clipboard, not writing anything. Every so often he jerks his head back towards the double doors which serve as the only path in and out of the room. I begin to wonder if something is wrong. The man glances over his shoulder one final time, and then frantically begins typing on the computer in front of him.</p>

<p>My world goes black. I hear a loud crash, and then the frantic click of heels on linoleum. As I fall, I feel tubes disconnecting from what feels like every part of my body. A gasp forces its way in between my lips; this is the first time they’ve ever opened.</p>

<p>I lay still for moments that feel like years, waiting for a reckoning, for someone to hoist me back up as an ornament on the wall. But it never comes. I stumble and then stand, groping my way through the darkness, bones cracking as if I were a skeleton escaping my graveyard.</p>

<p>TOO TIRED TO KEEP WRITING SORRY ALINA ILL FINISH THIS LATER </p>
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
                <h1 className="story-title">{story.title}</h1>
                <div className="story-content" dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
        </>
    )
}
