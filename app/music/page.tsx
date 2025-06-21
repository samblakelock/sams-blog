import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Music',
  description: 'Music and podcasts',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Music</h1>
      <ul>
        <li>
            <a href="https://open.spotify.com/artist/4f11jn3jO1VfqCaRPvqfsR?si=kv6fn79fT1uz3V6dXmrVDQ" target="_blank" rel="noopener noreferrer">Spotify</a>
        </li>
        <li>
            <a href='https://open.spotify.com/show/2o0OosBVvkxu1enBfq6dRR?si=d56d4ea9e5a14b67' target='_blank' rel="noopener noreferrer">Pickup Music Pod</a>
        </li>
      </ul>
    </section>
  )
}
