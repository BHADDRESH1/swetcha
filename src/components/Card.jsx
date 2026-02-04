import React from 'react';

const Card = ({ title, children, icon: Icon, className = "" }) => {
    return (
        <div className={`glass-card ${className}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {Icon && (
                <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(45, 212, 191, 0.05))',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--primary-light)',
                    border: '1px solid rgba(45, 212, 191, 0.1)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <Icon size={28} style={{ opacity: 0.9 }} />
                </div>
            )}
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                {title}
            </h3>
            <div style={{ color: 'var(--text-muted)', flex: 1, lineHeight: '1.7', fontSize: '1.05rem' }}>
                {children}
            </div>
        </div>
    );
};

export default Card;
