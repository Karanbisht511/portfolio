import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, BookOpen, User, Code, Briefcase, GraduationCap } from 'lucide-react';

// Previous Portfolio code remains the same until the Experience section...

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const NavLink = ({ section, icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
        ${activeSection === section 
          ? 'bg-blue-500 text-white' 
          : 'text-gray-300 hover:bg-white/10'
        }`}
    >
      {icon}
      <span className="capitalize">{section}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-64 bg-[#112240] p-6 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white mb-2">Karan Bisht</h1>
          <p className="text-blue-400">Full Stack Developer</p>
        </div>

        <div className="space-y-2">
          <NavLink section="about" icon={<User size={18} />} />
          <NavLink section="skills" icon={<Code size={18} />} />
          <NavLink section="experience" icon={<Briefcase size={18} />} />
          {/* <NavLink section="blog" icon={<BookOpen size={18} />} /> */}
          <NavLink section="education" icon={<GraduationCap size={18} />} />
        </div>

        <div className="mt-auto pt-6 space-y-4">
          {[
            { icon: <Mail size={18} />, text: 'karanbisht511@gmail.com', href: 'mailto:karanbisht511@gmail.com' },
            { icon: <Phone size={18} />, text: '+919410972126', href: 'tel:+919410972126' },
            { icon: <Linkedin size={18} />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/karan-bisht-496900192/' },
            { icon: <Github size={18} />, text: 'GitHub', href: 'https://github.com/Karanbisht511' }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target='_blank'
              className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
            >
              {contact.icon}
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-12">
        {/* About Section */}
        <section className={`space-y-8 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="prose prose-invert">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm Karan, a Full Stack Developer at IBM with a passion for building scalable web applications 
                and cloud solutions. I specialize in modern JavaScript frameworks and cloud technologies, 
                particularly AWS services.
              </p>
              <p className="text-lg leading-relaxed">
                With a background in Computer Science and hands-on experience in enterprise-level applications, 
                I enjoy tackling complex problems and creating efficient, user-friendly solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <h2 className="text-4xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend",
                skills: ['JavaScript', 'React.js', 'Redux', 'TypeScript', 'Webpack', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Material UI']
              },
              {
                title: "Backend",
                skills: ['Node.js', 'Express.js', 'TypeScript', 'Jest', 'Docker', 'WebSockets', 'RESTful APIs', 'Swagger']
              },
              {
                title: "Database",
                skills: ['MongoDB', 'AWS DynamoDB', 'SQL']
              },
              {
                title: "Cloud Services",
                skills: ['AWS', 'AWS Lambda', 'API Gateway', 'AWS CloudFormation', 'AWS CloudWatch']
              },
              {
                title: "Automation",
                skills: ['Cypress', 'Rest Assured']
              },
              {
                title: "Misc Tools",
                skills: ['C', 'C++', 'VS Code', 'Postman', 'SonarQube', 'Agility VersionOne', 'Veracode', 'GitLab', 'GitHub', 'REST API', 'API Integrations', 'CI/CD', 'JSON']
              }
            ].map((category, index) => (
              <div key={index} className="bg-[#112240] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <h2 className="text-4xl font-bold text-white mb-8">Work Experience</h2>
          <div className="bg-[#112240] rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Application Developer</h3>
              <p className="text-blue-400 mb-4">IBM, India | June 2022 - Present</p>
              <ul className="space-y-3">
                {[
                    "Worked for a major United States Airline to modernize the application by transforming it to cloud",
                    "Developed and deployed RESTful APIs using Node.js and TypeScript",
                    "Developed and implemented comprehensive unit tests using Jest, achieving 80% test coverage",
                    "Leveraged AWS SAM for efficient local development, testing, and deployment of API changes",
                    "Debug the code using AWS cloudwatch monitoring logs",
                    "Integrated AWS X-Ray for performance monitoring and optimization of the developed APIs",
                    "Integrated Sumo Logic for log management and real-time analysis of system data",
                    "Collaborated closely with cross-functional teams to deliver software on time",
                    "Collaborated with Subject matter experts and Product owners to analyze business requirements",
                    "Worked within an Agile/Scrum framework, utilizing VersionOne for project planning",
                    "Automated the Manual testcase using the Cypress"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Blog Section
        <section className={`${activeSection === 'blog' ? 'block' : 'hidden'}`}>
          <h2 className="text-4xl font-bold text-white mb-8">Blog</h2>
          <div className="bg-[#112240] rounded-lg p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <BookOpen size={48} className="text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                I'm currently working on some exciting technical articles. Stay tuned for in-depth tutorials, 
                tech insights, and development best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Cloud Architecture",
                  "React Development",
                  "AWS Services",
                  "TypeScript",
                  "Backend Development"
                ].map((topic, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Education Section */}
        <section className={`${activeSection === 'education' ? 'block' : 'hidden'}`}>
          <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
          <div className="bg-[#112240] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white">Bachelor of Technology in Computer Science</h3>
            <p className="text-blue-400 mb-4">DIT University, Dehradun | 2018 - 2022</p>
            <p className="text-gray-400">
              Focused on core computer science concepts, data structures, algorithms, and software engineering principles.
              Participated in various coding competitions and technical workshops.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
