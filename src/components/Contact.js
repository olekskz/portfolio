
export default function Contact() {
  return (
    <section id="contact" className="py-10 px-4 bg-white dark:bg-gray-900 dark:text-white text-black transition-all duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Feel free to reach out via email: <a href="mailto:oleksiikz@gmail.com" className="text-blue-500 underline">oleksiikz@gmail.com</a></p>
        <p className="mt-4">You can also find me on:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com/oleks_kuz_/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6 w-6"/>
          </a>
          <a href="https://www.linkedin.com/in/oleksii-kuziuk-72b067361/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png" alt="LinkedIn" className="h-6 w-6"/>
          </a>
          <a href="https://github.com/olekskz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </section>
  );
}
