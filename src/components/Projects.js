export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4 bg-gray-100 dark:bg-gray-800 dark:text-white text-black transition-all duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              file: "2025-04-18 20-24-54.mp4",
              title: "Personal Budget",
              description: "A personal budget management app that allows users to track their expenses and incomes. Built with JavaScript, Express, and PostgreSQL for efficient data management and secure storage.",
              repo: "https://github.com/olekskz/Personal-budget"
            },
            {
              file: "2025-04-18 21-03-29.mp4",
              title: "Photo Caption Contest",
              description: "An interactive photo caption contest platform where users can log in through third-party services like Google, Facebook, or GitHub. Built with JavaScript, Sequelize for database management, and OAuth for authentication.",
              repo: "https://github.com/olekskz/photo-caption-contest"
            },
            {
              file: "2025-04-18 21-19-23.mp4",
              title: "E-Commerce Store",
              description: "An online store where users can browse, add items to their cart, and proceed with checkout. Built with React, Sequelize for database interaction, and Express for the backend.",
              repo: "https://github.com/olekskz/E-shop"
            },
            {
              file: "2025-04-18 21-27-22.mp4",
              title: "Messenger App",
              description: "A real-time chat application built with Socket.IO, React, TypeScript, Express, and Sequelize, allowing users to send instant messages and create chat rooms.",
              repo: "https://github.com/olekskz/messenger"
            }
          ].map((project, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 rounded shadow p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <video
                controls
                className="w-full h-auto rounded mb-2"
              >
                <source src={`/videos/${project.file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{project.description}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View the repository on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
