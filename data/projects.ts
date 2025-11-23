// data/projects.ts (Updated with real project links)

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Path to image in the public folder
  technologies: string[];
  link: string; // Link to the live demo or GitHub repository
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Vehicle Tracker: Real-Time Monitoring App',
    description: 'A modern tracking application built using Next.js, demonstrating proficiency in modern web frameworks, Vercel deployment, and fluid user interfaces (UX Focused).',
    image: '/images/project-vehicle.png', // Perlu membuat gambar baru!
    technologies: ['Next.js', 'React', 'Live Tracking', 'Modern Frontend'],
    link: 'https://vehicle-tracker-ruddy.vercel.app/', // Link ke Live App
  },
  {
    id: 2,
    title: '3dutech.my.id Management System',
    description: 'A comprehensive web system, likely built with PHP/MySQL, showcasing solid Backend logic, secure Database Design, and functional system development.',
    image: '/images/project-3dutech.png', // Perlu membuat gambar baru!
    technologies: ['PHP/MySQL', 'Full-Stack System', 'Database Design', 'Clean Code'],
    link: 'https://github.com/hillalalhamdi/ProjectDB', // Link ke GitHub
  },
  {
    id: 3,
    title: 'Titanic Survival Classification Model',
    description: 'A Machine Learning and Data Analysis project demonstrating advanced skills in data cleaning, exploratory analysis, and building predictive models using Python.',
    image: '/images/project-titanic.png', // Perlu membuat gambar baru!
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Modeling'],
    link: 'https://github.com/2eight9/Titanic-Survival-Classification', // Link ke GitHub
  },
];