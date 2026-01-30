export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  cmpName: string;
  message: string;
  link?: string;
}

export interface Certificate {
  id: number;
  topic: string;
  title: string;
  description: string;
  link: string;
}

export interface PortfolioData {
  services: Service[];
  projects: Project[];
  certificates: Certificate[];
}
