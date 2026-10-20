import React, { useState } from 'react';

import Header from '../../componentes/header/header';
import JobCard from '../../componentes/JobCard/JobCard';

import { UserCheck, Accessibility, Eye, Ear, Brain, Grid } from 'lucide-react';
import './Home.scss';

const CATEGORIAS = [
  { id: 'todas', label: 'Todas as Vagas', icon: Grid },
  { id: 'idosos', label: 'Idosos (50+)', icon: UserCheck },
  { id: 'pcd_fisica', label: 'PCD Física', icon: Accessibility },
  { id: 'pcd_visual', label: 'PCD Visual', icon: Eye },
  { id: 'pcd_auditiva', label: 'PCD Auditiva', icon: Ear },
  { id: 'neurodivergente', label: 'Neurodivergente', icon: Brain },
];

const VAGAS_MOCK = [
  {
    id: 1,
    modalidade: 'Remoto',
    tipoLocal: 'Home Office',
    titulo: 'Atendente de Suporte e Ouvidoria',
    empresa: 'Central de Relacionamento Acessível',
    local: 'São Paulo, SP (Em Home Office)',
    salario: 'R\$ 2.100,00 + Benefícios completos',
    descricao: 'Atendimento por telefone ou mensagens de texto direcionado a tirar dúvidas de clientes. Treinamento completo fornecido.',
    tags: ['Aceita Idosos 50+', 'Compatível com Leitor de Tela', 'Horário Flexível'],
    categoria: 'pcd_visual'
  },
  {
    id: 2,
    modalidade: 'Presencial',
    tipoLocal: 'Presencial',
    titulo: 'Auxiliar de Recepção e Boas-Vindas',
    empresa: 'Centro Cultural e Social',
    local: 'Centro, Rio de Janeiro - RJ',
    salario: 'R\$ 1.950,00 + Vale Transporte e Alimentação',
    descricao: 'Recepção de visitantes, entrega de crachás e orientação de salas. Local totalmente plano com elevadores e rampas.',
    tags: ['Acessibilidade Arquitetônica', 'Ambiente Acolhedor', 'Vaga Sênior 60+'],
    categoria: 'idosos'
  },
  {
    id: 3,
    modalidade: 'Remoto',
    tipoLocal: 'Home Office',
    titulo: 'Digitador e Conferente de Dados',
    empresa: 'Centro Cultural e Social',
    local: 'Belo Horizonte, MG (Home Office)',
    salario: 'R\$ 2.300,00',
    descricao: 'Conferência de dados cadastrais no sistema da empresa. Permite pausas flexíveis e horários adaptados.',
    tags: ['Trabalho em Casa', 'PCD Neurodivergente', 'Horário Flexível'],
    categoria: 'neurodivergente'
  },

   {
    id: 4,
    modalidade: 'Remoto',
    tipoLocal: 'Home Office',
    titulo: 'Disiguinação de importação e exportação de produto',
    empresa: 'Centro Cultural e Social',
    local: 'Maringá, PR (Home Office)',
    salario: 'R\$ 2.240,00',
    descricao: 'Analisador de produtos, em exportação de países de fora',
    tags: ['Trabalho em Casa', 'Horário Flexível'],
    categoria: 'pcd_fisica'
  }
  
];

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');

  const vagasFiltradas = categoriaAtiva === 'todas' 
    ? VAGAS_MOCK 
    : VAGAS_MOCK.filter(vaga => vaga.categoria === categoriaAtiva);

  return (
    <div className="home-guardar">
     
      <Header />

      <main className="content">
       
        <section className="banner">
          <span className="plataforma">Plataforma Gratuita e Acessível</span>
          <h2>Oportunidades de trabalho e apoio sob medida para você</h2>
          <p>
            Ajudamos idosos (50+) e pessoas com todos os tipos de deficiência (PCD) a 
            encontrarem vagas de emprego respeitosas, com processo simplificado.
          </p>
        </section>

    
        <section className="filtro">
          <h3>▼ Selecione o seu perfil para ver as vagas</h3>
          <p className="subtext">Clique em uma das opções abaixo para filtrar os empregos recomendados para você:</p>

          <div className="grade">
            {CATEGORIAS.map((cat) => {
              const Icone = cat.icon;
              return (
                <button
                  key={cat.id}
                  className={`categoria ${categoriaAtiva === cat.id ? 'active' : ''}`}
                  onClick={() => setCategoriaAtiva(cat.id)}
                >
                  <Icone size={24} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

     
        <section className="seletor">
          <div className="cab">
            <h2>Vagas Acessíveis Abertas</h2>
            <span className="resultado">Mostrando {vagasFiltradas.length} vaga(s)</span>
          </div>

          <div className="gradetrabalho">
            {vagasFiltradas.map((vaga) => (
              <JobCard key={vaga.id} job={vaga} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}