// src/pages/contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import useMetaTags from '../hooks/useMetaTags';

function Contact() {
  const { t } = useTranslation();
  useMetaTags(
    `Davi Passos | ${t('titles.contact')}`, 
    t('siteDescription'),
    'https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true' // Link para a sua imagem de preview
  );
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('contact.formStatusSending'));
    const submissionData = { ...formData, access_key: "06784b86-f7ea-40b0-91bd-82dfc915e22e" }; // Sua chave
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submissionData)
      });
      const result = await res.json();
      if (result.success) {
        setStatus(t('contact.formStatusSuccess'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.message || t('contact.formStatusError'));
      }
    } catch (err) {
      console.error("Falha ao enviar formulário:", err);
      setStatus(t('contact.formStatusNetworkError'));
    }
  };

  return (
      <section className="py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="opacity-0 animate-fade-in-up text-4xl font-bold text-[var(--color-text-primary)]">{t('contact.title')}</h2>
            <p className="opacity-0 animate-fade-in-up text-[var(--color-text-secondary)] mt-2 text-lg" style={{ animationDelay: '150ms' }}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">{t('contact.infoTitle')}</h3>
              <p className="text-[var(--color-text-secondary)] mb-8">
                {t('contact.infoText')}
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
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">{t('contact.formNameLabel')}</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder={t('contact.formNamePlaceholder')} required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">{t('contact.formEmailLabel')}</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder={t('contact.formEmailPlaceholder')} required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">{t('contact.formMessageLabel')}</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder={t('contact.formMessagePlaceholder')} rows="5" required className="w-full bg-[var(--color-bg-input)] border border-[var(--color-border)] rounded-lg p-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"></textarea>
              </div>
              <button type="submit" disabled={status === t('contact.formStatusSending')} className="w-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-6 rounded-full text-lg hover:bg-[var(--color-accent-hover)] transition-transform transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {status === t('contact.formStatusSending') ? status : t('contact.formButton')}
              </button>
              {status && status !== t('contact.formStatusSending') && (
                <p className={`mt-4 text-center text-sm ${status.includes('sucesso') || status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
  );
}

export default Contact;