const mainTitlesITA = ['esperienza professionale', 'certificati', 'altro'];

const introITA = "Sono uno sviluppatore Web front-end e mi piace creare app web. Sono motivato e desideroso di imparare cose nuove! Scopri i miei progetti! Durante il blocco nel 2020, dopo aver perso il mio lavoro nell'aviazione come responsabile di cabina, ho iniziato a programmare e ho imparato lo sviluppo web e sono diventato padre!";

const asideTitlesITA = ['competenze', 'progetti', 'formazione', 'lingue'];

const otherITA = [
    {
        title: 'patenti di guida',
        licenses: 'A1 - B'
    }
];

const educationITA = [
    {
        title: 'liceo scientifico',
        institute: '8° i.i.s.s. "m.f. quintiliano"',
        location: 'siracusa, italia',
        years: '2004 - 2009'
    }
];

const languagesITA = ['inglese', 'italiano'];

const projectsITA = [
    {
        title: 'app ricette',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/myfood.png',
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/'

    },
    {
        title: 'app previsioni meteo',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/weather.png',
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr'
    },
    {
        title: 'il sistema solare',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/solarsystem.png',
        repo: 'https://github.com/philipHinch/solar-system',
        link: 'https://philiphinch.github.io/solar-system/'
    },
    {
        title: "phil's recipes",
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/philsrecipes.png',
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/'
    },
    {
        title: 'paesi del mondo',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/worldcountries.png',
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/'
    },
    {
        title: 'mappa interattiva italia',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/mapofitaly.png',
        repo: 'https://github.com/philipHinch/interactive-map-of-italy',
        link: 'https://mapofitaly.netlify.app/'
    },
    {
        title: 'app carte pokemon',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/pokemon.png',
        repo: 'https://github.com/philipHinch/pokemon-cards',
        link: 'https://pokemon-cards-viewer.netlify.app/'
    },
    {
        title: 'sito palestra',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/gym.png',
        repo: 'https://github.com/philipHinch/PowerGym',
        link: 'https://powergyms.netlify.app/'
    }
];

const experiencesITA = [
    {
        position: 'freelancer',
        employer: 'lavoratore autonomo',
        date: '08/2020 - presente',
        locations: 'helsinki/finlandia',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'supervisore di cabina',
        employer: 'norwegian airlines',
        date: '01/2018 - 08/2020',
        locations: 'dublino/irelanda - helsinki/finlandia',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'supervisore di cabina',
        employer: 'ryanair',
        date: '01/2011 - 01/2018',
        locations: 'prestwick/uk - billund/danimarca - palermo/italia - kraków/polonia',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'addetto alla reception',
        employer: 'hotel gran bretagna',
        date: '07/2009 - 01/2011',
        locations: 'siracusa/italia',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    }
];


