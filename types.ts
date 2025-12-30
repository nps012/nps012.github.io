
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  icon: string;
  year?: string;
}

export interface Skill {
  name: string;
  level: number; // 1 to 100
}

export interface LeadershipRole {
  role: string;
  org: string;
  period: string;
  highlights: string[];
}
