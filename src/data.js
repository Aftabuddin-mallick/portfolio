// Edit this file to update your portfolio. Everything on the page comes from here.
export const profile = {
  name: 'Aftabuddin Mallick',
  title: 'Frontend Developer | React.js Developer',
  email: 'aftabuddin5.mallick@gmail.com',
  phone: '+91-7602835166',
  github: 'https://github.com/Aftabuddin-mallick',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-ID', // TODO: replace with your LinkedIn URL
  resume: '/Aftabuddin_Mallick_Resume.pdf',
  summary:
    'B.Tech Information Technology student (2027) with hands-on experience building and deploying responsive web applications using React.js, JavaScript (ES6+), Tailwind CSS and Redux. Skilled in REST API integration, state management, authentication and reusable components. Seeking a Frontend Developer opportunity.',
  stats: [['7.92', 'CGPA (up to 6th sem)'], ['100+', 'DSA problems solved'], ['2', 'React apps deployed']],
}

export const skills = {
  Languages: ['JavaScript (ES6+)', 'C', 'C++'],
  Frontend: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Flexbox', 'CSS Grid'],
  'React Ecosystem': ['React Hooks', 'Context API', 'Redux', 'useReducer', 'React Router', 'Protected Routes', 'Reusable Components'],
  'API & Auth': ['REST APIs', 'Axios / Fetch', 'JWT Authentication', 'Role-Based Authorization'],
  'Tools & Concepts': ['Git', 'GitHub', 'VS Code', 'npm', 'Vite', 'Vercel', 'localStorage', 'DSA', 'OOP'],
}

export const projects = [
  {
    name: 'Shopwise',
    subtitle: 'E-Commerce Store with Admin Panel',
    live: 'https://react-js-ecommerce-application.vercel.app/',
    code: 'https://github.com/Aftabuddin-mallick', // TODO: replace with the Shopwise repo link
    tech: ['React.js', 'Tailwind CSS', 'React Router', 'Context API', 'Vite', 'REST API'],
    points: [
      'Responsive e-commerce app with product browsing, cart, checkout and an admin panel.',
      'JWT authentication, role-based authorization and protected routes for admin access and checkout.',
      'Auth, cart and notifications managed with Context API and useReducer, persisted in localStorage.',
      'DummyJSON REST API with debounced search, category filtering, sorting and server-side pagination.',
      'Form validation, loading skeletons, retry-based error handling, deployed on Vercel with SPA routing.',
    ],
  },
  {
    name: 'GariBondhu',
    subtitle: 'Transport Booking System',
    live: '', // TODO: add your deployed GariBondhu link, or leave empty to hide the button
    code: 'https://github.com/Aftabuddin-mallick/Transport-Booking-System',
    tech: ['React.js', 'Tailwind CSS', 'React Router', 'Context API', 'Vite'],
    points: [
      'Two-sided marketplace connecting vehicle owners and customers, with role-based login and protected routes.',
      'Return-trip pricing: automatic discounts for customers booking an owner’s otherwise empty return journey.',
      'Route search, distance-based fare calculation, vehicle-type filtering, sorting and pagination.',
      'Owner dashboard for vehicle uploads, return-trip listings and booking approval or rejection.',
      'Contact details unlock after booking confirmation (Call / WhatsApp), with an 8% platform commission model.',
    ],
  },
]

export const education = [
  { school: 'MCKV Institute of Engineering', degree: 'B.Tech in Information Technology', years: '2023 – 2027 (Expected)', note: 'CGPA 7.92 (up to 6th semester). Coursework: DSA, OOP, DBMS, OS, Computer Networks.' },
  { school: 'Panjipukur Smt Tulshi Devi Smriti Vidyapith', degree: 'WBCHSE Class XII', years: '2020 – 2022', note: 'Percentage: 88.6%' },
]

export const achievements = [
  'Solved 100+ DSA problems covering arrays, strings, searching, sorting, linked lists, stacks and queues.',
  'Built and deployed 2 responsive React.js applications and maintained documented GitHub repositories.',
]
