export default function Features() {
  const items = [
    { title: 'Smart Enhancements', desc: 'Automatic noise removal, color correction, and sharpening.' },
    { title: 'Batch Processing', desc: 'Process multiple files simultaneously to save time.' },
    { title: 'Cloud Storage', desc: 'Access your projects anywhere securely.' },
    { title: 'Team Collaboration', desc: 'Invite teammates and work together in real-time.' },
  ]
  return (
    <section className="container mx-auto py-14">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Powerful capabilities designed to make your creative workflow effortless.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
