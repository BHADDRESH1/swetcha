import React from 'react';
import { Smartphone, Zap, WifiOff, Layout, MousePointer } from 'lucide-react';

const MobileFirst = () => {
    return (
        <section className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '5rem'
                }}>
                    <div style={{
                        background: 'var(--primary)',
                        padding: '1rem',
                        borderRadius: '50%',
                        marginBottom: '2rem',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <Smartphone size={48} color="white" />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Optimized for <span className="text-gradient">Every Device</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', lineHeight: '1.8' }}>
                        Education shouldn't be limited by hardware or connectivity. We follow a strict mobile-first approach to ensure Swetcha Skill Learn is accessible to everyone, everywhere.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
                    <div className="glass-card">
                        <div style={{ marginBottom: '1.5rem', color: 'var(--primary-light)' }}><Layout size={32} /></div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Responsive Layouts</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Our interface automatically adapts to screens of all sizes, from small feature phones to large desktop monitors, without losing functionality or clarity.
                        </p>
                    </div>

                    <div className="glass-card">
                        <div style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}><MousePointer size={32} /></div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Touch Friendly</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Buttons and navigation elements are sized and spaced specifically for touch interaction, preventing accidental clicks and frustration.
                        </p>
                    </div>

                    <div className="glass-card">
                        <div style={{ marginBottom: '1.5rem', color: '#60A5FA' }}><Zap size={32} /></div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Lightweight & Fast</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Pages are optimized to load instantly even on 2G/3G networks. We use advanced compression to keep data usage to an absolute minimum.
                        </p>
                    </div>

                    <div className="glass-card">
                        <div style={{ marginBottom: '1.5rem', color: '#F472B6' }}><WifiOff size={32} /></div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Low Bandwidth Mode</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Toggle "Data Saver" to disable high-res images and auto-playing videos, ensuring you can keep learning even with limited data packs.
                        </p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Experience it Now</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                Resize your browser window or open this page on your phone to see how the layout seamlessly adapts. The entire platform, from quizzes to video playback, is built with this philosophy.
                            </p>
                            <button className="btn btn-secondary">Learn More About Our Tech</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '120px',
                                height: '200px',
                                border: '4px solid rgba(255,255,255,0.2)',
                                borderRadius: '1rem',
                                background: 'var(--bg-dark)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mobile</span>
                            </div>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                border: '4px solid rgba(255,255,255,0.2)',
                                borderRadius: '1rem',
                                background: 'var(--bg-dark)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tablet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileFirst;
