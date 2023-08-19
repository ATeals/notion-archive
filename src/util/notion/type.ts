export interface PostInfo {
    title: string;
    coverImg: string;
    tags: string[];
    created_at: string;
    series: string;
    description: string;
    id: string;
}

export interface tag {
    id: string;
    name: string;
    color: string;
}

export interface Review {
    title: string;
    created_at: string;
    coverImg: string;
    star: string;
    category: tag;
    state: tag;
    creator: tag[];
    genre: tag[];
    id: string;
}
