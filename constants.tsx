
import React from 'react';
import type { Tool, DecisionMatrixRow } from './types';

export const StarIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.07 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

export const toolsData: Tool[] = [
    {
      name: "Sprout Social",
      generalView: 'Plataforma premium "all-in-one", reconhecida pela robustez e interface intuitiva. Voltada para médias e grandes empresas.',
      metricsCoverage: "Excelente",
      benchmarking: "Muito Forte",
      socialListening: "Forte",
      brazilRelevance: "Alta",
      analystVerdict: "Uma das opções mais completas do mercado. Seu principal ponto de atenção é o custo elevado (a partir de US$ 199/usuário/mês), que pode ser proibitivo para equipes maiores.",
    },
    {
      name: "Hootsuite",
      generalView: "Uma das ferramentas mais tradicionais do mercado, conhecida pela gestão de múltiplas contas.",
      metricsCoverage: "Boa",
      benchmarking: "Bom",
      socialListening: "Bom",
      brazilRelevance: "Alta",
      analystVerdict: "Uma ferramenta sólida, mas que em alguns aspectos parece datada. O custo é considerado alto (a partir de US$ 99/mês) pelo valor entregue, e a interface é frequentemente citada como menos intuitiva.",
    },
    {
      name: "Buzzmonitor",
      generalView: 'Plataforma brasileira "all-in-one" que combina monitoramento, CRM e atendimento ao cliente.',
      metricsCoverage: "Muito Boa",
      benchmarking: "Bom",
      socialListening: "Forte",
      brazilRelevance: "Máxima",
      analystVerdict: "Uma escolha forte devido ao foco no Brasil. Ideal para empresas que valorizam a proximidade com o fornecedor. O custo é de nível profissional (a partir de R$ 1.590/mês).",
    },
    {
        name: "Meltwater",
        generalView: "Plataforma de nível enterprise, com foco em inteligência de mídia e monitoramento de notícias.",
        metricsCoverage: "Boa",
        benchmarking: "Forte",
        socialListening: "Excelente",
        brazilRelevance: "Alta",
        analystVerdict: "A escolha ideal se o \"Social Listening\" for o requisito mais crítico. É uma ferramenta de alto custo (nível enterprise), mais voltada para inteligência de mercado do que para gestão de canais.",
    },
    {
        name: "Emplifi",
        generalView: "Plataforma focada em experiência do cliente (CX), que une marketing de redes sociais e e-commerce.",
        metricsCoverage: "Excelente",
        benchmarking: "Excelente",
        socialListening: "Forte",
        brazilRelevance: "Alta",
        analystVerdict: "Uma plataforma de ponta, especialmente forte para equipes \"data-driven\". Concorrente direta da Sprout Social, com custo também de nível enterprise.",
    },
    {
        name: "Quintly (agora parte da Facelift)",
        generalView: "Ferramenta especializada em análise e benchmarking de redes sociais.",
        metricsCoverage: "Excelente",
        benchmarking: "Excelente",
        socialListening: "Bom",
        brazilRelevance: "Boa",
        analystVerdict: "Ideal para equipes com forte perfil analítico que precisam de relatórios customizáveis. O custo é elevado, e a complexidade pode ser maior.",
    },
    {
        name: "Brandwatch",
        generalView: 'Considerada a líder de mercado em "consumer intelligence" e social listening.',
        metricsCoverage: "Boa",
        benchmarking: "Forte",
        socialListening: "Excelente",
        brazilRelevance: "Alta",
        analystVerdict: "A ferramenta mais poderosa para inteligência de mercado. Pode ser um exagero em custo (nível enterprise) e complexidade se a necessidade for apenas gestão de posts.",
    },
    {
        name: "HubSpot Social Media",
        generalView: "Componente integrado à poderosa plataforma de CRM da HubSpot. Seu diferencial é conectar nativamente dados sociais com perfis de leads e clientes.",
        metricsCoverage: "Excelente (com foco em ROI)",
        benchmarking: "Bom",
        socialListening: "Bom",
        brazilRelevance: "Máxima",
        analystVerdict: "Para empresas que já utilizam o CRM da HubSpot, é uma escolha imbatível pela integração nativa. O custo está embutido nos planos do Marketing Hub.",
    },
    {
        name: "mLabs",
        generalView: 'Plataforma "all-in-one" desenvolvida com foco total nas demandas de agências e empresas brasileiras.',
        metricsCoverage: "Muito Boa",
        benchmarking: "Bom",
        socialListening: "Bom",
        brazilRelevance: "Máxima",
        analystVerdict: "A escolha pragmática para agências e PMEs que operam no Brasil. O custo-benefício é percebido como excelente.",
    },
  ];
  
export const decisionMatrixData: DecisionMatrixRow[] = [
    { name: 'Sprout Social', kpiCoverage: 5, benchmarking: 5, socialListening: 4, brazilFocus: 4, costBenefit: 4, idealProfile: 'Equipes que buscam a melhor solução "all-in-one" com ótima UX e alto orçamento.' },
    { name: 'Hootsuite', kpiCoverage: 4, benchmarking: 4, socialListening: 4, brazilFocus: 5, costBenefit: 4, idealProfile: 'Equipes que já usam a ferramenta ou precisam gerenciar muitas contas.' },
    { name: 'Buzzmonitor', kpiCoverage: 4, benchmarking: 3, socialListening: 5, brazilFocus: 5, costBenefit: 4, idealProfile: 'Equipes que priorizam suporte local e integração com SAC.' },
    { name: 'Meltwater', kpiCoverage: 3, benchmarking: 5, socialListening: 5, brazilFocus: 5, costBenefit: 3, idealProfile: 'Equipes com foco primário em Relações Públicas e inteligência de mídia.' },
    { name: 'Emplifi', kpiCoverage: 5, benchmarking: 5, socialListening: 4, brazilFocus: 4, costBenefit: 3, idealProfile: 'Equipes "data-driven" que necessitam de benchmarking de nível superior.' },
    { name: 'Quintly/Facelift', kpiCoverage: 5, benchmarking: 5, socialListening: 4, brazilFocus: 4, costBenefit: 3, idealProfile: 'Equipes com forte perfil analítico que precisam de relatórios customizáveis.' },
    { name: 'Brandwatch', kpiCoverage: 3, benchmarking: 5, socialListening: 5, brazilFocus: 5, costBenefit: 3, idealProfile: 'Equipes de pesquisa e estratégia que precisam de "consumer intelligence".' },
    { name: 'HubSpot', kpiCoverage: 5, benchmarking: 4, socialListening: 4, brazilFocus: 5, costBenefit: 5, idealProfile: 'Empresas que já utilizam ou planejam adotar o ecossistema HubSpot CRM.' },
    { name: 'mLabs', kpiCoverage: 4, benchmarking: 4, socialListening: 4, brazilFocus: 5, costBenefit: 5, idealProfile: 'Agências e PMEs com foco principal no mercado brasileiro e ótimo custo-benefício.' },
];