interface Companies {
    name: string;
    thumbnail:{
        home:{
            video:string,
            image:string,
        }
        main:{
            image:string,
        }
    }
}
interface Film {
    name: string;
    company: mongoose.Types.ObjectId;
    thumbnails: {
        head: string;
        portal: string;
        headPortal?: string;
        landscape: string;
    };
    desc: string;
    head: (string | { str: string })[];
    bottom: string[];
    lang: (string | { str: string })[];
}
type Ages = "5" | "13" | "16" | "18";
interface User {
    name: string;
    age: Ages[];
    phone: string;
}
