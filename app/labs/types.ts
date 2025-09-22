export type TagColor =
  | "green"
  | "blue"
  | "purple"
  | "orange"
  | "red"
  | "yellow"
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
  link?: ProjectLink;
  comingSoon?: boolean;
}

export interface ProjectsFile {
  projects: ProjectItem[];
}
