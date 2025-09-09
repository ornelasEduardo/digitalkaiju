export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                digitalkaiju
              </span>
            </a>
            <nav className="flex space-x-8">
              <a href="/" className="text-green-600 font-semibold">
                Home
              </a>
              <a
                href="/labs"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Labs
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <a href="/">
            <div
              className="bg-green-600"
              style={{
                maskImage: "url(/logo.svg)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/logo.svg)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                width: "256px",
                height: "295px",
              }}
            />
          </a>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent pb-1">
              digitalkaiju
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-1">
              Building Dope Software from California
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
              Just building software I think is worth building.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600 text-white gap-2 hover:from-green-700 hover:to-green-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="#email"
            >
              Get in Touch
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
