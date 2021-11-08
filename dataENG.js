const mainTitles = ['experience', 'certificates', 'other'];

const intro = 'I am a Front-End Web Developer & I enjoy building web apps. I am motivated & willing to learn new things! Check out my projects! During lockdown in 2020, after losing my aviation job as a cabin manager, I started coding & learned web development & became a father!';

const asideTitles = ['skills', 'projects', 'education', 'languages'];

const other = [
    {
        title: 'driving licenses',
        licenses: 'A1 - B'
    }
];

const languages = ['english', 'italian'];

const education = [
    {
        title: 'scientific lyceum',
        institute: '8° i.i.s.s. "m.f. quintiliano"',
        location: 'siracusa, italy',
        years: '2004 - 2009'
    }
];

const projects = [
    {
        title: 'my foods app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/myfood.png',
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/'

    },
    {
        title: 'weather app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/weather.png',
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr'
    },
    {
        title: 'the solar system',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/solarsystem.png',
        repo: 'https://github.com/philipHinch/solar-system',
        link: 'https://philiphinch.github.io/solar-system/'
    },
    {
        title: 'my portfolio',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/portfolio.png',
        repo: 'https://github.com/philipHinch/my-portfolio',
        link: 'https://philhinchportfolio.netlify.app/'
    },
    {
        title: 'world countries',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/worldcountries.png',
        repo: 'https://github.com/philipHinch/world-countries',
        link: 'https://world-countries-database.netlify.app/'
    },
    {
        title: 'interactive italy map',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/mapofitaly.png',
        repo: 'https://github.com/philipHinch/interactive-map-of-italy',
        link: 'https://mapofitaly.netlify.app/'
    },
    {
        title: 'pokemon flip cards',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/pokemon.png',
        repo: 'https://github.com/philipHinch/pokemon-cards',
        link: 'https://pokemon-cards-viewer.netlify.app/'
    },
    {
        title: 'gym webiste',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. z',
        img: './images/projectimages/gym.png',
        repo: 'https://github.com/philipHinch/PowerGym',
        link: 'https://powergyms.netlify.app/'
    }
];

const experiences = [
    {
        position: 'freelancer',
        employer: 'self-employed',
        date: '08/2020 - present',
        locations: 'helsinki/finland',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'cabin supervisor',
        employer: 'norwegian airlines',
        date: '01/2018 - 08/2020',
        locations: 'dublin/ireland - helsinki/finland',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'cabin supervisor',
        employer: 'ryanair',
        date: '01/2011 - 01/2018',
        locations: 'prestwick/uk - billund/denmark - palermo/italy - kraków/poland',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    },
    {
        position: 'front desk receptionist',
        employer: 'hotel gran bretagna',
        date: '07/2009 - 01/2011',
        locations: 'siracusa/italy',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id, nesciunt debitis molestiae nisi beatae incidunt dolorum quidem ullam voluptas porro molestias cum maiores possimus, esse nihil nulla, sit ut placeat asperiores velit eligendi! Quo nostrum culpa cumque rem. Nam delectus iste debitis voluptatum nemo excepturi doloribus harum recusandae ut!'
    }
];

const certificates = [
    {
        title: 'responsive web design',
        source: 'freecodecamp',
        svg: ''
    },
    {
        title: 'javascript from novice to ninja',
        source: 'udemy',
        svg: ''
    },
    {
        title: 'modern javascript from the beginning',
        source: 'udemy',
        svg: ''
    }
];