
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 1 to 5
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Experience = 'experience',
  Projects = 'projects',
  Certificates = 'certificates'
}
