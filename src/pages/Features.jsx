import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Video, FileText, CheckCircle, MessageSquare, Upload, Smartphone, Award, ArrowRight } from 'lucide-react';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('multilingual_support_title'),
            desc: t('multilingual_support_desc'),
            original_title: "Multilingual Support", // Kept for slug generation if needed, or simple use English title for slug
            icon: Globe
        },
        {
            title: t('live_classes_title'),
            desc: t('live_classes_desc'),
            original_title: "Live Online Classes",
            icon: Video
        },
        {
            title: t('recorded_sessions_title'),
            desc: t('recorded_sessions_desc'),
            original_title: "Recorded Sessions",
            icon: Video
        },
        {
            title: t('study_materials_title'),
            desc: t('study_materials_desc'),
            original_title: "Study Materials",
            icon: FileText
        },
        {
            title: t('quizzes_tests_title'),
            desc: t('quizzes_tests_desc'),
            original_title: "Quizzes & Tests",
            icon: CheckCircle
        },
        {
            title: t('discussion_forums_title'),
            desc: t('discussion_forums_desc'),
            original_title: "Discussion Forums",
            icon: MessageSquare
        },
        {
            title: t('community_contribution_title'),
            desc: t('community_contribution_desc'),
            original_title: "Community Contribution",
            icon: Upload
        },
        {
            title: t('mobile_first_title'),
            desc: t('mobile_first_desc'),
            original_title: "Mobile-First Design",
            icon: Smartphone
        }
    ];

    return (
        <section className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}><span className="text-gradient">{t('features')}</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        {t('features_subtitle')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        // Use original English title for consistent slugs regardless of selected language
                        const slug = feature.original_title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/-+/g, '-');

                        return (
                            <Link
                                to={`/feature/${slug}`}
                                key={index}
                                className="glass-card"
                                style={{
                                    padding: '2rem',
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    position: 'relative',
                                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start'
                                }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        background: 'rgba(15, 118, 110, 0.1)',
                                        color: 'var(--primary-light)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <Icon size={32} />
                                    </div>

                                    <div style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '50%',
                                        padding: '0.5rem',
                                        opacity: 0.7
                                    }}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    {feature.desc}
                                </p>

                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--primary-light)',
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                }}>
                                    {t('explore_feature')} <span>→</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div style={{ marginTop: '6rem' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem' }}>{t('why_us')}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', borderRadius: '50% 30% 70% 40%', opacity: 0.2, animation: 'blob 7s infinite' }}></div>
                                <div style={{ position: 'absolute', inset: '20px', background: 'var(--bg-card)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Award size={80} color="var(--secondary)" />
                                </div>
                            </div>
                        </div>
                        <div style={{ order: 1 }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <CheckCircle color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{t('community_driven_title')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('community_driven_desc')}</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <CheckCircle color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{t('tech_for_good_title')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('tech_for_good_desc')}</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <CheckCircle color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{t('zero_cost_title')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('zero_cost_desc')}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
