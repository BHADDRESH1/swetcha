import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Effect to handle scroll state for styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('features'), path: '/features' },
        { name: t('contact'), path: '/contact' },
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ta', label: 'தமிழ்' },
        { code: 'te', label: 'తెలుగు' },
        { code: 'hi', label: 'हिंदी' },
    ];

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgba(11, 17, 33, 0.85)' : 'transparent',
            backdropFilter: 'blur(12px)',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.2rem 1.5rem'
            }}>
                {/* Logo */}
                <NavLink to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                        padding: '0.4rem',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 12px rgba(45, 212, 191, 0.3)'
                    }}>
                        <BookOpen color="white" size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'white' }}>
                        Swetcha
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--primary-light)' : 'var(--text-muted)',
                                        fontWeight: isActive ? 600 : 500,
                                        fontSize: '0.95rem',
                                        transition: 'color 0.2s',
                                        position: 'relative'
                                    })}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {isActive && (
                                                <span style={{
                                                    position: 'absolute',
                                                    bottom: '-4px',
                                                    left: '0',
                                                    width: '100%',
                                                    height: '2px',
                                                    background: 'var(--primary-light)',
                                                    borderRadius: '2px',
                                                    boxShadow: '0 0 8px var(--primary-light)'
                                                }} />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions (Lang + Mobile Toggle) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

                    {/* Language Switcher */}
                    <div className="lang-switcher" style={{ position: 'relative' }}>
                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'var(--text-main)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                outline: 'none',
                                fontSize: '0.9rem',
                                fontFamily: 'inherit'
                            }}
                        >
                            {languages.map(lang => (
                                <option key={lang.code} value={lang.code} style={{ color: 'black' }}>
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Link to="/contact" className="btn btn-primary" style={{ display: 'none', md: { display: 'block' }, padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
                        {t('join')}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={toggleMenu}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex'
                        }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: '70px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(11, 17, 33, 0.98)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 999,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={({ isActive }) => ({
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: isActive ? 'var(--primary-light)' : 'var(--text-main)',
                                padding: '1rem',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                display: 'block'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ marginTop: '2rem', width: '100%', justifyContent: 'center', fontSize: '1.2rem', padding: '1rem', textDecoration: 'none' }}>
                        {t('join')}
                    </Link>
                </div>
            )}

            <style>{`
                @media (min-width: 768px) {
                    .mobile-toggle { display: none !important; }
                    .desktop-nav { display: block !important; }
                    .logo span { font-size: 1.75rem; }
                    .btn-primary { display: inline-flex !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
