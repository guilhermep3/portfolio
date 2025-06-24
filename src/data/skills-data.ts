export type skillType = {
  name: string;
  src: string;
  text: string;
};

export const skillsData: skillType[] = [
  {
    name: 'html',
    src: 'html.png',
    text: 'HTML é a linguagem de marcação fundamental para estruturar o conteúdo na web, definindo a base de qualquer página ou aplicação.'
  },
  {
    name: 'css',
    src: 'css.png',
    text: 'CSS é a linguagem de estilização que transforma o visual de um projeto, permitindo criar designs responsivos e atraentes.'
  },
  {
    name: 'react',
    src: 'react.png',
    text: 'React é uma biblioteca JavaScript poderosa para construir interfaces de usuário dinâmicas e reativas, com componentes reutilizáveis.'
  },
  {
    name: 'nextjs',
    src: 'nextjs.png',
    text: 'Next.js é um framework React que facilita a criação de aplicações web modernas, com renderização estática e no lado do servidor.'
  },
  {
    name: 'javascript',
    src: 'javascript.png',
    text: 'Javascript é a principal linguagem de programação front-end, usada para aplicar funcionalidades para os projetos e conectar com o back-end.'
  },
  {
    name: 'typescript',
    src: 'typescript.png',
    text: 'TypeScript é um superset do JavaScript que adiciona tipagem estática, melhorando a segurança e a manutenção do código.'
  },
  {
    name: 'tailwind',
    src: 'tailwind.png',
    text: 'Tailwind CSS é um framework utilitário que permite estilizar aplicações de forma rápida e consistente, com classes pré-definidas.'
  },
  {
    name: 'git',
    src: 'git.png',
    text: 'Git é uma ferramenta de vercionamento de código, muito utilizado para salvar o código e histórico de alterações nele.'
  },
  {
    name: 'sass',
    src: 'sass.png',
    text: 'Sass é um pré-processador css que adiciona mais funcionalidades ao css, visando criar um código mais limpo e reutilizável.'
  },
];