export type User = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    affiliation: string;
    country: 'Japan' | 'India';
};

export type Tag = {
    id: string;
    name: string;
};

export type Post = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    authorId: string;
    tags: string[]; // array of tag ids
    createdAt: string;
    readTime: number; // in minutes
    commentsCount: number;
    language: 'en' | 'ja';
};

export type Event = {
    id: string;
    title: string;
    date: string;
    type: 'Webinar' | 'Workshop' | 'Conference';
};
