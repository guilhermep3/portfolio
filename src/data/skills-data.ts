export type skillType = {
  name: string;
  src: string;
  description: string;
  intermediate: boolean;
};

export const skillsData: skillType[] = [
  {
    name: 'HTML',
    src: 'html5.svg',
    description: 'Linguagem de marcação',
    intermediate: false
  },
  {
    name: 'CSS',
    src: 'css.svg',
    description: 'Estilização de páginas web',
    intermediate: false
  },
  {
    name: 'React',
    src: 'react.svg',
    description: 'Biblioteca para interfaces',
    intermediate: false
  },
  {
    name: 'Nextjs',
    src: 'nextjs.svg',
    description: 'Framework React',
    intermediate: false
  },
  {
    name: 'Javascript',
    src: 'javascript.svg',
    description: 'Linguagem de programação web',
    intermediate: false
  },
  {
    name: 'Typescript',
    src: 'typescript.svg',
    description: 'JavaScript com tipagem',
    intermediate: false
  },
  {
    name: 'Tailwind',
    src: 'tailwindcss.svg',
    description: 'Framework CSS utilitário',
    intermediate: false
  },
  {
    name: 'Git',
    src: 'git.svg',
    description: 'Controle de versão',
    intermediate: false
  },
  {
    name: 'Sass',
    src: 'sass.svg',
    description: 'Pré-processador CSS',
    intermediate: false
  },
  {
    name: 'Node.js',
    src: 'nodejs.svg',
    description: 'JavaScript no servidor',
    intermediate: true
  },
  {
    name: 'PostgreSQL',
    src: 'postgresql.svg',
    description: 'Banco de dados relacional',
    intermediate: true
  },
  {
    name: 'mySQL',
    src: 'mysql.svg',
    description: 'Banco de dados relacional',
    intermediate: true
  },
];
