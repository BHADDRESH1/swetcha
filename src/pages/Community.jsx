import React, { useState } from 'react';
import { Upload, Users, Star, Video, FileText } from 'lucide-react';

const Community = () => {
    const [activeTab, setActiveTab] = useState('resources');

    const contributions = [
        {
            id: 1,
            author: "Dr. Lakshmi",
            role: "Educator",
            type: "Video",
            title: "Advanced Biology Concepts",
            likes: 124,
            language: "Tamil"
        },
        {
            id: 2,
            author: "Ravi Kumar",
            role: "Student",
            type: "Notes",
            title: "Python Cheat Sheet",
            likes: 89,
            language: "English"
        },
        {
            id: 3,
            author: "Anita Raj",
            role: "Professional",
            type: "Presentation",
            title: "Financial Literacy Basics",
            likes: 210,
            language: "Hindi"
        }
    ];

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                            Community <span className="text-gradient">Contribution</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                            Join forces with educators and learners. Share your knowledge and help build a free, open repository of wisdom.
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            <Upload size={20} /> Contribute Now
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem' }}>
                    {/* Left Column: Feed */}
                    <div>
                        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                            {['All', 'Videos', 'Notes', 'Presentations'].map(tab => (
                                <button
                                    key={tab}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: '600',
                                        padding: '0.5rem 0',
                                        borderBottom: '2px solid ' + (tab === 'All' ? 'var(--primary)' : 'transparent'),
                                        cursor: 'pointer'
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {contributions.map(item => (
                                <div key={item.id} className="glass-card" style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                            {item.author[0]}
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: 'bold' }}>{item.author}</h4>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.role} • {item.language}</span>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                            {item.type === 'Video' ? <Video size={14} /> : <FileText size={14} />} {item.type}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star size={16} color="var(--secondary)" /> {item.likes} Likes</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Top Contributors */}
                    <div>
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Users size={20} color="var(--primary-light)" /> Top Contributors
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>{i}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: '600' }}>Contributor Name</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>150 Contributions</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
