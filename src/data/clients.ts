/**
 * Empresas atendidas. Marca tipográfica uniforme por enquanto.
 * Para trocar por logo real: coloque o SVG/PNG em /public/logos/<slug>.svg
 * e troque `wordmark` por `logo: "/logos/<slug>.svg"` (o componente já suporta os dois).
 */
export interface ClientLogo {
  name: string;
  wordmark: string;   // texto exibido quando não há arquivo de logo
  logo?: string;      // caminho opcional para /public/logos/*.svg
  sector: string;     // usado só como alt/acessibilidade, não é exibido
}

export const clients: ClientLogo[] = [
  { name: "MRV", wordmark: "MRV", sector: "Construção" },
  { name: "Fleury", wordmark: "Fleury", sector: "Saúde" },
  { name: "Hermes Pardini", wordmark: "Pardini", sector: "Saúde" },
  { name: "Butiá Investimentos", wordmark: "Butiá", sector: "Investimentos" },
  { name: "Ecológica", wordmark: "Ecológica", sector: "Ambiental" },
  { name: "DryCom", wordmark: "DryCom", sector: "Tecnologia" },
];
