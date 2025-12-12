'use client';

import React, { useState } from 'react';
import { AdSlot } from 'nlcyber-adslot';

export default function AdSlotDemo() {
    const [debugMode, setDebugMode] = useState(false);
    const [adCount, setAdCount] = useState(5);
    const [baseUrl, setBaseUrl] = useState('http://localhost:3000');

    return (
        <div className="container">
            <header className="header">
                <h1>NLCyber AdSlot Demo</h1>
                <p>Interactive demonstration of the NLCyber AdSlot React component with various configurations and placements</p>
            </header>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#homepage">Homepage</a></li>
                    <li className="nav-item"><a href="#article">Article</a></li>
                    <li className="nav-item"><a href="#sidebar">Sidebar</a></li>
                    <li className="nav-item"><a href="#config">Configuration</a></li>
                </ul>
            </nav>

            <main className="main">
                <div className="content">
                    <section id="homepage" className="demo-section">
                        <h2>Homepage Banner Ad</h2>
                        <p>This demonstrates a standard banner ad placement at the top of a homepage. The ad will automatically select from available campaigns and handle frequency capping.</p>

                        <div className="banner-ad">
                            <div className="ad-header">Homepage Top Banner (728x90)</div>
                            <div className="ad-content">
                                {AdSlot ? (
                                    <AdSlot
                                        placement="homepage_top"
                                        width={728}
                                        height={90}
                                        debug={debugMode}
                                        baseUrl={baseUrl}
                                        adCount={adCount}
                                        showLabel={true}
                                        labelText="Advertisement"
                                    />
                                ) : (
                                    <div style={{ color: '#6c757d', textAlign: 'center' }}>
                                        AdSlot component not loaded. Please check the package installation.
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="code-example">
                            <pre>{`<AdSlot
  placement="homepage_top"
  width={728}
  height={90}
  debug={debugMode}
  baseUrl="${baseUrl}"
  adCount={${adCount}}
  showLabel={true}
  labelText="Advertisement"
/>`}</pre>
                        </div>
                    </section>

                    <section id="article" className="demo-section">
                        <h2>Article Content Integration</h2>
                        <p>Ads can be seamlessly integrated within article content. This example shows how ads appear in the natural flow of content.</p>

                        <div className="banner-ad">
                            <div className="ad-header">Article Banner (728x90)</div>
                            <div className="ad-content">
                                {AdSlot ? (
                                    <AdSlot
                                        placement="article_banner"
                                        width={728}
                                        height={90}
                                        debug={debugMode}
                                        baseUrl={baseUrl}
                                        adCount={adCount}
                                        showLabel={true}
                                    />
                                ) : (
                                    <div style={{ color: '#6c757d', textAlign: 'center' }}>
                                        AdSlot component not loaded.
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="code-example">
                            <pre>{`<AdSlot
  placement="article_banner"
  width={728}
  height={90}
  debug={debugMode}
  baseUrl="${baseUrl}"
  adCount={${adCount}}
  showLabel={true}
/>`}</pre>
                        </div>
                    </section>

                    <section id="config" className="demo-section">
                        <h2>Configuration Options</h2>
                        <p>Customize the AdSlot behavior with various configuration options:</p>

                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Debug Mode:
                                    <input
                                        type="checkbox"
                                        checked={debugMode}
                                        onChange={(e) => setDebugMode(e.target.checked)}
                                        style={{ marginLeft: '0.5rem' }}
                                    />
                                </label>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Ad Count: {adCount}
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={adCount}
                                        onChange={(e) => setAdCount(parseInt(e.target.value))}
                                        style={{ width: '100%', marginTop: '0.5rem' }}
                                    />
                                </label>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Base URL:
                                    <input
                                        type="text"
                                        value={baseUrl}
                                        onChange={(e) => setBaseUrl(e.target.value)}
                                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </label>
                            </div>
                        </div>

                        {debugMode && (
                            <div className="debug-info">
                                <h4>Debug Information</h4>
                                <pre>{`Current Configuration:
- Debug Mode: ${debugMode}
- Ad Count: ${adCount}
- Base URL: ${baseUrl}
- Placement: homepage_top
- Show Label: true
- Label Text: "Advertisement"`}</pre>
                            </div>
                        )}
                    </section>

                    <section className="demo-section">
                        <h2>Features</h2>
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">🎯</div>
                                <h3>Smart Ad Selection</h3>
                                <p>Weighted rotation with priority tiers for optimal ad performance</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">📊</div>
                                <h3>Frequency Capping</h3>
                                <p>Limits impressions per user per day to prevent ad fatigue</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🔒</div>
                                <h3>Secure Tracking</h3>
                                <p>JWT-based click and impression tracking for security</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">📱</div>
                                <h3>Responsive Design</h3>
                                <p>Works seamlessly on desktop and mobile devices</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🎨</div>
                                <h3>Customizable</h3>
                                <p>Flexible styling and configuration options</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🚀</div>
                                <h3>TypeScript</h3>
                                <p>Full TypeScript support with comprehensive type definitions</p>
                            </div>
                        </div>
                    </section>
                </div>

                <aside className="sidebar">
                    <div id="sidebar" className="ad-container">
                        <div className="ad-header">Sidebar Ad (300x250)</div>
                        <div className="ad-content">
                            {AdSlot ? (
                                <AdSlot
                                    placement="article_sidebar"
                                    width={300}
                                    height={250}
                                    debug={debugMode}
                                    baseUrl={baseUrl}
                                    adCount={adCount}
                                    showLabel={true}
                                />
                            ) : (
                                <div style={{ color: '#6c757d', textAlign: 'center' }}>
                                    AdSlot component not loaded.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="ad-container">
                        <div className="ad-header">Square Ad (250x250)</div>
                        <div className="ad-content">
                            {AdSlot ? (
                                <AdSlot
                                    placement="sidebar_square"
                                    width={250}
                                    height={250}
                                    debug={debugMode}
                                    baseUrl={baseUrl}
                                    adCount={adCount}
                                    showLabel={true}
                                />
                            ) : (
                                <div style={{ color: '#6c757d', textAlign: 'center' }}>
                                    AdSlot component not loaded.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="ad-container">
                        <div className="ad-header">Skyscraper (160x600)</div>
                        <div className="ad-content">
                            {AdSlot ? (
                                <AdSlot
                                    placement="sidebar_skyscraper"
                                    width={160}
                                    height={600}
                                    debug={debugMode}
                                    baseUrl={baseUrl}
                                    adCount={adCount}
                                    showLabel={true}
                                />
                            ) : (
                                <div style={{ color: '#6c757d', textAlign: 'center' }}>
                                    AdSlot component not loaded.
                                </div>
                            )}
                        </div>
                    </div>
                </aside>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 NLCyber AdSlot Demo. Built with Next.js, React, and the NLCyber AdSlot component.</p>
                </div>
            </footer>
        </div>
    );
}
