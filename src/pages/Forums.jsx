import React from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Flag, Search } from 'lucide-react';

const Forums = () => {
    const questions = [
        {
            id: 1,
            title: "How do I solve quadratic equations using the factorization method?",
            author: "Student_101",
            replies: 5,
            likes: 12,
            tags: ["Math", "Algebra"],
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "Can someone explain Newton's Third Law with examples?",
            author: "PhysicsLover",
            replies: 8,
            likes: 24,
            tags: ["Physics", "Science"],
            time: "5 hours ago"
        },
        {
            id: 3,
            title: "Best resources to learn Tamil grammar?",
            author: "LangLearner",
            replies: 3,
            likes: 7,
            tags: ["Tamil", "Language"],
            time: "1 day ago"
        }
    ];

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Discussion <span className="text-gradient">Forums</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Ask questions, share ideas, and grow together. A safe space for peer-to-peer learning.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search discussions..."
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
                    <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                        Start New Thread
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr)', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {questions.map(q => (
                            <div key={q.id} className="glass-card" style={{ padding: '2rem', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {q.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60A5FA', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem' }}>{q.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span>Posted by {q.author}</span>
                                        <span>•</span>
                                        <span>{q.time}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MessageCircle size={18} /> {q.replies} Replies</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ThumbsUp size={18} /> {q.likes} Likes</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Popular Tags</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['Math', 'Physics', 'History', 'Programming', 'English', 'Exam Prep'].map(tag => (
                                    <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(248, 113, 113, 0.2)' }}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#F87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Flag size={18} /> Guidelines
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Keep discussions respectful. No hate speech or bullying.
                                Report inappropriate content to moderators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forums;
