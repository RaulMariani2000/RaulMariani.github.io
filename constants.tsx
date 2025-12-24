
import React from 'react';
import { Project, Skill } from './types';
import { 
  Code2, 
  Cpu, 
  Palette, 
  Globe, 
  Database, 
  Layout, 
  Sparkles, 
  Terminal, 
  Zap 
} from 'lucide-react';

export const USER_INFO = {
  name: "Raúl Mariani",
  role: "MSS on Space Policy and Entrepreneurship\nMEng on Aerospace Engineering\nBA on Mechanical and Aerospace Engineering",
  bio: "I specialize in engineering, policy, and entrepreneurship applications in the aerospace industry. My work bridges the gap between engineering and management in the aerospace industry.",
  email: "raul@mariani.dev",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com/RaulMariani2000",
    linkedin: "https://www.linkedin.com/in/raul-mariani/",
    resume: "https://docs.google.com/document/d/1jxtcU9psYCu3okTzFwFt-NLVyC9DMpqNHTj_Nf0sb38/edit?usp=sharing"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MMAARS Trainer in Residence',
    shortTitle: 'MMAARS',
    description: 'Leading specialized training programs for analog astronauts and researchers at the Mars Moon Astronautics Academy & Research Station.',
    image: 'https://makerfaire.com/wp-content/uploads/2025/01/MMAARS-Mars-Moon-Astronautics-Academy-and-Research-Sciences-City-of-STEM-Los-Angeles-2024-scaled.jpg',
    tags: ['Aerospace', 'Simulated Research', 'Training', 'Operations'],
    category: 'other',
    link: 'https://www.mmaars.com/'
  },
  {
    id: '2',
    title: 'Volunteer TA for MMAARS through PRSF Partnership',
    shortTitle: 'PRSF',
    description: 'Facilitating educational missions and technical support for analog astronautics through the Puerto Rico Space Foundation partnership.',
    image: 'https://static.wixstatic.com/media/8a852b_594009fe15934208bf884fb1a9c56451~mv2.png',
    tags: ['Space Education', 'Teaching', 'Technical Support', 'Analog Research'],
    category: 'other',
    link: 'https://www.prspacefoundation.org/'
  },
  {
    id: '3',
    title: 'Vice Chair of SEDSUSA',
    shortTitle: 'SEDSUSA',
    description: "Leading the world's largest student-run space organization, fostering space exploration and development through student chapters nationwide.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/SEDS-USA_Logo_Opaque.jpg',
    tags: ['Leadership', 'Space Advocacy', 'Strategic Planning', 'SEDS'],
    category: 'other',
    link: 'https://seds.org/'
  },
  {
    id: '4',
    title: 'Engineering Co-Op Student',
    shortTitle: 'Héroux-Devtek',
    description: 'Contributed to aerospace engineering projects and manufacturing process improvements at Héroux-Devtek, a leader in landing gear systems.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPeSJLR_v449Ig3VEtPQonxtdViOF336x9w&s',
    tags: ['Aerospace', 'Landing Gear', 'Manufacturing', 'Co-Op'],
    category: 'other',
    link: 'https://www.herouxdevtek.com/en'
  },
  {
    id: '5',
    title: 'Summer Engineering Intern',
    shortTitle: 'WS Tyler',
    description: 'Assisted in quality control and technical analysis for industrial screening and filtration solutions at W.S. Tyler, ensuring high-performance standards.',
    image: 'https://media.licdn.com/dms/image/v2/C560BAQHvAjDl4CGR0g/company-logo_200_200/company-logo_200_200/0/1631400297528/wstyler_logo?e=2147483647&v=beta&t=Lvgu_ULOAwhEQDHGCYMK5dcSeG7E4qmfYNbNRpdV8JI',
    tags: ['Quality Control', 'Industrial Engineering', 'Precision Mesh', 'Internship'],
    category: 'other',
    link: 'https://wstyler.com/'
  },
  {
    id: '6',
    title: 'Summer Intern',
    shortTitle: 'PR House of Representatives',
    description: 'Supported legislative research and administrative operations at the Puerto Rico House of Representatives.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Seal_of_Puerto_Rico_House_of_Representatives.svg',
    tags: ['Public Policy', 'Legislative Support', 'Administration', 'Internship'],
    category: 'other',
    link: 'https://camara.registrok12.com/'
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AeroSim Dashboard',
    description: 'A real-time telemetry visualization platform for analog astronaut missions, featuring live data streaming and health monitoring.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'WebSocket', 'D3.js', 'Aerospace'],
    category: 'web',
    github: 'https://github.com/RaulMariani2000'
  },
  {
    id: 'p2',
    title: 'OrbitAI Engine',
    description: 'Machine learning model designed to predict satellite orbital decay patterns using historical NORAD TLE data.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    category: 'ai',
    github: 'https://github.com/RaulMariani2000'
  },
  {
    id: 'p3',
    title: 'Nova UI Framework',
    description: 'A high-performance design system and component library built for mission-critical aerospace ground software.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop',
    tags: ['TypeScript', 'Tailwind', 'Design System'],
    category: 'design',
    github: 'https://github.com/RaulMariani2000'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Frontend Architecture', level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: 'AI Engineering', level: 88, icon: <Sparkles className="w-5 h-5" /> },
  { name: 'Backend Systems', level: 92, icon: <Database className="w-5 h-5" /> },
  { name: 'UI/UX Design', level: 85, icon: <Palette className="w-5 h-5" /> },
  { name: 'Distributed Systems', level: 82, icon: <Globe className="w-5 h-5" /> },
  { name: 'Cloud Native', level: 90, icon: <Zap className="w-5 h-5" /> }
];

export const TECH_STACK = [
  { name: 'React', icon: <Code2 className="w-4 h-4" /> },
  { name: 'TypeScript', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Node.js', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Tailwind CSS', icon: <Layout className="w-4 h-4" /> }
];
