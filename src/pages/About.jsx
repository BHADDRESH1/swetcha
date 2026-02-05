import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import { Target, Users, Heart, BookOpen } from 'lucide-react';

const About = () => {
    const { t } = useLanguage();

    const team = [
        { name: "Suresh Kumar", role: t('role_founder'), img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
        { name: "Priya Reddy", role: t('role_content_lead'), img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
        { name: "Anand Murthy", role: t('role_tech_lead'), img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200" },
        { name: "Divya Singh", role: t('role_community_manager'), img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" }
    ];

    return (
        <>
            <section className="section" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}><span className="text-gradient">{t('about')} Swetcha</span></h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            {t('about_swetcha_subtitle')}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>{t('mission_title')}</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                {t('mission_desc_1')}
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                                {t('mission_desc_2')}
                            </p>
                        </div>
                        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                            <Target size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('vision_title')}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {t('vision_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Who We Serve */}
                    <div style={{ marginBottom: '6rem' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', fontWeight: '700' }}>{t('who_we_serve')}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <Card title={t('card_students_title')} icon={BookOpen}>
                                {t('card_students_desc')}
                            </Card>
                            <Card title={t('card_aspirants_title')} icon={Target}>
                                {t('card_aspirants_desc')}
                            </Card>
                            <Card title={t('card_professionals_title')} icon={Users}>
                                {t('card_professionals_desc')}
                            </Card>
                            <Card title={t('card_lifelong_title')} icon={Heart}>
                                {t('card_lifelong_desc')}
                            </Card>
                        </div>
                    </div>

                    {/* Team */}
                    <div>
                        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', fontWeight: '700' }}>{t('team_title')}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {team.map((member, index) => (
                                <div key={index} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary)' }}
                                    />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
