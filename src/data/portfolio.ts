export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const skills = {
  fullStack: [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
    'Node.js', 'Express.js', 'Django', 'Python',
    'MongoDB', 'SQL', 'PostgreSQL',
    'Figma', 'Docker', 'Git', 'GitHub',
  ],
  java: [
    'Java', 'Spring Boot', 'Spring MVC', 'Spring Framework',
    'REST APIs', 'Hibernate', 'Spring Data JPA',
    'MySQL', 'MongoDB', 'Database Design',
    'JUnit', 'Mockito', 'Maven',
    'Docker', 'GitHub Actions', 'Git', 'GitHub',
  ],
}

export type ProjectCategory = 'All' | 'Full-Stack' | 'Java'

export interface Project {
  id: number
  title: string
  year: string
  category: 'Full-Stack' | 'Java'
  summary: string
  tech: string[]
  github: string
  live?: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Job Application Tracker',
    year: '2024',
    category: 'Full-Stack',
    summary: 'Kanban-based pipeline manager with Gemini AI resume parsing and multi-tenant data isolation.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Tailwind CSS', 'Vitest'],
    github: 'https://github.com/Pranav-Rewale/job-application-tracker',
    live: 'https://job-application-tracker-js.vercel.app',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
  {
    id: 2,
    title: 'Collaborative Real-Time IDE',
    year: '2024',
    category: 'Full-Stack',
    summary: 'Live multi-user coding workspace with synced editor, code execution, chat, audio, and shared whiteboard.',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'Monaco Editor'],
    github: 'https://github.com/JAYESH-SOLMINDE/Real-Time-IDE',
    live: 'https://real-time-ide-gamma.vercel.app',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    id: 3,
    title: 'What Now',
    year: '2024',
    category: 'Full-Stack',
    summary: 'Social platform to post and discover creative ideas with community spaces, tags, and follow system.',
    tech: ['React', 'Python', 'Flask', 'SQLite', 'Tailwind CSS', 'Google OAuth'],
    github: 'https://github.com/Pranav-Rewale/What-now',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    id: 4,
    title: 'Smart Clinic Management System',
    year: '2025',
    category: 'Java',
    summary: 'Enterprise healthcare platform with patient, doctor, and admin roles, token auth, and CI/CD workflows.',
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/Pranav-Rewale/Smart-Clinic-Management-System',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
  },
  {
    id: 5,
    title: 'Supply Chain Management System',
    year: '2025',
    category: 'Java',
    summary: 'Robust backend orchestrating logistics workflows with atomic transactions and full test coverage.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JUnit', 'Mockito'],
    github: 'https://github.com/Pranav-Rewale/SuppyChainManagementProject',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
  },
  {
    id: 6,
    title: 'Student Course Management System',
    year: '2024',
    category: 'Java',
    summary: 'Web app for managing student records with full CRUD operations via Thymeleaf-powered dynamic forms.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'Spring Data JPA', 'MySQL'],
    github: 'https://github.com/Pranav-Rewale/Student-Course-Management-System',
    image: 'https://cloudassess.com/wp-content/uploads/2026/04/Litmos-course-management-system.jpg',
  },
]

export const services = [
  {
    title: 'Full-Stack Web Application Development',
    description:
      'End-to-end web applications — from pixel-perfect React frontends to scalable Node.js or Spring Boot backends, with cloud-ready Docker deployments.',
    icon: '⚡',
  },
  {
    title: 'Java & Spring Boot Backend Development',
    description:
      'Robust REST APIs and enterprise-grade backend systems using Java, Spring Boot, and JPA — with full unit and integration test coverage.',
    icon: '☕',
  },
  {
    title: 'Web Designing',
    description:
      'Clean, responsive, user-centric interfaces designed in Figma and built with Tailwind CSS — focused on usability, accessibility, and modern aesthetics.',
    icon: '🎨',
  },
]

export const experience = [
  {
    role: 'Java Developer Intern',
    company: '1Stop.ai',
    period: 'Jul 2025 – Sep 2025',
    location: 'Remote',
  },
  {
    role: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    period: 'Aug 2024 – Sep 2024',
    location: 'Mumbai',
  },
]

export const contact = {
  email: 'pranavrewale03@gmail.com',
  phone: '+91 80106 02191',
  location: 'Mumbai, India',
  linkedin: 'https://www.linkedin.com/in/pranav-rewale-7590b925b',
  github: 'https://github.com/Pranav-Rewale',
}
