export default function Contact() {
  return (
    <section className="container mx-auto py-14 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have questions? Send us a message and we’ll get back to you.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" rows={5} placeholder="How can we help?" />
        </div>
        <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">Send</button>
      </form>
    </section>
  )
}
