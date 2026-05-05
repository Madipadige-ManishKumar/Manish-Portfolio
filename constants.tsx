
import { Project, Skill, Experience, Certificate } from './types';
export const PROJECTS: Project[] = [
    {
    id: '1',
    title: 'Minigit: Git from Scratch',
    description:
      'Developed a Python-based CLI project that re-implements core Git internals from scratch. Supported essential Git operations such as init, add, commit, and checkout by manually handling hashing, object storage, and reference management. Recreated fundamental Git structures including blobs, trees, commits, and HEAD to deeply understand Git’s architecture.',
    tags: [ 'Python', 'DSA','OOPS' ],
    link: 'https://github.com/Madipadige-ManishKumar/Mini-git',
    imageUrl: './assets/mini-git.png',
  },
  
  {
    id: '2',
    title: 'BrickSquare',
    description:
      'Developed a full-stack MERN application featuring secure authentication using OAuth and JWT, ensuring seamless and protected user login.  Implemented efficient client-side state management with Redux to enhance performance and user experience. Integrated Python-based machine learning algorithms to identify and highlight best-selling items, improving user engagement and data-driven insights.',
    tags: ['React', 'Node.js', 'MongoDB', 'Maps'],
    link: 'https://github.com/Madipadige-ManishKumar/BrickSquare.git',
    imageUrl: './assets/brick-square.png',
  },
   {
    id: '5',
    title: 'BirdSense',
    description:
      'Trained a CNN-based deep learning model on Kaggle’s Bird Song dataset (10,000+ audio samples), achieving more than 90% classification accuracy Applied advanced audio feature extraction techniques (MFCC, spectrogram analysis)',
    tags: ['Deep Learning', 'Python', 'TensorFlow', 'Audio Processing'],
    link: 'https://github.com/Madipadige-ManishKumar/Bird_Detection_Using_Sound.git',
    imageUrl: './assets/bridsense.png',
  },
  {
    id: '3',
    title: 'PDF Summarizer',
    description:
      'A smart web application that summarizes PDF documents and answers user queries using Hugging Face transformer models.',
    tags: ['Python', 'NLP', 'Hugging Face', 'Transformers'],
    link: 'https://github.com/Madipadige-ManishKumar/PDF-summarizer',
    imageUrl: './assets/pdf-summarizer.png',
  },
  {
    id: '4',
    title: 'Responsive React Portfolio',
    description:
      'A futuristic, dark-themed React portfolio featuring smooth animations and a fully responsive layout.',
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Frontend'],
    link: 'https://github.com/Madipadige-ManishKumar/Manish-Portfolio.git',
    imageUrl: './assets/portfolio.png',
  },
 
  {
    
    id: '6',
    title: 'AIHealthPro',
    description:
      ' Implemented ML algorithms (Logistic Regression, Decision Trees, SVM) to predict diabetes, lung, liver, and blood pressure conditions, achieving Engineered a Flask-based web application',
    tags: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
    link: 'https://github.com/Madipadige-ManishKumar/AIHealthpro',
    imageUrl: './assets/AIhealthpro.png',
  },

];


export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', level: 5, icon: '🟨' },
  { name: 'Python', level: 4, icon: '🐍' },
  { name: 'Java', level: 3, icon: '☕' },
  { name: 'C++', level: 3, icon: '➕' },
  { name: 'C', level: 2, icon: '🔵' },

  // Frontend
  { name: 'HTML', level: 5, icon: '📄' },
  { name: 'CSS', level: 5, icon: '🎨' },
  { name: 'React.js', level: 5, icon: '⚛️' },
  { name: 'Tailwind CSS', level: 5, icon: '🌬️' },
  { name: 'GSAP', level: 3, icon: '🎞️' },
  { name: 'Bootstrap', level: 4, icon: '🅱️' },

  // Backend
  { name: 'Node.js', level: 4, icon: '🟢' },
  { name: 'Express.js', level: 4, icon: '🚂' },
  { name: 'Flask', level: 4, icon: '🍶' },
  { name: 'FastAPI', level: 3, icon: '⚡' },

  // Databases
  { name: 'SQLite', level: 4, icon: '🗄️' },
  { name: 'MySQL', level: 4, icon: '🐬' },
  { name: 'MongoDB', level: 4, icon: '🍃' },
  { name: 'Oracle', level: 3, icon: '🔴' },
  { name: 'Firebase', level: 3, icon: '🔥' },

  // Machine Learning
  { name: 'Scikit-learn', level: 3, icon: '📊' },
  { name: 'TensorFlow', level: 2, icon: '🧠' },

  // Tools & Platforms
  { name: 'Git', level: 5, icon: '🔧' },
  { name: 'GitHub', level: 5, icon: '🐙' },
  { name: 'Hugging Face', level: 3, icon: '🤗' },
  { name: 'OpenRouter', level: 3, icon: '🧩' },
];


export const EXPERIENCES: Experience[] = [
     {
    company: 'RedShotLabs',
    role: 'AI/ML Engineer',
    period: 'Feb 2025 - May2025',
    description: 'Built an autonomous multi-agent Slack bot using Gemini 2.5 Flash with RAG-based thread context for channel management, summarization, GitHub orchestration, and accurate contextual replies.'
  },
  {
    company: 'Hacktoberfest',
    role: 'Contributor',
    period: 'Oct 2025',
    description: 'Building immersive 8-bit web experiences for modern clients.'
  },
  {
    company: 'cbit open-source community',
    role: 'Junior Developer',
    period: 'Jan-2025 - Dec 2025',
    description: 'Developed scalable microservices and dynamic UI components.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: 'Deep Learning ',
    issuer: 'Chaitanya Bharathi Institute of Technology',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1BibeWB9JdmbGkqil-5w_CxemkfsrKmKI/view?usp=sharing'
  },
  {
    name: 'Adobe Hackthon participation',
    issuer: 'Adobe',
    date: 'jun 2025',
    link: 'https://drive.google.com/file/d/1q0bnGIBpFnekoQXgI1r2Lt9o50ud1zfj/view?usp=sharing'
  },
  {
    name: 'Hands on Scikit-learn',
    issuer: 'Infosys springboard',
    date: 'Nov 2024',
    link: 'https://drive.google.com/file/d/1Xu7FAxXqQPnWjv6HZ51ahTX3YcCZt2go/view?usp=sharing'
  },
  {
    name: 'Hands on React JS',
    issuer: 'Udemy',
    date: 'Mar 2025',
    link: 'https://drive.google.com/file/d/1M0WozEDcUfHJchR8uWsazfL6sxsS8rsa/view?usp=sharing'
  },
  {
    name: 'Programming in Java',
    issuer: 'NPTEL',
    date: 'Oct 2025',
    link: 'https://drive.google.com/file/d/12jL6L8sqtSPXXid2DnT7yNUiMvFOCZjX/view?usp=sharing'
  },
  {
    name: 'Super Contributor in  hacktoberfest',
    issuer: 'Digital Ocean',
    date: 'Oct 2025',
    link: 'https://www.holopin.io/@madipadigemanishkumar'
  },
  {
    name: 'Special Mention in CBIT hacktoberfest',
    issuer: 'COSC',
    date: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1eJ8HPqUCRlSl0snOEewFdptC8-GmOIMZ/view?usp=sharing'
  },
  {
    name: 'Organisation Committee in CBIT hacktoberfest',
    issuer: 'COSC',
    date: 'Oct 2025',
    link: 'https://drive.google.com/file/d/1dxA-_vsPF8_jwtOsCLTXO8Www_cJg9j_/view?usp=sharing'
  },
   {
    name: 'Build Real World AI Applications with Gemini and Imagen',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/8a1a9c23-f603-4d35-b00b-455be16425f8/badges/16409891'
  },
  {
    name: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/8a1a9c23-f603-4d35-b00b-455be16425f8/badges/15762290'
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/8a1a9c23-f603-4d35-b00b-455be16425f8/badges/10344702'
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Jan 2026',
    link: 'https://drive.google.com/file/d/1MNMPNAfh47dApKnP0oPU9CID6s7rIDiZ/view?usp=sharing'
  }
];
