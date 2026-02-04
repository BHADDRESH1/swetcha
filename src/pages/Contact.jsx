import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                    <span className="text-gradient">{t('contact_us')}</span>
                </h1>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>
                    Have questions or want to contribute? We'd love to hear from you.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <div className="glass-card" style={{ height: '100%' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(15, 118, 110, 0.2)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <MapPin color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Visit Us</h3>
                                        <p style={{ color: 'var(--text-muted)' }}>
                                            Swetcha Office,<br />
                                            Gachibowli, Hyderabad,<br />
                                            Telangana - 500032
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(15, 118, 110, 0.2)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Mail color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Email Us</h3>
                                        <p style={{ color: 'var(--text-muted)' }}>hello@swetcha.org</p>
                                        <p style={{ color: 'var(--text-muted)' }}>support@swetcha.org</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(15, 118, 110, 0.2)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                        <Phone color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Call Us</h3>
                                        <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                                        <p style={{ color: 'var(--text-muted)' }}>Mon - Sat (9am - 6pm)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="glass-card">
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>Send a Message</h2>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(0,0,0,0.2)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(0,0,0,0.2)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(0,0,0,0.2)',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
