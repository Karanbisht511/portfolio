import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, BookOpen, User, Code, Briefcase, GraduationCap, Menu, X,FolderGit } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ section, icon, onClick }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        onClick?.();
      }}
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

  const contactLinks = [
    { icon: <Mail size={18} />, text: 'karanbisht511@gmail.com', href: 'mailto:karanbisht511@gmail.com' },
    { icon: <Phone size={18} />, text: '+919410972126', href: 'tel:+919410972126' },
    { icon: <Linkedin size={18} />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/karan-bisht-496900192/' },
    { icon: <Github size={18} />, text: 'GitHub', href: 'https://github.com/Karanbisht511' }
  ];

  const sections = [
    { id: 'about', icon: <User size={18} />, title: 'About' },
    { id: 'skills', icon: <Code size={18} />, title: 'Skills' },
    { id: 'experience', icon: <Briefcase size={18} />, title: 'Experience' },
    { id: 'projects', icon: <FolderGit size={18} />, title: 'Projects' },
    { id: 'education', icon: <GraduationCap size={18} />, title: 'Education' }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f]">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-[#0a192f] rounded-lg md:hidden text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Header - Always visible on mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#0a192f] p-4 z-40">
        <h1 className="text-2xl font-bold text-white">Karan Bisht</h1>
        <p className="text-blue-400">Full Stack Developer</p>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`fixed top-0 left-0 h-screen bg-[#0a192f] p-6 flex flex-col transform transition-transform duration-300 z-40
        md:w-64 md:translate-x-0 w-64 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-12 hidden md:block">
          <h1 className="text-2xl font-bold text-white mb-2">Karan Bisht</h1>
          <p className="text-blue-400">Full Stack Developer</p>
        </div>

        <div className="space-y-2">
          {sections.map((section) => (
            <NavLink 
              key={section.id}
              section={section.id} 
              icon={section.icon}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>

        <div className="mt-auto pt-6 space-y-4">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors text-gray-300"
            >
              {contact.icon}
              <span className="truncate">{contact.text}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen bg-[#0a192f] flex items-center justify-center p-0">
        <div className="w-full max-w-4xl text-gray-300 p-4 md:p-12 mt-16 md:mt-0">
          {/* Mobile Landing Section */}
          {!activeSection && (
            <div className="md:hidden space-y-8 animate-fadeIn">
              <div className="text-center space-y-6">
                <p className="text-blue-400 text-lg">Welcome to my portfolio</p>
                <div className="grid grid-cols-2 gap-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className="bg-[#112240] p-6 rounded-lg hover:bg-[#1a2f5c] transition-colors"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {section.icon}
                        <span className="text-white font-medium">{section.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-center gap-4 pt-6">
                  {contactLinks.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      {contact.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          <section className={`space-y-8 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="prose prose-invert">
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300">
                  Hello! I'm Karan, a Full Stack Developer at IBM with a passion for building scalable web applications 
                  and cloud solutions. I specialize in modern JavaScript frameworks and cloud technologies, 
                  particularly AWS services.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  With a background in Computer Science and hands-on experience in enterprise-level applications, 
                  I enjoy tackling complex problems and creating efficient, user-friendly solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                <div key={index} className="bg-[#112240] rounded-lg p-4 md:p-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Work Experience</h2>
            <div className="bg-[#112240] rounded-lg p-4 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Application Developer</h3>
                <p className="text-blue-400 mb-4">IBM, India | June 2022 - Present</p>
                <ul className="space-y-3 text-sm md:text-base">
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

   {/* Projects Section */}
   <section className={`${activeSection === 'projects' ? 'block' : 'hidden'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h2>
            <div className="space-y-6">
              {/* Chat Application */}
              <div className="bg-[#112240] rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Chat Application</h3>
                  <a 
                    href="https://github.com/Karanbisht511/chat-application" 
                    target="_blank" 
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <Github size={20} />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    'React.js', 'Node.js', 'Express.js', 'Socket.io', 
                    'TypeScript', 'MongoDB', 'Tailwind CSS'
                  ].map((tech, index) => (
                    <span key={index} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Developed a user-friendly and responsive interface using React.js and styled with Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Implemented real-time messaging capabilities using Socket.io</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Supports both one-to-one and group chats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Includes functionalities such as file sharing, group creation, member management (adding/deleting), chat history management, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Implemented Authentication using JWT</span>
                  </li>
                </ul>
              </div>

              {/* Full Stack Assignment */}
              <div className="bg-[#112240] rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Assignment - IBM FSD Training</h3>
                  <a 
                    href="https://github.com/Karanbisht511/node-backend" 
                    target="_blank" 
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <Github size={20} />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    'React.js', 'Node.js', 'Express.js', 'MongoDB'
                  ].map((tech, index) => (
                    <span key={index} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300">
                  As a part of IBM full stack training, created a login page and dashboard for user management and authentication.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className={`${activeSection === 'education' ? 'block' : 'hidden'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>
            <div className="bg-[#112240] rounded-lg p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white">Bachelor of Technology in Computer Science</h3>
              <p className="text-blue-400 mb-4">DIT University, Dehradun | 2018 - 2022</p>
              <p className="text-gray-400 text-sm md:text-base">
                Focused on core computer science concepts, data structures, algorithms, and software engineering principles.
                Participated in various coding competitions and technical workshops.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
