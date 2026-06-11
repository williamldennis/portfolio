export const metadata = {
  title: 'Subscribe',
  description: 'Subscribe to get new posts delivered to your inbox.',
}

export default function SubscribePage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Subscribe
      </h1>
      <p className="mb-8">
        Get new posts delivered straight to your inbox. No spam, unsubscribe anytime.
      </p>
      <a
        href="https://willydennis.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-700 transition-colors dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        Subscribe on Substack →
      </a>
    </section>
  )
}
