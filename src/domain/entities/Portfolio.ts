/**
 * Domain Entity: Portfolio
 *
 * Merepresentasikan satu proyek/karya yang pernah dikerjakan.
 */
export type PortfolioCategory =
  | "Web Application"
  | "Mobile Application"
  | "Point of Sales"
  | "Company Profile"
  | "System Integration";

export interface Portfolio {
  id: string;
  title: string;
  category: PortfolioCategory;
  client: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  url?: string;
}
