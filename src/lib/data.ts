import type { User, Post, Tag, Event } from './types';

export const users: User[] = [
    {
        id: 'u1',
        name: 'Kenji Tanaka',
        email: 'kenji.tanaka@example.com',
        avatarUrl: 'https://picsum.photos/seed/user1/200/200',
        affiliation: 'University of Tokyo',
        country: 'Japan',
    },
    {
        id: 'u2',
        name: 'Priya Sharma',
        email: 'priya.sharma@example.com',
        avatarUrl: 'https://picsum.photos/seed/user2/200/200',
        affiliation: 'Indian Institute of Technology, Bombay',
        country: 'India',
    },
    {
        id: 'u3',
        name: 'Yuki Nakamura',
        email: 'yuki.nakamura@example.com',
        avatarUrl: 'https://picsum.photos/seed/user3/200/200',
        affiliation: 'Kyoto University',
        country: 'Japan',
    },
    {
        id: 'u4',
        name: 'Arjun Verma',
        email: 'arjun.verma@example.com',
        avatarUrl: 'https://picsum.photos/seed/user4/200/200',
        affiliation: 'Indian Institute of Science',
        country: 'India',
    },
];

export const tags: Tag[] = [
    { id: 't1', name: 'Robotics' },
    { id: 't2', name: 'Environmental Science' },
    { id: 't3', name: 'AI & Machine Learning' },
    { id: 't4', name: 'Linguistics' },
    { id: 't5', name: 'Cultural Studies' },
    { id: 't6', name: 'Bio-Technology' },
    { id: 't7', name: 'History' },
];

export const posts: Post[] = [
    {
        id: 'p1',
        title: 'A Day of Contrasts: Miraikan and Asakusa',
        excerpt: 'In the morning, we visited Miraikan today, Japan’s National Museum of Emerging Science and Innovation. This museum focuses on advanced scientific developments, technology, and the future of human society.',
        imageUrl: '/images/post1.jpg',
        authorId: 'u2',
        tags: ['t3', 't5', 't1'],
        createdAt: '2024-06-01T10:00:00Z',
        readTime: 5,
        commentsCount: 0,
        language: 'en',
    },
    {
        id: 'p2',
        title: 'A Visit to Kinkaku-ji: The Golden Pavilion',
        excerpt: 'As part of our cultural immersion activities in Japan, we visited Kinkaku-ji, one of Kyoto’s most iconic UNESCO World Heritage Sites. The goal of the visit was to deepen our understanding of traditional Japanese architecture, Zen Buddhism, and the historical significance of Kyoto’s heritage.',
        imageUrl: '/images/post2.jpg',
        authorId: 'u2',
        tags: ['t5', 't7'],
        createdAt: '2024-06-02T14:30:00Z',
        readTime: 4,
        commentsCount: 0,
        language: 'en',
    },
];

export const events: Event[] = [
    {
        id: 'e1',
        title: 'AI in Healthcare: A Joint Webinar',
        date: '2024-06-10T10:00:00Z',
        type: 'Webinar',
    },
    {
        id: 'e2',
        title: 'Cross-Cultural Communication Workshop',
        date: '2024-06-25T13:00:00Z',
        type: 'Workshop',
    },
];
