import React from 'react';
import { toolsData, decisionMatrixData } from './constants';
import type { Tool, RankedDecisionMatrixRow, DecisionMatrixRow } from './types';
import StarRating from './components/StarRating';
import Section from './components/Section';

const ratingMap: { [key: string]: number } = {
  "Excelente": 5,
  "Muito Forte": 5,
  "Forte": 4,
  "Muito Boa": 4,
  "Boa": 3,
  "Bom": 3,
  "Excelente (com foco em ROI)": 5,
  "Máxima": 5,
  "Alta": 4,
};

const getRating = (text: string): number => {
  return ratingMap[text] || 0;
};

const ToolAnalysisCard: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{tool.name}</h3>
        <p className="text-slate-400 mb-6 italic">"{tool.generalView}"</p>
        
        <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-300">Cobertura de Métricas:</span>
                <StarRating rating={getRating(tool.metricsCoverage)} />
            </div>
            <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-300">Benchmarking:</span>
                <StarRating rating={getRating(tool.benchmarking)} />
            </div>
            <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-300">Social Listening:</span>
                <StarRating rating={getRating(tool.socialListening)} />
            </div>
            <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-300">Relevância para o Brasil:</span>
                <StarRating rating={getRating(tool.brazilRelevance)} />
            </div>
        </div>

        <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-cyan-400 mb-2">Veredito do Analista:</h4>
            <p className="text-slate-300">{tool.analystVerdict}</p>
        </div>
      </div>
    </div>
);

const DecisionMatrix: React.FC<{ data: RankedDecisionMatrixRow[] }> = ({ data }) => (
    <div className="overflow-x-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg">
        <table className="w-full text-left">
            <thead className="bg-slate-900 text-sm text-cyan-400 uppercase">
                <tr>
                    <th className="p-4">Ferramenta</th>
                    <th className="p-4">Cobertura KPIs</th>
                    <th className="p-4">Benchmarking</th>
                    <th className="p-4">Social Listening</th>
                    <th className="p-4">Foco no Brasil</th>
                    <th className="p-4">Custo-Benefício</th>
                    <th className="p-4">Perfil Ideal</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={row.name} className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors duration-200">
                        <td className="p-4">
                            <div className="flex items-center gap-4">
                                <span className="text-base font-bold bg-cyan-900 text-cyan-300 rounded-full w-8 h-8 flex items-center justify-center ring-2 ring-cyan-800 flex-shrink-0">{index + 1}</span>
                                <span className="font-bold text-white">{row.name}</span>
                            </div>
                        </td>
                        <td className="p-4">
                           <StarRating rating={row.kpiCoverage} />
                        </td>
                        <td className="p-4">
                           <StarRating rating={row.benchmarking} />
                        </td>
                        <td className="p-4">
                           <StarRating rating={row.socialListening} />
                        </td>
                        <td className="p-4">
                           <StarRating rating={row.brazilFocus} />
                        </td>
                        <td className="p-4">
                           <StarRating rating={row.costBenefit} />
                        </td>
                        <td className="p-4 text-slate-400 text-sm">{row.idealProfile}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const KpiItem: React.FC<{ platform: string; kpis: string }> = ({ platform, kpis }) => (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h4 className="text-lg font-bold text-cyan-400 mb-2">{platform}</h4>
        <p className="text-slate-400">{kpis}</p>
    </div>
);

export default function App() {
  const sortedMatrixData = React.useMemo(() => {
    const criteria: (keyof Omit<DecisionMatrixRow, 'name' | 'idealProfile'>)[] = [
        'kpiCoverage', 'benchmarking', 'socialListening', 'brazilFocus', 'costBenefit'
    ];

    const dataWithTotals: RankedDecisionMatrixRow[] = decisionMatrixData.map(row => {
        const totalScore = criteria.reduce((sum, key) => sum + (row[key] as number), 0);
        return {
            ...row,
            totalScore,
        };
    });

    dataWithTotals.sort((a, b) => {
        if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
        }
        return a.name.localeCompare(b.name);
    });

    return dataWithTotals;
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Avaliação Estratégica de Ferramentas de Monitoramento de Social Media
          </h1>
          <p className="text-xl text-slate-400 mt-4 max-w-3xl mx-auto">
            Análise comparativa de ferramentas com base nos KPIs definidos para a Área de Marketing (ID 87).
          </p>
        </header>

        <Section title="Parte 1: Framework de Mensuração e Requisitos" subtitle="A ferramenta ideal deve fornecer cobertura completa dos seguintes pontos, que formam a base de nossa estratégia de análise de performance.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 md:col-span-2 lg:col-span-3">
                    <h3 className="text-xl font-bold text-white mb-4">1.1. KPIs Essenciais por Rede Social</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <KpiItem platform="Instagram" kpis="Seguidores, Alcance, Impressões, Engajamento, Crescimento, Cliques no link da bio, Visualizações de stories e Desempenho por tipo de conteúdo." />
                        <KpiItem platform="Facebook" kpis="Curtidas na página, Alcance, Interações, Cliques em links e Visualizações de vídeo." />
                        <KpiItem platform="LinkedIn" kpis="Seguidores, Impressões, Taxa de engajamento, Cliques em links/CTA e Performance de artigos." />
                        <KpiItem platform="YouTube" kpis="Inscritos, Visualizações, Tempo médio de visualização, Taxa de retenção, Cliques em CTA e Engajamento." />
                        <KpiItem platform="TikTok" kpis="Seguidores, Visualizações, Taxa de conclusão de vídeos, Engajamento e Cliques em links da bio." />
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4">1.2. Requisitos de Benchmarking</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-400">
                        <li>Métricas de audiência (seguidores, crescimento).</li>
                        <li>Frequência e tipos de conteúdo.</li>
                        <li>Taxas de engajamento comparativas.</li>
                    </ul>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4">1.3. Funcionalidades Adicionais</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-400">
                        <li><span className="font-semibold text-slate-300">Social Listening:</span> Monitoramento ativo de menções à marca, palavras-chave estratégicas e tendências de mercado.</li>
                        <li><span className="font-semibold text-slate-300">Suporte no Brasil:</span> Suporte técnico e de atendimento ao cliente em português, demonstrando foco no mercado local.</li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section title="Parte 2: Análise Comparativa das Ferramentas" subtitle="A seguir, cada ferramenta é avaliada individualmente com base nos critérios estabelecidos.">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
              <ToolAnalysisCard key={tool.name} tool={tool} />
            ))}
          </div>
        </Section>
        
        <Section title="Parte 3: Matriz de Decisão e Recomendações" subtitle="Uma tabela comparativa para facilitar a tomada de decisão.">
            <DecisionMatrix data={sortedMatrixData} />
        </Section>

        <Section title="Recomendações Finais" subtitle="A escolha ideal dependerá da prioridade estratégica e do orçamento da equipe.">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">1. Para a Melhor Solução Integrada (All-in-One):</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400 pl-4">
                    <li><span className="font-semibold text-white">Com Orçamento Elevado:</span> Sprout Social e Emplifi são as escolhas mais fortes e completas.</li>
                    <li><span className="font-semibold text-white">Para Usuários do Ecossistema:</span> HubSpot é a opção definitiva para quem já utiliza seu CRM.</li>
                    <li><span className="font-semibold text-white">Com Foco em Custo-Benefício:</span> mLabs se destaca como a solução mais pragmática e adaptada ao mercado brasileiro.</li>
                </ul>
            </div>
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">2. Para Foco Máximo no Brasil:</h3>
                 <p className="text-slate-400">Buzzmonitor e mLabs são as escolhas naturais. O suporte, as integrações e o entendimento do mercado local são diferenciais importantes.</p>
            </div>
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">3. Para Foco em Social Listening e Inteligência de Mercado:</h3>
                 <p className="text-slate-400">Brandwatch e Meltwater são as líderes indiscutíveis, embora representem um investimento significativamente maior.</p>
            </div>
          </div>
        </Section>

        <footer className="text-center mt-16 text-slate-500">
            <p>Relatório de Análise Estratégica &copy; 2024</p>
        </footer>

      </main>
    </div>
  );
}
