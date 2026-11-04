export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Completed' | 'Physically Built' | 'Working App' | 'In Development' | 'Award-Winning';
  featured: boolean;
  image: string;
  galleryImages?: string[];
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  links: {
    label: string;
    url: string;
    type: 'live' | 'github' | 'docs';
  }[];
  accentColor: string;
}

export interface Certificate {
  id: number;
  file: string;
  title: string;
  subtitle: string;
  type: 'STEM' | 'Sports' | 'Arts' | 'Education';
  full: string;
  thumb: string;
  date?: string;
  issuer?: string;
}

export interface Award {
  id: string;
  title: string;
  rank: string;
  date: string;
  category: 'Robotics' | 'STEM' | 'Sports' | 'Leadership' | 'Arts';
  organization: string;
  description: string;
  photoId?: number;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
}
