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
        name: 'Shivam Saini',
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
        content: `In the morning, we visited Miraikan today, Japan’s National Museum of Emerging Science and Innovation. This museum focuses on advanced scientific developments, technology, and the future of human society. Upon arrival, we explored several interactive exhibits that covered topics such as space exploration, robotics, global environmental changes, and advanced medical science.

One of the highlights was learning about ASIMO and other humanoid robots that demonstrate Japan’s technological leadership in robotics. We also saw exhibits about earthquake simulation, life sciences, and the Geo-Cosmos, a large LED globe displaying real-time global data. These displays helped us better understand how science and technology impact our daily lives and the world’s future. The museum encouraged us to think critically about how emerging technologies can contribute to sustainable development and improve quality of life. It highlighted that the endless debate between developed and developing countries on who should be blamed for global warming or who should be given relaxations is just purely absurd debates. We must be focusing on improving and preserving our planet for the future generations.

In the afternoon, we went to Asakusa, one of Tokyo’s most historically rich districts. The main attraction was Senso-ji Temple, the oldest Buddhist temple in Tokyo. We walked through the famous Kaminarimon (Thunder Gate) with its giant lantern. The lighting and architecture again did not fail to amaze us beyond our expectations. While praying inside the temple, I felt a peace in my mind, the same kind I feel while meditating inside our temples in India. Ultimately, the nature and the god are one and the same and provide us peace everywhere in their different incarnations.

There was a Shinto shrine just besides the senso-ji temple which highlights how both the philosophies grew together in the past while honouring each other's beliefs. This is similar to the ancient India where do many philosophies took birth, they were debated openly and respected equally while growing together. The ajanta-ellora caves are a prime example of how hinduism, Jainism and buddhism grew together in the ancient India. Therefore this part of peaceful coexistence is what I appreciated a lot.

Inside Senso-ji, we observed worshippers praying, drawing omikuji (fortune slips), and offering incense. The temple grounds gave us an opportunity to experience traditional Japanese spirituality and architecture.

In conclusion, today’s visits gave us a balanced experience of modern innovation and traditional culture. Miraikan showed us the scientific and technological direction Japan is heading toward, while Asakusa allowed us to connect with the country’s spiritual and historical roots. Together, these experiences enriched our understanding of Japanese society and provided valuable insights into both its past and its future.`,
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
        content: `As part of our cultural immersion activities in Japan, we visited Kinkaku-ji, one of Kyoto’s most iconic UNESCO World Heritage Sites. The goal of the visit was to deepen our understanding of traditional Japanese architecture, Zen Buddhism, and the historical significance of Kyoto’s heritage.
Kinkaku-ji, officially known as Rokuon-ji, is a Buddhist temple. The structure is famous for its top two floors, which are entirely covered in gold leaf(20kg of gold as we got to know), giving it a striking appearance that reflects beautifully over the surrounding pond.
We learnt about the shogunate period.
Originally, the building was built in the late 14th century as a retirement villa for Shogun Ashikaga Yoshimitsu, it was converted into a temple after his death. The building was affected by a fire in 1950 and was then later rebuilt in 1955.
Upon arrival, we entered through the main gate and followed a path that gradually revealed the Golden Pavilion. The path was very appealing and beautiful.

Surrounding the temple is a beautifully maintained Japanese strolling garden. We walked along the path that allowed us to view the pavilion from multiple angles, each offering a different scenic perspective. There was also a golden phoenix(called hoo) at the top of the pavilion. The phenix rises from ashes, representing renewal, which mirrors Kinkaku-ji’s own history of being rebuilt after fires.

We also got a goshuin from the temple which is a very meaningful and a sacred souvenir for us which also keeps the record of our visit to the temple today.

Overall, our trip to Kinkaku-ji was an enriching cultural experience that allowed us to learn about Japanese history, religion, and architecture.`,
        imageUrl: '/images/post2.jpg',
        authorId: 'u2',
        tags: ['t5', 't7'],
        createdAt: '2024-06-02T14:30:00Z',
        readTime: 4,
        commentsCount: 0,
        language: 'en',
    },
    {
        id: 'p3',
        title: 'ロボットと文化：未来館と浅草での一日',
        excerpt: '午前中、私たちは日本の科学技術館である未来館を訪れました。この博物館は、先端科学技術、テクノロジー、そして人間社会の未来に焦点を当てています。',
        content: `午前中、私たちは日本の科学技術館である未来館を訪れました。この博物館は、先端科学技術、テクノロジー、そして人間社会の未来に焦点を当てています。到着後、宇宙探査、ロボット工学、地球環境変動、先端医療科学などのトピックをカバーするいくつかのインタラクティブな展示を探索しました。

ハイライトの一つは、日本のロボット工学における技術的リーダーシップを示すASIMOや他のヒューマノイドロボットについて学んだことです。また、地震シミュレーション、生命科学、リアルタイムの地球データを表示する大型LED地球儀「ジオ・コスモス」に関する展示も見ました。これらの展示は、科学技術が私たちの日常生活や世界の未来にどのように影響を与えるかをよりよく理解するのに役立ちました。博物館は、新興技術が持続可能な開発にどのように貢献し、生活の質を向上させることができるかについて批判的に考えることを奨励しました。地球温暖化の責任を誰に負わせるべきか、あるいは誰が緩和措置を与えられるべきかについての先進国と発展途上国の間の終わりのない議論は、全く不毛な議論であることを強調しました。私たちは、未来の世代のために地球を改善し、保護することに焦点を当てるべきです。

午後、私たちは東京で最も歴史的に豊かな地区の一つである浅草に行きました。主な見どころは、東京で最も古い仏教寺院である浅草寺でした。巨大な提灯がある有名な雷門をくぐりました。照明と建築は、再び私たちの期待を超えて私たちを驚かせました。寺院の中で祈っている間、私はインドの寺院の中で瞑想しているときに感じるのと同じ種類の心の平和を感じました。最終的に、自然と神は一つであり、同じであり、彼らの異なる化身でどこでも私たちに平和を提供します。

浅草寺のすぐそばには神社があり、両方の哲学が互いの信念を尊重しながら過去にどのように一緒に成長したかを浮き彫りにしています。これは、古代インドで多くの哲学が生まれ、公然と議論され、共に成長しながら平等に尊重されたのと似ています。アジャンタ・エローラ石窟群は、ヒンドゥー教、ジャイナ教、仏教が古代インドでどのように一緒に成長したかの好例です。したがって、この平和共存の部分は私が大いに評価したものです。

浅草寺の中では、参拝者が祈ったり、おみくじを引いたり、線香をあげたりするのを観察しました。寺の境内は、日本の伝統的な精神性と建築を体験する機会を与えてくれました。

結論として, 今日の訪問は、現代の革新と伝統文化のバランスの取れた経験を私たちに与えてくれました。未来館は日本が進んでいる科学技術の方向性を示してくれましたが、浅草は私たちが国の精神的、歴史的ルーツとつながることを可能にしました。これらの経験は、日本社会についての私たちの理解を豊かにし、その過去と未来の両方について貴重な洞察を提供しました。`,
        imageUrl: '/images/post1.jpg',
        authorId: 'u1',
        tags: ['t3', 't5', 't1'],
        createdAt: '2024-06-01T10:00:00Z',
        readTime: 5,
        commentsCount: 0,
        language: 'ja',
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
