const mainTitles = ['experience', 'certificates', 'other'];

const intro = "I am a self-taught Front-End Web Developer who loves building web applications. I am motivated and willing to learn new things! I am currently improving my react skills by studying, building projects and keeping myself up to date with the recent updates. My goal is to learn and master the MERN stack (MongoDB, Express, React, Node) in the near future. The lockdown in 2020 was the most difficult period of my life. I lost my aviation job while becoming a father of a beautiful baby boy. I never would have imagined to be unemployed in a foreign country especially after deciding to have a child. Thankfully I discovered web development and I started coding. I quickly grasped the fundamental concepts and I learnt how to create interactive websites and web applications. I have now become a very passionate developer and there isn't a day that goes by where I don't think about coding.";

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
        extraInfo: "My Foods will help you to look for your next delicious meal! Search your meals based on their category or their country of provenience. The search page will allow you to search meals by their name. When you find your favourite meal you can save it to your favourites by clicking on the heart. This app is currently only for mobile devices. This project was built in an OOP (object oriented programming) style. Data was retrieved from a public api TheMealDB (https://www.themealdb.com/). I used async/await together with fetch to grab the data from the api. Favourite meals are persisted to local storage. High order functions have been used to iterate through data. There is a lot of DOM manipulation and event listeners. CSS animation was used to animate the heart on click. The page colors are stored in CSS variables.",
        img: './images/projectimages/myfood.png',
        repo: 'https://github.com/philipHinch/my-foods-app',
        link: 'https://philiphinch.github.io/my-foods-app/'

    },
    {
        title: 'weather app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is a modern looking weather application. You can see the real-time weather forecast for any city in the world. I used async/await together with fetch to grab the data from the api. The data is fetched from Accuweather API (https://developer.accuweather.com/)',
        img: './images/projectimages/weather.png',
        repo: 'https://github.com/philipHinch/iWeather-application',
        link: 'https://www.youtube.com/watch?v=9XA7sQKpL2Y&t=2s&ab_channel=neo90sr'
    },
    {
        title: 'My contacts app',
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: "This is a personal React project focused on form handling and controlled inputs. Contacts App will allow you to store your contact's information, it will also allow you to filter through them when searching for a specific contact and it will also allow you to sort the contacts by first or last name when clicking on the sort arrows. There is an alert everytime a color is selected and nice css transitions. I used useEffect and useState for state management. This app is fully responsive. With this project I have realised how much better it is to create react applications rather than creating them with vanilla javascript",
        img: './images/projectimages/contacts.png',
        repo: 'https://github.com/philipHinch/contacts-app',
        link: 'https://my-contacts-appp.herokuapp.com/'
    },
    {
        title: "phil's recipes",
        tech: ['js classes (oop)', 'async/await', 'fetch api', 'high order functions', 'local storage', 'dom manipulation'],
        extraInfo: 'This is my very first React project and is a remake of the Vanilla JavaScript - My Foods App (https://github.com/philipHinch/my-foods-app). The amount of time I spent building this project (being my very first react project) helped me really understand how some fundamental react concepts work. Here you can search your favourite meals and filter them by category. When clicking on a meal, a modal will pop up with all the detailed info about that meal. The recipes are fetched from TheMealDB API (https://www.themealdb.com/). I used useState & useEffect hooks for state management.',
        img: './images/projectimages/philsrecipes.png',
        repo: 'https://github.com/philipHinch/phils-recipes',
        link: 'https://phils-recipes.netlify.app/'
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