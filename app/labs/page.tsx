import Link from "next/link";
import { Metadata } from "next";
import type { ProjectsFile, ProjectItem, ProjectTag } from "./types";
import projectsData from "../../data/projects.json";

export const metadata: Metadata = {
  title: "DigitalKaiju Labs - R&D Projects",
  description:
    "A collection of side projects and experiments we're passionate about. Just building things we like.",
};

function tagClass(tag: ProjectTag): string {
  const color = tag.color ?? "gray";
  const base = "px-3 py-1 text-sm rounded-full";
  const light = {
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    orange:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    yellow:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    indigo:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  } as const;
  return `${base} ${light[color]}`;
}

function gradientClass(item: ProjectItem): string {
  if (!item.gradient || item.gradient.length !== 2) {
    return "from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600";
  }
  return `${item.gradient[0]} ${item.gradient[1]}`;
}

export default function LabsPage() {
  const { projects } = projectsData as ProjectsFile;

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
              <Link
                href="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Blog
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
            A collection of side projects and experiments we're passionate
            about. Just building things we like and seeing where they go.
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
            {projects.map((item, idx) => {
              if (item.comingSoon) {
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600"
                  >
                    <div
                      className={`h-48 relative overflow-hidden ${
                        item.image && !item.image.url.endsWith(".svg")
                          ? "bg-gray-100 dark:bg-gray-900"
                          : `bg-gradient-to-br ${gradientClass(item)}`
                      } flex items-center justify-center`}
                    >
                      {item.image ? (
                        <img
                          src={item.image.url}
                          alt={item.title}
                          className="w-full h-full object-contain"
                          style={{ transform: `scale(${item.image.config?.zoom ?? 1})` }}
                        />
                      ) : (
                        <div 
                          className="text-4xl font-bold"
                          style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}
                        >
                          {item.icon}
                        </div>
                      )}
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-gray-500 dark:text-gray-400">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-500 mb-4">
                        {item.description}
                      </p>
                      <div className="text-green-600 font-medium">
                        Ideas Welcome →
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div
                    className={`h-48 relative overflow-hidden ${
                      item.image && !item.image.url.endsWith(".svg")
                        ? "bg-gray-100 dark:bg-gray-900"
                        : `bg-gradient-to-br ${gradientClass(item)}`
                    } flex items-center justify-center`}
                  >
                    {item.image ? (
                      <img
                        src={item.image.url}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        style={{ transform: `scale(${item.image.config?.zoom ?? 1})` }}
                      />
                    ) : (
                      <div 
                        className="text-4xl font-bold"
                        style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}
                      >
                        {item.icon}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, i) => (
                          <span key={i} className={tagClass(tag)}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2 mt-6">
                      {item.links &&
                        item.links.length > 0 &&
                        item.links.map(({ href, label }) => {
                          return (
                            <a
                              key={`${href}+${label}`}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-700 font-medium"
                              dangerouslySetInnerHTML={{
                                __html: label,
                              }}
                            ></a>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
