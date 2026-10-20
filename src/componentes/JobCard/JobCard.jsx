import React from 'react';
import { MapPin, Building, DollarSign } from 'lucide-react';
import './JobCard.scss';

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className={`cracha ${job.modalidade === 'Remoto' ? 'cracha-remoto' : 'cracha-presencial'}`}>
        📍 {job.modalidade} / {job.tipoLocal}
      </div>
      <h3>{job.titulo}</h3>
      <p className="empresa"><Building size={14} /> {job.empresa}</p>
      <p className="local"><MapPin size={14} /> {job.local}</p>
      
      <div className="remuneracao">
        <span>Remuneração estimada:</span>
        <strong>{job.salario}</strong>
      </div>

      <p className="descricao">{job.descricao}</p>

      <div className="tags">
        {job.tags.map((tag, i) => (
          <span key={i} className="tag">✓ {tag}</span>
        ))}
      </div>

      <button className="candidatar">Candidatar em 1 Clique</button>
    </div>
  );
}