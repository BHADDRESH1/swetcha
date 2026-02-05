import React, { useState } from 'react';
import { Clock, CheckCircle, Award, BookOpen, Filter } from 'lucide-react';

const Quizzes = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(null);

    const quizzes = [
        {
            id: 1,
            title: "Basic Mathematics",
            subject: "Math",
            difficulty: "Easy",
            questions: 10,
            time: "15 mins",
            language: "English"
        },
        {
            id: 2,
            title: "Physics: Introduction to Motion",
            subject: "Physics",
            difficulty: "Medium",
            questions: 15,
            time: "20 mins",
            language: "Tamil"
        },
        {
            id: 3,
            title: "History of India",
            subject: "History",
            difficulty: "Hard",
            questions: 20,
            time: "30 mins",
            language: "Hindi"
        },
        {
            id: 4,
            title: "Programming Basics",
            subject: "Computer Science",
            difficulty: "Medium",
            questions: 10,
            time: "15 mins",
            language: "English"
        }
    ];

    const filteredQuizzes = quizzes.filter(q =>
        (selectedLanguage === 'All' || q.language === selectedLanguage) &&
        (activeTab === 'all' || q.subject.toLowerCase() === activeTab)
    );

    if (showQuiz && currentQuiz) {
        return (
            <div className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
                <div className="container">
                    <button onClick={() => setShowQuiz(false)} className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
                        &larr; Back to Quizzes
                    </button>
                    <div className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{currentQuiz.title}</h2>
                                <p className="text-muted">{currentQuiz.subject} • {currentQuiz.difficulty}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-light)' }}>14:59</div>
                                <span className="text-muted">Time Remaining</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>1. What is the basic unit of life?</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['Atom', 'Molecule', 'Cell', 'Tissue'].map((opt, i) => (
                                    <label key={i} style={{
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <input type="radio" name="q1" /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button className="btn btn-primary">Next Question</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Quizzes & <span className="text-gradient">Tests</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Assess your understanding, track your progress, and master new skills.
                    </p>
                </div>

                <div className="glass-card" style={{ marginBottom: '3rem', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            {['All', 'Math', 'Physics', 'History', 'Computer Science'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    style={{
                                        background: activeTab === tab.toLowerCase() ? 'var(--primary)' : 'transparent',
                                        border: '1px solid ' + (activeTab === tab.toLowerCase() ? 'var(--primary)' : 'rgba(255,255,255,0.1)'),
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Filter size={20} color="var(--text-muted)" />
                            <select
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                style={{
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    outline: 'none'
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
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredQuizzes.map(quiz => (
                        <div key={quiz.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ background: 'rgba(45, 212, 191, 0.1)', color: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem' }}>
                                    {quiz.subject}
                                </span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{quiz.language}</span>
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', flex: 1 }}>{quiz.title}</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={16} /> {quiz.time}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <BookOpen size={16} /> {quiz.questions} Qs
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Award size={16} /> {quiz.difficulty}
                                </div>
                            </div>

                            <button
                                onClick={() => { setCurrentQuiz(quiz); setShowQuiz(true); }}
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                Start Quiz
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quizzes;
