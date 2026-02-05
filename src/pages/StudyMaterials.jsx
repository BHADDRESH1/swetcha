import React, { useState } from 'react';
import { FileText, Download, Bookmark, Search, Filter, File } from 'lucide-react';

const StudyMaterials = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const materials = [
        {
            id: 1,
            title: "Calculus Fundamentals",
            type: "PDF",
            subject: "Mathematics",
            skill: "Advanced Math",
            difficulty: "Hard",
            language: "English",
            size: "2.4 MB"
        },
        {
            id: 2,
            title: "Organic Chemistry Notes",
            type: "Notes",
            subject: "Chemistry",
            skill: "Science",
            difficulty: "Medium",
            language: "Tamil",
            size: "1.1 MB"
        },
        {
            id: 3,
            title: "Indian Constitution Overview",
            type: "Slides",
            subject: "Civics",
            skill: "Social Studies",
            difficulty: "Easy",
            language: "Hindi",
            size: "5.6 MB"
        },
        {
            id: 4,
            title: "Python for Beginners",
            type: "PDF",
            subject: "Computer Science",
            skill: "Programming",
            difficulty: "Easy",
            language: "English",
            size: "3.2 MB"
        },
        {
            id: 5,
            title: "Thermodynamics Cheat Sheet",
            type: "Document",
            subject: "Physics",
            skill: "Science",
            difficulty: "Medium",
            language: "Telugu",
            size: "800 KB"
        }
    ];

    const filteredMaterials = materials.filter(m =>
        (selectedLanguage === 'All' || m.language === selectedLanguage) &&
        (m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.subject.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Study <span className="text-gradient">Materials</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Access a library of knowledge. Download notes, slides, and books for offline learning.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
                        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search by topic or subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem 1rem 1rem 3rem',
                                borderRadius: '0.75rem',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Filter size={20} color="var(--text-muted)" />
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.75rem',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="All">All Languages</option>
                            <option value="English">English</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {filteredMaterials.map(item => (
                        <div key={item.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '1rem',
                                    background: 'rgba(45, 212, 191, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-light)'
                                }}>
                                    <FileText size={24} />
                                </div>
                                <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                                    <Bookmark size={20} />
                                </button>
                            </div>

                            <div style={{ marginBottom: '1rem', flex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: '1.4' }}>{item.title}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', background: 'rgba(249, 115, 22, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem' }}>
                                        {item.subject}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem' }}>
                                        {item.language}
                                    </span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.size} • {item.type}</span>
                                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    <Download size={16} /> Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudyMaterials;
