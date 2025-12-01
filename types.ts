export interface ResearchPillar {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  goal: string;
  iconName: 'Cpu' | 'Network' | 'ShieldCheck' | 'Satellite'; // Mapping to Lucide icons
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl: string;
  links?: {
    github?: string;
    linkedin?: string;
    scholar?: string;
    website?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
}