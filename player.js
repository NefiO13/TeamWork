const players = [
    {
        firstName: 'LeBron',
        lastName: 'James',
        position: 'SF',
        age: '40',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
        Facts: [
            "He needs to retire right now",
            "LeBron James has an impressive record, scoring in double figures in a remarkable 1,222 consecutive games, an NBA record"

        ]
    },

    {
        firstName: 'Austin',
        lastName: 'Reaves',
        position: 'SG',
        age: '26',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png&w=350&h=254',
        Facts:
            [
                " He was a 2020-21 All-Big 12 First Team selection, led the Big 12 in free throws made, and became the first player to ever lead Oklahoma in points, rebounds, and assists."
            ]
    },

    {
        firstName: 'Luka',
        lastName: 'Doncic',
        position: 'PG',
        age: '26',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
        Facts: [
            "He is a multilingual individual, speaking Slovenian, Spanish, Serbian, and English.",
            "Furthermore, Dončić is an avid gamer, even reaching a top 500 ranking in Overwatch 2 in 2024"
        ]
    },

    {
        firstName: 'Dorian',
        lastName: 'Finney-Smith',
        position: 'PF',
        age: '32',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578185.png&w=350&h=254',
        Facts: [
            " He is considered a valuable '3 and D' player, meaning he excels at both shooting from 3-point range and guarding opponents."
        ]
    },

    {
        firstName: 'Jordan',
        lastName: 'Goodwin',
        position: 'G',
        age: '26',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278402.png&w=350&h=254',
        Facts: [
            "Goodwin has played 140 NBA games, including 24 starts, across his four seasons with the Lakers, Memphis Grizzlies, Phoenix Suns, and Washington Wizards. "
        ]
    },

    {
        firstName: 'Rui',
        lastName: 'Hachimura',
        position: 'PF',
        age: '27',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066648.png&w=350&h=254',
        Facts: [
            "Rui Hachimura will be one of the NBA's most prominent rookies after becoming the first Japanese-born player selected in the first round."
        ]
    },
    {
        firstName: 'Jaxson',
        lastName: 'Hayes',
        position: 'C',
        age: '24',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397077.png&w=350&h=254',
        Facts: [
            " He has scored double figures in 84 career games, including 10 games with 20+ points, and nine career double-doubles."
        ]
    },
    {
        firstName: 'Bronny',
        lastName: 'James',
        position: 'G',
        age: '20',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683774.png&w=350&h=254',
        Facts: [
            "He is the eldest child and teammate of professional basketball player LeBron James Sr., making them the first active father-son duo in NBA history"
        ]
    },
    {
        firstName: 'Trey',
        lastName: 'Jemison III',
        position: 'C',
        age: '25',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395623.png&w=350&h=254',
        Facts: [
            "During his college career, Jemison set a UAB program record with 329 rebounds in a single season and led the team in rebounds. "
        ]
    },
    {
        firstName: 'Maxi',
        lastName: 'Kleber',
        position: 'PF',
        age: '33',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2960236.png&w=350&h=254',
        Facts: [
            "Kleber represents the German national team."
        ]
    },
    {
        firstName: 'Dalton',
        lastName: 'Knecht',
        position: 'G',
        age: '24',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4897943.png&w=350&h=254',
        Facts: [
            "Knecht initially attended Prairie View High School in Thornton, Colorado, where he averaged 21 points and 6.5 rebounds as a senior, but didn't receive Division I offers. "
        ]
    },
    {
        firstName: 'Christian',
        lastName: 'Koloko',
        position: 'C',
        age: '24',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431778.png&w=350&h=254',
        Facts: [
            "Koloko is originally from Douala, Cameroon, and moved to the United States to play high school basketball in 2017, initially attending Birmingham High School. "
        ]
    },
    {
        firstName: 'Alex',
        lastName: 'Len',
        position: 'C',
        age: '31',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2596107.png&w=350&h=254',
        Facts: [
            "He's a former gymnast from Ukraine, has a strong family connection to sports, and is a fan of Jackie Chan. He also has a unique blend of languages, being fluent in Ukrainian, Russian, and English. "
        ]
    },
    {
        firstName: 'Shake',
        lastName: 'Milton',
        position: 'SG',
        age: '28',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3915195.png&w=350&h=254',
        Facts: [
            "Shake Milton's nickname 'Shake' comes from his late father, Myron Milton's nickname 'Milkman'. Milton's real name is Malik. He played college basketball at Southern Methodist University (SMU).",
            "Milton's father, Myron, was also a college basketball player. "
        ]
    },
    {
        firstName: 'Markieff',
        lastName: 'Morris',
        position: 'PF',
        age: '35',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6461.png&w=350&h=254',
        Facts: [
            "He's a twin, with his brother Marcus being seven minutes younger."
        ]
    },
    {
        firstName: 'Jarred',
        lastName: 'Vanderbilt',
        position: 'PF',
        age: '26',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278077.png&w=350&h=254',
        Facts: [
            "He's a former McDonald's All-American and five-star recruit out of Victory Prep Academy, averaging 28.5 points, 13.4 rebounds, and 8.8 assists per game as a senior"
        ]
    },
    {
        firstName: 'Gabe',
        lastName: 'Vincent',
        position: 'PG',
        age: '26',
        photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3137259.png&w=350&h=254',
    }
]