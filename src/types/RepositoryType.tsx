export type RepositoryType = {
  id: number;
  description: string | null;
  name: string | null;
  language?: string | null;
  stars?: number;
  forks?: number;
};
