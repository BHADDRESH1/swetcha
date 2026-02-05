import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PlayCircle, Clock, Calendar, User, Search, Filter, X } from 'lucide-react';

const RecordedSessions = () => {
    const { t } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [activeVideo, setActiveVideo] = useState(null);

    // Mock Data with working YouTube Videos
    const sessions = [
        {
            id: 1,
            title: t('session_ai_title'),
            tutor: "Dr. A. Sharma",
            subject: t('session_ai_subject'),
            duration: "45:20",
            date: "Oct 12, 2025",
            language: "English",
            thumbnail: "linear-gradient(135deg, #1e293b, #0f172a)",
            videoUrl: "https://www.youtube.com/embed/GDyxlTijwyg"
        },
        {
            id: 2,
            title: t('session_math_title'),
            tutor: "K. Venkatesh",
            subject: t('session_math_subject'),
            duration: "30:15",
            date: "Oct 10, 2025",
            language: "Telugu",
            thumbnail: "linear-gradient(135deg, #334155, #1e293b)",
            videoUrl: "https://www.youtube.com/embed/_gsFHNLHQPE"
        },
        {
            id: 3,
            title: t('session_history_title'),
            tutor: "S. Gupta",
            subject: t('session_history_subject'),
            duration: "50:00",
            date: "Oct 08, 2025",
            language: "Hindi",
            thumbnail: "linear-gradient(135deg, #475569, #334155)",
            videoUrl: "https://www.youtube.com/embed/B6T7msnq-sI"
        },
        {
            id: 4,
            title: t('session_tamil_title'),
            tutor: "M. Anbazhagan",
            subject: t('session_tamil_subject'),
            duration: "40:10",
            date: "Oct 05, 2025",
            language: "Tamil",
            thumbnail: "linear-gradient(135deg, #0f172a, #1e293b)",
            videoUrl: "https://www.youtube.com/embed/GDyxlTijwyg" // Using English video as placeholder
        },
        // English Additional
        {
            id: 5,
            title: t('session_chem_title'),
            tutor: "Dr. R. Williams",
            subject: t('session_chem_subject'),
            duration: "12:45",
            date: "Nov 01, 2025",
            language: "English",
            thumbnail: "linear-gradient(135deg, #059669, #064e3b)",
            videoUrl: "https://www.youtube.com/embed/rdd0aH6T87M"
        },
        {
            id: 6,
            title: t('session_quantum_title'),
            tutor: "Prof. D. Science",
            subject: t('session_quantum_subject'),
            duration: "15:30",
            date: "Nov 05, 2025",
            language: "English",
            thumbnail: "linear-gradient(135deg, #7c3aed, #4c1d95)",
            videoUrl: "https://www.youtube.com/embed/Mnx8eL3_fP0"
        },
        // Telugu Additional
        {
            id: 7,
            title: t('session_modern_history_title'),
            tutor: "K. Rao",
            subject: t('session_modern_history_subject'),
            duration: "55:20",
            date: "Oct 25, 2025",
            language: "Telugu",
            thumbnail: "linear-gradient(135deg, #ea580c, #9a3412)",
            videoUrl: "https://www.youtube.com/embed/L49W2aGg_xQ"
        },
        {
            id: 8,
            title: t('session_ancient_telugu_title'),
            tutor: "M. Reddy",
            subject: t('session_history_subject'),
            duration: "48:15",
            date: "Oct 28, 2025",
            language: "Telugu",
            thumbnail: "linear-gradient(135deg, #d97706, #92400e)",
            videoUrl: "https://www.youtube.com/embed/fJ5F2o3eW-Q"
        },
        // Hindi Additional
        {
            id: 9,
            title: t('session_trig_title'),
            tutor: "A. Kumar",
            subject: t('session_trig_subject'),
            duration: "25:40",
            date: "Nov 10, 2025",
            language: "Hindi",
            thumbnail: "linear-gradient(135deg, #db2777, #9d174d)",
            videoUrl: "https://www.youtube.com/embed/x8BW3VjwV1E"
        },
        {
            id: 10,
            title: t('session_particle_title'),
            tutor: "Dr. S. Verma",
            subject: t('session_particle_subject'),
            duration: "35:10",
            date: "Nov 12, 2025",
            language: "Hindi",
            thumbnail: "linear-gradient(135deg, #2563eb, #1e3a8a)",
            videoUrl: "https://www.youtube.com/embed/RkQC65SJpPQ"
        },
        // Tamil Additional
        {
            id: 11,
            title: t('session_geometry_title'),
            tutor: "T. Murugan",
            subject: t('session_geometry_subject'),
            duration: "22:15",
            date: "Nov 15, 2025",
            language: "Tamil",
            thumbnail: "linear-gradient(135deg, #0891b2, #164e63)",
            videoUrl: "https://www.youtube.com/embed/11XQc3wD350"
        },
        {
            id: 12,
            title: t('session_chola_title'),
            tutor: "S. Lakshmi",
            subject: t('session_chola_subject'),
            duration: "58:00",
            date: "Nov 18, 2025",
            language: "Tamil",
            thumbnail: "linear-gradient(135deg, #ca8a04, #854d0e)",
            videoUrl: "https://www.youtube.com/embed/BPD5hlePOJ8"
        }
    ];

    const filteredSessions = sessions.filter(s => selectedLanguage === 'All' || s.language === selectedLanguage);

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        <span className="text-gradient">{t('recorded_sessions_title')}</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        {t('recorded_sessions_desc')}
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        <Filter size={20} />
                        Filter by Language:
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {['All', 'English', 'Tamil', 'Telugu', 'Hindi'].map(lang => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLanguage(lang)}
                                style={{
                                    background: selectedLanguage === lang ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                    border: 'none',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '2rem',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {filteredSessions.map(session => (
                        <div
                            key={session.id}
                            className="glass-card link-hover"
                            style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            onClick={() => setActiveVideo(session)}
                        >
                            {/* Video Thumbnail Placeholder */}
                            <div style={{
                                height: '180px',
                                background: session.thumbnail,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(4px)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    <PlayCircle size={32} color="white" fill="white" />
                                </div>
                                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.8)', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                    {session.duration}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: '600', textTransform: 'uppercase' }}>{session.subject}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{session.language}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.4' }}>{session.title}</h3>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={16} /> {session.tutor}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} /> {session.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '900px',
                            aspectRatio: '16/9',
                            backgroundColor: '#000',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.5)',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background 0.3s'
                            }}
                        >
                            <X size={24} />
                        </button>
                        <iframe
                            src={`${activeVideo.videoUrl}?autoplay=1`}
                            title={activeVideo.title}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RecordedSessions;
