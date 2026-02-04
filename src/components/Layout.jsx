import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, position: 'relative' }}>
                {/* Background blobs for aesthetics */}
                <div style={{
                    position: 'fixed',
                    top: '-20%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(15, 118, 110, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}></div>
                <div style={{
                    position: 'fixed',
                    bottom: '-20%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(15, 23, 42, 0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}></div>

                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
