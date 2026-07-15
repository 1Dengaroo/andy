export interface BookmarkLink {
  title: string;
  url: string;
  image: string;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  dateRange: string;
  description: string;
  link: BookmarkLink;
}
