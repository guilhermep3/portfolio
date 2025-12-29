export type skillType = {
  name: string;
  src: string;
  description: string;
  begginer: boolean;
};

export const skillsData: skillType[] = [
  {
    name: 'HTML',
    src: 'html5.svg',
    description: 'Linguagem de marcação',
    begginer: false
  },
  {
    name: 'CSS',
    src: 'css.svg',
    description: 'Estilização de páginas web',
    begginer: false
  },
  {
    name: 'React',
    src: 'react.svg',
    description: 'Biblioteca para interfaces',
    begginer: false
  },
  {
    name: 'Nextjs',
    src: 'nextjs.svg',
    description: 'Framework React',
    begginer: false
  },
  {
    name: 'Javascript',
    src: 'javascript.svg',
    description: 'Linguagem de programação web',
    begginer: false
  },
  {
    name: 'Typescript',
    src: 'typescript.svg',
    description: 'JavaScript com tipagem',
    begginer: false
  },
  {
    name: 'Tailwind',
    src: 'tailwindcss.svg',
    description: 'Framework CSS utilitário',
    begginer: false
  },
  {
    name: 'Git',
    src: 'git.svg',
    description: 'Controle de versão',
    begginer: false
  },
  {
    name: 'Sass',
    src: 'sass.svg',
    description: 'Pré-processador CSS',
    begginer: false
  },
  {
    name: 'Node.js',
    src: 'nodejs.svg',
    description: 'JavaScript no servidor',
    begginer: true
  },
  {
    name: 'PostgreSQL',
    src: 'postgresql.svg',
    description: 'JavaScript no servidor',
    begginer: true
  },
  {
    name: 'mySQL',
    src: 'mysql.svg',
    description: 'JavaScript no servidor',
    begginer: true
  },
];
