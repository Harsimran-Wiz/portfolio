export interface MenuItem {
  id: string;
  label: string;
}

export interface NavbarProps {
  menuItems?: MenuItem[];
}

// About section
export interface AboutProps {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
}

// Skills section
export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsProps {
  categories?: SkillCategory[];
}

// Experience section
export interface ExperienceItem {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string[];
  skills: string[];
}

export interface ExperienceProps {
  experiences?: ExperienceItem[];
}

// Education section
export interface EducationItem {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface EducationProps {
  educationList?: EducationItem[];
}

// Contact section

export interface ContactForm {
  user_email: string;
  user_name: string;
  subject: string;
  message: string;
}
