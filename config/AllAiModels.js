const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// certification links generation
export const AiCertifications = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'suggest list of platform that give certificate and course for free on "water treatement",include platform:name of platform.url:link of that platform.certificate:certificate name.description:short description.cost:free or paid.in json formate',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "platform": "Coursera",\n    "url": "https://www.coursera.org/",\n    "certificate": "Water Treatment Technologies and Processes",\n    "description": "Learn about water treatment technologies, processes, and their impact on public health and environmental sustainability.",\n    "cost": "Free (audit) or Paid (certificate)"\n  },\n  {\n    "platform": "edX",\n    "url": "https://www.edx.org/",\n    "certificate": "Fundamentals of Water Treatment",\n    "description": "Explore the fundamental principles of water treatment, including filtration, disinfection, and chemical treatment.",\n    "cost": "Free (audit) or Paid (certificate)"\n  },\n  {\n    "platform": "Udemy",\n    "url": "https://www.udemy.com/",\n    "certificate": "Water Treatment for Beginners",\n    "description": "An introductory course covering basic water treatment concepts and techniques.",\n    "cost": "Free (limited selection) or Paid"\n  },\n  {\n    "platform": "Alison",\n    "url": "https://alison.com/",\n    "certificate": "Water Treatment and Management",\n    "description": "Learn about the different stages of water treatment and how to manage water resources effectively.",\n    "cost": "Free (certificate available for a fee)"\n  },\n  {\n    "platform": "Khan Academy",\n    "url": "https://www.khanacademy.org/",\n    "certificate": "Water Treatment and Sanitation",\n    "description": "Explore the science behind water treatment and sanitation practices.",\n    "cost": "Free"\n  },\n  {\n    "platform": "OpenLearn",\n    "url": "https://www.open.edu/openlearn/",\n    "certificate": "Water and Wastewater Treatment",\n    "description": "A comprehensive course covering water treatment, wastewater treatment, and environmental impact.",\n    "cost": "Free"\n  },\n  {\n    "platform": "FutureLearn",\n    "url": "https://www.futurelearn.com/",\n    "certificate": "Water Quality and Treatment",\n    "description": "Learn about water quality monitoring, treatment methods, and the impact of pollution.",\n    "cost": "Free (audit) or Paid (certificate)"\n  },\n  {\n    "platform": "MIT OpenCourseware",\n    "url": "https://ocw.mit.edu/",\n    "certificate": "Environmental Engineering: Water Treatment",\n    "description": "Explore the principles and practices of water treatment from a technical perspective.",\n    "cost": "Free"\n  }\n]\n```\n\n**Note:**\n\n* This list is not exhaustive, and there may be other platforms offering free water treatment courses.\n* Course availability and pricing may vary depending on the specific platform and course.\n* Always check the platform\'s website for the most up-to-date information on course content, pricing, and certificate details.\n* The description provided is a short summary, and the actual course content may be more extensive. \n',
        },
      ],
    },
  ],
});

// Other CommanQuestion
export const AiOtherCommanQuestion = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'as fresher i am applying for post "web developer" ,with job description "Work closely with the various internal teams to publish high-quality, informative, and engaging website content that adheres to brand voice and style guidelines\nEdit and revise existing website content for accuracy, clarity, and best practices.\nManage the quality control aspect for all web properties.\nUpload and format content using a variety of CMS platforms, with a primary focus on Drupal/WordPress.\nMaintain a keen eye for detail to ensure content is free of errors and adheres to visual style guides.\nStay up-to-date on current web content trends and best practices.\nWork with developers to assist with implementing various search and performance website improvements."\nhow to answer this question "What is your greatest achievement?".include question: that i provide. Answer: answer the question. method: method to answer the question.also add resourse and tips.in json formate.\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "question": "What is your greatest achievement?",\n  "answer": "As a recent graduate, my greatest achievement has been [mention a specific project or accomplishment from your studies] which [explain the impact of your achievement, highlighting relevant skills from the job description]. This experience demonstrated my [list relevant skills from the job description, like attention to detail, CMS platform knowledge, or web content trends]. I am confident that these skills, combined with my passion for web development, will enable me to contribute significantly to your team.",\n  "method": "The STAR method is highly effective for answering this question. It involves outlining the Situation, Task, Action, and Result of your achievement.",\n  "resources": [\n    "https://www.indeed.com/career-advice/interviewing/star-method",\n    "https://www.thebalancecareers.com/greatest-achievement-interview-question-2061681"\n  ],\n  "tips": [\n    "Focus on an achievement relevant to the job description.",\n    "Quantify your achievement whenever possible.",\n    "Show your passion for web development.",\n    "Be enthusiastic and confident in your response."\n  ]\n}\n```\n\n**Explanation of the Answer and Method:**\n\n* **Answer:** The answer focuses on a relevant achievement from your studies, showcasing skills directly applicable to the job description. It highlights the impact of your achievement and demonstrates your passion for web development.\n* **Method:** The STAR method provides a structured approach to answering behavioral interview questions. It helps you explain your achievement in a clear and concise manner.\n* **Resources:** The provided links offer valuable resources and further guidance on the STAR method and answering interview questions.\n* **Tips:** The tips provide additional guidance for crafting a strong and impactful response, ensuring you effectively showcase your skills and passion.\n\n**Example:**\n\nLet\'s say you built a website for a local charity as part of your studies. You could modify the answer like this:\n\n"My greatest achievement was building a website for a local charity as part of my final year project. I used WordPress to create a user-friendly website that showcased their services and allowed them to accept online donations. This experience demonstrated my ability to work independently, meet deadlines, and create visually appealing and engaging content for a CMS platform. I am passionate about using my skills to make a positive impact on the world, and I am confident that I can contribute to your team\'s success." \n',
        },
      ],
    },
  ],
});

// Job Rolls generation department
export const JobRolls = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate which type of job roll are available in branch computer engineering,it include category,role in json formate",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "branch": "Computer Engineering",\n  "jobRoles": [\n    {\n      "category": "Software Development",\n      "roles": [\n        "Software Engineer",\n        "Web Developer",\n        "Mobile App Developer",\n        "Data Scientist",\n        "Machine Learning Engineer",\n        "AI Engineer",\n        "Game Developer",\n        "DevOps Engineer",\n        "Cloud Engineer",\n        "Embedded Software Engineer",\n        "Full Stack Developer",\n        "Frontend Developer",\n        "Backend Developer",\n        "Software Architect",\n        "Security Engineer"\n      ]\n    },\n    {\n      "category": "Hardware Engineering",\n      "roles": [\n        "Hardware Engineer",\n        "Computer Architect",\n        "Embedded Systems Engineer",\n        "VLSI Designer",\n        "Robotics Engineer",\n        "Network Engineer",\n        "Computer Network Architect",\n        "Systems Analyst",\n        "Technical Support Specialist"\n      ]\n    },\n    {\n      "category": "Data Science & Analytics",\n      "roles": [\n        "Data Analyst",\n        "Data Scientist",\n        "Business Intelligence Analyst",\n        "Database Administrator",\n        "Data Engineer",\n        "Machine Learning Engineer"\n      ]\n    },\n    {\n      "category": "Networking & Cybersecurity",\n      "roles": [\n        "Network Engineer",\n        "Cybersecurity Analyst",\n        "Security Engineer",\n        "Penetration Tester",\n        "Information Security Manager",\n        "Cloud Security Engineer"\n      ]\n    },\n    {\n      "category": "Research & Development",\n      "roles": [\n        "Research Scientist",\n        "Research Engineer",\n        "Algorithm Developer",\n        "Robotics Researcher"\n      ]\n    },\n    {\n      "category": "Management & Leadership",\n      "roles": [\n        "Project Manager",\n        "Product Manager",\n        "Engineering Manager",\n        "IT Manager",\n        "Director of Engineering"\n      ]\n    },\n    {\n      "category": "Testing & Quality Assurance",\n      "roles": [\n        "Software Tester",\n        "Quality Assurance Engineer",\n        "Test Automation Engineer"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// generate cold mail
export const AiColdMail = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'valueiadd:"responsive web development,seo friendly site,growth up to 10%",achivement:"IBM certified web developer,3 live website with 1000 per day visite"skills:"php,react,nextjs,javascript,tailwind css". write a profesional and effective cold mail as fresher for job post:"web developer",keep it short as 5-6 line,provide value,make it trasactional.also tell them how can i save time,increase revenue,save cost.inclue subject:write subject line that catch in eye and it should be 30-60 character.greating:give it personal toach.body:it should be 5-6 line and 60-120 words.cta:request for their time.end:end with my personal details.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "subject": "Boost Your Website Traffic by 10% - Web Dev Fresher",\n  "greeting": "Dear [Hiring Manager Name],",\n  "body": "As a recent IBM-certified web developer with experience building three live websites averaging 1000 daily visits, I\'m confident I can significantly contribute to [Company Name]\'s success.  My skills in PHP, React, Next.js, JavaScript, and Tailwind CSS allow me to create responsive, SEO-friendly websites that drive growth.  I can help you save time through efficient development, increase revenue with improved user engagement and SEO, and save costs by optimizing your web presence. My portfolio showcases my ability to deliver high-quality results. ",\n  "cta": "I\'d appreciate the opportunity to discuss how my skills can benefit your team.  Would you be available for a brief call next week?",\n  "end": "Sincerely,\\n[Your Name]\\n[Your Phone Number]\\n[Your Email Address]\\n[Your LinkedIn Profile URL (Optional)]"\n}\n```\n',
        },
      ],
    },
  ],
});

// generate cover letter
export const AiCoverLetter = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'job role:"web developer".qualifications:"btech in computer engineering".skills:"javascript,react,nextjs,mongodb,mysql".experience:"fresher".job description:"We are looking for an experienced Azure Data Engineer to join our data engineering team. The ideal candidate will have a strong foundation in data engineering, with expertise in SQL, data modeling, and Azure platforms. You will play a key role in building, maintaining, and enhancing data models and pipelines, with a focus on supporting daily data loads and resolving technical challenges.". write a tailored cover letter, depending on job role,qualifications, skills, and how they can benefit the company\'s objectives.also add tips and tricks.in json formate',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "cover_letter": {\n    "salutation": "Dear Hiring Manager,",\n\n    "introduction": "I am writing to express my keen interest in the Web Developer position advertised on [Platform where you saw the job posting]. With my B.Tech in Computer Engineering and strong proficiency in Javascript, React, Next.js, MongoDB, and MySQL, I am confident I can contribute significantly to your team\'s success.",\n\n    "skills_and_experience": "During my academic journey, I have developed a solid understanding of web development principles and gained practical experience through various projects. My expertise in Javascript frameworks like React and Next.js, coupled with my knowledge of database management systems like MongoDB and MySQL, allows me to build efficient and scalable web applications. I am a highly motivated and quick learner, eager to apply my skills to real-world projects and contribute to the growth of your company.",\n\n    "benefits_to_company": "I am particularly drawn to [Specific aspect of the company or job description that excites you]. I believe my ability to learn and adapt quickly, coupled with my passion for building user-centric and robust web applications, would be a valuable asset to your team. I am confident I can effectively contribute to [Specific company objective] and contribute to the overall success of your company.",\n\n    "closing": "Thank you for your time and consideration. I am eager to discuss how my skills and experience can benefit your team. Please find my resume attached for your review. I am available for an interview at your earliest convenience.",\n\n    "signature": "Sincerely,\\n[Your Name]"\n  },\n\n  "tips_and_tricks": [\n    "Customize your cover letter for each job application.",\n    "Highlight specific skills and experiences that match the job description.",\n    "Show your enthusiasm for the company and the position.",\n    "Proofread carefully for any errors.",\n    "Keep your cover letter concise and to the point (no more than one page).",\n    "Tailor the benefits section to specifically address the company\'s objectives.",\n    "Use keywords from the job description throughout the letter.",\n    "Focus on your transferable skills, even if you are a fresher."\n  ]\n}\n```\n\n**Explanation:**\n\n* **cover_letter:** This object holds the structure of your cover letter. Each field represents a section of the letter. \n* **salutation:** Start with a formal salutation, addressing the hiring manager directly if possible. \n* **introduction:** Briefly introduce yourself and express your interest in the position. \n* **skills_and_experience:**  Highlight your relevant skills and experiences, specifically mentioning your proficiency in Javascript frameworks (React, Next.js) and database management systems (MongoDB, MySQL).  Since you\'re a fresher, focus on your academic projects and their relevance to web development.\n* **benefits_to_company:** This is the crucial part. Research the company and their objectives. Explain how your skills and passion align with their goals.\n* **closing:** End with a thank you and express your willingness to discuss your qualifications further.\n* **signature:** Include your name. \n\n**Tips and Tricks:**\n\n* The provided tips and tricks are helpful guidelines to ensure your cover letter is effective and stands out. \n*  Always personalize your cover letter for each job application.  This shows genuine interest and makes your application more impactful.\n\nRemember, this is just a template. Customize it with your specific details and experience to create a compelling cover letter.\n',
        },
      ],
    },
  ],
});

// generate course contents
export const AiCourseContent = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "category:programming,topic:python,level:basic,noofchapater:5.generate a course tutorial on the basic of give data,include coursename:name of course.description:short description.chapater:name of chapater.about:about the chapater.duration:time required to complete.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseName": "Python Basics for Data Handling",\n  "description": "A beginner-friendly introduction to fundamental Python concepts essential for working with data. This course covers data types, data structures, and basic data manipulation techniques.",\n  "chapters": [\n    {\n      "chapterName": "Introduction to Python and Setting Up Your Environment",\n      "about": "This chapter introduces Python, its applications in data handling, and guides you through setting up your development environment (installing Python, choosing an IDE/text editor). We\'ll also cover basic syntax and program execution.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapterName": "Data Types and Variables",\n      "about": "Learn about different data types in Python (integers, floats, strings, booleans) and how to declare and use variables. We\'ll explore type conversion and basic arithmetic operations.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapterName": "Data Structures: Lists and Tuples",\n      "about": "This chapter covers lists and tuples – fundamental data structures for storing collections of data. You\'ll learn how to create, access, manipulate, and iterate through lists and tuples.",\n      "duration": "25 minutes"\n    },\n    {\n      "chapterName": "Data Structures: Dictionaries",\n      "about": "Dictionaries are introduced as key-value data structures. This chapter explains how to create, access, modify, and iterate through dictionaries, a crucial data structure for representing structured data.",\n      "duration": "25 minutes"\n    },\n    {\n      "chapterName": "Basic Data Manipulation and Input/Output",\n      "about": "This chapter covers basic data manipulation techniques including string manipulation (slicing, concatenation), working with lists and dictionaries (sorting, searching, filtering), and performing input/output operations using files.",\n      "duration": "25 minutes"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// generate chapter content
export const AiChapterContent = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'explain the concept in details on topic:"Advanced Digital Marketing Strategies",chapter:"Advanced SEO Techniques & Algorithm Updates".include title:title of content.description:detailed descritpion.code:code example (<precode> formate ) if applicable.in json formate',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "title": "Advanced SEO Techniques & Algorithm Updates: Mastering the Evolving Search Landscape",\n  "description": "This chapter delves into sophisticated SEO strategies and the impact of recent algorithm updates. We\'ll explore techniques beyond the basics, focusing on how to adapt to Google\'s ever-changing search engine results pages (SERPs) and maintain a competitive edge.  This includes understanding core web vitals, employing advanced schema markup, leveraging AI-powered SEO tools, and navigating the complexities of link building in a post-Penguin world.  We\'ll also examine the implications of specific algorithm updates like BERT, MUM, and the ongoing focus on user experience and E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness).",\n  "content": [\n    {\n      "heading": "Understanding Core Web Vitals and Page Experience",\n      "text": "Core Web Vitals are a set of metrics that Google uses to assess the user experience of a website.  These metrics include Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID).  Optimizing for these metrics is crucial for improving rankings and ensuring a positive user experience.  This involves optimizing images, minimizing render-blocking resources, and ensuring a stable page layout.  Tools like PageSpeed Insights and Chrome DevTools can be used to diagnose and address performance issues."\n    },\n    {\n      "heading": "Advanced Schema Markup for Rich Results",\n      "text": "Schema markup helps search engines understand the content on your website, leading to rich snippets in SERPs.  While basic schema is helpful, advanced techniques involve implementing more complex schema types, such as those for products, reviews, events, and articles.  This can increase click-through rates and improve visibility.  Using tools like Google\'s Rich Results Test helps validate the implementation."\n    },\n    {\n      "heading": "Leveraging AI-Powered SEO Tools",\n      "text": "AI-powered SEO tools are becoming increasingly sophisticated, offering advanced features like keyword research, content optimization, competitor analysis, and technical SEO audits.  These tools can help identify opportunities for improvement and automate repetitive tasks.  Examples include SEMrush, Ahrefs, and SurferSEO.  However, it\'s crucial to understand the limitations of these tools and use them strategically alongside human expertise."\n    },\n    {\n      "heading": "Modern Link Building Strategies: Beyond Quantity",\n      "text": "Link building remains a crucial aspect of SEO, but the focus has shifted from quantity to quality.  Advanced techniques involve building relationships with relevant websites and earning high-quality backlinks naturally.  This includes guest blogging on reputable websites, creating high-value content that attracts backlinks organically, and participating in relevant online communities.  Strategies that focus on manipulation are penalized heavily by Google\'s algorithms."\n    },\n    {\n      "heading": "Navigating Algorithm Updates: BERT, MUM, and Beyond",\n      "text": "Google\'s algorithm updates are frequent and significant.  Understanding the implications of updates like BERT (Bidirectional Encoder Representations from Transformers), which improves search understanding of natural language queries, and MUM (Multitask Unified Model), a more advanced model, is essential. Staying up-to-date on Google\'s Search Central blog and industry news is critical to adapting to these changes and maintaining high rankings.  This involves focusing on creating high-quality, informative, and engaging content that satisfies user intent."\n    },\n    {\n      "heading": "E-E-A-T and the Importance of Trust and Authority",\n      "text": "Google increasingly emphasizes E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness). This means focusing on building trust with your audience and demonstrating your expertise in your field.  This can involve showcasing credentials, providing accurate and up-to-date information, and building a strong online reputation.  This is particularly important for YMYL (Your Money or Your Life) websites that provide information related to health, finance, or other sensitive topics."\n    }\n  ],\n  "code": "<pre><code>\\n// This is a placeholder.  No specific code is required to illustrate the concepts in this chapter.\\n//  The techniques described involve using SEO tools, implementing schema markup, and analyzing website data,\\n//  which are primarily managed through interfaces and not through direct coding.\\n</code></pre>"\n}\n```\n',
        },
      ],
    },
  ],
});

export const AiChapterExam = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 10 mcq for exam on chapater "introducation to python" of course "basic python programming",include question,answer,options,explaination.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "What is Python primarily known for?",\n    "options": ["Its speed", "Its complexity", "Its readability and ease of use", "Its limited libraries"],\n    "answer": "Its readability and ease of use",\n    "explanation": "Python is designed with readability in mind, making it easier to learn and use compared to many other programming languages."\n  },\n  {\n    "question": "Which of the following is NOT a valid Python variable name?",\n    "options": ["my_variable", "1st_variable", "_private_var", "myVariable"],\n    "answer": "1st_variable",\n    "explanation": "Variable names cannot start with a number in Python."\n  },\n  {\n    "question": "What does the \'#\' symbol denote in Python?",\n    "options": ["A comment", "A string literal", "A mathematical operator", "A function definition"],\n    "answer": "A comment",\n    "explanation": "The \'#\' symbol is used to indicate comments in Python code; these comments are ignored by the interpreter."\n  },\n  {\n    "question": "What data type is produced by the expression `10 / 3` in Python 3?",\n    "options": ["Integer", "Float", "String", "Boolean"],\n    "answer": "Float",\n    "explanation": "In Python 3, the `/` operator performs floating-point division, always resulting in a float even if the operands are integers."\n  },\n  {\n    "question": "What is the output of `print(type(10))`?",\n    "options": ["<class \'int\'>", "<class \'float\'>", "<class \'str\'>", "<class \'bool\'>"],\n    "answer": "<class \'int\'>",\n    "explanation": "`type()` is a built-in function that returns the data type of an object. 10 is an integer."\n  },\n  {\n    "question": "How do you print the text \'Hello, world!\' to the console in Python?",\n    "options": ["`print(\'Hello, world!\')`", "`print(Hello, world!)`", "`display(\'Hello, world!\')`", "`echo(\'Hello, world!\')`"],\n    "answer": "`print(\'Hello, world!\')`",\n    "explanation": "`print()` is the built-in function used to display output to the console. String literals are enclosed in single or double quotes."\n  },\n  {\n    "question": "What is the purpose of the `input()` function?",\n    "options": ["To display output", "To get user input", "To perform calculations", "To define a function"],\n    "answer": "To get user input",\n    "explanation": "The `input()` function reads data entered by the user from the console."\n  },\n  {\n    "question": "Which statement is used to assign a value to a variable in Python?",\n    "options": ["`assign x = 5`", "`let x = 5`", "`x := 5`", "`x = 5`"],\n    "answer": "`x = 5`",\n    "explanation": "The assignment operator `=` is used to assign a value to a variable."\n  },\n  {\n    "question": "What will be the output of `print(5 + 2 * 3)`?",\n    "options": ["11", "21", "1", "15"],\n    "answer": "11",\n    "explanation": "Python follows the order of operations (PEMDAS/BODMAS), so multiplication is performed before addition: (2 * 3) + 5 = 11"\n  },\n  {\n    "question": "What does `len()` function do?",\n    "options": ["Calculate the sum of elements", "Find the largest element", "Determine the length of a sequence", "Reverse a sequence"],\n    "answer": "Determine the length of a sequence",\n    "explanation": "The `len()` function returns the number of items in a sequence (like a string or list)."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate aptitude question
export const AiAptitudeExam = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 12 mcq for aptitude exam for interview preparation from branch "civil engineering",questions of type quantitative,logical roasoning,verbal ability,domain specific,Data Interpretation and Sufficiency.include question,options,answer,explaination.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "type": "Quantitative",\n    "question": "A cylindrical water tank has a diameter of 14 meters and a height of 10 meters.  What is its volume in cubic meters?",\n    "options": ["440π", "1540π", "770π", "3080π"],\n    "answer": "1540π",\n    "explanation": "Volume of a cylinder = πr²h, where r is the radius and h is the height. Radius = diameter/2 = 14/2 = 7 meters. Volume = π * 7² * 10 = 490π * 2 = 1540π cubic meters."\n  },\n  {\n    "type": "Logical Reasoning",\n    "question": "All bridges are made of concrete. Some concrete structures are dams.  Therefore:",\n    "options": [\n      "All dams are bridges.",\n      "Some bridges are dams.",\n      "All concrete structures are bridges.",\n      "No dams are bridges."\n    ],\n    "answer": "Some bridges are dams.",\n    "explanation": "The statement only establishes that some concrete structures are dams, and all bridges are a subset of concrete structures.  It does not imply all dams are bridges."\n  },\n  {\n    "type": "Verbal Ability",\n    "question": "Choose the word that is most nearly opposite in meaning to \'rigid\'.",\n    "options": ["Flexible", "Strong", "Inflexible", "Resilient"],\n    "answer": "Flexible",\n    "explanation": "Flexible is the antonym of rigid, meaning not stiff or unbending."\n  },\n  {\n    "type": "Domain Specific (Civil Engineering)",\n    "question": "Which type of cement is most commonly used in underwater construction?",\n    "options": ["Portland Cement", "High Alumina Cement", "Rapid Hardening Cement", "Low Heat Cement"],\n    "answer": "Low Heat Cement",\n    "explanation": "Low heat cement generates less heat during hydration, which is crucial to prevent cracking in underwater structures."\n  },\n  {\n    "type": "Data Interpretation",\n    "question": "The following table shows the compressive strength of concrete at different ages:\\nAge (days) | Strength (MPa)\\n------- | --------\\n7          | 20\\n14         | 28\\n28         | 35\\nWhat is the approximate average compressive strength (MPa) over the three ages?",\n    "options": ["24.3", "27.7", "30", "35"],\n    "answer": "27.7",\n    "explanation": "(20 + 28 + 35) / 3 = 27.7 MPa"\n  },\n  {\n    "type": "Data Sufficiency",\n    "question": "Is the beam under-reinforced or over-reinforced? \\nStatement 1: The depth of the neutral axis is less than the effective depth of the beam. \\nStatement 2: The stress in steel is greater than the permissible stress.",\n    "options": ["Statement 1 alone is sufficient.", "Statement 2 alone is sufficient.", "Both statements together are sufficient.", "Neither statement is sufficient."],\n    "answer": "Statement 1 alone is sufficient.",\n    "explanation": "Statement 1 directly indicates whether the beam is under-reinforced (neutral axis depth less than effective depth) or over-reinforced. Statement 2 provides information about stress but not directly about reinforcement ratio."\n  },\n {\n    "type": "Quantitative",\n    "question": "A rectangular plot of land measures 20 meters by 30 meters. What is its area in square meters?",\n    "options": ["50", "100", "600", "150"],\n    "answer": "600",\n    "explanation": "Area of a rectangle = length × width = 20 m × 30 m = 600 sq m"\n  },\n  {\n    "type": "Logical Reasoning",\n    "question": "All architects design buildings. Some building designers use CAD software. Therefore:",\n    "options": [\n      "All architects use CAD software.",\n      "Some architects use CAD software.",\n      "No architects use CAD software.",\n      "All building designers are architects."\n    ],\n    "answer": "Some architects use CAD software.",\n    "explanation": "It\'s possible that some, but not all, building designers (a broader category than architects) use CAD software. Therefore, some architects might also use it."\n  },\n  {\n    "type": "Verbal Ability",\n    "question": "Choose the word that is most nearly similar in meaning to \'impermeable\'.",\n    "options": ["Permeable", "Impervious", "Porous", "Transparent"],\n    "answer": "Impervious",\n    "explanation": "Impervious means not allowing fluids to pass through, similar to impermeable."\n  },\n  {\n    "type": "Domain Specific (Civil Engineering)",\n    "question": "What does the term \'bearing capacity\' refer to in soil mechanics?",\n    "options": [\n      "The ability of soil to resist erosion.",\n      "The maximum load a soil can support without failure.",\n      "The rate at which soil settles.",\n      "The moisture content of soil."\n    ],\n    "answer": "The maximum load a soil can support without failure.",\n    "explanation": "Bearing capacity is a crucial concept in foundation design, determining the maximum load a soil can withstand before failure occurs."\n  },\n  {\n    "type": "Data Interpretation",\n    "question": "A construction project has a budget of $1,000,000.  20% is allocated to materials, 30% to labor, and 50% to equipment. How much is allocated to labor?",\n    "options": ["$200,000", "$300,000", "$500,000", "$100,000"],\n    "answer": "$300,000",\n    "explanation": "30% of $1,000,000 is (30/100) * $1,000,000 = $300,000"\n  },\n  {\n    "type": "Data Sufficiency",\n    "question": "Is the structure stable? \\nStatement 1: The structure satisfies all the relevant building codes. \\nStatement 2:  A structural analysis shows sufficient factor of safety.",\n    "options": ["Statement 1 alone is sufficient.", "Statement 2 alone is sufficient.", "Both statements together are sufficient.", "Neither statement is sufficient."],\n    "answer": "Statement 2 alone is sufficient.",\n    "explanation": "A sufficient factor of safety directly indicates structural stability. While building codes are important, they don\'t guarantee stability in every specific instance."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate model answer for coding round
export const AiCodingRoundFeedback = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: '\nquestion:"Write a function to find the factorial of a given number using recursion."solution:"def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)",check the solution and give feedback,include question,ideal answer (<precode> formate ) ,my misteks if ,way to improve.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "question": "Write a function to find the factorial of a given number using recursion.",\n  "ideal_answer": "<precode>\\ndef factorial(n):\\n    if n < 0:\\n        return None  # Factorial is not defined for negative numbers\\n    elif n == 0 or n == 1:\\n        return 1\\n    else:\\n        return n * factorial(n - 1)\\n</precode>",\n  "my_mistakes": [\n    "The provided solution does not handle negative input values.  The factorial function is not defined for negative numbers.  The solution should explicitly check for and handle this case (e.g., return None or raise an exception)."\n  ],\n  "improvements": [\n    "Add error handling for negative input.  The function should return None or raise a ValueError (or similar) for negative input, providing informative feedback to the caller.",\n    "Consider adding a docstring to explain what the function does, its parameters, and its return value. This improves readability and maintainability.",\n    "For very large values of \'n\', the recursive approach can lead to stack overflow errors. While this is less of a concern for smaller numbers,  it\'s good practice to mention the limitation of recursion in the context of factorials, and possibly explore iterative solutions as an alternative for production code that needs to handle larger numbers."\n  ],\n  "feedback": "The core recursive logic of the solution is correct. However, the solution lacks error handling for negative input, a crucial aspect of robust function design.  Adding error handling and a docstring would significantly improve the quality of the code."\n}\n```\n',
        },
      ],
    },
  ],
});

// generate question for coding round
export const AiCodingRoundQuestion = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 5 question for coding round in "python",include question,time requered to complete ,level.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Write a Python function that takes a list of integers as input and returns the sum of all even numbers in the list.  Handle potential errors such as non-integer input gracefully.",\n    "time_required": 15,\n    "level": "Easy"\n  },\n  {\n    "question": "Create a Python function that reverses a given string. The function should handle strings containing spaces and special characters.  Explain your approach and consider efficiency.",\n    "time_required": 20,\n    "level": "Medium"\n  },\n  {\n    "question": "Write a Python program to find the factorial of a given non-negative integer. The program should handle invalid input (negative numbers) and efficiently calculate the factorial for large numbers (using iterative approach preferred for efficiency).",\n    "time_required": 25,\n    "level": "Medium"\n  },\n  {\n    "question": "Design a Python class representing a simple bank account.  The class should have methods for depositing funds, withdrawing funds, and checking the balance.  Include error handling for insufficient funds and invalid transactions. ",\n    "time_required": 30,\n    "level": "Hard"\n  },\n  {\n    "question": "Write a Python function that takes a list of dictionaries as input, where each dictionary represents a person with \'name\' and \'age\' keys.  The function should return a new list containing only the names of people older than 30, sorted alphabetically. Handle potential errors (e.g., missing keys in dictionaries).",\n    "time_required": 35,\n    "level": "Hard"\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'generate 5 question for coding round in "python",include question,input,output,time requered to complete ,level.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Write a Python function that takes a list of integers as input and returns the sum of all even numbers in the list.",\n    "input": "[1, 2, 3, 4, 5, 6]",\n    "output": "12",\n    "time_required": 10,\n    "level": "Easy"\n  },\n  {\n    "question": "Create a Python function to reverse a given string.",\n    "input": "\\"hello world\\"",\n    "output": "\\"dlrow olleh\\"",\n    "time_required": 15,\n    "level": "Medium"\n  },\n  {\n    "question": "Write a Python function that takes a list of strings as input and returns a new list containing only the strings that start with the letter \'a\' (case-insensitive).",\n    "input": "[\'apple\', \'banana\', \'Avocado\', \'orange\', \'apricot\']",\n    "output": "[\'apple\', \'Avocado\', \'apricot\']",\n    "time_required": 20,\n    "level": "Medium"\n  },\n  {\n    "question": "Given a list of dictionaries, where each dictionary represents a product with \'name\' and \'price\' keys, write a Python function to find the product with the highest price.",\n    "input": "[{\'name\': \'Product A\', \'price\': 10}, {\'name\': \'Product B\', \'price\': 25}, {\'name\': \'Product C\', \'price\': 15}]",\n    "output": "{\'name\': \'Product B\', \'price\': 25}",\n    "time_required": 25,\n    "level": "Hard"\n  },\n  {\n    "question": "Write a Python function that takes two lists as input and returns a new list containing only the elements that are common to both lists.",\n    "input": "[1, 2, 3, 4, 5], [3, 5, 6, 7, 8]",\n    "output": "[3, 5]",\n    "time_required": 25,\n    "level": "Medium"\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'Generate 5 beginner-level practice questions for a "Python" programming course, focusing on fundamental concepts related to "arrays and strings", with clear problem statements, and concise solution outlines, tailored to facilitate effective learning and assessment.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Write a Python function that takes an array of integers as input and returns the sum of all the elements in the array.",\n    "solution_outline": "1. Initialize a variable `sum` to 0.\\n2. Iterate through the array using a `for` loop.\\n3. In each iteration, add the current element to the `sum` variable.\\n4. After the loop completes, return the value of `sum`.",\n    "example_input": "[1, 2, 3, 4, 5]",\n    "example_output": "15"\n  },\n  {\n    "question": "Write a Python function that takes a string as input and returns the string reversed.",\n    "solution_outline": "1. Use string slicing: `string[::-1]`\\n2. OR Use a `for` loop iterating backwards through the string, appending each character to a new string.",\n    "example_input": "hello",\n    "example_output": "olleh"\n  },\n  {\n    "question": "Write a Python function that takes a string as input and returns the number of times a specific character appears in the string.",\n    "solution_outline": "1. Initialize a counter variable to 0.\\n2. Iterate through the string using a `for` loop.\\n3. In each iteration, check if the current character is equal to the target character.\\n4. If it is, increment the counter.\\n5. After the loop, return the counter.",\n    "example_input": "hello world, how are you?",\n    "example_output": "3" ,\n    "target_character": "o"\n  },\n  {\n    "question": "Write a Python function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than 5.",\n    "solution_outline": "1. Initialize an empty list called `result`.\\n2. Iterate through the input array using a `for` loop.\\n3. For each string, check its length using `len()`.\\n4. If the length is greater than 5, append the string to the `result` list.\\n5. Return the `result` list.",\n    "example_input": ["apple", "banana", "kiwi", "orange", "grapefruit"],\n    "example_output": ["banana", "grapefruit"]\n  },\n  {\n    "question": "Write a Python function that takes two strings as input and returns `True` if they are anagrams (contain the same characters, regardless of order), and `False` otherwise.",\n    "solution_outline": "1. Convert both strings to lowercase using `.lower()`.\\n2. Remove spaces and punctuation (optional, for more robust solution).\\n3. Sort the characters of both strings using `sorted()`.\\n4. Compare the sorted strings; if they are equal, return `True`; otherwise, return `False`.",\n    "example_input": ["listen", "silent"],\n    "example_output": "True",\n    "example_input2": ["hello", "world"],\n    "example_output2": "False"\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate soft skill interview
export const AiSoftSkillQuestion = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate list of 5 question that help to know about the soft skill of student,include question.skill.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Describe a time you had to work on a project with a group of people who had different ideas and approaches. How did you handle the situation and ensure everyone\'s ideas were heard and considered?",\n    "skill": "Collaboration and Teamwork"\n  },\n  {\n    "question": "Tell me about a time you had to adapt to a change in plans or unexpected challenge. How did you handle the situation and what did you learn from it?",\n    "skill": "Adaptability and Flexibility"\n  },\n  {\n    "question": "Think about a time you had to present information or ideas to a group of people. How did you prepare for the presentation and what strategies did you use to make it effective?",\n    "skill": "Communication and Public Speaking"\n  },\n  {\n    "question": "Describe a time you had to deal with a difficult or stressful situation. How did you manage your emotions and find a solution?",\n    "skill": "Stress Management and Emotional Intelligence"\n  },\n  {\n    "question": "Tell me about a time you took initiative and went above and beyond in your role. What motivated you to do so and what were the results?",\n    "skill": "Initiative and Self-Motivation"\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate generate roll roadmap
export const AiGenerateRollRoadmap = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate Simple,Focused,Progressive, and Outcome-Oriented roadmap for "Water Resources Engineer" of branch "civil engineering",include introducation,goal,objective,stages,topic,subtopics,time required,real worldprojects,challenges,resources,skill required to master.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "title": "Water Resources Engineer Roadmap",\n  "introduction": "This roadmap outlines a progressive learning path for aspiring Water Resources Engineers, focusing on practical skills and real-world application. It emphasizes a structured approach, building competency through focused stages and culminating in impactful contributions to the field.",\n  "goal": "Become a proficient Water Resources Engineer capable of designing, implementing, and managing sustainable water resources projects.",\n  "objectives": [\n    "Develop a strong theoretical foundation in hydrology, hydraulics, and water resource management.",\n    "Gain practical experience in water resource modeling, analysis, and design.",\n    "Master relevant software and tools used in the industry.",\n    "Develop effective communication and teamwork skills.",\n    "Contribute to impactful water resources projects."\n  ],\n  "stages": [\n    {\n      "stage": 1,\n      "topic": "Fundamentals of Hydrology and Hydraulics",\n      "subtopics": [\n        "Hydrologic Cycle",\n        "Rainfall-Runoff Modeling",\n        "Hydrograph Analysis",\n        "Open Channel Flow",\n        "Pipe Flow",\n        "Groundwater Hydrology"\n      ],\n      "timeRequired": "6 months",\n      "realWorldProjects": [\n        "Simple rainfall-runoff analysis for a small watershed",\n        "Design of a small irrigation canal"\n      ],\n      "challenges": "Grasping complex hydrological concepts and applying them to practical scenarios.",\n      "resources": [\n        "Textbooks on hydrology and hydraulics",\n        "Online courses (Coursera, edX)",\n        "HEC-HMS, HEC-RAS software tutorials"\n      ],\n      "skillsRequired": [\n        "Problem-solving",\n        "Data analysis",\n        "Basic programming (e.g., Python)"\n      ]\n    },\n    {\n      "stage": 2,\n      "topic": "Water Resource Management and Planning",\n      "subtopics": [\n        "Water Demand Forecasting",\n        "Water Supply Planning",\n        "Water Quality Management",\n        "Water Allocation",\n        "Integrated Water Resource Management (IWRM)"\n      ],\n      "timeRequired": "6 months",\n      "realWorldProjects": [\n        "Developing a water supply plan for a community",\n        "Assessing water quality in a river basin"\n      ],\n      "challenges": "Understanding the complexities of water resource management and balancing competing demands.",\n      "resources": [\n        "Textbooks on water resource management",\n        "Case studies of water resource projects",\n        "WEAP, MIKE SHE software tutorials"\n      ],\n      "skillsRequired": [\n        "Data modeling",\n        "Scenario planning",\n        "Stakeholder engagement"\n      ]\n    },\n    {\n      "stage": 3,\n      "topic": "Advanced Topics and Specialization",\n      "subtopics": [\n        "Reservoir Design and Operation",\n        "Flood Control",\n        "Irrigation Engineering",\n        "Drought Management",\n        "Coastal Engineering (optional)"\n      ],\n      "timeRequired": "12 months",\n      "realWorldProjects": [\n        "Design of a small reservoir",\n        "Flood risk assessment for a city",\n        "Irrigation system design for an agricultural area"\n      ],\n      "challenges": "Applying advanced concepts to complex real-world scenarios and managing large datasets.",\n      "resources": [\n        "Advanced textbooks and research papers",\n        "Industry conferences and workshops",\n        "Specialized software (e.g., MIKE 11, Delft3D)"\n      ],\n      "skillsRequired": [\n        "Advanced modeling",\n        "Data visualization",\n        "Project management"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate project idea for each leve
export const AiGenerateProjectIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 3 project idea of \'basic\' level  which improve job preparation skill on topic "react" of branch "computer engineering",include problem statement,description,outcomes,tips,time required.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "projectName": "Simple To-Do List App",\n    "problemStatement": "Many job applications require demonstrating basic React proficiency.  A simple To-Do list app allows showcasing fundamental React concepts like component creation, state management, and event handling.",\n    "description": "Build a basic To-Do list application using React.  The app should allow users to add, delete, and mark tasks as complete.  Consider features like local storage to persist data between sessions (optional).",\n    "outcomes": [\n      "Improved understanding of React component lifecycle.",\n      "Practical experience with JSX syntax and component composition.",\n      "Ability to manage component state using useState hook.",\n      "Experience handling user events.",\n      "Portfolio project showcasing basic React skills."\n    ],\n    "tips": [\n      "Start with a minimal viable product (MVP) and iteratively add features.",\n      "Use functional components and hooks.",\n      "Focus on clean, readable code.",\n      "Use a CSS framework like Bootstrap or styled-components for styling (optional)."\n    ],\n    "timeRequired": "1-2 days"\n  },\n  {\n    "projectName": "Basic React Counter App with Styling",\n    "problemStatement": "Many interviews assess candidates\' ability to implement basic UI elements and integrate CSS for styling. This project focuses on these skills within the React framework.",\n    "description": "Create a counter application with buttons to increment and decrement a counter value.  Implement visually appealing styling using CSS or a CSS-in-JS solution. The app should display the current count clearly.",\n    "outcomes": [\n      "Improved understanding of React\'s event handling system.",\n      "Practical experience with state management using useState.",\n      "Enhanced CSS skills or experience with CSS-in-JS solutions.",\n      "Understanding of styling React components.",\n      "A visually appealing portfolio piece."\n    ],\n    "tips": [\n      "Experiment with different CSS frameworks or styling methods.",\n      "Prioritize clean and maintainable CSS code.",\n      "Ensure responsiveness across different screen sizes.",\n      "Use a version control system like Git to track changes."\n\n    ],\n    "timeRequired": "1 day"\n  },\n  {\n    "projectName": "Simple Product List Display",\n    "problemStatement": "Many companies utilize API interactions. This project provides experience displaying data fetched from a public API.",\n    "description": "Fetch data from a public API (e.g., JSONPlaceholder or a similar free API) displaying a list of products. Each product should show its name, description, and an image (if available).",\n    "outcomes": [\n      "Experience with fetching data using `fetch` or `axios`.",\n      "Handling asynchronous operations in React.",\n      "Experience displaying dynamic data from an external source.",\n      "Practicing data mapping and rendering in React.",\n      "Improved problem-solving skills in handling API responses."\n    ],\n    "tips": [\n      "Handle potential errors during API calls gracefully.",\n      "Use a loading indicator while fetching data.",\n      "Consider using error boundaries to prevent crashes.",\n      "Choose an API with simple, well-documented data."\n    ],\n    "timeRequired": "2-3 days"\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate softskill report
export const AiSoftSkillReport = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Evaluate the student\'s Teamwork and Communication skills level based on their response to the following question:\n\nQuestion: "Describe a challenging programming project where you had to collaborate with a team. What were the communication challenges you faced, how did you overcome them, and what did you learn about effective teamwork in a technical environment?"\n\nStudent\'s Answer: "I would like to describe a challenging programming project that I was part of, where I collaborated with a team to develop a complex data analytics platform for a large enterprise client. The project involved integrating multiple data sources, building a scalable architecture, and creating a user-friendly interface for business users".include skill,skill level,Evaluation Criteria,description,feedback,strengths,weak area,preparation,resource,Assessment and Rating,Areas for Improvement,Suggestions for Further Practice,Conclusion.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "skill": "Teamwork and Communication",\n  "skillLevel": "Developing",\n  "EvaluationCriteria": {\n    "CommunicationChallenges": "Clearly articulating challenges faced during collaboration",\n    "ProblemSolving": "Describing strategies used to overcome communication barriers",\n    "TeamworkReflection": "Demonstrating understanding of effective teamwork principles",\n    "Specificity": "Providing concrete examples and details",\n    "ProjectContext": "Providing sufficient context about the project"\n  },\n  "description": "The student\'s response lacks crucial details regarding communication challenges, solutions, and lessons learned.  While they mention a complex project, they fail to illustrate the teamwork and communication aspects in detail.",\n  "feedback": "Your response demonstrates understanding of the need for teamwork in large projects. However, it needs significant improvement to showcase your teamwork and communication skills.  You haven\'t described any actual communication challenges, how they were overcome, or what specific lessons you learned about effective teamwork.  The response only focuses on the project scope rather than collaborative aspects.",\n  "strengths": [\n    "Identifies a relevant, complex project"\n  ],\n  "weakAreas": [\n    "Fails to describe specific communication challenges",\n    "Lacks detail on how communication barriers were overcome",\n    "Doesn\'t offer any concrete examples to illustrate teamwork",\n    "Does not demonstrate reflection on effective teamwork strategies",\n    "Insufficient depth in project context."\n  ],\n  "preparation": "Insufficient preparation evident in the lack of detail and specific examples.",\n  "resource": "None mentioned explicitly in the response.",\n  "AssessmentandRating": "Developing (1/5).  The answer demonstrates a basic understanding of the importance of teamwork but does not provide sufficient evidence to demonstrate proficiency.",\n  "AreasforImprovement": [\n    "Practice describing specific communication challenges faced (e.g., conflicting opinions, scheduling conflicts, unclear instructions).",\n    "Develop specific examples of how you actively contributed to resolving communication issues.",\n    "Focus on describing your role in the team, your contributions, and how you interacted with team members.",\n    "Reflect on the teamwork strategies used and how they impacted project success.",\n    "Practice articulating lessons learned regarding effective communication and collaboration."\n  ],\n  "SuggestionsforFurtherPractice": [\n    "Engage in mock interviews focusing on teamwork and communication.",\n    "Reflect on past collaborative projects by documenting communication challenges, solutions, and lessons learned.",\n    "Read articles and case studies on effective teamwork in technical environments.",\n    "Seek feedback from peers and mentors on collaborative projects.",\n    "Participate in team-based activities and workshops to enhance teamwork and communication skills."\n  ],\n  "Conclusion": "The student needs to significantly improve their ability to articulate their experience with teamwork and communication within the context of a challenging project.  More detailed and specific examples are crucial to showcase their skills effectively."\n}\n```\n',
        },
      ],
    },
  ],
});

// resume

// genearate resume profile summery
export const AiProfileSummary = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate a professional 2 profile summary for job roll "web developer" as a fresher, starting with actionable adjective word falling with job roll i am applying for after that add the skill that help to achieve goal.My skill:"php,react,nextjs,tailwind css,javascript".you can use keywords from:"\nmaintain\nCSS\nframeworks\nflask responsibilities\nsolutions strong needs teams bootstrap\nprimary\ncollaborate django mysql git\nfocus maintaining high-quality skills\nwork applications\ndesigning\nresponsive\ndesigners experience\nknowledge key development javascript using python wordpress web html\ndeveloping nice-to\ndevelop\ndeveloper websites responsible design\nphp\nclients\nmeet deliver".in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "profileSummary": "Actionable Web Developer eager to contribute to a dynamic team.  Proficient in PHP, React, Next.js, Tailwind CSS, and JavaScript, I possess a strong focus on developing responsive, high-quality web applications.  My skills in CSS frameworks (Tailwind CSS, Bootstrap) and utilizing Git for version control allow me to efficiently collaborate with designers and developers to meet client needs and deliver exceptional solutions.",\n    "keywords": ["web developer", "PHP", "React", "Next.js", "Tailwind CSS", "JavaScript", "CSS frameworks", "responsive", "high-quality", "collaborate", "Git", "deliver", "solutions", "clients", "develop", "applications"]\n  },\n  {\n    "profileSummary": "Highly motivated Web Developer seeking an entry-level position.  I am skilled in developing and maintaining web applications using PHP, React, Next.js, and JavaScript, leveraging frameworks like Tailwind CSS for efficient and responsive design. My key strengths lie in translating client needs into effective solutions, collaborating effectively within teams, and maintaining a strong focus on delivering high-quality work.  Proficient in utilizing Git for version control.",\n    "keywords": ["web developer", "PHP", "React", "Next.js", "Tailwind CSS", "JavaScript", "developing", "maintaining", "responsive", "high-quality", "collaborating", "teams", "solutions", "clients", "Git", "deliver"]\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

// generate resume skill section
export const AiSkillSection = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'identify the job description and my skills .suggest me 5-10 skills that i should include in my resume . tailor these skills to my actual experience level and quantify my achievement.description:"As a Web Developer, you will be responsible for designing, developing, and maintaining websites and web applications. Your primary focus will be on JavaScript and WordPress, with a nice-to-have knowledge of Python. You will collaborate with our design and development teams to deliver high-quality solutions that meet our clients\' needs.\nKey Responsibilities\nDevelop and maintain responsive websites using JavaScript and WordPress.\nCollaborate with designers to translate UI/UX designs into functional web pages.\nWrite clean, maintainable, and efficient code.\nTroubleshoot and debug website issues to enhance performance and user experience.\nOptimize applications for maximum speed and scalability.\nImplement and manage WordPress plugins, themes, and custom functionalities.\nStay updated with emerging web technologies and best practices.\n(Optional) Work on back-end development using Python for web applications.\nQualifications\nProven experience as a Web Developer with a strong portfolio of work.\nProficiency in JavaScript, HTML, CSS, and WordPress development.\nFamiliarity with responsive design principles and frameworks (e.g., Bootstrap).\nExperience with PHP and MySQL for WordPress development.\nNice to have: Basic understanding of Python and related frameworks (e.g., Django, Flask).\nKnowledge of version control systems (e.g., Git).\nStrong problem-solving skills and attention to detail.\nExcellent communication and teamwork abilities.\nSkills: mysql,javascript,javascript frameworks,flask,wordpress,java,git,python,html,css,php,bootstrap,django".My skills :"php-intermidiate,nextjs-inermidete,react-advance,mongo db-biginer,git-bigginer,mysql-advance".keywords to be use:"\nmaintain\nCSS\nframeworks\nflask responsibilities\nsolutions strong needs teams bootstrap\nprimary\ncollaborate django mysql git\nfocus maintaining high-quality skills\nwork applications\ndesigning\nresponsive\ndesigners experience\nknowledge key development javascript using python wordpress web html\ndeveloping nice-to\ndevelop\ndeveloper websites responsible design\nphp\nclients\nmeet deliver".in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "job_description": {\n    "title": "Web Developer",\n    "responsibilities": [\n      "Designing, developing, and maintaining websites and web applications",\n      "Primary focus on JavaScript and WordPress",\n      "Collaborating with design and development teams",\n      "Delivering high-quality solutions meeting client needs",\n      "Developing and maintaining responsive websites using JavaScript and WordPress",\n      "Translating UI/UX designs into functional web pages",\n      "Writing clean, maintainable, and efficient code",\n      "Troubleshooting and debugging website issues",\n      "Optimizing applications for speed and scalability",\n      "Implementing and managing WordPress plugins, themes, and custom functionalities",\n      "Staying updated with emerging web technologies",\n      "Optional: Back-end development using Python"\n    ],\n    "qualifications": [\n      "Proven experience as a Web Developer",\n      "Proficiency in JavaScript, HTML, CSS, and WordPress development",\n      "Familiarity with responsive design principles and frameworks (e.g., Bootstrap)",\n      "Experience with PHP and MySQL for WordPress development",\n      "Basic understanding of Python and related frameworks (e.g., Django, Flask)",\n      "Knowledge of version control systems (e.g., Git)",\n      "Strong problem-solving skills and attention to detail",\n      "Excellent communication and teamwork abilities"\n    ],\n    "keywords": ["maintain", "CSS", "frameworks", "flask", "responsibilities", "solutions", "strong", "needs", "teams", "bootstrap", "primary", "collaborate", "django", "mysql", "git", "focus", "maintaining", "high-quality", "skills", "work", "applications", "designing", "responsive", "designers", "experience", "knowledge", "key", "development", "javascript", "using", "python", "wordpress", "web", "html", "developing", "nice-to", "develop", "developer", "websites", "responsible", "design", "php", "clients", "meet", "deliver"]\n  },\n  "my_skills": {\n    "skills": [\n      {"name": "PHP", "level": "Intermediate"},\n      {"name": "Next.js", "level": "Intermediate"},\n      {"name": "React", "level": "Advanced"},\n      {"name": "MongoDB", "level": "Beginner"},\n      {"name": "Git", "level": "Beginner"},\n      {"name": "MySQL", "level": "Advanced"}\n    ],\n    "resume_skills": [\n      {\n        "name": "JavaScript",\n        "description": "Experienced in using JavaScript for front-end development with React (Advanced) and Next.js (Intermediate). Developed [Number] responsive web applications using these frameworks.",\n        "quantifiable_achievement": "Improved website load times by [Percentage]% through code optimization in a previous project." \n      },\n      {\n        "name": "React",\n        "description": "Proficient in building complex and scalable user interfaces. Developed [Number] production ready projects.",\n        "quantifiable_achievement": "Reduced development time by [Percentage]% using React component reusability."\n      },\n      {\n        "name": "Next.js",\n        "description": "Experienced in building server-side rendered applications, improving SEO and performance.",\n        "quantifiable_achievement": "Improved site performance metrics, resulting in a [Number]% increase in user engagement."\n      },\n      {\n        "name": "PHP",\n        "description": "Intermediate experience using PHP in backend development.",\n        "quantifiable_achievement": "Successfully implemented [Number] PHP features in a [type of application]."\n      },\n      {\n        "name": "MySQL",\n        "description": "Advanced SQL skills. Designed and implemented databases for [Number] projects.",\n        "quantifiable_achievement": "Optimized database queries resulting in [Number]% faster data retrieval."\n      },\n      {\n        "name": "Git",\n        "description": "Familiar with Git for version control.",\n        "quantifiable_achievement": "Successfully collaborated on [Number] projects using Git."\n      },\n      {\n        "name": "Responsive Web Design",\n        "description": "Experienced with creating websites that adapt to various screen sizes.",\n        "quantifiable_achievement": "Developed [Number] responsive websites using various frameworks, ensuring a consistent user experience across all devices."\n      }\n    ]\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

// generate resume experience section
export const AiExperienceSection = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'write a experience in internship section,include position,company name,date,bullet point responsibility,quantify accomplishments achievements ,skill developed.position:"Software Engineering Intern at Acme Corporation",company:"Acme Corporation, San Francisco, CA",date:"June 2023 – August 2023",keywords to be use:"\nmaintain\nCSS\nframeworks\nflask responsibilities\nsolutions strong needs teams bootstrap\nprimary\ncollaborate django mysql git\nfocus maintaining high-quality skills\nwork applications\ndesigning\nresponsive\ndesigners experience\nknowledge key development javascript using python wordpress web html\ndeveloping nice-to\ndevelop\ndeveloper websites responsible design\nphp\nclients\nmeet deliver".json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "internship": {\n    "position": "Software Engineering Intern",\n    "company": "Acme Corporation, San Francisco, CA",\n    "date": "June 2023 – August 2023",\n    "responsibilities": [\n      "My primary focus was maintaining and enhancing existing web applications using Python (Flask framework), Django, and MySQL.",\n      "Collaborated with a team of designers and developers to deliver responsive web designs using HTML, CSS, Bootstrap, and Javascript.",\n      "Developed and implemented new features for client websites, meeting project deadlines and delivering high-quality solutions that strongly met client needs.",\n      "Worked on maintaining and improving the company\'s internal WordPress websites, ensuring functionality and user experience.",\n      "Utilized Git for version control and collaborated effectively within agile development teams.",\n      "Responsible for designing and developing several key components of new applications, improving efficiency and user experience.",\n      "Maintained and updated existing CSS frameworks, ensuring consistency and responsiveness across multiple platforms.",\n      "Contributed to the development of several nice-to-have features that enhanced user engagement and overall satisfaction."\n    ],\n    "achievements": [\n      "Successfully maintained and updated 15+ existing web applications, resulting in a 10% improvement in site performance.",\n      "Developed 3 new features for client websites, exceeding expectations and receiving positive client feedback.",\n      "Improved the responsiveness of the company\'s internal WordPress sites by 25%, enhancing user experience.",\n      "Successfully resolved 5 critical production issues, minimizing downtime and ensuring business continuity."\n    ],\n    "skills_developed": [\n      "Stronger proficiency in Python (Flask and Django frameworks)",\n      "Enhanced knowledge of front-end development using HTML, CSS, Javascript, and Bootstrap",\n      "Improved skills in database management using MySQL",\n      "Developed expertise in utilizing Git for version control",\n      "Gain in experience in collaborating effectively with cross-functional teams (designers, developers, clients)",\n      "Strengthened problem-solving and analytical skills in tackling real-world development challenges."\n    ]\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

// generate resume project section
export const AiProjectSection = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'write a project section, include title, timeframe, tools/technology used, bullet point objective or problem statement, your role: contributions and responsibilities, result/achievements: quantify the impact.project name:"Ai chatbot for customer support",timeframe:"jan 2023-feb 2023",tools/technology:"NLP,Python,ML".in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "project_name": "AI Chatbot for Customer Support",\n  "timeframe": "Jan 2023 - Feb 2023",\n  "tools_technology": ["NLP", "Python", "ML"],\n  "objectives": [\n    "Develop a functional AI chatbot capable of handling common customer support inquiries.",\n    "Improve customer satisfaction by providing 24/7 support and reducing wait times.",\n    "Automate routine tasks, freeing up human agents to handle more complex issues.",\n    "Reduce customer support operational costs."\n  ],\n  "problem_statement": "High volume of customer support inquiries was leading to long wait times, low customer satisfaction, and increased operational costs.  Human agents were overwhelmed with repetitive tasks.",\n  "role_contributions": {\n    "role": "Machine Learning Engineer",\n    "responsibilities": [\n      "Designed and implemented the NLP pipeline for natural language understanding.",\n      "Developed and trained the machine learning models for intent recognition and entity extraction.",\n      "Built the chatbot\'s dialogue management system.",\n      "Integrated the chatbot with the existing customer support platform.",\n      "Performed rigorous testing and evaluation of the chatbot\'s performance.",\n      "Deployed and monitored the chatbot in a production environment."\n    ]\n  },\n  "results_achievements": {\n    "metrics": [\n      {\n        "metric": "Average customer wait time",\n        "improvement": "Reduced by 40%",\n        "quantification": "From 15 minutes to 9 minutes"\n      },\n      {\n        "metric": "Customer satisfaction score (CSAT)",\n        "improvement": "Increased by 15%",\n        "quantification": "From 75% to 90%"\n      },\n      {\n        "metric": "Number of inquiries handled by chatbot",\n        "quantification": "60% of all inquiries"\n      },\n      {\n        "metric": "Cost savings",\n        "quantification": "Estimated $5000 per month in reduced labor costs"\n      }\n    ]\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

//generate expand section
export const Aiexpand = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "explain the concept in details Decorators: Wrapping Functionality of course:python programming.include title:title of content.description:detailed descritpion.code(if applicable):code example (<precode> formate ) if applicable.in json formate",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "title": "Python Decorators: Wrapping Functionality",\n  "description": "Decorators are a powerful and expressive feature in Python that allows you to modify or enhance functions and methods in a clean and readable way.  They provide a way to wrap additional functionality around an existing function without modifying its core behavior.  This is achieved by using a higher-order function (a function that takes another function as an argument and returns a new function).  Decorators are often used for tasks like logging, access control, instrumentation (measuring performance), and more.  They promote code reusability and improve readability by separating concerns.",\n  "code": "<pre><code>\\n# A simple decorator function\\ndef my_decorator(func):\\n    def wrapper():\\n        print(\\"Before calling the function.\\")\\n        func()\\n        print(\\"After calling the function.\\")\\n    return wrapper\\n\\n# Applying the decorator using the @ syntax\\n@my_decorator\\ndef say_hello():\\n    print(\\"Hello!\\")\\n\\n# Calling the decorated function\\nsay_hello()\\n\\n\\n# Decorator with arguments\\ndef repeat(num_times):\\n    def decorator_repeat(func):\\n        def wrapper(*args, **kwargs):\\n            for _ in range(num_times):\\n                result = func(*args, **kwargs)\\n            return result\\n        return wrapper\\n    return decorator_repeat\\n\\n@repeat(num_times=3)\\ndef greet(name):\\n    print(f\\"Hello, {name}!\\")\\n\\ngreet(\\"World\\")\\n\\n#Example with class based decorator\\nclass CountCalls:\\n    def __init__(self, func):\\n        self.func = func\\n        self.num_calls = 0\\n\\n    def __call__(self, *args, **kwargs):\\n        self.num_calls += 1\\n        print(f\\"Call {self.num_calls} of {self.func.__name__}\\")\\n        return self.func(*args, **kwargs)\\n\\n@CountCalls\\ndef say_goodbye():\\n    print(\\"Goodbye!\\")\\n\\nsay_goodbye()\\nsay_goodbye()\\n</code></pre>",\n  "explanation": [\n    {\n      "heading": "Basic Decorator Structure",\n      "content": "A basic decorator takes a function as input and returns a modified version of that function.  The `wrapper` function inside the decorator typically adds the extra functionality before or after calling the original function."\n    },\n    {\n      "heading": "The `@` Syntax",\n      "content": "The `@` symbol provides a concise way to apply a decorator.  `@my_decorator` above is equivalent to `say_hello = my_decorator(say_hello)`."\n    },\n    {\n      "heading": "Decorators with Arguments",\n      "content": "Decorators can also accept arguments.  In the example, `repeat(num_times=3)` creates a decorator that repeats the function three times.  Note the nested function structure to handle both the decorator arguments and the function to be decorated."\n    },\n    {\n      "heading": "Class-based Decorators",\n      "content": "Decorators can also be implemented as classes.  The `__call__` method allows the class instance to behave like a function, enabling the decorator to maintain state (like the `num_calls` in the example)."\n    },\n    {\n      "heading": "Preserving Function Metadata",\n      "content": "When using decorators, it\'s crucial to preserve metadata (like the function\'s name and docstring). This can be achieved using the `functools.wraps` decorator from the `functools` module.  For example: `from functools import wraps; @wraps(func)` in your wrapper function."\n    },\n    {\n      "heading": "Common Use Cases",\n      "content": "Decorators are commonly used for:\\n* **Logging:** Recording function calls and their arguments/return values.\\n* **Timing:** Measuring the execution time of a function.\\n* **Authentication/Authorization:** Controlling access to functions.\\n* **Caching:** Storing the results of expensive function calls to avoid redundant computations.\\n* **Input validation:** Checking the validity of function arguments."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate project idea
export const AiProjectIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are an intelligent 3 project idea generator for students and professionals. Provide customized project ideas based on the following details:\nLevel of Expertise: Beginner.\nBranch of Study: Computer Science.\nTopic of Interest: Machine Learning.\ninclude the following:Problem Statement.Outcomes.Tips.Time Required.A brief title for the project.A one-sentence project description.Key features or deliverables.Suggested tools and technologies.Real-world applications or relevance.Estimated complexity beginner.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "title": "Movie Recommendation System",\n    "description": "Build a simple movie recommendation system using collaborative filtering.",\n    "problemStatement": "Many users struggle to find movies they\'ll enjoy. Existing systems often lack personalization.",\n    "outcomes": [\n      "A functional movie recommendation system.",\n      "Understanding of collaborative filtering techniques.",\n      "Experience with data preprocessing and model evaluation."\n    ],\n    "tips": [\n      "Start with a smaller dataset (e.g., MovieLens 100k).",\n      "Focus on one collaborative filtering method initially.",\n      "Use clear visualizations to present your results."\n    ],\n    "timeRequired": "2-4 weeks",\n    "keyFeatures": [\n      "User interface for movie ratings input.",\n      "Movie recommendation based on user ratings.",\n      "Evaluation metrics (e.g., precision, recall)."\n    ],\n    "toolsAndTechnologies": [\n      "Python (with libraries like Pandas, NumPy, Scikit-learn)",\n      "Jupyter Notebook or similar IDE"\n    ],\n    "realWorldApplications": "Used by streaming services like Netflix and Spotify.",\n    "complexity": "Beginner"\n  },\n  {\n    "title": "Sentiment Analysis of Tweets",\n    "description": "Develop a system to analyze the sentiment (positive, negative, neutral) of tweets about a specific topic.",\n    "problemStatement": "Understanding public opinion on social media is crucial for various applications, but manual analysis is time-consuming and prone to bias.",\n    "outcomes": [\n      "A functional sentiment analysis model.",\n      "Experience with text preprocessing and natural language processing (NLP).",\n      "Understanding of different sentiment analysis techniques."\n    ],\n    "tips": [\n      "Use a pre-trained sentiment analysis model (e.g., VADER).",\n      "Focus on a specific topic to limit data complexity.",\n      "Use visualizations to show sentiment trends."\n    ],\n    "timeRequired": "1-3 weeks",\n    "keyFeatures": [\n      "Data collection from Twitter API (requires API access).",\n      "Text preprocessing (cleaning, tokenization).",\n      "Sentiment classification of tweets.",\n      "Visualization of sentiment distribution."\n    ],\n    "toolsAndTechnologies": [\n      "Python (with libraries like Tweepy, NLTK, Scikit-learn)",\n      "Jupyter Notebook or similar IDE"\n    ],\n    "realWorldApplications": "Used by businesses to monitor brand reputation and customer feedback.",\n    "complexity": "Beginner"\n  },\n  {\n    "title": "Simple Image Classifier",\n    "description": "Build a model to classify images into different categories (e.g., cats vs. dogs).",\n    "problemStatement": "Manual image categorization is time-consuming and inefficient. Automation is needed for large datasets.",\n    "outcomes": [\n      "A functional image classification model.",\n      "Understanding of convolutional neural networks (CNNs).",\n      "Experience with image preprocessing and model training."\n    ],\n    "tips": [\n      "Use a pre-trained CNN model (e.g., ResNet, MobileNet) for transfer learning.",\n      "Start with a smaller dataset (e.g., CIFAR-10).",\n      "Focus on accuracy and efficiency."\n    ],\n    "timeRequired": "2-4 weeks",\n    "keyFeatures": [\n      "Image data loading and preprocessing.",\n      "Model training and evaluation.",\n      "Prediction on new images."\n    ],\n    "toolsAndTechnologies": [\n      "Python (with libraries like TensorFlow/Keras or PyTorch)",\n      "Jupyter Notebook or similar IDE"\n    ],\n    "realWorldApplications": "Used in various applications like medical image analysis, object detection, and self-driving cars.",\n    "complexity": "Beginner"\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

//generate project plan
export const AiProjectPlan = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "on the basic of project details generate a 1-2 weeks project plan to complete the project.include day,work,outcomes,achivements,Key Tips.here is project details project title:Simple Calculator Application.project description:Develop a basic calculator application in Java with a graphical user interface..problem statement:Users need a simple and user-friendly way to perform basic arithmetic calculations..in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "projectName": "Simple Calculator Application",\n  "projectDescription": "Develop a basic calculator application in Java with a graphical user interface.",\n  "projectPlan": [\n    {\n      "day": 1,\n      "work": "Project Setup and GUI Design",\n      "outcomes": "Project directory created, Java project initialized, basic GUI framework designed using Swing or JavaFX.",\n      "achievements": "Basic window with title and layout created.",\n      "keyTips": "Choose a suitable GUI framework (Swing or JavaFX) and stick to it. Plan the layout carefully before coding."\n    },\n    {\n      "day": 2,\n      "work": "Implement Number Buttons and Display",\n      "outcomes": "Number buttons (0-9) implemented and connected to the display. Display updates correctly when buttons are pressed.",\n      "achievements": "User can input numbers into the display.",\n      "keyTips": "Use event listeners to handle button clicks.  Ensure proper handling of multi-digit input."\n    },\n    {\n      "day": 3,\n      "work": "Implement Basic Arithmetic Operations (+, -, *, /)",\n      "outcomes": "+, -, *, / buttons implemented.  Calculator performs basic operations correctly.",\n      "achievements": "Basic arithmetic functionality complete.",\n      "keyTips": "Use a separate method to handle calculations. Consider operator precedence (though not required for a basic calculator)."\n    },\n    {\n      "day": 4,\n      "work": "Implement Decimal Point and Clear Button",\n      "outcomes": "Decimal point (.) button implemented. Clear button implemented to reset the display.",\n      "achievements": "Enhanced usability with decimal and clear functionality.",\n      "keyTips": "Handle potential errors like multiple decimal points or division by zero."\n    },\n    {\n      "day": 5,\n      "work": "Testing and Bug Fixing (Round 1)",\n      "outcomes": "Thorough testing of existing functionality. Bug fixes implemented.",\n      "achievements": "Improved application stability and accuracy.",\n      "keyTips": "Test with edge cases (large numbers, zero, etc.). Use a debugger to identify issues."\n    },\n    {\n      "day": 6,\n      "work": "Implement Equals Button and Operator Handling",\n      "outcomes": "Equals (=) button added. Improved handling of multiple operations.",\n      "achievements": "Users can now chain multiple calculations.",\n      "keyTips": "Use a stack or similar data structure for efficient operator handling (if you want to support chained operations like 2 + 3 * 4)."\n    },\n    {\n      "day": 7,\n      "work": "Testing and Bug Fixing (Round 2)",\n      "outcomes": "Testing of newly implemented features. Bug fixes and refinements.",\n      "achievements": "Improved application robustness and accuracy.",\n      "keyTips": "Test with a variety of input sequences to catch potential errors."\n    },\n    {\n      "day": 8,\n      "work": "Code Review and Refactoring",\n      "outcomes": "Code review to improve code readability and maintainability. Refactoring of code.",\n      "achievements": "Improved code quality and maintainability.",\n      "keyTips": "Follow coding best practices.  Use meaningful variable and function names."\n    },\n    {\n      "day": 9,\n      "work": "Advanced Features (Optional):",\n      "outcomes": "Implementation of optional features such as memory functions (M+, M-, MR, MC).",\n      "achievements": "Enhanced application functionality (if features are implemented).",\n      "keyTips": "Prioritize features based on project scope and time constraints."\n    },\n    {\n      "day": 10,\n      "work": "Final Testing and Documentation",\n      "outcomes": "Comprehensive final testing. User documentation created.",\n      "achievements": "Application is ready for deployment.",\n      "keyTips": "Document how to use the calculator and any known limitations."\n    },\n    {\n      "day": 11,\n      "work": "Deployment Preparation",\n      "outcomes": "Prepare the application for deployment (e.g., create an executable JAR file).",\n      "achievements": "Application ready for distribution.",\n      "keyTips": "Use a build tool like Maven or Gradle for easier deployment."\n    },\n    {\n      "day": 12,\n      "work": "Deployment and Presentation (Optional)",\n      "outcomes": "Deploy the application (optional). Present project to stakeholders (optional).",\n      "achievements": "Successful project completion.",\n      "keyTips": "Prepare a short presentation showcasing the application\'s features."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//find keyword from job description
export const AiKeyWordsFinder = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'I have the following job description:"THIS IS A LONG TERM CONTRACT POSITION WITH ONE OF THE LARGEST, GLOBAL, TECHNOLOGY LEADER. Pune based candidates preferred Our large, Fortune client is ranked as one of the best companies to work with, in the world. The client fosters progressive culture, creativity, and a Flexible work environment. They use cutting-edge technologies to keep themselves ahead of the curve. Diversity in all aspects is respected. Integrity, experience, honesty, people, humanity, and passion for excellence are some other adjectives that define this global technology leader.Looking for Front End Software Developer with 5-7 years of experience in JavaScript, React, Typescript, Automation. C++ experience will be an added advantage.Responsibilities Design, develop, document, test, and debug new and existing software systems and/or applications for market sale or large-scale proprietary software for internal use.Serve as technical expert on development projects. Participate in full development life cycle including requirements analysis and design.\nWrite technical specifications based on conceptual design and stated business requirements. Support, maintain, and document software functionality.\nIdentify and evaluate new technologies for implementation.\nAnalyze code to find causes of errors and revise programs as needed.\nParticipate in software design meetings and analyze user needs to determine technical requirements."\nAnalyze the description and provide a list of keywords, skills, qualifications, tools, and technologies mentioned that are most relevant for tailoring an ATS-friendly resume. Categorize the keywords under the following headings:\nTechnical_Skills\nSoft_Skills\nJob_Specific_Keywords\nCertifications_Education\nTools_Software\nAction_Verbs_Power_Words\nEnsure the keywords are directly extracted from the job description and focus on making the resume optimized for ATS parsing. Provide the output in a structured, easy-to-use format.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "Technical_Skills": [\n    "JavaScript",\n    "React",\n    "Typescript",\n    "Automation",\n    "C++"\n  ],\n  "Soft_Skills": [\n    "progressive culture",\n    "creativity",\n    "Flexible work environment",\n    "Diversity",\n    "Integrity",\n    "honesty",\n    "humanity",\n    "passion for excellence"\n  ],\n  "Job_Specific_Keywords": [\n    "Front End Software Developer",\n    "Software systems",\n    "applications",\n    "technical expert",\n    "requirements analysis",\n    "design",\n    "technical specifications",\n    "software functionality",\n    "new technologies",\n    "software design meetings",\n    "user needs",\n    "technical requirements",\n    "development projects",\n    "full development life cycle",\n    "Support",\n    "maintain",\n    "document"\n\n  ],\n  "Certifications_Education": [], \n  "Tools_Software": [],\n  "Action_Verbs_Power_Words": [\n    "Design",\n    "develop",\n    "document",\n    "test",\n    "debug",\n    "Serve",\n    "Participate",\n    "Write",\n    "Support",\n    "maintain",\n    "Identify",\n    "evaluate",\n    "Analyze",\n    "revise",\n    "Analyze"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate question for mock interview
export const AiMockInterview = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Create a list of probable interview questions based on the following input:\nJob Role: "web developer".\nJob Description: "Description\nWe are offering a short term contract employment opportunity for a Web Developer in Cleveland, Ohio. As a Web Developer, you will be involved in both backend development and client-side scripting. You will be expected to use your skills in AB Testing, Bootstrap, HTML5, CSS, and ASP.NET to manage and enhance our content. Your expertise in Atlassian Jira will be crucial for efficient bug tracking.\nResponsibilities\n Utilize your knowledge of Content Management System (CMS) to effectively manage and update our website content.\n Apply your skills in AB Testing to optimize website performance and user experience.\n Use your expertise in ASP.NET to develop robust and scalable back-end systems.\n Leverage your skills in CSS, Bootstrap, HTML, and HTML5 for efficient and effective client-side scripting.\n Efficiently track and resolve bugs using Atlassian Jira to ensure smooth operation of our web platforms.\nRequirements\n Possess a minimum of 5 years of detail oriented experience as a Web Developer\n Demonstrable proficiency in Content Management System (CMS)\n Proven experience with AB Testing\n Strong skills in ASP.NET\n Proficient in CSS\n Extensive experience with Bootstrap\n Solid understanding of HTML and HTML5\n Able to work collaboratively in a team environment\n Strong problem-solving skills and attention to detail\n Excellent written and verbal communication skills\n Ability to manage multiple projects and meet deadlines\n Bachelor\'s degree in Computer Science or related field is preferred.\nInnovation starts with people.®\nRobert Half is the world’s first and largest specialized talent solutions firm that connects highly qualified job seekers to opportunities at great companies. We offer contract, temporary and permanent placement solutions for finance and accounting, technology, marketing and creative, legal, and administrative and customer support roles.\nRobert Half works to put you in the best position to succeed. We provide access to top jobs, competitive compensation and benefits, and free online training. Stay on top of every opportunity - whenever you choose - even on the go.\nAll applicants applying for U.S. job openings must be legally authorized to work in the United States. Benefits are available to contract/temporary professionals, including medical, vision, dental, and life and disability insurance. Hired contract/temporary professionals are also eligible to enroll in our company 401(k) plan. Visit\n".\nexperience:fresher.\nThe questions should be divided into the following categories:\nGeneral_Questions: Broad questions to assess the candidate\'s understanding of the role and organization.\nTechnical_Questions: In-depth questions that test the specific skills, tools, or technologies mentioned in the job description.\nBehavioral_Questions: Scenario-based questions to assess how the candidate might handle tasks or challenges related to the role.\nSituational_Questions: Hypothetical scenarios to evaluate decision-making and problem-solving skills.\nClosing_Questions: additional and evaluate their interest for job.\nEnsure the questions align with industry standards and reflect the key skills, responsibilities, and expectations described in the job role and description. Format the output clearly for ease of reference.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "General_Questions": [\n    "Why are you interested in this Web Developer position at Robert Half?",\n    "What do you know about Robert Half and our company culture?",\n    "What are your salary expectations for this contract position?",\n    "Describe your experience working on short-term contract projects.",\n    "How do you stay up-to-date with the latest web development technologies and trends?",\n    "What is your preferred development environment and why?"\n  ],\n  "Technical_Questions": [\n    "Explain your experience with A/B testing methodologies and tools.  Give a specific example of a successful A/B test you\'ve conducted.",\n    "Describe your experience with ASP.NET, including different versions you\'ve worked with and any specific challenges you\'ve overcome.",\n    "How familiar are you with various CMS platforms (e.g., WordPress, Drupal, Sitecore)?  Have you worked with any in a professional setting?",\n    "Describe your experience using Bootstrap for responsive web design.  Give examples of how you\'ve used it to create flexible layouts.",\n    "Explain your understanding of HTML5 and CSS, including semantic HTML and CSS preprocessors (like Sass or Less).",\n    "How would you troubleshoot a bug using Atlassian Jira? Walk me through your process.",\n    "Describe your experience with backend development and database interactions (specify technologies used).",\n    "What is your experience with version control systems like Git?"\n  ],\n  "Behavioral_Questions": [\n    "Describe a time you had to work on multiple projects simultaneously under tight deadlines. How did you prioritize your tasks?",\n    "Tell me about a time you had a conflict with a team member. How did you resolve it?",\n    "Describe a situation where you had to adapt to a changing project requirement. How did you handle it?",\n    "Give an example of a time you identified and solved a complex bug.  What was your approach?",\n    "Describe your experience working with clients or stakeholders. How do you ensure effective communication and project alignment?",\n    "How do you handle constructive criticism?"\n  ],\n  "Situational_Questions": [\n    "Imagine our website experiences a sudden drop in traffic. How would you approach troubleshooting the issue?",\n    "Let\'s say a crucial feature is not working correctly just before a major product launch.  How would you handle this situation?",\n    "You notice a colleague is using inefficient coding practices.  How would you address this situation?",\n    "A new CMS is being implemented, and you need to quickly upskill your team.  How would you approach training and knowledge transfer?",\n    "How would you approach optimizing a website for better performance and SEO?"\n  ],\n  "Closing_Questions": [\n    "Do you have any questions for me about the role or the company?",\n    "What are your career aspirations, and how does this role fit into your long-term goals?",\n    "Why should we choose you over other candidates?",\n    "What is your availability to start the contract?",\n    "What are your preferred methods of communication and collaboration?"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate feedback feedback mock interview
export const AiFeedbackReport = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate feedback report to the technical question given by user.include user_answer,ideal_answer,my_mistakes,Area_of_improvements,feedback,rating(out of 5),conclusion.Question:"Explain your experience with A/B testing methodologies and tools. Give a specific example of a successful A/B test you\'ve conducted.".User Answer:"A/B testing is a critical methodology for optimizing user experiences, improving conversion rates, and making data-driven decisions.".in json formate.\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "question": "Explain your experience with A/B testing methodologies and tools. Give a specific example of a successful A/B test you\'ve conducted.",\n  "user_answer": "A/B testing is a critical methodology for optimizing user experiences, improving conversion rates, and making data-driven decisions.",\n  "ideal_answer": "A/B testing is a methodology in which two versions of a webpage, email, or other marketing asset are shown to different user segments.  The results are tracked to determine which version performs better.  I have experience using [Specific Tool, e.g., Optimizely, Google Optimize] to conduct these tests.  The process typically involves defining a hypothesis, choosing a metric (e.g., click-through rate, conversion rate), selecting the audience, setting the test duration and sample size, implementing the variations, monitoring the results, and finally analyzing the data to draw conclusions.  \\n\\nFor example, I once conducted an A/B test on a landing page for [Product/Service].  We hypothesized that changing the call-to-action button color from blue to green would increase conversion rates.  We used [Specific Tool] to randomly assign users to either the control (blue button) or variation (green button) group.  After a week, with [Sample Size] participants, we found that the green button resulted in a [Percentage]% increase in conversion rates compared to the blue button, with a statistical significance of [p-value].  This led us to implement the green button permanently, resulting in a [Percentage]% increase in overall conversions.",\n  "my_mistakes": [\n    "The answer lacks detail on specific tools used.",\n    "No specific example of an A/B test was provided.",\n    "The response is a general definition, not a description of experience.",\n    "No mention of metrics, sample size, statistical significance, or results analysis."\n  ],\n  "area_of_improvements": [\n    "Provide concrete examples of A/B tests conducted, including specific tools used.",\n    "Quantify results with specific numbers (e.g., percentage increase, p-value).",\n    "Describe the entire process, from hypothesis to conclusion, demonstrating a comprehensive understanding.",\n    "Focus on demonstrating practical application and skills rather than just theoretical knowledge."\n  ],\n  "feedback": "Your answer demonstrates a basic understanding of A/B testing concepts, but it lacks the depth and detail expected for a technical question. To improve, provide specific examples of your work with A/B testing tools and methodologies, including quantifiable results and a detailed description of the process.  Focus on showcasing your practical experience and analytical skills in this area.",\n  "rating": 2,\n  "conclusion": "While the fundamental concept of A/B testing is understood, the answer is insufficient to demonstrate practical experience and expertise.  Further elaboration on specific projects and quantifiable results is needed."\n}\n```\n',
        },
      ],
    },
  ],
});

//generate cheat sheet for chapter
export const AiCheatSheet = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'from interview purspective create concise,organized,and purpose oriented cheat sheet for chapter "array" of course "introducation to python".include headind:content heading,explanation,code (<pre> formate) if applicable,tips.in json format',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "chapter": "Arrays in Python (Introduction)",\n  "sections": [\n    {\n      "heading": "What are Arrays?",\n      "explanation": "In Python, arrays are typically implemented using lists.  Lists are dynamic, ordered sequences of items. They can hold elements of different data types (heterogeneous).  While technically not arrays in the strict computer science sense (which usually implies a fixed-size, homogeneous data structure), lists are the closest equivalent in Python\'s built-in functionality.",\n      "code": "",\n      "tips": ["Lists are flexible but can be less efficient for numerical computation than NumPy arrays (covered in advanced courses)."]\n    },\n    {\n      "heading": "Creating Arrays (Lists)",\n      "explanation": "Lists are created using square brackets `[]` and separating elements with commas.",\n      "code": "<pre><code>\\nmy_list = [1, 2, 3, \'apple\', 4.5]\\nmy_empty_list = []\\n</code></pre>",\n      "tips": ["Use descriptive names for your lists."]\n    },\n    {\n      "heading": "Accessing Array Elements",\n      "explanation": "Access elements using zero-based indexing.  `my_list[0]` accesses the first element.",\n      "code": "<pre><code>\\nmy_list = [10, 20, 30]\\nfirst_element = my_list[0]  # first_element will be 10\\nlast_element = my_list[-1] # last_element will be 30\\n</code></pre>",\n      "tips": ["Remember Python uses zero-based indexing. Negative indices access elements from the end."]\n    },\n    {\n      "heading": "Modifying Arrays",\n      "explanation": "Lists are mutable; you can add, remove, or change elements.",\n      "code": "<pre><code>\\nmy_list = [1, 2, 3]\\nmy_list.append(4)  # Add to the end\\nmy_list[0] = 10  # Change an element\\ndel my_list[1]  # Delete an element at index 1\\nmy_list.insert(1, 20) #Insert 20 at index 1\\n</code></pre>",\n      "tips": ["Be mindful of index errors when modifying lists (IndexError)."]\n    },\n    {\n      "heading": "Iterating Through Arrays",\n      "explanation": "Use loops (e.g., `for` loop) to iterate over each element.",\n      "code": "<pre><code>\\nmy_list = [1, 2, 3]\\nfor item in my_list:\\n    print(item)\\n\\n#Iterate with index\\nfor i in range(len(my_list)):\\n    print(f\'Element at index {i}: {my_list[i]}\')\\n</code></pre>",\n      "tips": ["Choose the iteration method appropriate for your needs (with or without index)."]\n    },\n    {\n      "heading": "Common Array Operations",\n      "explanation": "Python lists have built-in methods for many common operations (e.g., `len`, `append`, `insert`, `remove`, `pop`, `sort`, `reverse`).",\n      "code": "<pre><code>\\nmy_list = [3, 1, 4, 1, 5, 9, 2, 6]\\nprint(len(my_list)) # length of list\\nmy_list.sort() #Sort in place\\nmy_list.reverse() # Reverse in place\\n</code></pre>",\n      "tips": ["Refer to Python\'s list method documentation for a complete list of functions."]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate course mcq exam
export const AiGenerateCourseMcq = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 25 mcq question by on give syllabus.include question,answer,options,explaination.syllabus :"{\n  "courseName": "Python Basics for Data Handling",\n  "description": "A beginner-friendly introduction to fundamental Python concepts essential for working with data. This course covers data types, data structures, and basic data manipulation techniques.",\n  "chapters": [\n    {\n      "chapterName": "Introduction to Python and Setting Up Your Environment",\n      "about": "This chapter introduces Python, its applications in data handling, and guides you through setting up your development environment (installing Python, choosing an IDE/text editor). We\'ll also cover basic syntax and program execution.",\n      "duration": "15 minutes"\n    },\n    {\n      "chapterName": "Data Types and Variables",\n      "about": "Learn about different data types in Python (integers, floats, strings, booleans) and how to declare and use variables. We\'ll explore type conversion and basic arithmetic operations.",\n      "duration": "20 minutes"\n    },\n    {\n      "chapterName": "Data Structures: Lists and Tuples",\n      "about": "This chapter covers lists and tuples – fundamental data structures for storing collections of data. You\'ll learn how to create, access, manipulate, and iterate through lists and tuples.",\n      "duration": "25 minutes"\n    },\n    {\n      "chapterName": "Data Structures: Dictionaries",\n      "about": "Dictionaries are introduced as key-value data structures. This chapter explains how to create, access, modify, and iterate through dictionaries, a crucial data structure for representing structured data.",\n      "duration": "25 minutes"\n    },\n    {\n      "chapterName": "Basic Data Manipulation and Input/Output",\n      "about": "This chapter covers basic data manipulation techniques including string manipulation (slicing, concatenation), working with lists and dictionaries (sorting, searching, filtering), and performing input/output operations using files.",\n      "duration": "25 minutes"\n    }\n  ]\n}".in json formate.\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "mcqs": [\n    {\n      "question": "Which of the following is NOT a valid way to install Python?",\n      "options": ["Downloading the installer from python.org", "Using a package manager like apt (on Linux)", "Installing through an IDE like PyCharm", "Downloading from a random website"],\n      "answer": "Downloading from a random website",\n      "explanation": "Always download Python from the official website (python.org) to ensure security and avoid malware."\n    },\n    {\n      "question": "What is the data type of the value \'Hello, world!\'?",\n      "options": ["Integer", "Float", "String", "Boolean"],\n      "answer": "String",\n      "explanation": "Text enclosed in single (\' \') or double (\\" \\") quotes is a string."\n    },\n    {\n      "question": "What is the result of 10 / 3 in Python?",\n      "options": ["3", "3.333...", "3.0", "Error"],\n      "answer": "3.333...",\n      "explanation": "The / operator performs floating-point division."\n    },\n    {\n      "question": "How do you declare a variable named \'age\' and assign it the value 25?",\n      "options": ["age = 25", "int age = 25;", "var age = 25;", "age := 25"],\n      "answer": "age = 25",\n      "explanation": "In Python, variable declaration is implicit.  You simply assign a value to a name."\n    },\n    {\n      "question": "Which data type is best suited for representing a collection of ordered items where the order matters?",\n      "options": ["Dictionary", "Set", "Tuple", "List"],\n      "answer": "List",\n      "explanation": "Lists are ordered and mutable (changeable)."\n    },\n    {\n      "question": "Which data structure is unordered and does not allow duplicate elements?",\n      "options": ["List", "Tuple", "Set", "Dictionary"],\n      "answer": "Set",\n      "explanation": "Sets are unordered collections of unique elements."\n    },\n    {\n      "question": "How do you access the third element in a list named \'my_list\'?",\n      "options": ["my_list[2]", "my_list[3]", "my_list(2)", "my_list(3)"],\n      "answer": "my_list[2]",\n      "explanation": "List indexing starts from 0."\n    },\n    {\n      "question": "What is the output of `print(len([1, 2, 3, 4, 5]))`?",\n      "options": ["4", "5", "6", "Error"],\n      "answer": "5",\n      "explanation": "`len()` returns the number of elements in a list."\n    },\n    {\n      "question": "What data structure is best suited for storing data in key-value pairs?",\n      "options": ["List", "Tuple", "Set", "Dictionary"],\n      "answer": "Dictionary",\n      "explanation": "Dictionaries are designed for key-value storage."\n    },\n    {\n      "question": "How do you access the value associated with the key \'name\' in a dictionary named \'my_dict\'?",\n      "options": ["my_dict[\'name\']", "my_dict.name", "my_dict(name)", "my_dict[name]"],\n      "answer": "my_dict[\'name\']",\n      "explanation": "Keys in dictionaries are accessed using square brackets."\n    },\n    {\n      "question": "What does the `append()` method do for lists?",\n      "options": ["Removes an element", "Adds an element to the beginning", "Adds an element to the end", "Sorts the list"],\n      "answer": "Adds an element to the end",\n      "explanation": "`append()` adds an item to the end of a list."\n    },\n    {\n      "question": "What is string slicing used for?",\n      "options": ["Concatenating strings", "Converting strings to numbers", "Extracting portions of a string", "Reversing a string"],\n      "answer": "Extracting portions of a string",\n      "explanation": "String slicing allows you to get substrings."\n    },\n    {\n      "question": "How do you concatenate two strings, \'Hello\' and \'world!\'?",\n      "options": ["\'Hello\' + \'world!\'", "\'Hello\'\'world!\'", "\'Hello\' \'world!\'", "\'Hello\' - \'world!\' "],\n      "answer": "\'Hello\' + \'world!\'",\n      "explanation": "The \'+\' operator concatenates strings."\n    },\n    {\n      "question": "Which built-in function can be used to sort a list?",\n      "options": ["sort()", "sorted()", "order()", "arrange()"],\n      "answer": "sort()",\n      "explanation": "`sort()` sorts the list in-place.  `sorted()` returns a new sorted list."\n    },\n    {\n      "question": "What does the `in` operator do when used with lists?",\n      "options": ["Adds an element to the list", "Removes an element from the list", "Checks if an element exists in the list", "Sorts the list"],\n      "answer": "Checks if an element exists in the list",\n      "explanation": "`in` is a membership operator."\n    },\n    {\n      "question": "How do you open a file named \'my_file.txt\' for writing in Python?",\n      "options": ["open(\'my_file.txt\', \'r\')", "open(\'my_file.txt\', \'w\')", "open(\'my_file.txt\', \'a\')", "open(\'my_file.txt\')"],\n      "answer": "open(\'my_file.txt\', \'w\')",\n      "explanation": "\'w\' mode opens a file for writing (overwriting existing content)."\n    },\n    {\n      "question": "What function is used to read the entire contents of a file into a single string?",\n      "options": ["read()", "readline()", "readlines()", "readfile()"],\n      "answer": "read()",\n      "explanation": "`read()` reads the entire file at once."\n    },\n    {\n      "question": "What does the `bool()` function do?",\n      "options": ["Converts a number to a string", "Converts a value to a boolean", "Converts a string to a number", "Converts a list to a tuple"],\n      "answer": "Converts a value to a boolean",\n      "explanation": "`bool()` returns `True` or `False` based on the value\'s truthiness."\n    },\n    {\n      "question": "Which statement is used for iteration in Python?",\n      "options": ["if", "else", "for", "while"],\n      "answer": "for",\n      "explanation": "`for` loops are used to iterate over sequences."\n    },\n    {\n      "question": "What does the `strip()` method do for strings?",\n      "options": ["Adds spaces to a string", "Removes leading/trailing spaces", "Converts to uppercase", "Reverses a string"],\n      "answer": "Removes leading/trailing spaces",\n      "explanation": "`strip()` removes whitespace from the beginning and end."\n    },\n    {\n      "question": "What is the purpose of a `#` symbol in Python?",\n      "options": ["To start a code block", "To indicate a comment", "To define a variable", "To perform arithmetic"],\n      "answer": "To indicate a comment",\n      "explanation": "Comments are used for explanations and are ignored by the interpreter."\n    },\n    {\n      "question": "What is the output of `type(3.14)`?",\n      "options": ["<class \'int\'>", "<class \'float\'>", "<class \'str\'>", "<class \'bool\'>"],\n      "answer": "<class \'float\'>",\n      "explanation": "3.14 is a floating-point number."\n    },\n    {\n      "question": "What is the result of `5 + \'5\'`?",\n      "options": ["10", "55", "TypeError", " \'55\'"],\n      "answer": "TypeError",\n      "explanation": "You cannot directly add an integer and a string.  You need to convert one to the other\'s type."\n    },\n    {\n      "question": "Which method is used to remove the last element from a list?",\n      "options": ["pop()", "remove()", "del", "append()"],\n      "answer": "pop()",\n      "explanation": "`pop()` removes and returns the last element."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate mcq feedback report
export const AiCourseMcqFeedbackReport = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'analyze and give feedback report for mcq exam data,include Overall_Performance,\nDetailed Performance Breakdown:By Subject/Topic or By Question Type,Strengths, Areas_for_Improvement,\nTime Management Insights,Recommendations,Conclusion:Encouraging remarks and summary of next steps.in json formate.Date:[{"question":"What does HTML stand for?","selected":"HyperText Markup Language","correct":true,"correctAnswer":"HyperText Markup Language"},{"question":"Which tag is used to define a paragraph in HTML?","selected":"<p>","correct":true,"correctAnswer":"<p>"},{"question":"What is the correct way to include an image named \'image.jpg\' in your HTML?","selected":"<image src=\'image.jpg\'>","correct":false,"correctAnswer":"<img src=\'image.jpg\'>"},{"question":"Which tag is used to create a hyperlink to another web page?","selected":"<url>","correct":false,"correctAnswer":"<a>"},{"question":"What tag is used to create an unordered list (a bulleted list) in HTML?","selected":"<dl>","correct":false,"correctAnswer":"<ul>"}],Time Taken: 01:11 min out of 15:00 min.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "Date": "2024-10-27", \n  "Overall_Performance": {\n    "TotalQuestions": 5,\n    "CorrectAnswers": 2,\n    "IncorrectAnswers": 3,\n    "PercentageCorrect": 40,\n    "Grade": "D" \n  },\n  "Detailed_Performance_Breakdown": {\n    "BySubject": {\n      "HTML": {\n        "TotalQuestions": 5,\n        "CorrectAnswers": 2,\n        "IncorrectAnswers": 3\n      }\n    },\n    "ByQuestionType": {\n      "MultipleChoice": {\n        "TotalQuestions": 5,\n        "CorrectAnswers": 2,\n        "IncorrectAnswers": 3\n      }\n    }\n  },\n  "Strengths": [\n    "Demonstrated basic understanding of HTML paragraph tags and the meaning of HTML."\n  ],\n  "Areas_for_Improvement": [\n    "Needs to review HTML image and hyperlink tags.  Understanding of unordered list tags also needs improvement.",\n    "Accuracy in selecting correct HTML tags requires attention.",\n    "Review core HTML concepts related to lists and image insertion."\n  ],\n  "Time_Management_Insights": {\n    "TimeTaken": "01:11 min",\n    "TimeAllowed": "15:00 min",\n    "TimeRemaining": "13:49 min",\n    "Analysis": "The exam was completed very quickly. While this might suggest confidence, it also suggests a lack of thoroughness or double-checking of answers, which could account for the lower accuracy."\n  },\n  "Recommendations": [\n    "Review the incorrect answers thoroughly and understand why the chosen option was wrong and the correct answer is correct.",\n    "Practice more HTML exercises focusing on image embedding, hyperlinks, and list creation.",\n    "Utilize online resources and tutorials to strengthen understanding of core HTML concepts.",\n    "In future tests, allocate time for reviewing answers before submitting.",\n    "Try timed practice tests to improve speed and accuracy."\n  ],\n  "Conclusion": {\n    "EncouragingRemarks": "You showed some understanding of basic HTML concepts.  With focused study and practice, you can significantly improve your score.  Don\'t get discouraged; consistent effort will lead to success.",\n    "SummaryOfNextSteps": "Prioritize reviewing the areas identified for improvement.  Use online resources and practice questions to solidify your understanding of HTML.  Develop a study plan to address weak areas and aim for a higher score on the next assessment."\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

//generate recall section course outline
export const AiRecallCourseOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate a study material for "python" for interview preparation with summery of course, List of Chapters along with summery for each chapter, Topic list in each chapter. in JSON format.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseTitle": "Python for Interview Preparation",\n  "courseSummary": "This course prepares you for Python-related technical interviews. It covers fundamental concepts, data structures, algorithms, and common interview questions.  The focus is on practical application and efficient problem-solving techniques.",\n  "chapters": [\n    {\n      "chapterTitle": "Fundamentals of Python",\n      "chapterSummary": "This chapter covers the basic syntax, data types, control flow, and functions in Python.  It lays the groundwork for understanding more advanced topics.",\n      "topics": [\n        "Variables and Data Types (Integers, Floats, Strings, Booleans)",\n        "Operators (Arithmetic, Comparison, Logical, Bitwise)",\n        "Control Flow (if-else statements, for and while loops)",\n        "Functions (Defining and calling functions, arguments and parameters, return values)",\n        "Input and Output",\n        "Working with Strings (slicing, methods)",\n        "Comments and Documentation"\n      ]\n    },\n    {\n      "chapterTitle": "Data Structures",\n      "chapterSummary": "This chapter explores fundamental Python data structures like lists, tuples, dictionaries, and sets, emphasizing their usage and time complexities for various operations.",\n      "topics": [\n        "Lists (creation, manipulation, methods, list comprehensions)",\n        "Tuples (creation, immutability, unpacking)",\n        "Dictionaries (key-value pairs, access, methods)",\n        "Sets (creation, operations, membership testing)",\n        "Time and Space Complexity Analysis of Data Structures Operations"\n      ]\n    },\n    {\n      "chapterTitle": "Object-Oriented Programming (OOP)",\n      "chapterSummary": "This chapter covers the principles of OOP in Python, including classes, objects, inheritance, polymorphism, and encapsulation.",\n      "topics": [\n        "Classes and Objects",\n        "Constructors (__init__)",\n        "Methods",\n        "Inheritance (single, multiple)",\n        "Polymorphism",\n        "Encapsulation",\n        "Abstraction"\n      ]\n    },\n    {\n      "chapterTitle": "Algorithms and Problem Solving",\n      "chapterSummary": "This chapter focuses on common algorithms and problem-solving techniques frequently encountered in Python interviews.",\n      "topics": [\n        "Searching Algorithms (Linear Search, Binary Search)",\n        "Sorting Algorithms (Bubble Sort, Insertion Sort, Merge Sort, Quick Sort)",\n        "Recursion",\n        "Dynamic Programming (basic concepts and examples)",\n        "Graph Traversal (Breadth-First Search, Depth-First Search)",\n        "Greedy Algorithms (basic concepts and examples)",\n        "Big O Notation"\n      ]\n    },\n    {\n      "chapterTitle": "Working with Files and Exceptions",\n      "chapterSummary": "This chapter covers file handling and exception management in Python, crucial for robust code.",\n      "topics": [\n        "File Input/Output (reading and writing to files)",\n        "Exception Handling (try-except-finally blocks)",\n        "Common Exceptions (IOError, ValueError, TypeError)",\n        "Custom Exceptions",\n        "Context Managers (\'with\' statement)"\n      ]\n    },\n    {\n      "chapterTitle": "Python Libraries and Modules",\n      "chapterSummary": "This chapter introduces essential Python libraries commonly used in various applications and often asked about in interviews.",\n      "topics": [\n        "NumPy (arrays, linear algebra)",\n        "Pandas (DataFrames, data manipulation)",\n        "Requests (making HTTP requests)",\n        "Unit testing with `unittest` or `pytest`",\n        "Regular Expressions"\n      ]\n    },\n    {\n      "chapterTitle": "Interview Questions and Practice",\n      "chapterSummary": "This chapter provides a collection of common Python interview questions with solutions and explanations to solidify your understanding.",\n      "topics": [\n        "Coding Challenges (easy, medium, hard)",\n        "Design Questions",\n        "Debugging and Troubleshooting",\n        "System Design Questions (for senior roles)"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generata flash card for recall section
export const AiFlashCard = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate the flashcard on course:Python for Interview Preparation,topic:Fundamentals of Python,Data Structures,Object-Oriented Programming (OOP) .in json formate with front back content,maximum 5.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "front": "What are the fundamental data types in Python?",\n    "back": "Integers (int), Floating-point numbers (float), Strings (str), Booleans (bool), and NoneType (None)."\n  },\n  {\n    "front": "Explain the difference between a list and a tuple in Python.",\n    "back": "Lists are mutable (changeable) and ordered sequences, while tuples are immutable (unchangeable) and ordered sequences.  Lists use square brackets `[]`, while tuples use parentheses `()`."\n  },\n  {\n    "front": "What is a dictionary in Python? Provide an example.",\n    "back": "A dictionary is an unordered collection of key-value pairs.  Keys must be immutable (e.g., strings, numbers, tuples), and values can be of any data type.  Example: `my_dict = {\'name\': \'Alice\', \'age\': 30}`"\n  },\n  {\n    "front": "What are the four main principles of Object-Oriented Programming (OOP)?",\n    "back": "Encapsulation, Inheritance, Polymorphism, and Abstraction."\n  },\n  {\n    "front": "Explain the concept of inheritance in OOP.",\n    "back": "Inheritance allows a class (child class or subclass) to inherit attributes and methods from another class (parent class or superclass). This promotes code reusability and establishes an \'is-a\' relationship between classes."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

//generate quiz for recall
export const AiQuizRecall = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate 5 mcq for exam on chapter:"introducation to array" of course "python", include question, answer, options, explanation. In JSON format.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Which of the following best describes a Python array?",\n    "options": [\n      "A mutable, ordered sequence of elements of the same data type.",\n      "An immutable, ordered sequence of elements of different data types.",\n      "A mutable, unordered collection of elements of the same data type.",\n      "An immutable, unordered collection of elements of different data types."\n    ],\n    "answer": "A mutable, ordered sequence of elements of the same data type.",\n    "explanation": "Python arrays (typically implemented using the `array` module) store elements of the same data type and maintain their order.  They are also mutable, meaning their contents can be changed after creation.  Lists, on the other hand, can hold elements of different data types."\n  },\n  {\n    "question": "What is the index of the first element in a Python array?",\n    "options": [\n      "1",\n      "0",\n      "-1",\n      "The index depends on the array\'s contents."\n    ],\n    "answer": "0",\n    "explanation": "Python, like many other programming languages, uses zero-based indexing.  The first element is at index 0, the second at index 1, and so on."\n  },\n  {\n    "question": "Which module is commonly used to work with arrays in Python?",\n    "options": [\n      "math",\n      "random",\n      "array",\n      "string"\n    ],\n    "answer": "array",\n    "explanation": "The `array` module provides the `array` object, which is a specialized data structure optimized for storing homogeneous data."\n  },\n  {\n    "question": "What will be the output of the following code?\\n```python\\nimport array\\narr = array.array(\'i\', [1, 2, 3, 4, 5])\\nprint(arr[2])\\n```",\n    "options": [\n      "1",\n      "2",\n      "3",\n      "Error"\n    ],\n    "answer": "3",\n    "explanation": "The code creates an array of integers and then accesses the element at index 2, which is the third element (value 3)."\n  },\n  {\n    "question": "What is the primary advantage of using arrays compared to lists in Python when dealing with numerical data of the same type?",\n    "options": [\n      "Arrays are easier to create.",\n      "Arrays consume less memory.",\n      "Arrays allow for more flexible data types.",\n      "Arrays provide faster iteration."\n    ],\n    "answer": "Arrays consume less memory.",\n    "explanation": "Because arrays store elements of the same data type, they are more memory-efficient than lists, which can contain mixed data types and require more overhead for type checking and management."\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'generate Scenario-Based Approach,Problem-Solving Approach,filll-in-the blank style,Comparison Question,Interactive Code-Based Question(if applicable),Real-World Analogy based quiz on topic:"Object-Oriented Programming (OOP)" of course:"Python for Interview Preparation".include question,option,coorect_answer,explanation.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "type": "Scenario-Based Approach",\n    "question": "You\'re designing a software system for a library.  You need to represent books and their attributes (title, author, ISBN). Which OOP concept is most suitable for this task?",\n    "options": [\n      "Inheritance",\n      "Polymorphism",\n      "Encapsulation",\n      "Class"\n    ],\n    "correct_answer": "Class",\n    "explanation": "A \'Book\' class can encapsulate the attributes (title, author, ISBN) and methods (e.g., check_out, return_book) related to a book. This effectively models the real-world entity."\n  },\n  {\n    "type": "Problem-Solving Approach",\n    "question": "You have a `Dog` class with a `bark()` method.  You want to create a `Husky` class that inherits from `Dog` but adds a `howl()` method. What OOP principle are you demonstrating?",\n    "options": [\n      "Encapsulation",\n      "Abstraction",\n      "Inheritance",\n      "Polymorphism"\n    ],\n    "correct_answer": "Inheritance",\n    "explanation": "Inheritance allows the `Husky` class to inherit properties and methods from the `Dog` class and extend them with its own unique features."\n  },\n  {\n    "type": "Fill-in-the-blank style",\n    "question": "In OOP, _______ is the process of bundling data (attributes) and methods that operate on that data within a single unit.",\n    "options": [\n      "Inheritance",\n      "Abstraction",\n      "Encapsulation",\n      "Polymorphism"\n    ],\n    "correct_answer": "Encapsulation",\n    "explanation": "Encapsulation protects the internal state of an object from direct access and modification from outside the object."\n  },\n  {\n    "type": "Comparison Question",\n    "question": "What\'s the key difference between composition and inheritance in OOP?",\n    "options": [\n      "Composition uses \'is-a\' relationship; inheritance uses \'has-a\' relationship.",\n      "Inheritance uses \'is-a\' relationship; composition uses \'has-a\' relationship.",\n      "Both use \'is-a\' relationships.",\n      "Both use \'has-a\' relationships."\n    ],\n    "correct_answer": "Inheritance uses \'is-a\' relationship; composition uses \'has-a\' relationship.",\n    "explanation": "Inheritance represents an \'is-a\' relationship (e.g., a Husky is a Dog), while composition represents a \'has-a\' relationship (e.g., a Car has an Engine)."\n  },\n  {\n    "type": "Interactive Code-Based Question",\n    "question": "What will be the output of the following Python code?\\n```python\\nclass Animal:\\n    def speak(self):\\n        print(\\"Generic animal sound\\")\\n\\nclass Dog(Animal):\\n    def speak(self):\\n        print(\\"Woof!\\")\\n\\ndog = Dog()\\ndog.speak()\\n```",\n    "options": [\n      "Generic animal sound",\n      "Woof!",\n      "Error",\n      "No output"\n    ],\n    "correct_answer": "Woof!",\n    "explanation": "This demonstrates polymorphism.  The `Dog` class overrides the `speak()` method from the `Animal` class.  The output reflects the `Dog`\'s specific implementation."\n  },\n  {\n    "type": "Real-World Analogy based quiz",\n    "question": "Which real-world analogy best represents the concept of Abstraction in OOP?",\n    "options": [\n      "A car\'s engine – you interact with the steering wheel and pedals, not the complex inner workings.",\n      "A blueprint for a house – detailed instructions for building.",\n      "A family tree showing inheritance.",\n      "A toolbox containing different tools – each performing a specific task."\n    ],\n    "correct_answer": "A car\'s engine – you interact with the steering wheel and pedals, not the complex inner workings.",\n    "explanation": "Abstraction hides complex implementation details and presents a simplified interface to the user.  The car\'s engine is a complex system, but the driver only needs to interact with basic controls."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

//geneate teach to other module
export const AiTeachToOther = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are an advanced AI trained to generate educational questions for a 'learn-by-teaching' module. Your task is to create five types of questions and key_topics:topics to be cover in that, for a given topic to help students deepen their understanding by teaching others. The question types include: Conceptual Understanding, Application-Based, Problem-Solving, Reflective, and Open-Ended Exploration.\nFor the topic:Python for Interview Preparation, generate one question for each type.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "topic": "Python for Interview Preparation",\n  "questions": [\n    {\n      "type": "Conceptual Understanding",\n      "question": "Explain the difference between `==` and `is` in Python, providing examples to illustrate when you would use each operator in a comparison.",\n      "key_topics": ["Comparison Operators", "Identity vs. Equality", "Data Structures"]\n    },\n    {\n      "type": "Application-Based",\n      "question": "Write a Python function to find the factorial of a given non-negative integer.  Explain your approach and its time complexity.",\n      "key_topics": ["Functions", "Recursion or Iteration", "Time Complexity", "Error Handling"]\n    },\n    {\n      "type": "Problem-Solving",\n      "question": "Given a list of integers, write a Python function to find the longest increasing subsequence.  Describe your algorithm and analyze its time complexity.",\n      "key_topics": ["Dynamic Programming", "Algorithms", "Time Complexity", "Arrays"]\n    },\n    {\n      "type": "Reflective",\n      "question": "Reflect on your experience tackling a particularly challenging coding problem during your interview preparation. What strategies did you employ to overcome the obstacles you encountered?",\n      "key_topics": ["Problem Solving", "Debugging", "Persistence", "Learning from Mistakes"]\n    },\n    {\n      "type": "Open-Ended Exploration",\n      "question": "Research and compare different approaches to handling exceptions in Python.  Discuss the benefits and drawbacks of each approach and provide examples of when you might choose one over another.",\n      "key_topics": ["Exception Handling", "try-except blocks", "Error Handling", "Best Practices"]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// generate que/ans section
export const AiQueAns = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a list of the most commonly asked interview questions and answers on topic: python. Include categories like behavioral, technical, problem-solving, and role-specific questions. Focus on questions that test a candidate's skills, experience, and personality traits, ensuring they apply to both entry-level and experienced positions. Provide concise, professional phrasing for each question.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "interviewQuestions": [\n    {\n      "category": "Behavioral",\n      "question": "Describe a time you had to learn a new Python library or framework quickly. How did you approach it?",\n      "answerExample": "In my previous role, I needed to integrate a new API using the Requests library. I started by reading the documentation, then experimented with small test scripts, focusing on understanding core functions first before tackling complex integrations.  I also leveraged online resources like Stack Overflow and tutorials to overcome specific challenges."\n    },\n    {\n      "category": "Behavioral",\n      "question": "Tell me about a time you encountered a difficult bug in your Python code. How did you debug it?",\n      "answerExample": "I once spent several hours debugging a seemingly simple function that unexpectedly returned incorrect results. I used print statements strategically to trace the data flow, examined the variable values step-by-step, and eventually identified an off-by-one error in an array index. This experience emphasized the importance of meticulous code review and well-placed logging."\n    },\n    {\n      "category": "Behavioral",\n      "question": "How do you stay up-to-date with the latest developments in the Python ecosystem?",\n      "answerExample": "I regularly read Python blogs, follow key influencers on Twitter, and participate in online communities like Stack Overflow and Reddit. I also attend webinars and conferences whenever possible, and actively contribute to open-source projects to learn from experienced developers."\n    },\n    {\n      "category": "Technical",\n      "question": "Explain the difference between `==` and `is` in Python.",\n      "answerExample": "`==` compares the values of two objects, while `is` compares the memory addresses (object identity).  `is` is typically faster but should be used carefully, especially with immutable types like integers and strings, where value comparisons are usually sufficient and safer."\n    },\n    {\n      "category": "Technical",\n      "question": "What are your preferred methods for handling exceptions in Python?",\n      "answerExample": "I primarily use `try...except` blocks to handle potential errors gracefully. I make sure to handle specific exception types and avoid broad `except Exception` blocks unless absolutely necessary. I also use logging to record exception details for debugging and monitoring purposes."\n    },\n    {\n      "category": "Technical",\n      "question": "Explain the concept of list comprehensions in Python and provide an example.",\n      "answerExample": "List comprehensions provide a concise way to create lists.  They follow the format `[expression for item in iterable if condition]`.  For example: `squares = [x**2 for x in range(10)]` creates a list of squares from 0 to 9."\n    },\n    {\n      "category": "Technical",\n      "question": "What are generators in Python and why are they useful?",\n      "answerExample": "Generators are functions that produce a sequence of values one at a time, using the `yield` keyword. They\'re memory-efficient because they don\'t create the entire sequence at once, making them ideal for processing large datasets or infinite sequences."\n    },\n    {\n      "category": "Problem-Solving",\n      "question": "Write a Python function to reverse a string.",\n      "answerExample": "```python\\ndef reverse_string(s):\\n  return s[::-1]\\n```"\n    },\n    {\n      "category": "Problem-Solving",\n      "question": "Given a list of numbers, write a function to find the second largest number.",\n      "answerExample": "```python\\ndef find_second_largest(nums):\\n  unique_nums = sorted(list(set(nums)))  #Remove duplicates and sort\\n  if len(unique_nums) < 2:\\n    return None # Handle cases with less than 2 unique numbers\\n  return unique_nums[-2]\\n```"\n    },\n    {\n      "category": "Role-Specific (Data Science)",\n      "question": "Explain your experience with Pandas and NumPy for data manipulation and analysis.",\n      "answerExample": "I\'ve extensively used Pandas for data cleaning, transformation, and analysis, leveraging its DataFrame structure and efficient functions. NumPy is crucial for numerical computations and array operations, particularly for data preprocessing tasks like feature scaling and handling missing values."\n    },\n    {\n      "category": "Role-Specific (Web Development)",\n      "question": "Describe your experience with Python web frameworks like Django or Flask.",\n      "answerExample": "I have experience with Flask, building RESTful APIs and web applications using its lightweight and flexible structure. I\'m familiar with routing, templating, and database integration using Flask."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate questions answer
export const AiQuestionAnswer = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "give perfect answer of this question asked in interview ,question:Describe a time you had to troubleshoot a water treatment system malfunction. What steps did you take?.include:question,answer.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "question": "Describe a time you had to troubleshoot a water treatment system malfunction. What steps did you take?",\n  "answer": "During my time as a Water Treatment Plant Operator at [Company Name], we experienced a significant drop in the output flow rate of our reverse osmosis (RO) system.  This immediately raised concerns about meeting our daily water production targets and potentially impacting our customers.  My troubleshooting process followed these steps:\\n\\n1. **Safety First:** I initiated lockout/tagout procedures on the affected sections of the RO system to prevent accidental injury.  This is paramount in any troubleshooting situation involving machinery.\\n\\n2. **Gather Data:** I systematically checked all relevant parameters. This included:\\n    * **Flow Rate Measurement:** I verified the flow meter readings at various points in the system to pinpoint the location of the flow reduction.\\n    * **Pressure Readings:** I checked the pressure gauges before and after each stage of the RO process (pre-filtration, high-pressure pump, RO membranes, etc.).  Significant pressure drops indicated potential blockages or membrane fouling.\\n    * **Water Quality Parameters:** I tested the water quality at various stages for turbidity, pH, chlorine levels, and other relevant parameters. This helped identify if the malfunction was related to feed water quality.\\n    * **System Logs:** I reviewed the system\'s automated logs to identify any recorded errors or unusual events preceding the malfunction.\\n\\n3. **Visual Inspection:**  I conducted a thorough visual inspection of the system, paying close attention to:\\n    * **Pre-filters:** I checked for signs of clogging or damage in the sediment and carbon filters.\\n    * **High-Pressure Pump:** I listened for unusual noises (e.g., grinding, vibrations) indicating mechanical problems.\\n    * **RO Membranes:** I visually inspected the membranes (if accessible) for any signs of physical damage or fouling.\\n\\n4. **Isolate the Problem:**  Through the data collection and visual inspection, I identified the issue as a significant reduction in membrane performance, likely due to fouling.  The pressure drop across the membranes was substantially higher than normal, and the flow rate was drastically reduced. \\n\\n5. **Implement Solution:** Based on my diagnosis, I implemented a chemical cleaning procedure, which involved circulating a cleaning solution through the RO membranes following the manufacturer\'s recommendations.  This involved carefully managing the chemical concentrations, temperature, and duration of the cleaning cycle.\\n\\n6. **Verification and Monitoring:** After the cleaning, I carefully monitored the flow rate, pressure, and water quality parameters.  I continued monitoring the system for 24-48 hours to ensure the cleaning was effective and the system was stable before returning it to normal operation.\\n\\n7. **Documentation:** I documented all the steps taken, including the initial problem, data collected, corrective actions, and final results in the plant\'s operational logbook. This is crucial for future reference and for improving our preventative maintenance procedures.\\n\\nBy systematically approaching the problem and utilizing the available resources, we successfully restored the RO system\'s operational efficiency and avoided any major service disruptions."\n}\n```\n',
        },
      ],
    },
  ],
});

//genearet tools and software company used
export const AiTooldSoftware = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'which are the tools and software are used in current "junior civil engineer" industry use to do their daily work or routine work. include name,use,description,top companies uses.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tools_and_software": [\n    {\n      "name": "AutoCAD",\n      "use": "Drafting, design, and documentation of civil engineering projects.",\n      "description": "A widely used computer-aided design (CAD) software for creating 2D and 3D drawings of buildings, infrastructure, and other civil engineering projects.  It\'s essential for creating plans, sections, elevations, and details.",\n      "top_companies_uses": ["Most civil engineering firms globally"]\n    },\n    {\n      "name": "Civil 3D",\n      "use": "3D modeling, design, and documentation of civil engineering projects.",\n      "description": "Autodesk\'s specialized CAD software for civil engineering, offering tools for road design, drainage design, and site grading.  It integrates with other Autodesk products.",\n      "top_companies_uses": ["AECOM, WSP, Stantec, Bechtel"]\n    },\n    {\n      "name": "Revit",\n      "use": "Building Information Modeling (BIM) for civil infrastructure projects.",\n      "description": "A BIM software that allows for collaborative design and project management.  While primarily used for buildings, it\'s increasingly used for infrastructure projects.",\n      "top_companies_uses": ["Many large AEC firms, particularly those with building and infrastructure integration"]\n    },\n    {\n      "name": "MicroStation",\n      "use": "CAD and BIM for civil engineering and other disciplines.",\n      "description": "A CAD software from Bentley Systems, offering a wide range of tools for design, modeling, and documentation.  It\'s a strong competitor to AutoCAD and Civil 3D.",\n      "top_companies_uses": ["Bentley Systems\' clients, often large infrastructure projects"]\n    },\n    {\n      "name": "Microsoft Office Suite (Word, Excel, PowerPoint)",\n      "use": "Report writing, data analysis, presentations.",\n      "description": "Essential for creating reports, analyzing data, preparing presentations, and communicating with clients and colleagues.  Used daily in all aspects of the job.",\n      "top_companies_uses": ["All civil engineering firms"]\n    },\n    {\n      "name": "Microsoft Project or Primavera P6",\n      "use": "Project scheduling and management.",\n      "description": "Used for creating project schedules, tracking progress, managing resources, and identifying potential delays. Primavera P6 is more common on larger, complex projects.",\n      "top_companies_uses": ["All firms for project scheduling,  Primavera P6 often favored for large-scale projects"]\n    },\n    {\n      "name": "GPS/Total Stations/Leveling Instruments",\n      "use": "Field surveying and data collection.",\n      "description": "Hardware used to collect data in the field, including elevation, distance, and position. Data is often then processed using software.",\n      "top_companies_uses": ["All civil engineering firms performing site work"]\n    },\n    {\n      "name": "Survey Software (e.g., Carlson, Leica GeoMos)",\n      "use": "Processing surveying data.",\n      "description": "Software for processing data collected from GPS, total stations, and leveling instruments to create accurate maps and plans.",\n      "top_companies_uses": ["Firms performing surveying work"]\n    },\n    {\n      "name": "Hydraulic Modeling Software (e.g., HEC-RAS, MIKE 11)",\n      "use": "Analyzing water flow and drainage.",\n      "description": "Used to model the flow of water in rivers, streams, and drainage systems. Helps in design of culverts, bridges and flood control measures.",\n      "top_companies_uses": ["Firms specializing in hydrology and hydraulics"]\n    },\n    {\n      "name": "Finite Element Analysis (FEA) Software (e.g., ABAQUS, ANSYS)",\n      "use": "Structural analysis and design.",\n      "description": "Used to analyze the structural performance of bridges, buildings, and other structures under various loads and conditions.",\n      "top_companies_uses": ["Larger firms and those specializing in structural engineering"]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate 30 days plan for job
export const AiDaysRemains = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "I need a 30-day study plan to prepare for a job as a role: Full Stack Engineer - React JS and Node JS (Remote). The job description includes the following key skills and responsibilities: We are seeking a talented and motivated Full Stack Engineer proficient in React.js and Node.js to join our dynamic team. You will be responsible for designing, developing, and maintaining scalable web applications, ensuring seamless collaboration between front-end and back-end components.\nYou should have an eye for detail and the experience of working with a small agile team to build web apps across devices that create an impact.\nWe are building some powerful technology for the taxi-fleet industry in India and are looking for generals to come along with us for the ride.\nKey Responsibilities:\nDevelop and maintain high-quality web applications using React.js for the front-end and Node.js for the back-end.\nDesign and implement RESTful APIs to support application functionality.\nCollaborate with cross-functional teams, including designers and product managers, to translate requirements into technical solutions.\nOptimize applications for maximum speed and scalability.\nDebug and resolve technical issues in a timely manner.\nWrite clean, modular, and well-documented code.\nStay updated with emerging technologies and best practices in web development.\nKey Skills and Qualifications:\nStrong experience with React.js and its ecosystem (e.g., Redux, Hooks).\nProficient in Node.js and back-end frameworks \nExperience with database technologies like MongoDB, or similar\nFamiliarity with version control systems, especially Git.\nStrong understanding of HTML, CSS, and JavaScript\nExperience with cloud platforms (AWS, Azure, or GCP).\nMy current skill level in each area is:html-3,css-4,javascript-5,react-3,nextjs-4,mongodb-3,mysql-4.\nThe plan should be broken down into daily or weekly tasks, including specific resources (e.g., online courses, books, practice exercises) where possible. Prioritize tasks based on the importance of each skill for the job and my current skill level. The plan should also include time for review and practice tests. Finally, suggest realistic time allocation for each task, considering a daily study time of approximately :2-3 hours.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "studyPlan": {\n    "title": "30-Day Full Stack Engineer (React & Node.js) Study Plan",\n    "description": "Intensive plan to prepare for a remote Full Stack Engineer role focusing on React.js and Node.js.  Assumes 2-3 hours of daily study time.",\n    "weeks": [\n      {\n        "weekNumber": 1,\n        "focus": "React Fundamentals & Node.js Basics",\n        "days": [\n          {"day": 1, "tasks": ["Review React fundamentals (Hooks, components, lifecycle methods) using freeCodeCamp\'s React course (2 hours)"]},\n          {"day": 2, "tasks": ["Practice React component creation and state management (1 hour),  Begin Node.js basics (installation, modules, npm) using a Node.js tutorial on freeCodeCamp or MDN (2 hours)"]},\n          {"day": 3, "tasks": ["Advanced React concepts (context API, Redux) using Scrimba\'s interactive tutorials (2 hours)"]},\n          {"day": 4, "tasks": ["Build a simple React app (to-do list or counter) (2 hours), Node.js HTTP server setup and basic routing (1 hour)"]},\n          {"day": 5, "tasks": ["Review and Refactor React app (1 hour),  Explore Node.js Express.js framework (1 hour), Practice Problem Solving on HackerRank"]},\n          {"day": 6, "tasks": ["React project - work on a small app using React hooks and context API (2 hours)"]},\n          {"day": 7, "tasks": ["Review and plan for next week (1 hour), Build a simple API with Node.js and Express.js (1-2 hours)"]}\n        ]\n      },\n      {\n        "weekNumber": 2,\n        "focus": "Node.js APIs and MongoDB",\n        "days": [\n          {"day": 8, "tasks": ["Deep dive into Express.js middleware (2 hours)"]},\n          {"day": 9, "tasks": ["Implement RESTful API endpoints with Express.js (2 hours)"]},\n          {"day": 10, "tasks": ["Introduction to MongoDB and Mongoose (2 hours), Build a small API that interacts with a MongoDB database (1 hour)"]},\n          {"day": 11, "tasks": ["Practice Mongoose queries and data modelling (2 hours)"]},\n          {"day": 12, "tasks": ["Build a full CRUD API (Create, Read, Update, Delete) using Node.js, Express.js and MongoDB (2 hours)"]},\n          {"day": 13, "tasks": ["Review Week 2, Refactor API for efficiency and better structure (2 hours)"]},\n          {"day": 14, "tasks": ["Practice API testing using Postman (2 hours)"]}\n        ]\n      },\n      {\n        "weekNumber": 3,\n        "focus": "Connecting React to Backend, Testing, and Deployment",\n        "days": [\n          {"day": 15, "tasks": ["Connect React frontend to Node.js/MongoDB backend (CRUD operations) (2 hours)"]},\n          {"day": 16, "tasks": ["Implement authentication and authorization in your API (2 hours)"]},\n          {"day": 17, "tasks": ["Learn about unit and integration testing (Jest, Supertest) (2 hours)"]},\n          {"day": 18, "tasks": ["Write tests for your API and React components (2 hours)"]},\n          {"day": 19, "tasks": ["Introduction to cloud platforms (AWS, Azure, or GCP - choose one) using official documentation (2 hours)"]},\n          {"day": 20, "tasks": ["Deploy your app to a cloud platform (2 hours)"]},\n          {"day": 21, "tasks": ["Review and refine your deployment process (1 hour),  Practice on Leetcode/Codewars (1 hour)"]}\n        ]\n      },\n      {\n        "weekNumber": 4,\n        "focus": "Advanced Topics, Practice and Mock Interviews",\n        "days": [\n          {"day": 22, "tasks": ["Learn about state management libraries (Redux Toolkit is recommended) (2 hours)"]},\n          {"day": 23, "tasks": ["Explore Next.js features (if time permits) (2 hours)"]},\n          {"day": 24, "tasks": ["Refactor existing projects to improve performance and scalability (2 hours)"]},\n          {"day": 25, "tasks": ["Practice coding challenges related to full-stack development (2 hours)"]},\n          {"day": 26, "tasks": ["Prepare for mock interviews with focus on system design and behavioral questions (2 hours)"]},\n          {"day": 27, "tasks": ["Conduct mock interviews with a friend or mentor (2-3 hours)"]},\n          {"day": 28, "tasks": ["Review all concepts, refine resume and portfolio (2 hours)"]},\n          {"day": 29, "tasks": ["Final practice test and refine your project (2 hours)"]},\n          {"day": 30, "tasks": ["Relax and prepare for your interviews! (Rest day)"]}\n        ]\n      }\n    ],\n    "resources": [\n      "freeCodeCamp",\n      "MDN Web Docs",\n      "Scrimba",\n      "Official React Documentation",\n      "Official Node.js Documentation",\n      "MongoDB University",\n      "AWS/Azure/GCP documentation",\n      "HackerRank",\n      "LeetCode",\n      "Codewars"\n    ]\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

//generate follow up mail
export const AiFollowUpMail = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Write a professional and personalized follow-up email for a "web developer" interview at "google" with "nikhil kandhare", expressing gratitude for the opportunity, referencing specific details discussed during the interview, reiterating enthusiasm for the role, highlighting key qualifications, and inquiring about the next steps in the hiring process, while offering to provide additional information if needed, in a polite, professional, and concise tone.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "subject": "Follow Up - Web Developer Interview",\n  "to": "nikhil.kandhare@google.com", \n  "from": "[Your Email Address]",\n  "body": "Dear Nikhil,\\n\\nThank you so much for taking the time to speak with me yesterday about the Web Developer position at Google. I enjoyed learning more about the team\'s work on [mention a specific project or initiative discussed, e.g., the new user interface for Google Maps] and discussing how my experience in [mention a specific skill, e.g., React development and responsive design] aligns with the requirements. \\n\\nI remain very enthusiastic about this opportunity.  My experience in [mention another relevant skill or experience, e.g., building scalable backend systems using Node.js] and my proven ability to [mention a quantifiable achievement, e.g., increase website load speed by 20%] directly address the challenges you outlined. \\n\\nCould you please provide an update on the next steps in the hiring process? I am happy to provide any additional information you may require.\\n\\nThank you again for your time and consideration.\\n\\nSincerely,\\n[Your Name]\\n[Your Phone Number]\\n[Your LinkedIn Profile URL (Optional)]"\n}\n```\n',
        },
      ],
    },
  ],
});

//generate engaging content for course
// export const AiEngagingContent = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'chapterName: "Basic Structure of an HTML Document". chapteDescription: "Understanding the `<html>`, `<head>`, and `<body>` elements.  The role of the `<title>` tag and other essential elements.". on the basic of give content generate engaging content like 10 odd one out,10 match the pair,10 flash card.in json formate.',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "chapterName": "Basic Structure of an HTML Document",\n  "chapterDescription": "Understanding the `<html>`, `<head>`, and `<body>` elements. The role of the `<title>` tag and other essential elements.",\n  "activities": [\n    {\n      "type": "Odd One Out",\n      "title": "HTML Element Odd One Out",\n      "description": "Identify the element that doesn\'t belong in each group.  Explain your answer.",\n      "questions": [\n        { "group": ["<html>", "<head>", "<body>", "<p>"], "oddOne": "<p>", "explanation": "<p> is a content element, while the others are structural elements." },\n        { "group": ["<h1>", "<h2>", "<p>", "<title>"], "oddOne": "<title>", "explanation": "<title> is a meta-data element; the others are content elements." },\n        { "group": ["<meta>", "<link>", "<title>", "<style>"], "oddOne": "<title>", "explanation": "<title> is for the page title; the others are for linking external resources or adding styles."},\n        { "group": ["<div>", "<span>", "<img>", "<body>"], "oddOne": "<body>", "explanation": "<body> is the main container; the others are inline or block level containers."},\n        { "group": ["<script>", "<link>", "<img>", "<style>"], "oddOne": "<img>", "explanation": "<img> displays an image; the others involve external or embedded code." },\n        { "group": ["<header>", "<footer>", "<section>", "<a>"], "oddOne": "<a>", "explanation": "<a> is a hyperlink, while the others are structural elements."},\n        { "group": ["<ul>", "<ol>", "<li>", "<p>"], "oddOne": "<p>", "explanation": "<p> is a paragraph; the others are list elements."},\n        { "group": ["<article>", "<aside>", "<nav>", "<p>"], "oddOne": "<p>", "explanation": "<p> is a paragraph, while the others are structural elements for different content types."},\n        { "group": ["<h1>", "<h2>", "<h3>", "<br>"], "oddOne": "<br>", "explanation": "<br> is a line break, while the others are headings."},\n        { "group": ["<main>", "<section>", "<article>", "<body>"], "oddOne": "<body>", "explanation": "<body> encompasses all content; the others are content sections within the body."}\n      ]\n    },\n    {\n      "type": "Match the Pair",\n      "title": "HTML Element Matching",\n      "description": "Match the HTML element with its best description.",\n      "questions": [\n        {"element": "<html>", "description": "The root element of the HTML page"},\n        {"element": "<head>", "description": "Contains meta-information about the HTML page"},\n        {"element": "<body>", "description": "Contains the visible content of the HTML page"},\n        {"element": "<title>", "description": "Specifies a title for the HTML page"},\n        {"element": "<meta>", "description": "Provides meta-information (e.g., character set)"},\n        {"element": "<link>", "description": "Links to external resources (e.g., CSS)"},\n        {"element": "<script>", "description": "Embeds client-side scripts (e.g., JavaScript)"},\n        {"element": "<style>", "description": "Contains style information"},\n        {"element": "<p>", "description": "Defines a paragraph"},\n        {"element": "<h1>", "description": "Defines a level 1 heading"}\n      ]\n    },\n    {\n      "type": "Flashcard",\n      "title": "HTML Element Flashcards",\n      "description": "Use these flashcards to test your knowledge of HTML elements.",\n      "questions": [\n        {"front": "<html>", "back": "The root element of the HTML page"},\n        {"front": "<head>", "back": "Contains meta-information (title, links, scripts)"},\n        {"front": "<body>", "back": "Contains the visible page content"},\n        {"front": "<title>", "back": "Sets the title displayed in the browser tab"},\n        {"front": "<meta charset=\\"UTF-8\\">", "back": "Specifies character encoding"},\n        {"front": "<link rel=\\"stylesheet\\" href=\\"style.css\\">", "back": "Links an external stylesheet"},\n        {"front": "<script src=\\"script.js\\"></script>", "back": "Includes an external JavaScript file"},\n        {"front": "<p>", "back": "Represents a paragraph of text"},\n        {"front": "<h1>", "back": "Defines a level 1 heading"},\n        {"front": "<div>", "back": "A generic container for grouping elements"}\n      ]\n    }\n  ]\n}\n```\n',
//         },
//       ],
//     },
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'chapterName: "Basic Structure of an HTML Document". chapteDescription: "Understanding the `<html>`, `<head>`, and `<body>` elements.  The role of the `<title>` tag and other essential elements.". on the basic of give content generate engaging content like 10 odd one out,10 flash card.in json formate.',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "chapterName": "Basic Structure of an HTML Document",\n  "chapterDescription": "Understanding the `<html>`, `<head>`, and `<body>` elements. The role of the `<title>` tag and other essential elements.",\n  "activities": [\n    {\n      "type": "Odd One Out",\n      "title": "HTML Element Odd One Out",\n      "description": "Identify the element that doesn\'t belong in each group. Explain your reasoning.",\n      "questions": [\n        {"group": ["<html>", "<head>", "<body>", "<p>"], "oddOne": "<p>", "reason": "<p> is a content element, while the others are structural containers."},\n        {"group": ["<h1>", "<h2>", "<p>", "<title>"], "oddOne": "<title>", "reason": "<title> is a meta-element; others are content elements."},\n        {"group": ["<meta>", "<link>", "<style>", "<img>"], "oddOne": "<img>", "reason": "<img> displays an image; others define metadata or styling."},\n        {"group": ["<div>", "<span>", "<p>", "<body>"], "oddOne": "<body>", "reason": "<body> is the root of visible content; others are containers within the body."},\n        {"group": ["<script>", "<link>", "<style>", "<article>"], "oddOne": "<article>", "reason": "<article> is a content section; others add functionality or style."},\n        {"group": ["<header>", "<footer>", "<nav>", "<br>"], "oddOne": "<br>", "reason": "<br> is a line break, while others are structural elements."},\n        {"group": ["<ul>", "<ol>", "<li>", "<div>"], "oddOne": "<div>", "reason": "<div> is a generic container; others are list elements."},\n        {"group": ["<section>", "<article>", "<aside>", "<p>"], "oddOne": "<p>", "reason": "<p> is a paragraph; others are content sections."},\n        {"group": ["<h1>", "<h2>", "<h3>", "<a>"], "oddOne": "<a>", "reason": "<a> is a hyperlink, others are heading elements."},\n        {"group": ["<main>", "<body>", "<header>", "<footer>"], "oddOne": "<body>", "reason": "<body> contains all; others are sections within the body."}\n      ]\n    },\n    {\n      "type": "Flashcard",\n      "title": "HTML Element Flashcards",\n      "description": "Test your knowledge of basic HTML elements.",\n      "questions": [\n        {"front": "<html>", "back": "The root element of an HTML document"},\n        {"front": "<head>", "back": "Contains metadata like the page title and links to external resources"},\n        {"front": "<body>", "back": "Contains the visible content of the HTML page"},\n        {"front": "<title>", "back": "Specifies the title that appears in the browser tab"},\n        {"front": "<meta charset=\\"UTF-8\\">", "back": "Specifies the character encoding (usually UTF-8)"},\n        {"front": "<link rel=\\"stylesheet\\" href=\\"style.css\\">", "back": "Links an external stylesheet"},\n        {"front": "<script src=\\"script.js\\"></script>", "back": "Includes an external JavaScript file"},\n        {"front": "<p>", "back": "Represents a paragraph of text"},\n        {"front": "<h1> to <h6>", "back": "Define heading levels (h1 being the most important)"},\n        {"front": "<div>", "back": "A generic container for grouping elements"}\n      ]\n    }\n  ]\n}\n```\n',
//         },
//       ],
//     },
//   ],
// });

//generate match the pair
// export const AiMatchThePair = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'chapterName: "Basic Structure of an HTML Document". chapteDescription: "Understanding the <html>, <head>, and <body> elements.  The role of the <title> tag and other essential elements.". on the basic of give content generate engaging content like 10 match the pair.in json formate.',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "title": "HTML Structure Match-Up!",\n  "instructions": "Match the HTML element with its best description.  Good luck!",\n  "matches": [\n    {\n      "element": "<html>",\n      "description": "The root element of the HTML page; contains all other elements."\n    },\n    {\n      "element": "<head>",\n      "description": "Contains meta-information about the HTML document, such as the title and character set."\n    },\n    {\n      "element": "<body>",\n      "description": "Contains the visible page content, such as headings, paragraphs, images, and links."\n    },\n    {\n      "element": "<title>",\n      "description": "Specifies a title for the HTML page (which is shown in the browser\'s title bar or tab)."\n    },\n    {\n      "element": "<meta charset=\\"UTF-8\\">",\n      "description": "Specifies the character encoding for the HTML document (usually UTF-8)."\n    },\n    {\n      "element": "<h1> to <h6>",\n      "description": "Defines HTML headings; <h1> is the most important heading."\n    },\n    {\n      "element": "<p>",\n      "description": "Defines a paragraph of text."\n    },\n    {\n      "element": "<a>",\n      "description": "Defines a hyperlink, used to link from one page to another."\n    },\n    {\n      "element": "<img>",\n      "description": "Embeds an image into the HTML page."\n    },\n    {\n      "element": "<script>",\n      "description": "Contains client-side scripts (like JavaScript)."\n    }\n  ]\n}\n```\n',
//         },
//       ],
//     },
//   ],
// });

//generate enggaging content
export const AiEngagingContent = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'chapterName: "Basic Structure of an HTML Document". chapteDescription: "Understanding the <html>, <head>, and <body> elements.  The role of the <title> tag and other essential elements.". on the basic of give content generate engaging content like 10 match the pair, 10 odd one out,10 flashcard.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "chapterName": "Basic Structure of an HTML Document",\n  "chapterDescription": "Understanding the <html>, <head>, and <body> elements. The role of the <title> tag and other essential elements.",\n  "activities": {\n    "matchThePairs": [\n      { "term": "<html>", "match": "Root element of the document" },\n      { "term": "<head>", "match": "Contains meta-information" },\n      { "term": "<body>", "match": "Contains visible page content" },\n      { "term": "<title>", "match": "Specifies a title for the HTML page" },\n      { "term": "<h1> to <h6>", "match": "Heading levels" },\n      { "term": "<p>", "match": "Paragraph element" },\n      { "term": "<a>", "match": "Hyperlink element" },\n      { "term": "<img>", "match": "Image element" },\n      { "term": "<!DOCTYPE html>", "match": "Document type declaration" },\n      { "term": "<meta charset=\\"UTF-8\\">", "match": "Specifies character encoding" }\n    ],\n    "oddOneOut": [\n      { "options": ["<html>", "<head>", "<body>", "<div>", "<p>"], "oddOne": "<p>" , "reason": "Others are structural containers; <p> is for paragraph text."},\n      { "options": ["<h1>", "<h2>", "<h3>", "<p>", "<h4>"], "oddOne": "<p>", "reason": "Others are heading levels; <p> is a paragraph." },\n      { "options": ["<title>", "<meta>", "<link>", "<script>", "<style>"], "oddOne": "<title>", "reason": "Others provide external or internal resources; <title> is page title." },\n      { "options": ["<div>", "<span>", "<section>", "<header>", "<footer>"], "oddOne": "<span>", "reason": "Others are major structural elements; <span> is inline."},\n      { "options": ["<img src=\\"...\\">", "<audio src=\\"...\\">", "<video src=\\"...\\">", "<p>", "<canvas>"], "oddOne": "<p>", "reason": "Others are multimedia elements; <p> is a paragraph."},\n      { "options": ["alt", "src", "href", "style", "width"], "oddOne": "width", "reason": "Others are attributes for linking or describing content; width is for dimensions."},\n      { "options": ["<ul>", "<ol>", "<li>", "<dl>", "<p>"], "oddOne": "<p>", "reason": "Others are list elements; <p> is a paragraph."},\n      { "options": ["<table", "<tr>", "<td>", "<p>", "<th>"], "oddOne": "<p>", "reason": "Others are table elements; <p> is a paragraph."},\n      { "options": ["<form>", "<input>", "<button>", "<p>", "<select>"], "oddOne": "<p>", "reason": "Others are form elements; <p> is a paragraph."},\n      { "options": ["<!DOCTYPE html>", "<html>", "<head>", "<body>", "<br>"], "oddOne": "<br>", "reason": "Others are core structural elements; <br> is a line break."}\n    ],\n    "flashcards": [\n      { "front": "<html>", "back": "The root element of an HTML document." },\n      { "front": "<head>", "back": "Contains meta-information, like the title and character set." },\n      { "front": "<body>", "back": "Contains the visible page content." },\n      { "front": "<title>", "back": "Specifies a title for the HTML page (appears in the browser tab)." },\n      { "front": "<h1> to <h6>", "back": "Heading elements, from most important (<h1>) to least (<h6>)." },\n      { "front": "<p>", "back": "Paragraph element." },\n      { "front": "<a>", "back": "Anchor element (used for hyperlinks)." },\n      { "front": "<img>", "back": "Image element." },\n      { "front": "src attribute", "back": "Specifies the URL for an image or other resource." },\n      { "front": "alt attribute", "back": "Provides alternative text for images (for accessibility)." }\n    ]\n  }\n}\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "Design a set of five interview-style questions on the topic of 'arrays in Python', focusing on common use cases, best practices, and edge cases. Each question should be concise, clear, and objective. Provide the questions and ideal answers in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "questions": [\n    {\n      "question": "Describe three common use cases for arrays (or lists) in Python, providing a brief example for each.",\n      "idealAnswer": "Three common use cases for lists in Python are:\\n1. **Storing sequences of data:**  e.g., `names = [\'Alice\', \'Bob\', \'Charlie\']`  to store a list of names.\\n2. **Representing tabular data:** e.g., `data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]` to represent a 3x3 matrix.\\n3. **Implementing stacks or queues:**  A list can easily be used as a LIFO (stack) or FIFO (queue) data structure using `append()` and `pop()` or `pop(0)` methods respectively."\n    },\n    {\n      "question": "Explain the difference between using a list and a NumPy array for numerical computations. When would you choose one over the other?",\n      "idealAnswer": "Lists are general-purpose containers, while NumPy arrays are specifically designed for numerical operations. NumPy arrays offer significant performance advantages for mathematical computations due to vectorization and optimized underlying implementations.  Choose NumPy arrays for large numerical datasets and computationally intensive tasks. Use lists for general-purpose data storage and manipulation where performance isn\'t paramount."\n    },\n    {\n      "question": "How would you efficiently find the largest and smallest numbers within a large list of numbers? Discuss time complexity.",\n      "idealAnswer": "The most efficient way is to use the built-in `min()` and `max()` functions.  These have O(n) time complexity, where n is the number of elements in the list, meaning they scale linearly with the size of the data.  A custom loop would also have O(n) complexity but `min()` and `max()` are optimized and more concise."\n    },\n    {\n      "question": "Describe a potential edge case or error you might encounter when working with arrays/lists in Python, and how you\'d handle it.  Give a code example.",\n      "idealAnswer": "One common edge case is accessing an index that is out of bounds.  This results in an `IndexError`.  Example: `my_list = [1, 2, 3]; print(my_list[3])`.  This would cause an error.  To handle it, you can use exception handling (try-except block) or check the index before accessing it: `if 0 <= index < len(my_list): print(my_list[index])`."\n    },\n    {\n      "question": "What are some best practices for working with arrays/lists to ensure code readability and efficiency? Provide at least two examples.",\n      "idealAnswer": "Best practices include:\\n1. **Use descriptive variable names:**  Instead of `a = [1, 2, 3]`, use `numbers = [1, 2, 3]` for better readability.\\n2. **Avoid unnecessary list copies:**  Creating many copies of large lists can significantly impact memory and performance.  Consider using slicing with caution or in-place operations when possible.\\n3. **Utilize list comprehensions:**  List comprehensions provide concise and efficient ways to create new lists from existing ones, often faster than explicit loops."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//generate referral messages
export const AiJobReferral = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'job_role: "web developer" job_id:"521258",company:"xyz co." Referrer\'s Name: "nikhil k". relation with Referrer\'s: "unknown" ,my_experince: "fresher". Write a professional and personalized job referral LinkedIn message and email using the following structure:\nGreeting and Personal Connection, Mention the Job You’re Interested In, Explain Why You Are a Good Fit, Make a Polite Request for Referral, Attach Your Resume (if appropriate)\nThe tone should be respectful, professional, and enthusiastic. Tailor the message to be concise and targeted.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "linkedin_message": {\n    "subject": "Job Referral Request - Web Developer at xyz co. (Job ID: 521258)",\n    "body": "Hi Nikhil,\\n\\nHope you\'re doing well!  I\'m reaching out because I saw you\'re connected with xyz co., and I\'m very interested in their Web Developer position (Job ID: 521258). As a recent graduate with a strong foundation in [mention specific technologies e.g., HTML, CSS, JavaScript, React], I\'m eager to begin my career in web development.\\n\\nI\'m confident my skills and enthusiasm align well with xyz co.\'s requirements. My resume, attached for your review, highlights my relevant projects and academic achievements.  I\'d be grateful if you\'d consider referring my application.  Thank you for your time and consideration.\\n\\nBest regards,\\n[Your Name]"\n  },\n  "email_message": {\n    "subject": "Job Referral Request - Web Developer at xyz co. (Job ID: 521258)",\n    "body": "Dear Nikhil,\\n\\nI hope this email finds you well.\\n\\nMy name is [Your Name], and I\'m writing to you because I\'m highly interested in the Web Developer position (Job ID: 521258) at xyz co. that I saw advertised [mention where you saw it - LinkedIn, company website etc.]. As a fresher, I\'m incredibly enthusiastic about starting my career in web development and believe my skills in [mention specific technologies e.g., HTML, CSS, JavaScript, React] would be a valuable asset to your team.\\n\\nI\'ve attached my resume for your review, which details my relevant projects and academic achievements.  I\'d be very grateful if you would consider referring my application.\\n\\nThank you for your time and consideration. I look forward to hearing from you soon.\\n\\nSincerely,\\n[Your Name]\\n[Your Phone Number]\\n[Your Email Address]\\n[Your LinkedIn Profile URL (Optional)]"\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

//generate points from paragraph
export const AiGeneratePoints = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Read the following paragraph and extract its main points in the form of concise bullet points. Summarize key ideas, arguments, or critical details while keeping the language short, simple and precise.in json formate.Paragraph:"Model evaluation is the process of assessing the performance of a machine learning model on unseen data. It involves using appropriate evaluation metrics to quantify how well the model generalizes to new data and makes accurate predictions. Effective model evaluation is crucial for building reliable and trustworthy models."',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "mainPoints": [\n    "Model evaluation assesses machine learning model performance on unseen data.",\n    "Evaluation uses metrics to quantify generalization and prediction accuracy.",\n    "Effective evaluation is crucial for reliable and trustworthy models."\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//translate
export const AiTraslator = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "\"Translate the following text from English to Marathi:\n'Model evaluation is the process of assessing the performance of a machine learning model on unseen data. It involves using appropriate evaluation metrics to quantify how well the model generalizes to new data and makes accurate predictions. Effective model evaluation is crucial for building reliable and trustworthy models.'\"in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "english": "Model evaluation is the process of assessing the performance of a machine learning model on unseen data. It involves using appropriate evaluation metrics to quantify how well the model generalizes to new data and makes accurate predictions. Effective model evaluation is crucial for building reliable and trustworthy models.",\n  "marathi": "मॉडेल मूल्यमापन हे अदृश्य डेटावर मशीन लर्निंग मॉडेलच्या कामगिरीचे मूल्यांकन करण्याची प्रक्रिया आहे. यात मॉडेल नवीन डेटावर किती चांगले सामान्यीकरण करते आणि अचूक अंदाज लावते हे मोजण्यासाठी योग्य मूल्यमापन मेट्रिक्सचा वापर करणे समाविष्ट आहे. प्रभावी मॉडेल मूल्यमापन हे विश्वसनीय आणि विश्वासार्ह मॉडेल तयार करण्यासाठी अत्यंत महत्त्वाचे आहे."\n}\n```\n',
        },
      ],
    },
  ],
});

//generate role more information
export const AiRoleMoreInfo = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Describe the role of "web developer". Include detailed information on the following aspects:\nCore Responsibilities, Skills and Qualifications, latest Tools and Technologies ,Work Environment, Career Path, Challenges and Rewards, Industry Relevance,companies hire,average salery(in rupees).in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "role": "Web Developer",\n  "description": "A web developer is responsible for building and maintaining websites and web applications.  This involves a wide range of tasks, from designing the user interface to writing the code that powers the website\'s functionality.",\n  "coreResponsibilities": [\n    "Designing and developing user interfaces (UI) and user experiences (UX)",\n    "Writing clean, efficient, and well-documented code",\n    "Testing and debugging code to ensure functionality and performance",\n    "Collaborating with designers, project managers, and other developers",\n    "Integrating data from various sources into web applications",\n    "Implementing security measures to protect web applications from vulnerabilities",\n    "Optimizing websites for speed and performance",\n    "Maintaining and updating existing websites and applications",\n    "Troubleshooting and resolving technical issues",\n    "Staying up-to-date with the latest web technologies and trends"\n  ],\n  "skillsAndQualifications": [\n    "Proficiency in at least one programming language (e.g., JavaScript, Python, PHP, Java, Ruby)",\n    "Understanding of front-end technologies (HTML, CSS, JavaScript, React, Angular, Vue.js)",\n    "Knowledge of back-end technologies (databases, server-side languages, APIs)",\n    "Experience with version control systems (Git)",\n    "Familiarity with responsive design and mobile development",\n    "Problem-solving and analytical skills",\n    "Teamwork and communication skills",\n    "Ability to work independently and manage time effectively",\n    "Bachelor\'s degree in computer science or a related field (often preferred, but not always required)"\n  ],\n  "latestToolsAndTechnologies": [\n    "JavaScript frameworks (React, Angular, Vue.js, Svelte)",\n    "CSS frameworks (Bootstrap, Tailwind CSS, Material UI)",\n    "Node.js and npm",\n    "Backend frameworks (Express.js, Django, Ruby on Rails, Spring Boot)",\n    "Databases (MySQL, PostgreSQL, MongoDB, Firebase)",\n    "Cloud platforms (AWS, Azure, Google Cloud)",\n    "Containerization (Docker, Kubernetes)",\n    "Testing frameworks (Jest, Cypress, Selenium)",\n    "Version control (Git, GitHub, GitLab, Bitbucket)",\n    "WebAssembly (Wasm)"\n  ],\n  "workEnvironment": [\n    "Often in an office setting, but remote work is increasingly common",\n    "May involve working in teams or individually",\n    "Can be fast-paced and demanding, especially during project deadlines",\n    "Requires a high level of focus and attention to detail",\n    "Opportunities for collaboration and knowledge sharing with colleagues"\n  ],\n  "careerPath": [\n    "Junior Web Developer",\n    "Web Developer",\n    "Senior Web Developer",\n    "Lead Web Developer/Team Lead",\n    "Technical Architect",\n    "Software Engineer",\n    "Full-Stack Developer"\n  ],\n  "challengesAndRewards": {\n    "challenges": [\n      "Keeping up with constantly evolving technologies",\n      "Meeting tight deadlines and managing multiple projects",\n      "Troubleshooting complex technical issues",\n      "Working with diverse teams and personalities",\n      "Dealing with client expectations"\n    ],\n    "rewards": [\n      "Creating innovative and impactful websites and applications",\n      "Solving complex technical problems and seeing the results",\n      "Continuously learning and developing new skills",\n      "Working on challenging and rewarding projects",\n      "Making a tangible contribution to the digital world"\n    ]\n  },\n  "industryRelevance": "Web development is a highly relevant and in-demand field.  Almost every business and organization requires a web presence, creating a constant need for skilled web developers.",\n  "companiesThatHire": [\n    "Software companies",\n    "Web design agencies",\n    "E-commerce businesses",\n    "Marketing agencies",\n    "Startups",\n    "Large corporations",\n    "Government agencies"\n  ],\n  "averageSalaryInRupees": {\n    "note": "Salaries vary greatly depending on experience, location, skills, and company.  These are rough estimates and can fluctuate significantly.",\n    "junior": "300000 - 600000 per year",\n    "midLevel": "600000 - 1500000 per year",\n    "senior": "1500000 - 3000000+ per year"\n  }\n}\n```\n',
        },
      ],
    },
  ],
});

// generate passion and all
// export const AiGeneratePassion = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: "As a First year student, i have no knowledge of \"web developer\" but i want to know that web development will be my passion or not. to check it ask me question that align with core value and principles of web development which answer may be yes, no, can't say. question should be align with key components of passion and principle of web developer. include question, option: yes, no, can't say.in json formate.",
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n[\n  {\n    "question": "Do you enjoy solving complex problems by breaking them down into smaller, manageable parts?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable learning new technologies and languages constantly, as web development is a rapidly evolving field?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Does the idea of building something from scratch and seeing it come to life online excite you?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you detail-oriented and patient enough to debug code and troubleshoot issues for hours if needed?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you find yourself drawn to aesthetically pleasing and user-friendly designs?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Would you be happy spending a significant amount of time working independently on a project?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable working with both visual elements (design) and logical elements (code)?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you enjoy collaborating with others, such as designers or back-end developers, to achieve a common goal?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Does the prospect of continually improving your skills and staying up-to-date with the latest web development trends motivate you?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to accept constructive criticism and use it to refine your work?",\n    "options": ["Yes", "No", "Can\'t say"]\n  }\n]\n```\n',
//         },
//       ],
//     },
//   ],
// });

//generate passion result
// export const AiGeneratePassionResult = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'check that i will have passion in "web development" or not by asking questions, it answer should be yes or no and take it one bye one.in json formate.',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: 'I cannot definitively tell you if you will have a passion for web development with a simple yes/no. Passion is a complex emotion, and a series of yes/no questions won\'t accurately capture its nuanced nature.  However, I can provide questions that might help *you* assess your potential interest.  You should reflect honestly on your answers.  Remember, these are just indicators –  true passion is often discovered through experience.\n\nHere\'s a JSON representation of some questions to consider.  Answer honestly with "yes" or "no" to each:\n\n\n```json\n{\n  "questions": [\n    {\n      "question": "Do you enjoy problem-solving and finding creative solutions?",\n      "answer": "" \n    },\n    {\n      "question": "Are you comfortable learning new technologies and languages?",\n      "answer": ""\n    },\n    {\n      "question": "Do you find building things, whether physical or digital, satisfying?",\n      "answer": ""\n    },\n    {\n      "question": "Do you enjoy working independently or collaboratively on projects?",\n      "answer": ""\n    },\n    {\n      "question": "Are you detail-oriented and persistent in overcoming challenges?",\n      "answer": ""\n    },\n    {\n      "question": "Does the idea of creating something that others can use and interact with excite you?",\n      "answer": ""\n    },\n    {\n      "question": "Are you interested in learning about design principles and user experience?",\n      "answer": ""\n    },\n    {\n      "question": "Have you ever tried building a simple website or app, even a small one, and enjoyed the process?",\n      "answer": ""\n    }\n  ]\n}\n```\n\nAfter answering, review your responses. A preponderance of "yes" answers might suggest a higher likelihood of developing a passion for web development.  However, a few "no" answers don\'t automatically disqualify you.  Some skills can be learned, and passion can grow with experience.  Consider trying a small web development project to see if you enjoy it.\n',
//         },
//       ],
//     },
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'tell me that web development is my passion or not on the basic of this questionary response,include passion:yes or no.reason:conclude.next:what should i do for further check to validate. \nresponse:{\n  "questions": [\n    {\n      "question": "Do you enjoy problem-solving and finding creative solutions?",\n      "answer": "yes" \n    },\n    {\n      "question": "Are you comfortable learning new technologies and languages?",\n      "answer": "yes"\n    },\n    {\n      "question": "Do you find building things, whether physical or digital, satisfying?",\n      "answer": "no"\n    },\n    {\n      "question": "Do you enjoy working independently or collaboratively on projects?",\n      "answer": "yes"\n    },\n    {\n      "question": "Are you detail-oriented and persistent in overcoming challenges?",\n      "answer": "no"\n    },\n    {\n      "question": "Does the idea of creating something that others can use and interact with excite you?",\n      "answer": "yes"\n    },\n    {\n      "question": "Are you interested in learning about design principles and user experience?",\n      "answer": "no"\n    },\n    {\n      "question": "Have you ever tried building a simple website or app, even a small one, and enjoyed the process?",\n      "answer": "no"\n    }\n  ]\n}',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "passion": "no",\n  "reason": "While you demonstrated a positive response to problem-solving, learning new technologies, working independently, and the idea of creating something for others,  the lack of enjoyment in building things, being detail-oriented and persistent, and a lack of interest in design and user experience suggest a less likely alignment with the practical aspects of web development.  Your \'no\' answers outweigh the \'yes\' answers in relation to core aspects of the work itself.  The lack of prior positive experience with building a website also points to this conclusion.",\n  "next": "To further validate, consider these steps:\\n\\n1. **Try a small web development project:** Choose a very simple project (e.g., a static webpage with basic HTML, CSS, and perhaps a little JavaScript). This hands-on experience will give you a much clearer indication of whether you enjoy the process itself.\\n2. **Explore different aspects of web development:**  Web development is broad.  Focus on a specific area (front-end, back-end, design, etc.) to see if you connect more strongly with one than another.  For example, if you dislike the detailed coding required in back-end work but enjoy visual design aspects, consider a front-end or design-focused role.\\n3. **Talk to web developers:** Get insights directly from people working in the field.  Their experiences and perspectives can offer valuable information.\\n4. **Take an introductory course:** Many free or low-cost introductory courses are available online. A structured learning environment can provide a clearer understanding of the skills and challenges involved."\n}\n```\n',
//         },
//       ],
//     },
//   ],
// });

//generate final result for isitforme
// export const AiGenerateFinalResult = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: 'as a first year student, i want to know that will "web developer" be my best career or not, and for that i give assessment test where i check my passion, profession, vocation, mission for "web developer" using questionary and it\'s result are given below. Also my priorities are give below. now you have to determine that whether the "web developer" will be best career for me or not. include your suggestion, reason, what should i do, my next step, recommendation and conclusion. Response: [passion: yes, profession: no, vocation: may be, mission:no].priorities order:["Personal Fulfillment(Passion)","Financial Security(Money)",\n"Sense of Purpose(Experties)","Social Contribution(National Development)"].in json formate.',
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "assessment": {\n    "passion": "yes",\n    "profession": "no",\n    "vocation": "maybe",\n    "mission": "no"\n  },\n  "priorities": ["Personal Fulfillment(Passion)", "Financial Security(Money)", "Sense of Purpose(Experties)", "Social Contribution(National Development)"],\n  "analysis": {\n    "overall_fit": "Inconclusive",\n    "reasoning": "Your assessment shows a strong passion for web development, which aligns well with your top priority of Personal Fulfillment. However, the lack of a clear sense of profession, vocation, and mission indicates potential challenges.  While passion is crucial, a successful career requires more than just enthusiasm.  The \'no\' for profession suggests you might lack the perceived skills or knowledge currently, and the \'no\' for mission indicates a lack of understanding of how web development fits into a larger purpose, which could impact your long-term satisfaction, particularly considering your third priority, \'Sense of Purpose\'. The \'maybe\' for vocation suggests you aren\'t sure if it\'s the right long-term path for you.",\n    "suggestion": "Explore web development further before committing fully.  Bridge the gap between your passion and the aspects you rated lower.  Consider what aspects of web development truly appeal to you and if those aspects align with a possible career path and fulfill your priorities. Investigate different areas within web development, like front-end, back-end, full-stack, UX/UI, or specialized niches (e.g., game development, e-commerce).",\n    "next_steps": [\n      "Take introductory web development courses to improve your professional skills and assess your aptitude.",\n      "Network with web developers to understand their daily work, challenges, and career paths.",\n      "Identify a specific area within web development that genuinely excites you and aligns with your values and priorities.",\n      "Explore projects that combine your passion with your sense of purpose. Could you use your web development skills to contribute to a social cause or national development initiative?",\n      "Evaluate potential financial security through realistic salary expectations for various web development roles."\n    ],\n    "recommendations": [\n      "Focus on building a strong portfolio of projects to showcase your skills and prove your profession capabilities.",\n      "Consider internships or freelance work to gain practical experience and industry insights.",\n      "Continuously learn and adapt to the ever-evolving web development landscape.",\n      "Don\'t hesitate to seek mentorship from experienced professionals."\n    ],\n    "conclusion": "Web development *could* be a good career for you, but more investigation and skill development are needed. Addressing the \'no\' and \'maybe\' responses in your assessment is vital before making a firm commitment.  Focus on building your professional skills, finding a niche that aligns with your values, and understanding the long-term career prospects before deciding if it’s the best path for you."\n  }\n}\n```\n',
//         },
//       ],
//     },
//   ],
// });

//generate passion question
export const AiCareerField = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Create a list of yes/no/can’t say type questions designed to evaluate someone's passion, motivation, and interest in pursuing a future as a web developer. The questions should focus on intrinsic curiosity, willingness to learn, problem-solving enthusiasm, joy ,motivation, dedication, contribution, creativity, resilience, persistence and excitement about innovation in web technologies. Each question should be simple, direct, and thought-provoking, encouraging self-reflection while keeping responses concise. include question, options: yes, no, can't say.in json formate.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Do you find yourself naturally curious about how websites and apps work?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to dedicate significant time and effort to learning new web development skills?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Does solving complex coding problems bring you a sense of satisfaction?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you genuinely enjoy the process of building and creating things, particularly websites or applications?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you intrinsically motivated to improve your web development skills, even without external pressure?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Would you dedicate yourself to a web development project even if it became challenging or frustrating?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you see yourself contributing to the online community through your web development skills?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you find yourself exploring creative ways to design and build user-friendly websites?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you tend to persevere through setbacks and technical challenges when learning to code?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you excited by the rapid pace of innovation in web technologies and eager to keep up?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you feel a sense of joy or accomplishment when you successfully complete a web development project?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Would you be persistent in learning even if you face initial difficulties in grasping certain concepts?",\n    "options": ["Yes", "No", "Can\'t say"]\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'Create a list of yes/no/can’t say type questions designed to evaluate someone\'s profession, gain experience, and interest for long term in pursuing a future as a "web developer". The questions should focus on willing to take expertise, education, qualification, responsibilities, continuous learning, commitment to excellence qnd social status in "web developer". Each question should be simple, direct, and thought-provoking, encouraging self-assessment and research for career while keeping responses concise. include question, options: yes, no, can\'t say.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Are you willing to dedicate significant time to learning programming languages and frameworks?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you possess a strong interest in problem-solving and logic?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable working independently and as part of a team?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you prepared to pursue further education (e.g., bootcamps, online courses, degrees) to enhance your web development skills?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to accept the responsibility of building and maintaining complex web applications?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you enjoy continuous learning and adapting to new technologies and trends in web development?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you committed to producing high-quality, efficient, and user-friendly web applications?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable with the potentially demanding workload and deadlines often associated with web development?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to invest the time and effort needed to build a strong portfolio of web development projects?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Is the prospect of a long-term career in web development appealing to you, even if it requires ongoing learning and adaptation?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Would you be satisfied with the typical social status and compensation associated with a web developer role?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Have you already acquired any relevant skills or experience in web development (e.g., HTML, CSS, JavaScript)?",\n    "options": ["Yes", "No", "Can\'t say"]\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'Create a list of yes/no/can’t say type questions designed to evaluate someone\'s mission in pursuing a future as a "web developer". The questions should focus on purpose, vision, core values, impact on social, goal, objective, uniqueness, and commitment to action  in "web developer". Each question should be simple, direct, and thought-provoking, reflect on impact and align with your values while keeping responses concise. include question, options: yes, no, can\'t say.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Is your primary motivation for becoming a web developer a genuine passion for creating digital solutions?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you envision yourself making a significant positive impact on the digital landscape through your web development skills?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you value collaboration and teamwork in the context of web development projects?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you believe your web development skills can contribute to a more inclusive and accessible digital world?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Is your goal to build functional, user-friendly, and aesthetically pleasing websites?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you have a specific objective in mind, such as creating a certain type of website or working in a particular industry?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Does your approach to web development offer a unique perspective or skillset compared to other developers?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you prepared to dedicate the necessary time and effort to consistently improve your web development skills?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you have a clear understanding of the challenges and ethical considerations involved in web development?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you believe your work as a web developer aligns with your personal values?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to adapt and learn new technologies and frameworks as the web development landscape evolves?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you plan to contribute to open-source projects or engage in community initiatives within the web development field?",\n    "options": ["Yes", "No", "Can\'t say"]\n  }\n]\n```\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: 'Create a list of yes/no/can’t say type questions designed to evaluate someone\'s vocation, gain life experience and contribution for social in pursuing a future as a "web developer". The questions should focus on purpose, core values, talents, strength, joy, balancing, between passion and practically  in "web developer". Each question should be simple, direct, and thought-provoking, reflect on life experience and align with your values while keeping responses concise. include question, options: yes, no, can\'t say.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "question": "Do you find building things (physical or digital) inherently satisfying?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you patient and persistent when troubleshooting complex problems?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you enjoy learning new programming languages and technologies?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Have you ever built a website or app, even a simple one, for personal use or a project?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Does the idea of contributing to a digital product used by many people excite you?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable working independently and as part of a team?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you find logical reasoning and problem-solving enjoyable?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you willing to dedicate significant time to continuous learning and skill development in web development?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you value creativity and the ability to express yourself through code?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Can you balance your passion for web development with the often demanding realities of the job market (e.g., deadlines, client communication)?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Have you previously faced challenges that required you to adapt and learn quickly, and did you succeed?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Do you believe your skills and interests align well with the typical tasks of a web developer (e.g., coding, testing, debugging)?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Is contributing to open-source projects or helping others with their tech problems something that interests you?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n  {\n    "question": "Are you comfortable with the idea of constantly evolving technologies and needing to update your skills regularly?",\n    "options": ["Yes", "No", "Can\'t say"]\n  },\n    {\n    "question": "Do you have a strong desire to make a positive impact on the world through technology?",\n    "options": ["Yes", "No", "Can\'t say"]\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

//generate result for passion
export const AiCareerFieldResult = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'determine whether i will be have passion in Web Developer or not, on the basic of questionary assessment that i have perform that is given. \n      include only recommendation, what next and conclusion.in json formate. response:[{"question":"Are you genuinely curious about how websites and web applications function?","answer":"Yes"},{"question":"Are you excited by the prospect of continuously learning new web development technologies and techniques?","answer":"Can\'t say"},{"question":"Do you find tackling challenging coding problems stimulating and rewarding?","answer":"Yes"},{"question":"Does the process of building and creating websites bring you a sense of joy and accomplishment?","answer":"No"},{"question":"Are you intrinsically motivated to improve your skills and knowledge in web development?","answer":"Yes"},{"question":"Are you prepared to dedicate significant time and effort to mastering web development skills?","answer":"Yes"},{"question":"Do you see yourself contributing positively to the web development community?","answer":"Yes"},{"question":"Do you enjoy brainstorming creative solutions for web design and functionality?","answer":"Yes"},{"question":"Are you resilient in the face of setbacks or debugging challenges?","answer":"Yes"},{"question":"Are you persistent in overcoming obstacles and learning from your mistakes?","answer":"Yes"},{"question":"Are you excited about the constant innovation and evolution within the field of web development?","answer":"Yes"}]',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "recommendation": "Based on your responses, your passion for web development appears to be mixed. While you demonstrate strong interest in learning, problem-solving, and contributing to the community, your lack of enjoyment in the actual building process raises some concerns.",\n  "whatNext": "To clarify your passion, consider these steps:\\n\\n1. **Try a small, personal project:** Build a simple website or application.  Focus on the creative aspects and see if the process brings you genuine satisfaction.  \\n2. **Explore different areas of web development:**  Frontend, backend, or full-stack development may resonate differently with you. Experiment to find what excites you most.\\n3. **Seek mentorship or community involvement:**  Connect with experienced web developers. Observe their work and discuss your experiences to gain further insight and perspective.\\n4. **Reflect on your \'No\' answer:**  Why didn\'t building websites bring you joy and accomplishment? Identifying this could help you overcome potential roadblocks.",\n  "conclusion": "Your analytical and problem-solving skills suggest a potential for success in web development. However, the absence of inherent joy in the creation process requires further exploration before definitively confirming a strong passion. Take the suggested steps to gain a clearer understanding of your true interests and capabilities within this field."\n}\n```\n',
        },
      ],
    },
  ],
});

//generate final result for passion
export const AiCareerFieldFinalResult = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'determine whether the "web developer" field is best career path for me or not on the basic of conclusion of passion, profession, vocation, mission which i get after questionary assessment of each which is given below. include only final result, suggestion, recommandation,conclusion.in json formate. conclusion:[\npassion_conclusion : "Your commitment to continuous learning and contribution is positive, but a genuine passion for web development requires enjoyment in solving problems, building, and creating.  Further investigation is needed to determine if a career in this field is truly suitable for you.",\nprofession_conclusion:"Your existing experience and willingness to meet professional requirements are positive.  However, the lack of consistent commitment to high-quality work and uncertainty about long-term dedication suggest that further self-reflection and practical experience are needed to determine if web development aligns with your passion.",\nvocation_conclusion:"Your capacity for independent work and strong work ethic are assets. However, the lack of enthusiasm for creative expression and collaboration, coupled with a lack of prior problem-solving experience, suggests that additional self-assessment and exploration are necessary to determine if web development is a suitable career path for you.",\nmission_conclusion:"Your defined purpose and commitment to action are positive indicators.  However, fully realizing your potential requires aligning your work with a broader vision and cultivating a distinct approach that reflects your individual passion."\n]',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "final_result": "Inconclusive",\n  "suggestion": "Further self-assessment and exploration are needed before pursuing a career in web development.",\n  "recommendation": "Consider gaining practical experience through personal projects, internships, or volunteer work to better understand the demands and rewards of the field. Explore other career paths that align more closely with your identified passions and strengths.  Seek mentorship from experienced web developers to gain a clearer perspective.",\n  "conclusion": "While you demonstrate some positive attributes relevant to a web development career (commitment, work ethic), the assessment reveals a significant gap between your current passions, skills, and the demands of the profession.  A deeper understanding of your interests and a more direct engagement with the field are crucial before making a commitment."\n}\n```\n',
        },
      ],
    },
  ],
});

//generate doubt suggestions
export const AiDoubtSuggestion = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'give me detailed and clear explanation of my doubt given below. include Acknowledge, clear explanation, example, simplified summary, further classification, encouragement to student, root cause of doubt.in json formate .doubt description: "why JavaScript is a scripting language."',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "doubtDescription": "Why JavaScript is a scripting language?",\n  "acknowledgement": "It\'s a great question! Understanding the nature of JavaScript and why it\'s classified as a scripting language is fundamental to mastering web development.",\n  "explanation": "JavaScript is classified as a scripting language because it meets several key characteristics of scripting languages. Unlike compiled languages (like C++ or Java), which need to be translated into machine code before execution, scripting languages are interpreted. This means the code is executed line by line by an interpreter, without needing a separate compilation step.  JavaScript\'s interpreter is typically built into web browsers (or Node.js for server-side JavaScript). This \'on-the-fly\' execution allows for dynamic behavior and quick prototyping.\\n\\nAnother crucial aspect is that scripting languages are often designed for automating tasks and integrating with other applications.  JavaScript excels at this within web browsers.  It manipulates the Document Object Model (DOM), which represents the structure of a web page, allowing for dynamic updates to content, styling, and behavior without requiring a full page reload.  This dynamic nature and integration capability are hallmark traits of scripting languages.",\n  "example": "Consider a simple example where you want to change the text of a paragraph on a webpage when a button is clicked.  In JavaScript, you would use an event listener (an interpreter handles this event) to detect the click, and then modify the innerHTML property of the paragraph element. This happens directly within the browser, without needing to recompile or reload the entire page. This direct manipulation and dynamic behavior are characteristic of a scripting language.",\n  "simplifiedSummary": "JavaScript is a scripting language because it\'s interpreted (not compiled), executes dynamically, and is primarily used to automate tasks and manipulate elements within a larger application (like a web browser).",\n  "furtherClassification": "While generally classified as a scripting language, JavaScript exhibits some features of other programming paradigms.  It\'s also considered an object-oriented language (although it\'s prototypal, not class-based) and a functional programming language (supporting functions as first-class citizens). This makes it a versatile and powerful language.",\n  "encouragementToStudent": "Don\'t be discouraged by the nuances! Understanding the core concepts of interpreted vs. compiled languages and the dynamic nature of JavaScript\'s execution is key. Keep practicing, and you\'ll soon master this fundamental aspect of JavaScript programming.",\n  "rootCauseOfDoubt": "The root of the doubt likely stems from a lack of clear understanding of the differences between compiled and interpreted languages and the characteristics that define a scripting language.  The terminology might also be confusing initially."\n}\n```\n',
        },
      ],
    },
  ],
});

//generate more information about term
export const AiTermMoreInfo = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'explain the concept of term "Brainstorming" in design thinking. only if the term is technical term related to concept other wise just translate. include term ,technical: true/false, explanation, summary translate term in Marathi.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "term": "Brainstorming",\n  "technical": true,\n  "explanation": "In design thinking, brainstorming is a group creativity technique used to generate a large number of ideas and solutions to a specific problem or challenge.  It\'s characterized by a suspension of judgment – meaning participants are encouraged to freely share even seemingly outlandish ideas without criticism or evaluation during the initial idea generation phase.  The goal is to foster a free-flowing exchange of thoughts, building upon each other\'s suggestions to achieve a wider range of potential solutions than any single individual could produce alone.  Typically, a facilitator guides the session, ensuring everyone participates and the process remains focused.  Later stages involve evaluating and refining the generated ideas.",\n  "summary": "A collaborative idea generation technique in design thinking prioritizing quantity over quality initially, followed by evaluation and refinement.",\n  "translate_term": "मनःसंचलन (Manasanchalan)" \n}\n```\n',
        },
      ],
    },
  ],
});
