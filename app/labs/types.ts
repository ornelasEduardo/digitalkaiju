export type TagColor =
  | "green"
  | "blue"
  | "purple"
  | "orange"
  | "red"
  | "yellow"
  | "indigo"
  | "gray";

export interface ProjectTag {
  label: string;
  color?: TagColor;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  icon: string;
  gradient?: [string, string];
  tags?: ProjectTag[];
  links?: ProjectLink[];
  image?: {
    url: string;
    config?: {
      zoom?: number;
    };
  };
  comingSoon?: boolean;
}

export interface ProjectsFile {
  projects: ProjectItem[];
}
