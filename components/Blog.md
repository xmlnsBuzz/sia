// You can use any data fetching library
import fetch from 'node-fetch'

// posts will be populated at build time by getStaticProps()
function Blog ( { posts } ) {
  return (
    <ul>
      {posts.map( post => (
        <li key={post.id}>{post.name}</li>
      ) )}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps () {
  // Call an external API endpoint to get posts.
  const res = await fetch( 'http://localhost:4000/json/exercise.json' )
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog