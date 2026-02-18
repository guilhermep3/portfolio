export type LibraryType = {
  name: string;
  description: string;
  tags: string[]
}

export const librariesData = [
  {
    name: "Zod",
    description: "Validação de schemas com tipagem forte.",
    tags: ["Validação", "TypeScript", "Forms"],
  },
  {
    name: "React Hook Form",
    description: "Gerenciamento de formulários performático em React.",
    tags: ["Forms", "React", "Performance", "Frontend"],
  },
  {
    name: "Zustand",
    description: "Gerenciamento de estado global em React.",
    tags: ["State", "React", "Performance", "Frontend"],
  },
  {
    name: "Axios",
    description: "Cliente HTTP simples para consumo de APIs.",
    tags: ["HTTP", "API", "Frontend"],
  },
  {
    name: "Tanstack Query",
    description: "Gerenciamento e cache de dados assíncronos.",
    tags: ["HTTP", "API", "Frontend"],
  },
  {
    name: "Prisma ORM",
    description: "ORM moderno para bancos de dados em Node.js.",
    tags: ["ORM", "Database", "SQL", "Backend"],
  },
  {
    name: "Drizzle ORM",
    description: "ORM leve com controle direto de SQL.",
    tags: ["ORM", "Database", "SQL", "Backend"],
  },
];
