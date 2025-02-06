// types.ts
export interface Publication {
    title: string;
    abstract: string;
    authors: string;
    publication_type: string;
    journal: string;
    conference: string;
    year: number;
    doi: string;
    is_org: boolean;
    poster: string;
    url: string;
    pdf_link: string;
    id: number;
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
    user_id: number;
    home_content: string[];
    projects: Project[];
    teachings: string[];
    cv_link: string;
}