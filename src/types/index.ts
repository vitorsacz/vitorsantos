export interface Project {
  id: string;
  title: string;
  role: string;
  context: string;
  problem: string;
  complexity: string;
  decision: string;
  result: string;
  tech: string[];
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Expertise {
  category: string;
  skills: string[];
}
