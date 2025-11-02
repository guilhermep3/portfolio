export type skillType = {
  name: string;
  src: string;
  text: string;
  begginer: boolean;
};

export const skillsData: skillType[] = [
  {
    name: 'html',
    src: 'html.png',
    text: 'HTML é a linguagem de marcação fundamental para estruturar o conteúdo na web, definindo a base de qualquer página ou aplicação.',
    begginer: false
  },
  {
    name: 'css',
    src: 'css.png',
    text: 'CSS é a linguagem de estilização que transforma o visual de um projeto, permitindo criar designs responsivos e atraentes.',
    begginer: false
  },
  {
    name: 'react',
    src: 'react.png',
    text: 'React é uma biblioteca JavaScript poderosa para construir interfaces de usuário dinâmicas e reativas, com componentes reutilizáveis.',
    begginer: false
  },
  {
    name: 'nextjs',
    src: 'nextjs.png',
    text: 'Next.js é um framework React que facilita a criação de aplicações web modernas, com renderização estática e no lado do servidor.',
    begginer: false
  },
  {
    name: 'javascript',
    src: 'javascript.png',
    text: 'Javascript é a principal linguagem de programação front-end, usada para aplicar funcionalidades para os projetos e conectar com o back-end.',
    begginer: false
  },
  {
    name: 'typescript',
    src: 'typescript.png',
    text: 'TypeScript é um superset do JavaScript que adiciona tipagem estática, melhorando a segurança e a manutenção do código.',
    begginer: false
  },
  {
    name: 'tailwind',
    src: 'tailwind.png',
    text: 'Tailwind CSS é um framework utilitário que permite estilizar aplicações de forma rápida e consistente, com classes pré-definidas.',
    begginer: false
  },
  {
    name: 'git',
    src: 'git.png',
    text: 'Git é uma ferramenta de vercionamento de código, muito utilizado para salvar o código e histórico de alterações nele.',
    begginer: false
  },
  {
    name: 'sass',
    src: 'sass.png',
    text: 'Sass é um pré-processador css que adiciona mais funcionalidades ao css, visando criar um código mais limpo e reutilizável.',
    begginer: false
  },
  {
    name: 'Node.js',
    src: 'nodejs.png',
    text: 'Node.js é um ambiente de execução para JavaScript que permite executar o código do lado do servidor e fora de um navegador',
    begginer: true
  },
];