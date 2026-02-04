import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FeatureDetail = () => {
    const { slug } = useParams();

    // Map slang to readable title (Simple logic for demo)
    const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Feature";

    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
            <div className="container">
                <Link to="/features" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <ArrowLeft size={20} /> Back to Features
                </Link>

                <div className="glass-card" style={{ padding: '3rem' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{
                            background: 'rgba(45, 212, 191, 0.1)',
                            color: 'var(--primary-light)',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            Feature Focus
                        </span>
                    </div>

                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                        {title}
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', marginBottom: '3rem' }}>
                        This is a detailed view for the <strong>{title}</strong> feature. In a real application, this page would contain deep-dive information, tutorials, screenshots, or the actual functionality itself.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={18} color="var(--primary)" /> Key Benefit
                            </h3>
                            <p style={{ color: 'var(--text-muted)' }}>Enhances the learning experience by providing specific tools for {title.toLowerCase()}.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={18} color="var(--primary)" /> Why it matters
                            </h3>
                            <p style={{ color: 'var(--text-muted)' }}>Addresses critical gaps in accessibility and engagement for rural students.</p>
                        </div>
                    </div>

                    <button className="btn btn-primary">
                        Try {title} Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeatureDetail;
