// src/pages/contact.jsx
import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    const submissionData = { ...formData, access_key: "06784b86-f7ea-40b0-91bd-82dfc915e22e" }; // Sua chave do web3forms
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submissionData)
      });
      const result = await res.json();
      if (result.success) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.message || 'Ocorreu um erro.');
      }
    } catch (err) {
      console.error("Falha ao enviar formulário:", err); // Adicione esta linha
      setStatus('Ocorreu um erro de rede. Tente novamente.');
    }
  };

  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">Vamos Conversar?</h2>
          <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2 text-lg" style={{ animationDelay: '150ms' }}>
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Informações de Contato</h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Sinta-se à vontade para me contatar por qualquer um dos canais abaixo ou preenchendo o formulário ao lado.
            </p>
            <div className="space-y-4">
              <a href="mailto:davipassos213@gmail.com" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group">
                <EnvelopeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                <span className="group-hover:underline">davipassos213@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/davipsss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group">
                <SiLinkedin size={24} className="text-[var(--color-accent)]" />
                <span className="group-hover:underline">LinkedIn</span>
              </a>
              <a href="https://github.com/Da6-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group">
                <SiGithub size={24} className="text-[var(--color-accent)]" />
                <span className="group-hover:underline">GitHub</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="opacity-0 animate-fade-in-up space-y-5" style={{ animationDelay: '450ms' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Nome</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Mensagem</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="5" required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"></textarea>
            </div>
            <button type="submit" disabled={status === 'Enviando...'} className="w-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-6 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg disabled:bg-slate-500 disabled:cursor-not-allowed">
              {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status && <p className={`mt-4 text-center text-sm ${status.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;