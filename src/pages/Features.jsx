import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Video, FileText, CheckCircle, MessageSquare, Upload, Smartphone, Award, ArrowRight } from 'lucide-react';

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: "Multilingual Support",
            desc: "Switch seamlessly between English, Tamil, Telugu, and Hindi. Learn complex concepts in the language closest to your heart.",
            icon: Globe
        },
        {
            title: "Live Online Classes",
            desc: "Interact with expert educators in real-time. Ask questions, get clarifications, and participate in live discussions.",
            icon: Video
        },
        {
            title: "Recorded Sessions",
            desc: "Missed a class? No problem. Access high-quality recorded sessions anytime, anywhere, at your own pace.",
            icon: Video
        },
        {
            title: "Study Materials",
            desc: "Download comprehensive notes, PDFs, and cheat sheets. All materials are open access and free to redistribute.",
            icon: FileText
        },
        {
            title: "Quizzes & Tests",
            desc: "Test your knowledge with chapter-wise quizzes. Track your progress and identify areas for improvement.",
            icon: CheckCircle
        },
        {
            title: "Discussion Forums",
            desc: "Join a vibrant community of learners. Discuss topics, share resources, and help peers in our moderated forums.",
            icon: MessageSquare
        },
        {
            title: "Community Contribution",
            desc: "Knowledge grows when shared. You can contribute notes, translate content, or even host sessions upon verification.",
            icon: Upload
        },
        {
            title: "Mobile-First Design",
            desc: "Optimized for low-bandwidth connections and mobile devices, ensuring education reaches every corner.",
            icon: Smartphone
        }
    ];

    return (
        <section className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}><span className="text-gradient">{t('features')}</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        A comprehensive suite of tools designed to democratize education.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const slug = feature.title.toLowerCase().replace(/\s+/g, '-');

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
                                    Explore Feature <span>→</span>
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
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Community Driven</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>We are built by the community, for the community. No corporate gates.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <CheckCircle color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Tech for Good</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>Using open source technology to solve real human problems.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <CheckCircle color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Zero Cost</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>Quality education shouldn't be a debt trap. Our resources are free.</p>
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
