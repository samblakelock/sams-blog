import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Sam Blakelock
      </h1>
      <p className="mb-10 text-1xl font-semibold">
        {`Guitarist and co-founder of Pickup Music`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
