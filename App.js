// VARIABLES

const body = document.querySelector('body')
const phoneNumber = document.querySelector('.phone-number-link');
const numberText = document.querySelector('.phone-number');
const email = document.querySelector('.email-link');
const emailText = document.querySelector('.email-text');
const italyFlag = document.getElementById('italy-flag')
const ukFlag = document.getElementById('uk-flag')
const header = document.querySelector('header')

const allProjects = document.querySelectorAll('.project');
const projectsTitleContainer = document.querySelector('.projects-title-container')
const project1 = document.querySelector('.project1')
const project2 = document.querySelector('.project2')
const project3 = document.querySelector('.project3')
const project4 = document.querySelector('.project4')
const project5 = document.querySelector('.project5')
const project6 = document.querySelector('.project6')
const project7 = document.querySelector('.project7')
const project8 = document.querySelector('.project8')


const modal = document.querySelector('.modal');
const innerModal = document.querySelector('.inner-modal')
const modalCloseBtn = document.querySelector('.modal-close-btn');
const projectModalTitle = document.querySelector('.project-modal-title');

let isItalian;
let isEnglish;
let isModalVisible = false;

if (header.classList.contains('english-page')) {
    isItalian = false;
    isEnglish = true;
} else if (header.classList.contains('italian-page')) {
    isItalian = true;
    isEnglish = false;
}

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


project1.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[0].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[0].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[0].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[0].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[0].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[0].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[0].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[0].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[0].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[0].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project2.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[1].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[1].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[1].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[1].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[1].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[1].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[1].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[1].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[1].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[1].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project3.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[2].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[2].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[2].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[2].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[2].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[2].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[2].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[2].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[2].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[2].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project4.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[3].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[3].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[3].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[3].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[3].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[3].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[3].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[3].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[3].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[3].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project5.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[4].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[4].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[4].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[4].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[4].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[4].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[4].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[4].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[4].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[4].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project6.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[5].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[5].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[5].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[5].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[5].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[5].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[5].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[5].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[5].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[5].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project7.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[6].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[6].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[6].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[6].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[6].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[6].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[6].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[6].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[6].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[6].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})

project8.addEventListener('click', () => {
    //if isEnglish==true, show english info
    if (isEnglish === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
<div class="modal-close-btn"><i class="fas fa-times"></i></div>
<h3 class="project-modal-title">${ projects[7].title }</h3>
<div class="modal-image-container">
    <img src="${ projects[7].img }" alt="my foods">
</div>
<p class="project-modal-info">${ projects[7].extraInfo }</p>
<div class="modal-buttons">
    <a href="${ projects[7].link }" class="btn view-project" target="_blank" >View Project</a>
    <a href="${ projects[7].repo }" class="btn view-repo" target="_blank">View Repository</a>
</div>
`
    }

    //if isItalian==true, show italian info
    if (isItalian === true) {
        //show modal & stop scroll
        modal.classList.remove('hidden')
        body.style.overflowY = 'hidden';
        innerModal.innerHTML = `
        <div class="modal-close-btn"><i class="fas fa-times"></i></div>
        <h3 class="project-modal-title">${ projectsITA[7].title }</h3>
        <div class="modal-image-container">
            <img src="${ projectsITA[7].img }" alt="my foods">
        </div>
        <p class="project-modal-info">${ projectsITA[7].extraInfo }</p>
        <div class="modal-buttons">
            <a href="${ projectsITA[7].link }" class="btn view-project" target="_blank" >Vedi Progetto</a>
            <a href="${ projectsITA[7].repo }" class="btn view-repo" target="_blank">Vedi Repository</a>
        </div>
        `
    }

    //modal close button
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times') || e.target.classList.contains('modal')) {
            modal.classList.add('hidden')
            body.style.overflowY = 'scroll';
        }
    })
})














/////////////////////////  all good  //////////////////////////////////////


//copy phone number to clipboard
phoneNumber.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-phone-square')) {
        copyToClipboard('+358452709828');
    } else if (e.target.classList.contains('phone-number')) {
        copyToClipboard('+358452709828');
    } else if (e.target.classList.contains('phone-number-link')) {
        copyToClipboard('+358452709828');
    }

    if (isEnglish === true) {
        numberText.textContent = 'Number Copied!'
    } else if (isItalian === true) {
        numberText.textContent = 'Numero Copiato!'
    }

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

    if (isEnglish === true) {
        emailText.textContent = 'Email Copied!'
    } else {
        emailText.textContent = 'Email Copiata!'
    }

    setTimeout(() => {
        emailText.textContent = 'philip.hinchsliff@yahoo.com'
    }, 1000)
})
