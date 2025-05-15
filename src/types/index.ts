export interface Timeline {
  date: string;
  title: string;
  description: string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}