import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Fetch = ( props ) => (

  <div>
    <h1>Bat</h1>
    <ul>
      {props.shows.map( ( { show } ) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ) )}
    </ul>
  </div>
)

Fetch.getInitialProps = async function () {
  const res = await fetch( 'https://api.tvmaze.com/search/shows?q=batman' )
  const data = await res.json()

  console.log( 'Show daga fetched. Count: ${data.length}' )

  return {
    shows: data
  }
}

export default Fetch;