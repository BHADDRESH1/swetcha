import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Download, Users, Globe, BookOpen, Video, MessageCircle, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useLanguage();
    // Simulate a simple floating animation for badges
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev === 0 ? 10 : 0));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Extended Background Elements */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                zIndex: -2,
                background: 'var(--bg-dark)',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-10%', left: '-10%', width: '60vw', height: '60vw',
                    background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '-10%', width: '50vw', height: '50vw',
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }} />
            </div>

            {/* Hero Section */}
            <section className="section" style={{ paddingTop: '10rem', paddingBottom: '8rem', position: 'relative' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                    {/* Left Content */}
                    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>

                        {/* Tagline Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(45, 212, 191, 0.08)',
                            color: 'var(--primary-light)',
                            borderRadius: '999px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '2rem',
                            border: '1px solid rgba(45, 212, 191, 0.2)',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            <Star size={14} fill="var(--primary-light)" /> #1 Multilingual Learning Platform
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            lineHeight: '1.1',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            color: 'white'
                        }}>
                            <span style={{ display: 'block', marginBottom: '0.5rem' }}>Master Any Subject in</span>
                            <span className="text-gradient" style={{ filter: 'drop-shadow(0 0 20px rgba(45, 212, 191, 0.2))' }}>
                                {t('hero_title').replace('Empowering Knowledge Through Native Languages', 'Your Native Language')}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.7', maxWidth: '580px' }}>
                            {t('hero_subtitle')} Join a community where language is no longer a barrier to your dreams.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/features" className="btn btn-primary">
                                {t('start_learning')} <ArrowRight size={20} />
                            </Link>
                            <button className="btn btn-secondary">
                                <Play size={20} fill="currentColor" style={{ opacity: 0.8 }} /> Watch Demo
                            </button>
                        </div>

                        {/* Trust Indicator */}
                        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{
                                        width: '32px', height: '32px', borderRadius: '50%', background: `gray url(https://i.pravatar.cc/100?img=${i + 10}) center/cover`,
                                        border: '2px solid var(--bg-dark)', marginLeft: i > 1 ? '-10px' : 0
                                    }} />
                                ))}
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Trusted by <strong>10,000+</strong> students</p>
                        </div>
                    </div>

                    {/* Right Graphic - Video Player Style */}
                    <div style={{ position: 'relative', animation: 'fadeIn 1s ease-out 0.2s backwards' }}>
                        {/* Main Glass Card (Video Interface) */}
                        <div style={{
                            position: 'relative',
                            zIndex: 10,
                            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '1.5rem',
                            padding: '1.5rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                            transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                            transition: 'transform 0.5s ease'
                        }}>
                            {/* Decorative header of video player */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></div>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', background: 'rgba(45, 212, 191, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '99px' }}>
                                    🔴 Live Session
                                </div>
                            </div>

                            {/* Video Player Area */}
                            <div style={{
                                background: '#0f172a',
                                borderRadius: '1rem',
                                height: '240px',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <video
                                    src="https://assets.mixkit.co/videos/preview/mixkit-student-working-on-an-online-exam-4251-large.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: 0.8
                                    }}
                                />

                                {/* Overlay Play Button */}
                                <div style={{
                                    position: 'absolute',
                                    width: '64px', height: '64px', borderRadius: '50%',
                                    background: 'rgba(15, 118, 110, 0.9)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 0 0 8px rgba(45, 212, 191, 0.2)',
                                    animation: 'pulse-soft 2s infinite',
                                    cursor: 'pointer',
                                    zIndex: 2,
                                    backdropFilter: 'blur(4px)'
                                }}>
                                    <Play size={24} fill="white" color="white" style={{ marginLeft: '4px' }} />
                                </div>
                            </div>

                            {/* Fake Controls */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                    <div style={{ width: '65%', height: '100%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>14:20 / 45:00</span>
                            </div>
                        </div>

                        {/* Floating Feature Badge 1 */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            right: '-30px',
                            background: 'rgba(30, 41, 59, 0.9)',
                            backdropFilter: 'blur(12px)',
                            padding: '1rem',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            zIndex: 20,
                            display: 'flex', gap: '0.75rem', alignItems: 'center',
                            animation: `float 6s ease-in-out infinite`
                        }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.6rem', borderRadius: '0.8rem' }}>
                                <CheckCircle size={20} color="#10B981" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Course Completed</p>
                                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Introduction to AI</p>
                            </div>
                        </div>

                        {/* Floating Feature Badge 2 */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '-20px',
                            background: 'rgba(30, 41, 59, 0.9)',
                            backdropFilter: 'blur(12px)',
                            padding: '1rem',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            zIndex: 20,
                            display: 'flex', gap: '0.75rem', alignItems: 'center',
                            animation: `float 8s ease-in-out infinite 1s`
                        }}>
                            <div style={{ background: 'rgba(249, 115, 22, 0.15)', padding: '0.6rem', borderRadius: '0.8rem' }}>
                                <Users size={20} color="var(--secondary)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Join Community</p>
                                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Telugu Developers</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section with improved UI */}
            <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8))', backdropFilter: 'blur(10px)' }}>
                <div className="container" style={{ padding: '4rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                    {[
                        { label: "Languages", val: "4+" },
                        { label: "Video Lessons", val: "500+" },
                        { label: "Expert Mentors", val: "50+" },
                        { label: "Community", val: "24/7" }
                    ].map((stat, idx) => (
                        <div key={idx} style={{ position: 'relative' }}>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1, marginBottom: '0.5rem', color: 'white' }}>{stat.val}</h3>
                            <p style={{ color: 'var(--primary-light)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Rest of the sections... kept minimal for this turn to focus on Hero */}
            {/* Learning Gap / Problem Section */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{t('gap_title')}</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Language shouldn't be a barrier to education. We address the critical need for vernacular learning resources.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <Card title="Language Barrier" icon={Globe}>
                            <p>Millions of students struggle because quality content is predominantly in English. We bring content to your mother tongue.</p>
                        </Card>
                        <Card title="Access Equality" icon={BookOpen}>
                            <p>Quality education often comes with a high price tag. Swetcha Learning democratizes access for everyone.</p>
                        </Card>
                        <Card title="Active Participation" icon={Users}>
                            <p>Passive learning isn't enough. Our community-driven approach ensures active discussion and peer growth.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Core Features</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Everything you need to excel.</p>
                        </div>
                        <Link to="/features" className="btn btn-secondary" style={{ display: 'none', md: { display: 'inline-flex' } }}>
                            View All Features
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <Link to="/features" className="glass-card" style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', padding: '2rem', textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ background: 'rgba(249, 115, 22, 0.15)', padding: '1rem', borderRadius: '1rem', color: 'var(--secondary)' }}>
                                <Video size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>Live Interactions</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Real-time doubts solving and interactive sessions with mentors.</p>
                            </div>
                        </Link>

                        <Link to="/features" className="glass-card" style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', padding: '2rem', textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ background: 'rgba(15, 118, 110, 0.15)', padding: '1rem', borderRadius: '1rem', color: 'var(--primary)' }}>
                                <Download size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>Offline Access</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Download study materials and videos for low-data usage.</p>
                            </div>
                        </Link>

                        <Link to="/features" className="glass-card" style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', padding: '2rem', textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ background: 'rgba(249, 115, 22, 0.15)', padding: '1rem', borderRadius: '1rem', color: 'var(--secondary)' }}>
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>Community Forums</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Discuss topics in your local language with peers.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="glass-card" style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2), rgba(15, 23, 42, 0.6))', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: 'white' }}>Ready to start your journey?</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            Join thousands of learners today. It's free and open for everyone.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                            Join Swetcha Learning
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
