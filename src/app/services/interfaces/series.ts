export interface Series {
    id: number;
    title: string;
    description?: string | null;
    endYear?: number | null;
    thumbnail: { extension: string; path: string;};
    resourceURI: string;    
}
