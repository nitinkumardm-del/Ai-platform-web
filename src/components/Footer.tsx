export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-6 text-sm text-gray-600 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} AI Platform — All rights reserved.
      </div>
    </footer>
  )
}
