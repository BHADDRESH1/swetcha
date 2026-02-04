import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{
            background: 'linear-gradient(to bottom, var(--bg-dark), #020617)',
            paddingTop: '6rem',
            paddingBottom: '2rem',
            marginTop: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <h2 className="text-gradient" style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.5rem', display: 'inline-block' }}>Swetcha Learning</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                            {t('mission_desc')} Empowering the next generation with open knowledge and vernacular education.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <div key={i} style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.6rem',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                                >
                                    <Icon size={20} color="inherit" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white', letterSpacing: '0.5px' }}>QUICK LINKS</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['home', 'about', 'features', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'home' ? '/' : `/${item}`} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        <ArrowRight size={14} /> {t(item)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white', letterSpacing: '0.5px' }}>{t('contact_us').toUpperCase()}</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', alignItems: 'start' }}>
                                <MapPin size={20} color="var(--primary)" style={{ marginTop: '0.2rem' }} />
                                <span>Gachibowli, Hyderabad,<br />Telangana - 500032, India</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', alignItems: 'center' }}>
                                <Phone size={20} color="var(--primary)" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', alignItems: 'center' }}>
                                <Mail size={20} color="var(--primary)" />
                                <span>info@swetcha.org</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Swetcha Learning. Open Source & Community Driven.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
                        <span style={{ cursor: 'pointer' }}>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
