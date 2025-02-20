// types.ts
export interface Publication {
    id: number;
    user_id: number;
    title: string;
    abstract: string;
    authors: string;
    publication_type: string;
    journal?: string;
    conference?: string;
    year: number;
    doi?: string;
    is_org: boolean;
    poster?: string;
    paper_summary?: string;
    url?: string;
    pdf_link?: string;
  }

export interface Course {
    name: string;
    description: string;
    id: number;
    teaching_id: number;
}

export interface Teaching {
    institution: string;
    position: string;
    description: string;
    start_date: string;
    end_date: string;
    id: number;
    user_id: number;
    courses: Course[];
}

export interface Project {
    title: string;
    description: string;
    url: string;
}

export interface ResearcherInfo {
  id: number;
  user_id: string;
  name: string;
  org_role: 'advisory' | 'team' | 'fellow';
  home_content?: string[];
  cv_link?: string;
  profile_image?: string;
  projects: {
    title: string;
    description: string;
    url: string;
  }[];
  teachings: string[];
}