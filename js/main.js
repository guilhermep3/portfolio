const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

const hero = document.getElementById('hero');
let savedTheme = localStorage.getItem('theme');

const toggleBtn = qs('.toggle-btn');
const toggleBall = qs('.toggle-ball');
const skills = qsa('.skill');
const skillText = qs('.skill-text');
const skillAlt = qsa('.skill img');
const certificates = qsa('.certificate');
const modalCertificate = qs('.modal-certificate');
const projects = qsa('.project');
const modalProject = qs('.modal-project');
const hamburgerMenu = qs('.hamburger-menu');
let isModalOpen = false;

hamburgerMenu.addEventListener('click', () => {
   hamburgerMenu.classList.toggle('hamburger-menu-active');
   qs('.mobile-nav').classList.toggle('show-mobile-nav');
})

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
});

skills.forEach(skill => {
   const skillDataName = skill.getAttribute('data-name');
   let currentSkillText = skillsData.find(s => s.name === skillDataName);

   skill.addEventListener("mouseenter", function () {
      skillText.textContent = currentSkillText.text;
   });
   skill.addEventListener("mouseleave", () => {
      skillText.textContent = '*Passe o mouse em cima do card*';
   });
});

if (window.location.pathname.includes('index')) {
   certificates.forEach((cert) => {
      cert.addEventListener('click', () => {
         handleOpenModal(cert.firstElementChild.src);
      });
   });
   function handleOpenModal(certSrc) {
      if (!isModalOpen) {
         qs('.modal-container-certificate img').src = certSrc;
         modalCertificate.classList.add('showModal');
         isModalOpen = true;
      }
   };
   qs('.modal-container-certificate span').addEventListener('click', () => {
      modalCertificate.classList.remove('showModal');
      isModalOpen = false;
   });
   modalCertificate.addEventListener('click', (evt) => {
      if (evt.target === modalCertificate) {
         modalCertificate.classList.remove('showModal');
         isModalOpen = false;
      }
   });
}

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
if(window.location.pathname.includes('index') || window.location.pathname.includes('projects')){
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