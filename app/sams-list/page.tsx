import { BlogPosts } from 'app/components/posts'
import { useFormState } from 'react-dom'
import { CustomMDX } from 'app/components/mdx'

export const metadata = {
  title: 'Sam\'s list',
  description: 'Things I\'ve used and you might find useful',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Sam's List</h1>
      <p className="mb-4">A list of things I find helpful that you might find useful too.</p>
      <h2 className="font-semibold text-xl mb-2 tracking-tighter">Books & Podcasts</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Tim Ferriss</li>
        <li>Lenny's Podcast</li>
        <li>Paul Graham</li>
        <li>Bernard Hickey (New Zealand news)</li>
        <li>Diaspora.nz Podcast (Interviews with New Zealanders abroad)</li>
        <li>Canopy (How to be a manager)</li>
      </ul>
      <h2 className="font-semibold text-xl mb-2 tracking-tighter">The Basics</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Take a cold shower</li>
        <li>Workout</li>
        <li>Avoid sugar and carbs</li>
        <li>Strive for balance</li>
        <li>Reduce screen time</li>
      </ul>
      <h2 className="font-semibold text-xl mb-2 tracking-tighter">Work</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>You're either pushing or reacting</li>
        <li>Founder mode</li>
        <li>Consistency over burnout</li>
      </ul>
      <h2 className="font-semibold text-xl mb-2 tracking-tighter">Music Gear</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Ibanez JSM 100</li>
        <li>Fender Blues Jr</li>
        <li>Benson Amps</li>
      </ul>
    </section>
  )
}
