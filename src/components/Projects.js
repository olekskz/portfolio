export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4 bg-gray-100 dark:bg-gray-800 dark:text-white text-black transition-all duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "2025-04-18 20-24-54.mkv",
            "2025-04-18 21-03-29.mkv",
            "2025-04-18 21-19-23.mkv",
            "2025-04-18 21-27-22.mkv"
          ].map((file, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 rounded shadow p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
              <video
                controls
                className="w-full h-auto rounded mb-2"
              >
                <source src={`/videos/${file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Short description of project {i + 1} including its main features and technologies used.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
