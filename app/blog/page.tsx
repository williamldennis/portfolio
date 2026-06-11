import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Some thoughts on the future of work and human connection.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Get new posts delivered to your inbox.{' '}
        <a
          href="https://willydennis.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-600 underline"
        >
          Subscribe on Substack →
        </a>
      </p>
      <BlogPosts />
    </section>
  )
}
