export default function SkillsPage() {
  return (
    <div className="container m-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Foundation Skills</h3>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-bold">HTML and CSS:</span> I have a strong foundation in HTML and CSS and can use them to build semantic and accessible web pages.
          </li>
          <li>
            <span className="font-bold">JavaScript:</span> I'm fluent in JavaScript, and I use it extensively in my frontend work. I'm comfortable with modern ES6 syntax and have experience with functional programming principles.
          </li>
          <li>
            <span className="font-bold">Git:</span> I'm comfortable with version control using Git and have experience with GitHub and GitLab.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Frameworks and Libraries</h3>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-bold">Vue.js:</span> I have experience building single-page applications and dynamic user interfaces using the Vue.js framework. I've worked with Vue CLI, Vuex, Vue Router, and other key tools in the Vue ecosystem.
          </li>
          <li>
            <span className="font-bold">React:</span> I'm proficient in React, and I've used it to build complex web applications with reusable components and state management. I'm also comfortable with tools like React Router, and Next.js.
          </li>
          <li>
            <span className="font-bold">Svelte:</span> I have experience working with Svelte, an innovative and efficient frontend framework that compiles your code into highly optimized JavaScript. I've used it to build fast and responsive user interfaces, and I'm excited about its potential for future projects. I am also familiar with building full-stack applications with SvelteKit.
          </li>
          <li>
            <span className="font-bold">UI Libraries:</span> I'm familiar with a variety of UI libraries and design systems, including Tailwind CSS, Bootstrap, Material-UI, and Semantic UI. I know how to use these tools to build beautiful and responsive user interfaces quickly and efficiently.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Backend Services</h3>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-bold">Firebase:</span> I've worked with Firebase to build serverless applications with authentication, real-time data storage, and cloud functions. I'm comfortable with Firestore, Firebase Authentication, and Firebase Cloud Functions.
          </li>
          <li>
            <span className="font-bold">Supabase:</span> I'm experienced with Supabase, an open-source Firebase alternative. I've used it to build applications with real-time data, authentication, and storage. I'm comfortable with Supabase Auth, Realtime, and Storage.
          </li>
          <li>
            <span className="font-bold">Node.js and Express:</span> I have experience with Node.js and the Express framework for building robust and scalable backend services. I'm comfortable with RESTful API design, middleware, and database integration.
          </li>
        </ul>
      </div>
    </div>
  );
}
