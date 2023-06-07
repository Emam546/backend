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
    company: mongoose.Types.ObjectId;
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
    _id: string;
    name: string;
    age: Ages[];
    phone: string;
}
interface Edition {
    name: string;
    films: Film[];
}

interface CompanyEdition {
    _id: string;
    editions: [mongoose.Types.ObjectId];
    name: string;
}
