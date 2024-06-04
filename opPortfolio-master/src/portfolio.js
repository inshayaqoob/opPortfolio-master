/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "INSHA",
  logo_name: "INSHA YAQOOB",
  nickname: "Insho",
  full_name: "Insha Yaqoob",
  subTitle: "Passionate Full Stack Developer and AI Enthusiast with expertise in React.js, Python (Django, Flask), and Machine Learning. Always eager to innovate and learn.",

  resumeLink:
    "https://drive.google.com/file/d/1M846GlgB6k4G5dCeY0jgZU4gSYJbg3t4/view?usp=sharing",
  mail: "mailto:inshayaqoob513@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/inshayaqoob",
  linkedin: "https://www.linkedin.com/in/insha-yaqoob-9a8885247/",
  gmail: "inshayaqoob513@gmail.com",
  gitlab: " ",
  facebook: " ",
  instagram: "https://www.instagram.com/inshajutt2001/?hl=en",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Backend development using Django and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience hosting and managing web apps on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
      ],
    },
    {
      title: "AI and Ml",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with AI and machine learning projects",
        "⚡ Certifications by IBM and Coursera",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Univeristy of Agriculture Faislabad",
      subtitle: "Bachelor of Science, Software Engineering",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied core software engineering courses, including Advanced Software Development Concepts.",
        // "⚡ Specialized in cloud computing, focusing on Cloud Architecture and Serverless Computing.",
        // "⚡ Worked on practical projects in courses such as Mobile Computing and Web Technologies.",
        "⚡ Developed a Hospital Management System as a project, improving operational efficiency by 10%.",
        "⚡ Designed and implemented an Online Shopping System, enhancing user experience and security.",
        "⚡ Created an Android Food App with a user-friendly interface for ordering food items.",
        "⚡ Received HEC Scholarship for academic excellence."
      ],
      website_link: "https://web.uaf.edu.pk/",
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning with Python",
      logo_path: "image.png",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/W4LVE8MZQEK6",
      alt_name: "IBM",
      color_code: "#ffc475",
    },
    {
      title: "Tools for Data Science",
      logo_path: "image.png",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "IBM",
      color_code: "#ffc475",
    },
    {
      title: "Introduction to Generative AI",
      logo_path: "Google Cloud.png",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "Google Cloud",
      color_code: "#ffc475",
    },
    {
      title: "StableCode International Hackathon Winner",
      subtitle: "First Place",
      logo_path: "lablab.jpeg",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "StableCode",
      color_code: "#fffbf3",
    },
    {
      title: "Autonomous Agents International Hackathon Finalist",
      subtitle: "Top 5th",
      logo_path: "lablab.jpeg",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "Autonomous Agents",
      color_code: "#fffbf3",
    },
    {
      title: "Meta Hacker Cup",
      subtitle: "2023",
      logo_path: "meta hacker.png",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "Meta",
      color_code: "#fffbf3",
    },
    {
      title: "Eleven Labs AI Hackathon",
      subtitle: "07/2023 – 08/2023",
      logo_path: "lablab.jpeg",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "Eleven Labs",
      color_code: "#fffbf3",
    },
    {
      title: "AI Agents Hackathon",
      subtitle: "08/2023 – 08/2023",
      logo_path: "lablab.jpeg",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "AI Agents",
      color_code: "#fffbf3",
    },
    {
      title: "Fine-Tuning 24-hours Challenge",
      subtitle: "09/2023 – 09/2023",
      logo_path: "lablab.jpeg",
      // certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H5H23VF9UUN6",
      alt_name: "AI Agents",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Corporate and Internships",
  description:
    "I've completed several internships and worked on multiple projects. I am actively looking for more opportunities to enhance my skills and contribute to meaningful projects. I also enjoy organizing workshops to share my knowledge with others.",
  header_image_path: "experince.png",
  sections: [
    {
      title: "Corporate Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "Vaival Technologies",
          company_url: " ",
          logo_path: "vival.jpeg",
          duration: "August 2023",
          location: " ",
          description:
            "Developed MVC E-commerce application in ASP.NET Core for building concepts in ASP.NET Core. Assisted in different front-end features needed to improve and recommendations by the client.",
          color: "#2962FF",
          technical_skills: "ASP.NET Core, JavaScript, HTML, CSS, JavaScript, JQuery",
        },
        {
          title: "JavaScript Developer",
          company: "Antity Technologies",
          company_url: " ",
          logo_path: "entity.png",
          duration: "July 2022 – September 2022",
          location: " ",
          description:
            "Learned core concepts of development and new technologies. Assisted in different projects related to front-end development.",
          color: "#56A4D3",
          technical_skills: "HTML, CSS, JavaScript",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-end Developer",
          company: "MicroStarX Software House",
          company_url: " ",
          logo_path: "micro.jpg",
          duration: "August 2022 – January 2023",
          location: "Faisalabad, Pakistan",
          description:
            "Built responsive client websites using HTML, CSS, and JavaScript (Bootstrap & jQuery). Implemented React.js components to enhance user experience, including dynamic data visualization, interactive forms, and real-time updates, which improved user engagement by 30%.",
          color: "#2962FF",
        },
        {
          title: "Django Developer",
          company: "MicroStarX Software House",
          company_url: " ",
          logo_path: "micro.jpg",
          duration: "March 2024 – May 2024",
          location: "Faisalabad, Pakistan",
          description:
            "Developed and maintained backend functionalities for three client projects using Python and Django. Built a user authentication system using the Django REST framework, ensuring secure login for a client. Utilized Git for version control, enhancing collaboration within a four-member development team.",
          color: "#2962FF",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "CodSoft",
          company_url: " ",
          logo_path: "codsoft.jpg",
          duration: "September 2023 - October 2023",
          location: "Remote",
          description:
            "Completed diverse AI tasks, including building a chatbot, implementing a Tic-Tac-Toe AI, image captioning, recommendation systems, and face detection/recognition. Showcased skills in NLP, game theory, computer vision, and advanced AI techniques.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "Bharat Intern",
          company_url: " ",
          logo_path: "bharat.jpg",
          duration: "October 2023 - November 2023",
          location: "Remote",
          description:
            "Interned in data science, focusing on stock prediction using LSTM for financial analysis and Titanic classification for survival prediction. Implemented a digit recognition system with the MNIST dataset, demonstrating machine learning and image recognition skills.",
          color: "#56A4D3",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "log.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
  //   link: "https://medium.com/@hrishipatel99",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      name: "AI-SteerEDU",
      url: "",
      description:
        "AI-SteerEDU aims to revolutionize the world of online Platforms by giving the opportunity to give feedback from individuals. The learners can also ask questions in different languages to get responses in the same Language.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
      ],
    },
    {
      name: "EmojiIntrospector - embeddings 2 emoji streams",
      url: "",
      description:
        "Utilized the EnCodec model to encode audio files into vector representations, processed these text embeddings using the 'emojiintrospector' tool to generate emoji sequences that represent the audio.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "FutureSync - Transforming Business Dynamics",
      url: "https://github.com/inshayaqoob/Autonomous",
      description:
        "FutureSync, a groundbreaking innovation poised to reshape the very foundations of business operations.",
      languages: [
        {
          name: "BABYAGI",
          iconifyClass: "logos-baby-agile",
        },
        {
          name: "AutoGpt",
          iconifyClass: "logos-autogpt",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
      ],
    },
    {
      name: "Research Codey AI",
      url: "https://github.com/inshayaqoob/StableCodes",
      description:
        "Research Codey is a one-place app where you can get insights into modern research papers and code generation facility.",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Beautiful Soup",
          iconifyClass: "logos-beautifulsoup",
        },
        {
          name: "python-docx",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "MemoriesRevive Heartfelt Talks Everlasting Bonds",
      url: "",
      description:
        "MemoriesRevive is a groundbreaking platform that harnesses the power of cutting-edge voice cloning technology from Elevenlab and conversational AI prowess from Langchain.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
      ],
    },
    {
      name: "MedAgent",
      url: "https://github.com/inshayaqoob/MedAgent",
      description:
        "MedAgent is an AI web app that helps medics to check data on clinic histories and databases, reducing the time needed for consulting.",
      languages: [
        {
          name: "Streamlit",
          iconifyClass: "simple-icons:streamlit",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
        {
          name: "Faiss",
          iconifyClass: "simple-icons:faiss",
        },
        {
          name: "OpenAI",
          iconifyClass: "simple-icons:openai",
        },
      ],
    },
    {
      name: "Character-Builder",
      url: "https://github.com/inshayaqoob/Character-Builder",
      description:
        "Character-Builder is a personal growth application designed and developed using Flutter.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "simple-icons:flutter",
        },
      ],
    },
    {
      name: "E Commerce (Online Shopping System)",
      url: "https://github.com/inshayaqoob/Online_Shopping_System",
      description:
        "Developed a website using HTML, CSS, JavaScript, and a little bit of C#.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "C#",
          iconifyClass: "logos-csharp",
        },
      ],
    },
    {
      name: "Hospital Management Website",
      url: "https://github.com/inshayaqoob/Hospital_Management_System",
      description:
        "Developed using HTML, CSS, JavaScript, jQuery, and Bootstrap. Implemented  interfaces for easy navigation, patient record management, and appointment. Scheduling features using jQuery plugins for real-time updates and counters.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "jQuery",
          iconifyClass: "logos-jquery",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      name: "Android Food App",
      url: "",
     
      description:
        "Developed using Java within Android Studio (version 4.1). Designed an intuitive UI with animations for browsing and ordering food items.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Android Studio",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      name: "Automatic Documents Conversion  and Template Generation",
      url: "",
      description:
        "Developed a web-based application using Flask to automate the creation of research paper templates in various formats (IEEE, APA, MLA, and MDPI).",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Beautiful Soup",
          iconifyClass: "logos-beautifulsoup",
        },
        {
          name: "python-docx",
          iconifyClass: "logos-python",
        },
      ],
    },
    
  ],
};




export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
