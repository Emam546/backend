interface Company {
    _id: string;
    name: string;
    thumbnail: {
        home: {
            video: string;
            image: string;
        };
        main: {
            image?: string;
            bg: string;
        };
    };
}
type Ages = 0 | 7 | 5 | 13 | 16 | 18;
interface Film {
    _id: string;
    name: string;
    company: string;
    thumbnails: {
        head: string;
        portal: string;
        headPortal?: string;
        landscape: string;
    };
    age: Ages;
    desc: string;
    head: (string | { str: string })[];
    bottom: string[];
    lang: (string | { str: string })[];
}

interface User {
    name: string;
    age: Ages[];
    phone: string;
}

interface TitleType {
    name: string;
    _id: string;
}

interface Edition {
    name: string;
    films: Film[];
}
