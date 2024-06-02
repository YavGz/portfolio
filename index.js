const headerLogo = document.querySelector('.header_logo');
const headerLogoImg = document.querySelector('.header_logo__img');
const headerHome = document.querySelector('.header_link__home');
const headerProjects = document.querySelector('.header_link__projects');
const headerAbout = document.querySelector('.header_link__about');
const moreProjectsButton = document.querySelector('.more_projects')

const home = document.querySelector('.home_section')
const projects = document.querySelector('.projects_section')
const about = document.querySelector('.about_section')

function switchSection (event) {
  let elem = event.target.className;

  if (elem.includes('header_link__home')) {

    projects.classList.remove('section_active');
    about.classList.remove('section_active');
    home.classList.add('section_active');
    headerHome.classList.add('header_link__active');
    headerProjects.classList.remove('header_link__active');
    headerAbout.classList.remove('header_link__active');
    
  } else if (elem.includes('header_logo')) {
    
    projects.classList.remove('section_active');
    about.classList.remove('section_active');
    home.classList.add('section_active');
    headerHome.classList.add('header_link__active');
    headerProjects.classList.remove('header_link__active');
    headerAbout.classList.remove('header_link__active');

  } else if (elem.includes('header_link__projects')) {
    
    projects.classList.add('section_active');
    about.classList.remove('section_active');
    home.classList.remove('section_active');
    headerHome.classList.remove('header_link__active');
    headerProjects.classList.add('header_link__active');
    headerAbout.classList.remove('header_link__active');

  } else if (elem.includes('more_projects')) {
    
    projects.classList.add('section_active');
    about.classList.remove('section_active');
    home.classList.remove('section_active');
    headerHome.classList.remove('header_link__active');
    headerProjects.classList.add('header_link__active');
    headerAbout.classList.remove('header_link__active');

  } else if (elem.includes('header_link__about')) {
    
    projects.classList.remove('section_active');
    about.classList.add('section_active');
    home.classList.remove('section_active');
    headerHome.classList.remove('header_link__active');
    headerProjects.classList.remove('header_link__active');
    headerAbout.classList.add('header_link__active');

  }
};

moreProjectsButton.addEventListener('click', switchSection)
headerLogoImg.addEventListener('click', switchSection);
headerLogo.addEventListener('click', switchSection);
headerHome.addEventListener('click', switchSection);
headerProjects.addEventListener('click', switchSection);
headerAbout.addEventListener('click', switchSection);