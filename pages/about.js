import Link from 'next/link'

export default () => {
    return (<div>
        <h1>About</h1>
        <img src="./static/redux.png" alt="Redux Logo" />        
        <p>Here is a some info about this site. <Link href="/"><a>Home</a></Link></p>
    </div>)
}