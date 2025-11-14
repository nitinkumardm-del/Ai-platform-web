export default function Pricing() {
  const plans = [
    { name: 'Basic', price: '$9/mo', features: ['720p exports', '5 projects', 'Email support'] },
    { name: 'Pro', price: '$29/mo', features: ['1080p exports', 'Unlimited projects', 'Priority support'] },
    { name: 'Enterprise', price: '$99/mo', features: ['4K exports', 'SSO & Audit logs', 'Dedicated manager'] },
  ]
  return (
    <section className="container mx-auto py-14">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-2xl mx-auto">
        Simple, transparent pricing that grows with you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <div className="text-4xl font-extrabold mb-4">{p.price}</div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <button className="mt-6 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:opacity-90">
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
