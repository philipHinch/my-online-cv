// VARIABLES

const body = document.querySelector('body')
const phoneNumber = document.querySelector('.phone-number-link');
const numberText = document.querySelector('.phone-number');
const email = document.querySelector('.email-link');
const emailText = document.querySelector('.email-text');
const italyFlag = document.getElementById('italy-flag')
const ukFlag = document.getElementById('uk-flag')

const projectsTitleContainer = document.querySelector('.projects-title-container')
const projectsContainer = document.querySelector('.projects');
const educationContainer = document.querySelector('.education-container');
const languagesContainer = document.querySelector('.languages-container');
const headerInfoContainer = document.querySelector('.header-info');
const experienceTitleContainer = document.querySelector('.experience-title-container');
const innerExperienceContainer = document.querySelector('.inner-experience');
const certificatesTitleContainer = document.querySelector('.certificates-title-container');
const otherTitleContainer = document.querySelector('.other-title-container');
const drivingLicensesContainer = document.querySelector('.driving-licenses');
const downloadBtn = document.querySelector('.download');



let isModalVisible = false;
let isItalian = false;
let isEnglish = true;

// FUNCTIONS

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};














// EVENT LISTENERS

//copy phone number to clipboard
phoneNumber.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-phone-square')) {
        copyToClipboard('+358452709828');
    } else if (e.target.classList.contains('phone-number')) {
        copyToClipboard('+358452709828');
    } else if (e.target.classList.contains('phone-number-link')) {
        copyToClipboard('+358452709828');
    }

    numberText.textContent = 'Number Copied!'

    setTimeout(() => {
        numberText.textContent = '+358 (0) 452709828'
    }, 1000)
})

//copy email to clipboard
email.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-envelope')) {
        copyToClipboard('philip.hinchsliff@yahoo.com');
    } else if (e.target.classList.contains('email-text')) {
        copyToClipboard('philip.hinchsliff@yahoo.com');
    } else if (e.target.classList.contains('email-link')) {
        copyToClipboard('philip.hinchsliff@yahoo.com');
    }

    emailText.textContent = 'Email Copied!'

    setTimeout(() => {
        emailText.textContent = 'philip.hinchsliff@yahoo.com'
    }, 1000)
})

//flag events
italyFlag.addEventListener('click', () => {

    isEnglish = false;
    isItalian = true;

    downloadBtn.setAttribute('href', './documents/CVphiliphinchsliffITA.pdf')
    downloadBtn.setAttribute('download', 'CVphiliphinchsliffITA.pdf')


    //change flag opacities
    italyFlag.firstChild.classList.add('active-flag')
    ukFlag.firstChild.classList.remove('active-flag')

    //update header 
    headerInfoContainer.innerHTML = `
    <h1 class="main-title"> <span class="first-name">Philip</span> <span class="last-name">Hinchsliff</span></h1>
    <h4 class="profession"> < Front-End Developer /> </Front-End></h4>
    <p class="introduction">${ introITA }</p>
    `;

    //update projects
    projectsTitleContainer.innerHTML = `
    <h3 class="projects-title"><span><i class="fas fa-shapes"></i></span>${ asideTitlesITA[1] }</h3>
    `;

    projectsContainer.innerHTML = `
    <h4 class="project-title project-title1">${ projectsITA[0].title }</h4>
    <div class="project project1">
        <div class="project-image">
            <img src="./images/projectimages/myfood.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title2">${ projectsITA[1].title }</h4>
    <div class="project project2">
        <div class="project-image">
            <img src="./images/projectimages/weather.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title3">${ projectsITA[2].title }</h4>
    <div class="project project3">
        <div class="project-image">
            <img src="./images/projectimages/solarsystem.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title4">${ projectsITA[3].title }</h4>
    <div class="project project4">
        <div class="project-image">
            <img src="./images/projectimages/portfolio.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title5">${ projectsITA[4].title }</h4>
    <div class="project project5">
        <div class="project-image">
            <img src="./images/projectimages/worldcontries.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title6">${ projectsITA[5].title }</h4>
    <div class="project project6">
        <div class="project-image">
            <img src="./images/projectimages/mapofitaly.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title7">${ projectsITA[6].title }</h4>
    <div class="project project7">
        <div class="project-image">
            <img src="./images/projectimages/pokemon.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title8">${ projectsITA[7].title }</h4>
    <div class="project project8">
        <div class="project-image">
            <img src="./images/projectimages/gym.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    `;

    //update education

    educationContainer.innerHTML = `
    <div class="education-title-container">
    <h3 class="education-title"><span><i class="fas fa-graduation-cap"></i></span>${ asideTitlesITA[2] }</h3>
</div>
<a href="https://www.liceoquintiliano.edu.it/" target="_blank" title="Vedi Istituto" class="education-link">
<div class="education-inner">
    <h4 class="education-inner-title">${ educationITA[0].title }</h4>
    <h5 class="education-institute">
        8° I.I.S.S. "M.F. QUINTILIANO"
    </h5>
    <h6 class="education-location"><i class="fas fa-globe"></i> ${ educationITA[0].location }</h6>
    <small class="education-date"><i class="fas fa-calendar"></i> 2004-2009</small>
</div>
</a>
    `;

    //update languages

    languagesContainer.innerHTML = `
    <div class="languages-title-container">
    <h3 class="languages-title"><i class="fas fa-flag"></i></span>${ asideTitlesITA[3] }</h3>
</div>
<div class="progress-container">
    <label for="language-progress1">${ languagesITA[0] }</label>
    <div id="language-progress1" class="language-progress1">
        <div class="language-progress-bar1"></div>
    </div>
    <label for="language-progress2">${ languagesITA[1] }</label>
    <div id="language-progress2" class="language-progress2">
        <div class="language-progress-bar2"></div>
    </div>
</div>
    `;


    //update experience title

    experienceTitleContainer.innerHTML = `
    <h3 class="experience-title"><span><i class="fas fa-briefcase"></i></span>${ mainTitlesITA[0] }</h3>
    `;

    //update experiences

    innerExperienceContainer.innerHTML = `
    <div class="experience experience0">
    <h3 class="experience-inner-title">${ experiencesITA[0].position }</h3>
    <h5 class="experience-inner-company">${ experiencesITA[0].employer }</h5>
    <div class="date-and-location">
        <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiencesITA[0].date }</h6>
        <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiencesITA[0].locations }</h6>
    </div>
    <p class="experience-inner-info">${ experiencesITA[0].info }</p>
</div>
<div class="experience experience1">
    <h3 class="experience-inner-title">${ experiencesITA[1].position }</h3>
    <h5 class="experience-inner-company">${ experiencesITA[1].employer }</h5>
    <div class="date-and-location">
        <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiencesITA[1].date }</h6>
        <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiencesITA[1].locations }</h6>
    </div>
    <p class="experience-inner-info">${ experiencesITA[1].info }</p>
</div>
<div class="experience experience2">
    <h3 class="experience-inner-title">${ experiencesITA[2].position }</h3>
    <h5 class="experience-inner-company">${ experiencesITA[2].employer }</h5>
    <div class="date-and-location">
        <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiencesITA[2].date }</h6>
        <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiencesITA[2].locations }</h6>
    </div>
    <p class="experience-inner-info">${ experiencesITA[2].info }</p>
</div>
<div class="experience experience3">
    <h3 class="experience-inner-title">${ experiencesITA[3].position }</h3>
    <h5 class="experience-inner-company">${ experiencesITA[3].employer }</h5>
    <div class="date-and-location">
        <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiencesITA[3].date }</h6>
        <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiencesITA[3].locations }</h6>
    </div>
    <p class="experience-inner-info">${ experiencesITA[3].info }</p>
</div>
    `;

    //update certificates

    certificatesTitleContainer.innerHTML = `
    <h3 class="certificates-title"><span><i class="fas fa-file-alt"></i></span>${ mainTitlesITA[1] }</h3>
    `;

    //update other title

    otherTitleContainer.innerHTML = `
    <h3 class="other-title"><span><i class="fas fa-random"></i></span>${ mainTitlesITA[2] }</h3>
    `;

    //update other

    drivingLicensesContainer.innerHTML = `
    <h3 class="driving-license-title">${ otherITA[0].title }</h3>
    <p class="driving-license-info">${ otherITA[0].licenses }</p>
    `;

    //update phone number and email alert
})

ukFlag.addEventListener('click', () => {

    isEnglish = true;
    isItalian = false;

    downloadBtn.setAttribute('href', './documents/CVphiliphinchsliffENG.pdf')
    downloadBtn.setAttribute('download', 'CVphiliphinchsliffENG.pdf')

    //change flag opacities
    ukFlag.firstChild.classList.add('active-flag')
    italyFlag.firstChild.classList.remove('active-flag')

    //update header 
    headerInfoContainer.innerHTML = `
        <h1 class="main-title"> <span class="first-name">Philip</span> <span class="last-name">Hinchsliff</span></h1>
        <h4 class="profession"> < Front-End Developer /> </Front-End></h4>
        <p class="introduction">${ intro }</p>
        `;

    //update projects
    projectsTitleContainer.innerHTML = `
    <h3 class="projects-title"><span><i class="fas fa-shapes"></i></span>${ asideTitles[1] }</h3>
    `;

    projectsContainer.innerHTML = `
    <h4 class="project-title project-title1">MY FOODS APP</h4>
    <div class="project project1">
        <div class="project-image">
            <img src="./images/projectimages/myfood.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title2">WEATHER APP</h4>
    <div class="project project2">
        <div class="project-image">
            <img src="./images/projectimages/weather.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title3">THE SOLAR SYSTEM</h4>
    <div class="project project3">
        <div class="project-image">
            <img src="./images/projectimages/solarsystem.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title4">MY PORTFOLIO</h4>
    <div class="project project4">
        <div class="project-image">
            <img src="./images/projectimages/portfolio.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title5">WORLD COUNTRIES</h4>
    <div class="project project5">
        <div class="project-image">
            <img src="./images/projectimages/worldcontries.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title6">INTERACTIVE ITALY MAP</h4>
    <div class="project project6">
        <div class="project-image">
            <img src="./images/projectimages/mapofitaly.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title7">POKEMON FLIP CARDS</h4>
    <div class="project project7">
        <div class="project-image">
            <img src="./images/projectimages/pokemon.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    <h4 class="project-title project-title8">GYM WEBSITE</h4>
    <div class="project project8">
        <div class="project-image">
            <img src="./images/projectimages/gym.png" alt="">
        </div>
        <div class="project-info">
            <ul>
                <li>js classes (oop)</li>
                <li>async/await</li>
                <li>fetch api</li>
                <li>high order functions</li>
                <li>local storage</li>
                <li>dom manipulation</li>
            </ul>
        </div>
    </div>
    `;

    //update education

    educationContainer.innerHTML = `
        <div class="education-title-container">
        <h3 class="education-title"><span><i class="fas fa-graduation-cap"></i></span>Education</h3>
    </div>
    <a href="https://www.liceoquintiliano.edu.it/" target="_blank" title="View Institute" class="education-link">
    <div class="education-inner">
        <h4 class="education-inner-title">Scientific Lyceum</h4>
        <h5 class="education-institute">
            8° I.I.S.S. "M.F. QUINTILIANO"
        </h5>
        <h6 class="education-location"><i class="fas fa-globe"></i> Siracusa, Italy</h6>
        <small class="education-date"><i class="fas fa-calendar"></i> 2004-2009</small>
    </div>
    </a>
        `;

    //update languages

    languagesContainer.innerHTML = `
    <div class="languages-title-container">
    <h3 class="languages-title"><i class="fas fa-flag"></i></span>Languages</h3>
</div>
<div class="progress-container">
    <label for="language-progress1">ENGLISH</label>
    <div id="language-progress1" class="language-progress1">
        <div class="language-progress-bar1"></div>
    </div>
    <label for="language-progress2">ITALIAN</label>
    <div id="language-progress2" class="language-progress2">
        <div class="language-progress-bar2"></div>
    </div>
</div>
    `;

    //update experience title

    experienceTitleContainer.innerHTML = `
        <h3 class="experience-title"><span><i class="fas fa-briefcase"></i></span>${ mainTitles[0] }</h3>
        `;

    //update experiences

    innerExperienceContainer.innerHTML = `
        <div class="experience experience0">
        <h3 class="experience-inner-title">${ experiences[0].position }</h3>
        <h5 class="experience-inner-company">${ experiences[0].employer }</h5>
        <div class="date-and-location">
            <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiences[0].date }</h6>
            <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiences[0].locations }</h6>
        </div>
        <p class="experience-inner-info">${ experiences[0].info }</p>
    </div>
    <div class="experience experience1">
        <h3 class="experience-inner-title">${ experiences[1].position }</h3>
        <h5 class="experience-inner-company">${ experiences[1].employer }</h5>
        <div class="date-and-location">
            <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiences[1].date }</h6>
            <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiences[1].locations }</h6>
        </div>
        <p class="experience-inner-info">${ experiences[1].info }</p>
    </div>
    <div class="experience experience2">
        <h3 class="experience-inner-title">${ experiences[2].position }</h3>
        <h5 class="experience-inner-company">${ experiences[2].employer }</h5>
        <div class="date-and-location">
            <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiences[2].date }</h6>
            <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiences[2].locations }</h6>
        </div>
        <p class="experience-inner-info">${ experiences[2].info }</p>
    </div>
    <div class="experience experience3">
        <h3 class="experience-inner-title">${ experiences[3].position }</h3>
        <h5 class="experience-inner-company">${ experiences[3].employer }</h5>
        <div class="date-and-location">
            <h6 class="experience-inner-date"><i class="fas fa-calendar"></i>${ experiences[3].date }</h6>
            <h6 class="experience-inner-location"><i class="fas fa-globe"></i>${ experiences[3].locations }</h6>
        </div>
        <p class="experience-inner-info">${ experiences[3].info }</p>
    </div>
        `;

    //update certificates

    certificatesTitleContainer.innerHTML = `
    <h3 class="certificates-title"><span><i class="fas fa-file-alt"></i></span>${ mainTitles[1] }</h3>
    `;

    //update other title

    otherTitleContainer.innerHTML = `
        <h3 class="other-title"><span><i class="fas fa-random"></i></span>${ mainTitles[2] }</h3>
        `;

    //update other

    drivingLicensesContainer.innerHTML = `
    <h3 class="driving-license-title">${ other[0].title }</h3>
    <p class="driving-license-info">${ other[0].licenses }</p>
    `;
})