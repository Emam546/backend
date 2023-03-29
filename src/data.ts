import { getRandomNum, getRandomValue, getRandomValues } from "./utils";

const ages: Ages[] = [0, 13, 18, 16, 5];

function randomizeAge() {
    return getRandomValue(ages);
}
const language: string[] = [
    "german",
    "mandarin",
    "korean",
    "japaneses",
    "spanish",
    "polish",
    "french",
    "turkish",
    "czes",
    "french",
    "swedish",
    "korean",
    "brazilian",
    "Urdu",
    "Japanese",
    "Chinese",
];

function randomizeLanguages() {
    return [{ str: "english" }, ...getRandomValues(language)];
}
export const data: Film[] = [
    {
        company: "marvel",
        name: "Ant Man",
        thumbnails: {
            portal: "./movies/antMan/1127780-v-996c2af7d908.webp",
            landscape: "./movies/antMan/1240499-i-ec8762eb057f.webp",
            head: "./movies/antMan/1480991-t-b1de2c034faf.webp",
        },
        desc: "Scott Lang and Dr. Hank Pym plan a heist that could save the world.",
        head: ["2015", "2h"],
        age: randomizeAge(),
        bottom: ["superhero", "comedy", "action-adventure", "science fiction"],
        lang: randomizeLanguages(),
    },
    {
        name: "Avengers",
        company: "marvel",
        thumbnails: {
            portal: "./movies/avengers/1132056-v-f80fd87300d2.webp",
            landscape: "./movies/avengers/1239978-i-68c47bdaea2f.webp",
            head: "./movies/avengers/1339766-t-a14ae6819720.webp",
        },
        desc: "Nick Fury recruits a team of heroes to battle an unexpected enemy.",
        head: ["2012", "2h25m"],
        age: randomizeAge(),
        bottom: ["superhero", "comedy", "action-adventure", "science fiction"],
        lang: randomizeLanguages(),
    },
    {
        name: "Avengers Endgame",
        company: "marvel",
        thumbnails: {
            portal: "./movies/avengersEndGame/1130408-v-3a00352c9ade.webp",
            landscape: "./movies/avengersEndGame/1240043-i-4804feb71a53.webp",
            head: "./movies/avengersEndGame/1388402-t-f86006d9f903.webp",
        },
        desc: "The epic finale to the Infinity Saga, this dramatic showdown pits the Avengers against Thanos.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: [
            "superhero",
            "comedy",
            "action-adventure",
            "science fiction",
            "fantasy",
        ],
        lang: randomizeLanguages(),
    },
    {
        name: "Avengers Infinity War",
        company: "marvel",
        thumbnails: {
            portal: "./movies/avengersInfintyWar/1221878-v-c3d77ac35d87.webp",
            landscape:
                "./movies/avengersInfintyWar/1240214-i-e7bfc90e2e67.webp",
            head: "./movies/avengersInfintyWar/1388390-t-a4f819f46b1e.webp",
        },
        desc: "The Avengers must be willing to sacrifice all to defeat Thanos.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Black Panther",
        company: "marvel",
        thumbnails: {
            portal: "./movies/BlackPanter/1127742-v-059f7686f5ce.webp",
            landscape: "./movies/BlackPanter/1240516-i-3bdbb419c436.webp",
            head: "./movies/BlackPanter/1466797-t-f3ff6e270442.webp",
        },
        desc: "T’Challa battles a powerful foe when his homeland of Wakanda is threatened.",
        head: [`20${getRandomNum(10) + 13}`, "h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Boston Strangers",
        company: "national",
        thumbnails: {
            headPortal: "./movies/bostonStrangers/1472226-h-7907b44272a6.webp",
            portal: "./movies/bostonStrangers/1484144-v-5e1765f514e2.webp",
            landscape: "./movies/bostonStrangers/1488811-i-3e180d652caf.webp",
            head: "./movies/bostonStrangers/1484146-t-b2bbc0dc8939.webp",
        },
        desc: "A true-crime thriller about the reporters who broke the story of the Boston Strangler murders.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Brave",
        company: "pixar",
        thumbnails: {
            portal: "./movies/brave/1115095-v-20ba8a1353a6.webp",
            landscape: "./movies/brave/1233091-i-79911c6bff9f.webp",
            head: "./movies/brave/1362159-t-f95dfcb63fa4.webp",
        },
        desc: "Princess Merida must undo a beastly curse before it’s too late.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Captain America Winter Solider",
        company: "marvel",
        thumbnails: {
            portal: "./movies/captinAmerciaWinterSolider/1129679-v-54e8075ab087.webp",
            landscape:
                "./movies/captinAmerciaWinterSolider/1240103-i-a84c307ee921.webp",
            head: "./movies/captinAmerciaWinterSolider/1339830-t-2e4fb17c4e98.webp",
        },
        desc: "Captain America and Black Widow join forces against the Winter Soldier.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Captain America CivilWar",

        company: "marvel",
        thumbnails: {
            portal: "./movies/captinAmericaCivilWar/1126405-v-85bd75884710.webp",
            landscape:
                "./movies/captinAmericaCivilWar/1240530-i-41c2bcac47d3.webp",
            head: "./movies/captinAmericaCivilWar/1339761-t-22377a240543.webp",
        },
        desc: "Captain America and Iron Man clash, causing the Avengers to choose sides.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Captain America First Avenger",
        company: "marvel",
        thumbnails: {
            portal: "./movies/captinAmericaFirstAvenger/1131261-v-7245d94e3688.webp",
            landscape:
                "./movies/captinAmericaFirstAvenger/1240006-i-446dbeb06f51.webp",
            head: "./movies/captinAmericaFirstAvenger/1471818-t-49ffcb0a2065.webp",
        },
        desc: "A top-secret research project turns Steve Rogers into Captain America.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Coco",
        company: "pixar",
        thumbnails: {
            portal: "./movies/coco/1128875-v-0e3f26936cb5.webp",
            landscape: "./movies/coco/1240111-i-b2c305d6a659.webp",
            head: "./movies/coco/1399958-t-65b5c5dcd7c4.webp",
        },
        desc: "Miguel journeys to the magical land of his ancestors.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "DeadPool",
        company: "marvel",
        thumbnails: {
            portal: "./movies/deadpool/1130422-v-f773844fa037.webp",
            landscape: "./movies/deadpool/1240183-i-f357026dc4ad.webp",
            head: "./movies/deadpool/1340109-t-33bcd2a9bb04.webp",
        },
        desc: "Witness the origin story of Wade Wilson, who adopts the alter ego Deadpool.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Doctor Strange Multiverse",

        company: "marvel",
        thumbnails: {
            portal: "./movies/doctorStrangeMultiverse/1272794-v-6c9e3dab2d1f.webp",
            landscape:
                "./movies/doctorStrangeMultiverse/1279875-i-5551ece0127e.webp",
            head: "./movies/doctorStrangeMultiverse/1348164-t-71c0bb6ff4d9.webp",
        },
        desc: "Adventuring through the Multiverse, Doctor Strange breaks open infinite possibilities for the MCU.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Doctor Strange",

        company: "marvel",
        thumbnails: {
            portal: "./movies/drSrange/1126647-v-3fbf9047e255.webp",
            landscape: "./movies/drSrange/1240558-i-b10d61e2f5f6.webp",
            head: "./movies/drSrange/1362380-t-159d7d861563.webp",
        },
        desc: "Adventuring through the Multiverse, Doctor Strange breaks open infinite possibilities for the MCU.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Finding Michel",
        company: "disney",
        thumbnails: {
            headPortal: "./movies/findingMichle/1468000-h-69e411e824fa.webp",
            portal: "./movies/drSrange/1126647-v-3fbf9047e255.webp",
            landscape: "./movies/findingMichle/1479306-i-bae5a1577092.webp",
            head: "./movies/findingMichle/1487355-t-a4de76261e6a.webp",
        },
        desc: "Spencer Matthews heads to Everest to try and find his brother Michael who disappeared 23 years ago.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Frozen",
        company: "disney",
        thumbnails: {
            portal: "././movies/frozen/1129541-v-e12cb570f101.webp",
            landscape: "./movies/frozen/1240008-i-49f41025bace.webp",
            head: "./movies/frozen/1339070-t-f03b071df0b9.webp",
        },
        desc: "Anna and Kristoff brave the elements, racing to save Elsa and the kingdom.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Frozen Fever",
        company: "disney",
        thumbnails: {
            portal: "./movies/frozenFever/1122098-v-6b97cd210343.webp",
            headPortal: "./movies/frozenFever/1122099-h-4e812f62cfc2.webp",
            landscape: "./movies/frozenFever/1415047-i-bfd6c1a79096.webp",
            head: "./movies/frozenFever/1400477-t-13c76c2be4eb.webp",
        },
        desc: "Elsa wants to give Anna the best birthday party ever.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Greys Anatomy",
        company: "disney",
        thumbnails: {
            headPortal: "./movies/greysAnatomy/1134291-h-fa4f5239fb34.webp",
            portal: "./movies/greysAnatomy/1134294-v-3987a77f0cd5.webp",
            landscape: "./movies/greysAnatomy/1481424-i-98fb62237132.webp",
            head: "./movies/greysAnatomy/1489506-t-dfdc19ce3457.webp",
        },
        desc: "The doctors face life-or-death decisions daily.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Insideout",
        company: "pixar",
        thumbnails: {
            portal: "./movies/insideout/1127562-v-97cedd252702.webp",
            landscape: "./movies/insideout/1357371-i-0a08e06ec802.webp",
            head: "./movies/insideout/1399988-t-8227ca27ee97.webp",
        },
        desc: "Five Emotions must work overtime when a young girl moves to a new city.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m", { str: "5+" }],
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
        age: randomizeAge(),
    },
    {
        name: "IronMan",

        company: "marvel",
        thumbnails: {
            portal: "./movies/ironMan1/1128917-v-212e325b343c.webp",
            landscape: "./movies/ironMan1/1240566-i-0c44d1ff04e7.webp",
            head: "./movies/ironMan1/1343182-t-4bf7b483774e.webp",
        },
        desc: "Jet-setting industrialist Tony Stark vows to protect the world as Iron Man.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "IronMan 2",

        company: "marvel",
        thumbnails: {
            portal: "./movies/ironMan2/1126191-v-a145d4e1b5b7.webp",
            landscape: "./movies/ironMan2/1237894-i-a4013fbd6c8c.webp",
            head: "./movies/ironMan2/1339066-t-81b5e1bc1e5c.webp",
        },
        desc: "Inventor Tony Stark forges new alliances to confront powerful enemies.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "IronMan 3",

        company: "marvel",
        thumbnails: {
            portal: "./movies/ironman3/1128917-v-212e325b343c.webp",
            landscape: "./movies/ironman3/1232721-i-ec33f9fbe0da.webp",
            head: "./movies/ironman3/1338935-t-0629bd07dce8.webp",
        },
        desc: "His personal world destroyed, Tony Stark embarks on a harrowing quest to find those responsible.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Loki",

        company: "marvel",
        thumbnails: {
            portal: "./movies/Loki/1155123-v-eb71c5e74929.webp",
            landscape: "./movies/Loki/1237457-i-314dac42a953.webp",
            head: "./movies/Loki/1482567-t-c434666274c2.webp",
        },
        desc: "The mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Luca",

        company: "pixar",
        thumbnails: {
            portal: "./movies/luca/1149420-v-4eca736a6a30.webp",
            landscape: "./movies/luca/1240247-i-fb412dcc2b09.webp",
            head: "./movies/luca/1454988-t-ceb92c1a7979.webp",
        },
        desc: "Join Luca, a young sea monster, as he experiences an unforgettable summer on the Italian Riviera.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Captain Marvel",

        company: "marvel",
        thumbnails: {
            portal: "./movies/marvel/1127789-v-16b82d38a21b.webp",
            landscape: "./movies/marvel/1240577-i-fb96b703ab3b.webp",
            head: "./movies/marvel/1362187-t-e81321b20472.webp",
        },
        desc: "Marvel Studios’ Captain Marvel launches the MCU’s most powerful hero.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Miley Cyrus",

        company: "disney",
        thumbnails: {
            headPortal: "./movies/milycrusy/1480673-h-00c657dc6e03.webp",
            landscape: "./movies/milycrusy/1482981-i-237e9c79f828.webp",
            portal: "./movies/milycrusy/1488811-i-3e180d652caf.webp",
            head: "./movies/milycrusy/1489480-t-a3ccdaa329a5.webp",
        },
        desc: "Miley Cyrus takes the stage performing songs from her new album and reflecting on who she is today.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Monsters Inc",

        company: "pixar",
        thumbnails: {
            portal: "./movies/monstreinc/1129800-v-46f57d522ee3.webp",
            landscape: "./movies/monstreinc/1239961-i-7d4a95834eb8.webp",
            head: "./movies/monstreinc/1333744-t-4713b8b4e7e7.webp",
        },
        desc: "A little girl named Boo wanders into the world of monsters.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Moon Knight",

        company: "marvel",
        thumbnails: {
            portal: "./movies/MoonKnight/1196232-v-35897a719034.webp",
            landscape: "./movies/MoonKnight/1243815-i-710fac1b76a6.webp",
            head: "./movies/MoonKnight/1483023-t-0154ffc11b0b.webp",
        },
        desc: "Mild-mannered Steven Grant has dissociative identity disorder and shares a body with a mercenary.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "spiderMan HomeComing",

        company: "marvel",
        thumbnails: {
            portal: "./movies/spidermanHomeComing/1272759-v-99b13820a8a9.webp",
            landscape:
                "./movies/spidermanHomeComing/1277515-i-d10696e93b3c.webp",
            head: "./movies/spidermanHomeComing/1399079-t-04793b434e65.webp",
        },
        desc: "Peter Parker returns in Spider-Man: Far From Home!",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "spiderMan Far From Home",
        company: "marvel",
        thumbnails: {
            portal: "./movies/spidermanFarFromHome/1304349-v-e877b4a2ee52.webp",
            landscape:
                "./movies/spidermanFarFromHome/1406096-i-e0d8c4cb3041.webp",
            head: "./movies/spidermanFarFromHome/1481335-t-5fd5d5448ebe.webp",
        },
        desc: "Peter Parker returns in Spider-Man: Far From Home!",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "starWars Mandalorian",
        company: "starwars",
        thumbnails: {
            headPortal:
                "./movies/starWarsMandarien/1478367-h-a6de5b726b01.webp",
            portal: "./movies/starWarsMandarien/1478371-v-de744db1e71b.webp",
            landscape: "./movies/starWarsMandarien/1482055-i-e812b7c9b3ca.webp",
            head: "./movies/starWarsMandarien/1489588-t-e231fb9641fd.webp",
        },
        desc: "After the Empire’s fall, a lone Mandalorian makes his way through the galaxy with his foundling.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Thor",
        company: "marvel",
        thumbnails: {
            portal: "./movies/thor/1126041-v-908644f0cc96.webp",
            landscape: "./movies/thor/1240579-i-4bdcbf6c3b2d.webp",
            head: "./movies/thor/1472326-t-04e0d30456fd.webp",
        },
        desc: "Thor, Asgard's greatest hero, reignites an ancient war that he must take part in from Earth.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Thor The Ragna Rock",
        company: "marvel",
        thumbnails: {
            portal: "./movies/thorTheRagnaRock/1129239-v-e725562f45b0.webp",
            landscape: "./movies/thorTheRagnaRock/1240210-i-60fad6324ea1.webp",
            head: "./movies/thorTheRagnaRock/1455595-t-3ff56e3610f5.webp",
        },
        desc: "Thor must set out on his most dangerous and personal journey yet.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Thor Love And Thunder",

        company: "marvel",
        thumbnails: {
            portal: "./movies/thorLoveAndThunder/1322679-v-44f2847f1ad8.webp",
            landscape:
                "./movies/thorLoveAndThunder/1325989-i-bc3d56762474.webp",
            head: "./movies/thorLoveAndThunder/1455595-t-3ff56e3610f5.webp",
        },
        desc: "Thor, King Valkyrie, Korg and Jane Foster-turned-Mighty-Thor take on Gorr the God Butcher.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },

    {
        name: "Toy Story 1",
        company: "pixar",
        thumbnails: {
            portal: "./movies/toyStroy1/1127235-v-5707355a119b.webp",
            landscape: "./movies/toyStroy1/1240575-i-9b1867df2a2f.webp",
            head: "./movies/toyStroy1/1335546-t-624357a55073.webp",
        },
        desc: "Thor, King Valkyrie, Korg and Jane Foster-turned-Mighty-Thor take on Gorr the God Butcher.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Toy Story 2",

        company: "pixar",
        thumbnails: {
            portal: "./movies/toystory2/1131854-v-309d37345a55.webp",
            landscape: "./movies/toystory2/1233311-i-934191a9e36f.webp",
            head: "./movies/toystory2/1362397-t-42092bceed3b.webp",
        },
        desc: "Thor, King Valkyrie, Korg and Jane Foster-turned-Mighty-Thor take on Gorr the God Butcher.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "Toy Story 3",

        company: "pixar",
        thumbnails: {
            portal: "./movies/toystrory3/1128428-v-92a5cbc82e7b.webp",
            landscape: "./movies/toystrory3/1240179-i-03bb19cfb228.webp",
            head: "./movies/toystrory3/1339059-t-7cb466b6643c.webp",
        },
        desc: "Woody, Buzz and the gang return for more adventures with new friends.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },

    {
        name: "Unprisoned",

        company: "pixar",
        thumbnails: {
            portal: "./movies/unprisned/1474254-v-5e8c41dc7a9b.webp",
            headPortal: "./movies/unprisned/1474262-h-9c5f1a35cc53.webp",
            landscape: "./movies/unprisned/1482147-i-44a4d56b6982.webp",
            head: "./movies/unprisned/1485603-t-3def99d6a571.webp",
        },
        desc: "A single mom's life is turned right-side up when her drug-dealing dad gets out of prison.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
    {
        name: "WallE",

        company: "pixar",
        thumbnails: {
            portal: "./movies/walle/1126782-v-b46550f3d63d.webp",
            landscape: "./movies/walle/1240581-i-f582167280b2.webp",
            head: "./movies/walle/1362160-t-0c683b7ca07e.webp",
        },
        desc: "Join robots WALL-E and EVE on a fantastic journey across the universe.",
        head: [`20${getRandomNum(10) + 13}`, "3h 7m"],
        age: randomizeAge(),
        bottom: ["superhero", "action-adventure", "science fiction", "fantasy"],
        lang: randomizeLanguages(),
    },
];
export const dataCompany: Company[] = [
    {
        name: "marvel",
        thumbnail: {
            home: {
                image: "./companies/viewers-marvel.webp",
                video: "./videos/marvel.mp4",
            },
            main: {
                image: "./companies/marvel-main.webp",
                bg: "./companies/marvel-main-bg.webp",
            },
        },
    },
    {
        name: "pixar",
        thumbnail: {
            home: {
                image: "./companies/viewers-pixar.webp",
                video: "./videos/pixar.mp4",
            },
            main: {
                bg: "./companies/pixar-main-bg.webp",
            },
        },
    },
    {
        name: "disney",
        thumbnail: {
            home: {
                image: "./companies/viewers-disney.webp",
                video: "./videos/disney.mp4",
            },
            main: {
                image: "./companies/disney-main.webp",
                bg: "./companies/disney-main-bg.webp",
            },
        },
    },
    {
        name: "star",
        thumbnail: {
            home: {
                image: "./companies/viewers-star.webp",
                video: "./videos/star.mp4",
            },
            main: {
                bg: "./companies/star-main-bg.webp",
            },
        },
    },
    {
        name: "national",
        thumbnail: {
            home: {
                image: "./companies/viewers-national.webp",
                video: "./videos/nat-geo.mp4",
            },
            main: {
                image: "./companies/nation-main.webp",
                bg: "./companies/nation-main-bg.webp",
            },
        },
    },
    {
        name: "starwars",
        thumbnail: {
            home: {
                image: "./companies/viewers-starwars.webp",
                video: "./videos/star-wars.mp4",
            },
            main: {
                image: "./companies/starwars-main.webp",
                bg: "./companies/starwars-main-bg.webp",
            },
        },
    },
];

export function FilmsEditionsName(name: string) {
    return [
        "Featured",
        "Live-Action Series and Specials",
        `${name} Cinematic Universe`,
        `${name} Origin Stories`,
        "Additional Animated Movies",
        "Originals",
        "Action and Adventure",
        `${name} Legacy Movies`,
        "Comedy",
        "Drama",
        `${name} Channel Series and Special`,
        `${name} Junior Series`,
        `${name} and Reality`,
    ];
}
export const pages: Record<string, string[]> = {
    home: [
        "New to Disney+",
        "What to Watch Tonight",
        "Popular Shows",
        "Popular Movies",
        "Movies Recommended For You",
        "Awards movies",
        "Science Fiction",
        "Fantasy Movies",
        "Recently watched",
        "Classic Movies",
    ],
    series: [
        "Comedy Series",
        "Drama Series",
        "Science Fiction",
        "Adult Animation",
        "Horror",
        "Documentaries and Reality",
    ],
    movies: [
        "Action and Adventure",
        "Comedy Movies",
        "Drama Movies",
        "Romantic Movies",
        "Animated Movies",
        "Science Fiction",
        "Horror",
        "Stories Matter",
    ],
    originals: ["Series", "Movies", "Shorts", "Specials"],
};
