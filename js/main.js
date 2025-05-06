const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

const hero = document.getElementById('hero');
let savedTheme = localStorage.getItem('theme');

const toggleBtn = qs('.toggle-btn');
const toggleBall = qs('.toggle-ball');
const skills = qsa('.skill');
const skillText = qs('.skill-text');
const skillAlt = qsa('.skill img');
const projects = qsa('.project');
const modalProject = qs('.modal-project');
const path = window.location.pathname;
let isModalOpen = false;


toggleBtn.addEventListener('click', () => {
   toggleBall.classList.remove('toggleBallAnimation');
   void toggleBall.offsetWidth;
   toggleBall.classList.add('toggleBallAnimation');
   toggleBall.classList.toggle('moveToggleBall');

   document.body.classList.toggle('dark-theme');

   if (hero) {
      if (document.body.classList.contains('dark-theme')) {
         localStorage.setItem('theme', 'dark');
         hero.style.backgroundImage = "url('src/images/hero-bg-black.png')";
      } else {
         localStorage.setItem('theme', 'light');
         hero.style.backgroundImage = "url('src/images/hero-bg.png')";
      };
   }
});

document.addEventListener('DOMContentLoaded', () => {
   if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      toggleBall.classList.add('moveToggleBall');
      if (hero) {
         hero.style.backgroundImage = "url('src/images/hero-bg-black.png')";
      }
   } else {
      if (hero) {
         hero.style.backgroundImage = "url('src/images/hero-bg.png')";
      }
   }
   qs('.skill-text').innerHTML = window.innerWidth > 768 ? '*Passe o mouse em cima do card*' : '*Clique no card*'
});

skills.forEach(skill => {
   const skillDataName = skill.getAttribute('data-name');
   let currentSkillText = skillsData.find(s => s.name === skillDataName);

   skill.addEventListener("mouseenter", function () {
      skillText.textContent = currentSkillText.text;
   });
   skill.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
         skillText.textContent = '*Passe o mouse em cima do card*';
      } else {
         skillText.textContent = '*Clique no card*';
      }
   });
});

projects.forEach((proj) => {
   proj.addEventListener('click', () => {
      handleOpenModalProj(proj);
   });
});
function handleOpenModalProj(proj) {
   if (!isModalOpen) {
      const projInfos = ProjectsData.find((data) => data.name === proj.getAttribute('data-name'));
      qs('.modal-project-image').src = proj.querySelector('.project-image').src;
      modalProject.querySelector('.modal-project-right h1').textContent = projInfos.name;
      modalProject.querySelector('.modal-project-right p').textContent = projInfos.description;

      projInfos.technologies.forEach((tec) => {
         const spanTec = document.createElement('span');
         spanTec.textContent = tec;
         qs('.modal-technologies').appendChild(spanTec);
      });

      const accessBtn = qs('.access-btn');
      accessBtn.setAttribute('onclick', `window.open('${projInfos.url}', '_blank')`);
      modalProject.classList.add('showModal');
      isModalOpen = true;
      qs('.modal-buttons i').setAttribute('onclick', `window.open('${projInfos.github}', '_blank')`);
   };
};

if (path.includes('/') || path.includes('index') || path.includes('projects')) {
   modalProject.addEventListener('click', (evt) => {
      if (evt.target === modalProject) {
         modalProject.classList.remove('showModal');
         qs('.modal-technologies').innerHTML = '';
         isModalOpen = false;
      };
   });
   qs('.back-btn').addEventListener('click', () => {
      modalProject.classList.remove('showModal');
      qs('.modal-technologies').innerHTML = '';
      isModalOpen = false;
   });
}

function handleCopy(e){
   const li = e.currentTarget;
   li.classList.add('clicked');
   const textToCopy = li.querySelector('p').textContent;
   navigator.clipboard.writeText(textToCopy);
   setTimeout(() => {
      li.classList.remove('clicked');
   }, 2000);
}

document.querySelector('#copyEmail').addEventListener('click', handleCopy)
document.querySelector('#copyNumber').addEventListener('click', handleCopy)