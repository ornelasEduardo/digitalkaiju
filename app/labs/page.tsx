import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigitalKaiju Labs - R&D Projects",
  description:
    "A home for all our R&D and hobby projects. Where we experiment, build, and break things in the name of innovation.",
};

export default function LabsPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                digitalkaiju
              </span>
            </Link>
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link href="/labs" className="text-green-600 font-semibold">
                Labs
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent pb-2">
            digitalkaiju labs
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A home for all our R&D and hobby projects. Where we experiment,
            build, and break things in the name of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200"
            >
              Explore Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Current Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-6xl">🧪</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Alpha
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An experimental web framework built for the next generation of
                  applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                    Experimental
                  </span>
                </div>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  AI Assistant
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A custom AI assistant designed to help developers with their
                  daily tasks.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                    In Progress
                  </span>
                </div>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Game Engine
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A lightweight 2D game engine built from scratch for indie
                  developers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    OpenGL
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    Hobby
                  </span>
                </div>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="text-6xl">⚡</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Performance Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A suite of tools for monitoring and optimizing web application
                  performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded full">
                    Complete
                  </span>
                </div>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                <div className="text-6xl">🔬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Data Visualization
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interactive data visualization library for complex datasets
                  and real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    D3.js
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                    Canvas
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                    In Progress
                  </span>
                </div>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-500 dark:text-gray-400">
                  Coming Soon
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-4">
                  More exciting projects are in the pipeline. Stay tuned!
                </p>
                <div className="text-green-600 font-medium">
                  Ideas Welcome →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
