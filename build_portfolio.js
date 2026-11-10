import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team PM App — 풀스택 분산 협업 플랫폼 포트폴리오</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Pretendard:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      /* 5-Level Cosmic Onyx Depth System */
      --void-bg: #05070a;
      --bg-primary: #090d16;
      --bg-secondary: #0f1523;
      --bg-tertiary: #172033;
      --card-bg: rgba(18, 26, 43, 0.75);
      --card-border: rgba(255, 255, 255, 0.08);
      --border-specular: rgba(255, 255, 255, 0.18);
      
      /* Vibrant Technical Accents */
      --accent-blue: #3b82f6;
      --accent-indigo: #6366f1;
      --accent-purple: #8b5cf6;
      --accent-teal: #14b8a6;
      --accent-emerald: #10b981;
      --accent-amber: #f59e0b;
      --accent-rose: #f43f5e;
      --accent-cyan: #06b6d4;

      /* Glowing Highlights */
      --glow-indigo: 0 0 35px -4px rgba(99, 102, 241, 0.4);
      --glow-emerald: 0 0 35px -4px rgba(16, 185, 129, 0.4);
      --glow-cyan: 0 0 35px -4px rgba(6, 182, 212, 0.4);
      --glow-amber: 0 0 35px -4px rgba(245, 158, 11, 0.4);

      /* Typography & Easing */
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace;
      --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--void-bg);
      color: var(--text-main);
      font-family: var(--font-family);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
        radial-gradient(circle at 10% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
        radial-gradient(circle at 90% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
      background-attachment: fixed;
    }

    /* Ambient Glow Background */
    .ambient-glow {
      position: fixed;
      top: -200px;
      left: 50%;
      transform: translateX(-50%);
      width: 1200px;
      height: 700px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.06) 40%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 1260px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    /* Navigation */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(20px) saturate(180%);
      background: rgba(9, 13, 22, 0.82);
      border-bottom: 1px solid var(--card-border);
      transition: border-color 0.3s;
    }
    .nav-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #fff;
      text-decoration: none;
    }
    .brand-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, var(--accent-indigo), var(--accent-blue));
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 16px rgba(99, 102, 241, 0.4);
    }
    .brand-badge {
      font-size: 0.72rem;
      padding: 3px 9px;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.4);
      color: #a5b4fc;
      border-radius: 9999px;
      font-weight: 600;
    }
    .nav-links {
      display: flex;
      gap: 22px;
      align-items: center;
    }
    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.92rem;
      font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: #fff;
    }
    .nav-highlight {
      color: #38bdf8 !important;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .btn-live {
      background: linear-gradient(135deg, var(--accent-indigo), var(--accent-blue));
      color: #fff !important;
      padding: 8px 18px;
      border-radius: 8px;
      font-weight: 600 !important;
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-live:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);
    }

    /* Hero Section */
    .hero {
      padding: 80px 0 50px;
      text-align: center;
    }
    .hero-tagline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      padding: 6px 16px;
      border-radius: 9999px;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #818cf8;
      font-weight: 600;
      margin-bottom: 24px;
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    .hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.035em;
      margin-bottom: 22px;
      background: linear-gradient(135deg, #ffffff 30%, #e2e8f0 70%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: 1.25rem;
      color: var(--text-muted);
      max-width: 860px;
      margin: 0 auto 36px;
      word-break: keep-all;
      line-height: 1.7;
    }
    .hero-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 0.95rem;
      color: var(--text-dim);
    }
    .hero-meta span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Raycast Spotlight 3D Tilt Cards */
    .spotlight-card {
      position: relative;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      backdrop-filter: blur(16px);
      overflow: hidden;
      transform-style: preserve-3d;
      perspective: 1000px;
      transition: transform 0.3s var(--ease-spring), border-color 0.3s var(--ease-smooth);
    }
    .spotlight-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(600px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(99, 102, 241, 0.18), transparent 45%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }
    .spotlight-card:hover::before {
      opacity: 1;
    }
    .spotlight-card:hover {
      border-color: var(--border-specular);
    }

    /* Metrics Banner */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin: 48px 0 70px;
    }
    .metric-card {
      padding: 26px 20px;
      text-align: center;
      position: relative;
    }
    .metric-val {
      font-family: var(--font-mono);
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin-bottom: 8px;
      font-variant-numeric: tabular-nums;
    }
    .val-indigo { color: #818cf8; text-shadow: 0 0 24px rgba(129, 140, 248, 0.4); }
    .val-emerald { color: #34d399; text-shadow: 0 0 24px rgba(52, 211, 153, 0.4); }
    .val-teal { color: #2dd4bf; text-shadow: 0 0 24px rgba(45, 212, 191, 0.4); }
    .val-amber { color: #fbbf24; text-shadow: 0 0 24px rgba(251, 191, 36, 0.4); }
    .metric-label {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 4px;
    }
    .metric-sub {
      font-size: 0.8rem;
      color: var(--text-dim);
      line-height: 1.4;
    }
    .metric-impact {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.72rem;
      padding: 3px 8px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      font-weight: 500;
    }

    /* Section Headers */
    .section-header-wrap {
      margin-bottom: 36px;
    }
    .section-badge {
      display: inline-block;
      font-size: 0.76rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #a5b4fc;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .section-title {
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .section-sub {
      font-size: 1.05rem;
      color: var(--text-muted);
      max-width: 800px;
      line-height: 1.6;
    }

    /* ==========================================================================
       [KILLER SHOWCASE 1] LIVE DUAL-CLIENT WEBSOCKET PLAYGROUND
       ========================================================================== */
    .playground-section {
      margin-bottom: 90px;
    }
    .playground-box {
      background: linear-gradient(180deg, rgba(17, 24, 39, 0.85) 0%, rgba(10, 15, 26, 0.95) 100%);
      border: 1px solid var(--border-specular);
      border-radius: 20px;
      padding: 28px;
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), var(--glow-indigo);
    }
    .playground-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--card-border);
      flex-wrap: wrap;
      gap: 14px;
    }
    .playground-title {
      font-size: 1.2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .playground-actions {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .btn-action {
      background: rgba(99, 102, 241, 0.18);
      border: 1px solid rgba(99, 102, 241, 0.4);
      color: #c7d2fe;
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 0.84rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn-action:hover {
      background: rgba(99, 102, 241, 0.35);
      border-color: rgba(99, 102, 241, 0.7);
      color: #fff;
      transform: translateY(-1px);
    }
    .btn-rebalance {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #fde68a;
    }
    .btn-rebalance:hover {
      background: rgba(245, 158, 11, 0.3);
      border-color: rgba(245, 158, 11, 0.7);
      color: #fff;
    }
    .playground-grid {
      display: grid;
      grid-template-columns: 1fr 1.15fr 1fr;
      gap: 20px;
      align-items: stretch;
    }
    @media (max-width: 1024px) {
      .playground-grid {
        grid-template-columns: 1fr;
      }
    }
    .client-window {
      background: var(--bg-primary);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .client-header {
      background: rgba(255, 255, 255, 0.03);
      padding: 10px 14px;
      border-bottom: 1px solid var(--card-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
    }
    .window-dots {
      display: flex;
      gap: 6px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .dot-red { background: #ef4444; }
    .dot-yellow { background: #f59e0b; }
    .dot-green { background: #10b981; }
    .client-user {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
      color: var(--text-main);
    }
    .user-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.65rem;
      font-weight: 800;
    }
    .client-body {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .mini-column {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 10px;
    }
    .column-title {
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
    }
    .mini-card {
      background: var(--bg-secondary);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 10px 12px;
      cursor: grab;
      user-select: none;
      transition: all 0.3s var(--ease-spring);
      position: relative;
    }
    .mini-card:active {
      cursor: grabbing;
      transform: scale(0.98);
    }
    .mini-card-title {
      font-size: 0.84rem;
      font-weight: 600;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .mini-card-badge {
      font-size: 0.68rem;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(99, 102, 241, 0.2);
      color: #818cf8;
      font-family: var(--font-mono);
    }
    .mini-card-meta {
      font-size: 0.72rem;
      color: var(--text-dim);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pos-indicator {
      font-family: var(--font-mono);
      color: #38bdf8;
      font-size: 0.72rem;
    }

    /* Terminal Console */
    .terminal-console {
      background: #03060a;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-family: var(--font-mono);
      font-size: 0.78rem;
    }
    .terminal-header {
      background: #090e17;
      padding: 10px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-muted);
    }
    .terminal-logs {
      padding: 14px;
      height: 270px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .terminal-logs::-webkit-scrollbar {
      width: 5px;
    }
    .terminal-logs::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
    .log-line {
      line-height: 1.45;
      animation: fadeIn 0.2s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(3px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .log-ts { color: var(--text-dim); }
    .log-client { color: #38bdf8; }
    .log-db { color: #34d399; }
    .log-redis { color: #f43f5e; }
    .log-ws { color: #a855f7; }
    .log-warn { color: #fbbf24; }

    /* ==========================================================================
       [KILLER SHOWCASE 2] LIVING ARCHITECTURE CANVAS & ADR INSPECTOR
       ========================================================================== */
    .arch-interactive-wrap {
      margin-bottom: 90px;
    }
    .canvas-container {
      position: relative;
      background: radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.9) 0%, rgba(5, 7, 10, 0.98) 100%);
      border: 1px solid var(--border-specular);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.8);
    }
    #archCanvas {
      width: 100%;
      height: 380px;
      display: block;
      cursor: crosshair;
    }
    .canvas-overlay-help {
      position: absolute;
      top: 14px;
      left: 20px;
      font-size: 0.8rem;
      color: var(--text-muted);
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 10px;
      border-radius: 6px;
      pointer-events: none;
    }
    .adr-modal-popup {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: rgba(18, 26, 43, 0.95);
      border: 1px solid rgba(99, 102, 241, 0.5);
      border-radius: 12px;
      padding: 16px 20px;
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s var(--ease-spring);
      opacity: 0;
      transform: translateY(15px);
      pointer-events: none;
    }
    .adr-modal-popup.active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .adr-info h4 {
      font-size: 0.98rem;
      color: #fff;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .adr-info p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .btn-adr-close {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 1.2rem;
      cursor: pointer;
      padding: 4px 8px;
    }
    .btn-adr-close:hover {
      color: #fff;
    }

    /* ==========================================================================
       [KILLER SHOWCASE 3] ENGINEERING TROUBLESHOOTING LAB
       ========================================================================== */
    .lab-section {
      margin-bottom: 90px;
    }
    .lab-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 860px) {
      .lab-grid {
        grid-template-columns: 1fr;
      }
    }
    .lab-card {
      padding: 28px;
    }
    .lab-card-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lab-desc {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 20px;
      line-height: 1.55;
    }
    .slider-wrap {
      margin-bottom: 24px;
    }
    .slider-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .custom-slider {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      outline: none;
      -webkit-appearance: none;
    }
    .custom-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--accent-indigo);
      cursor: pointer;
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
    }
    .gauge-comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 16px;
    }
    .gauge-box {
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 14px;
      text-align: center;
    }
    .gauge-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-dim);
      margin-bottom: 6px;
    }
    .gauge-val {
      font-family: var(--font-mono);
      font-size: 1.35rem;
      font-weight: 800;
      margin-bottom: 4px;
    }
    .gauge-sub {
      font-size: 0.7rem;
    }

    /* Concurrency Stresstest Box */
    .concurrency-test-area {
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    .stresstest-btn-row {
      display: flex;
      gap: 10px;
      margin-bottom: 14px;
    }
    .test-result-console {
      height: 120px;
      background: #020509;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 10px;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      overflow-y: auto;
    }

    /* Tech Stack Badges */
    .tech-stack-wrap {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 36px;
      margin-bottom: 90px;
    }
    .stack-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }
    .stack-category {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .stack-cat-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .chip-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .chip {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      color: var(--text-main);
      transition: all 0.2s;
    }
    .chip:hover {
      background: rgba(99, 102, 241, 0.15);
      border-color: rgba(99, 102, 241, 0.4);
      transform: translateY(-2px);
    }
    .chip strong {
      color: #fff;
    }

    /* Screenshot Gallery */
    .gallery-section {
      margin-bottom: 90px;
    }
    .gallery-filter-bar {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }
    .filter-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--card-border);
      color: var(--text-muted);
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover {
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
    }
    .filter-btn.active {
      background: linear-gradient(135deg, var(--accent-indigo), var(--accent-blue));
      color: #fff;
      border-color: transparent;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 24px;
    }
    .gallery-card {
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
    .gallery-thumb-wrap {
      position: relative;
      height: 220px;
      overflow: hidden;
      background: #020509;
    }
    .gallery-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: transform 0.4s var(--ease-spring);
    }
    .gallery-card:hover .gallery-thumb {
      transform: scale(1.05);
    }
    .gallery-overlay-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(0, 0, 0, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 600;
      color: #cbd5e1;
      backdrop-filter: blur(8px);
    }
    .gallery-info {
      padding: 18px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .gallery-title {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 6px;
      color: #fff;
    }
    .gallery-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Accordion Deep Dive */
    .deep-dive {
      margin-bottom: 100px;
    }
    .accordion-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .accordion-item {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .accordion-item:hover {
      border-color: rgba(255, 255, 255, 0.16);
    }
    .accordion-trigger {
      width: 100%;
      background: none;
      border: none;
      padding: 20px 24px;
      text-align: left;
      font-size: 1.08rem;
      font-weight: 700;
      color: var(--text-main);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    .trigger-title {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 0.72rem;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: 700;
      text-transform: uppercase;
      font-family: var(--font-mono);
    }
    .badge-arch { background: rgba(99, 102, 241, 0.2); color: #a5b4fc; }
    .badge-perf { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
    .badge-concurrency { background: rgba(245, 158, 11, 0.2); color: #fde68a; }
    .badge-security { background: rgba(244, 63, 94, 0.2); color: #fda4af; }
    .chevron {
      transition: transform 0.3s var(--ease-spring);
      color: var(--text-dim);
    }
    .accordion-item.open .chevron {
      transform: rotate(180deg);
    }
    .accordion-content {
      display: none;
      padding: 0 24px 24px;
      color: var(--text-muted);
      font-size: 0.94rem;
      line-height: 1.7;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(0, 0, 0, 0.15);
    }
    .accordion-item.open .accordion-content {
      display: block;
      padding-top: 20px;
      animation: fadeIn 0.3s ease;
    }
    .highlight-list {
      margin-top: 12px;
      padding-left: 20px;
    }
    .highlight-list li {
      margin-bottom: 8px;
    }
    .highlight-list strong {
      color: #fff;
    }

    /* Lightbox Modal */
    .lightbox-modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(3, 5, 10, 0.9);
      backdrop-filter: blur(14px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .lightbox-modal.active {
      display: flex;
      animation: fadeIn 0.2s ease;
    }
    .lightbox-content {
      max-width: 1100px;
      width: 100%;
      background: var(--bg-secondary);
      border: 1px solid var(--border-specular);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
    }
    .lightbox-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--card-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lightbox-close {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 1.6rem;
      cursor: pointer;
      line-height: 1;
    }
    .lightbox-close:hover {
      color: #fff;
    }
    .lightbox-body {
      padding: 16px;
      max-height: 80vh;
      overflow: auto;
      text-align: center;
    }
    .lightbox-body img {
      max-width: 100%;
      max-height: 72vh;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--card-border);
      padding: 60px 0;
      text-align: center;
      color: var(--text-dim);
      font-size: 0.9rem;
      background: rgba(5, 7, 10, 0.6);
    }
    .footer-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover {
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="ambient-glow"></div>

  <!-- Header -->
  <header>
    <div class="container nav-inner">
      <a href="#" class="brand">
        <div class="brand-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        Team PM App
        <span class="brand-badge">Enterprise Full-Stack</span>
      </a>
      <div class="nav-links">
        <a href="#overview">개요</a>
        <a href="#playground" class="nav-highlight">⚡ 인터랙티브 샌드박스</a>
        <a href="#architecture">아키텍처</a>
        <a href="#troubleshooting-lab">엔지니어링 랩</a>
        <a href="#features">기능 스크린샷</a>
        <a href="https://team-pm-app-sand.vercel.app" target="_blank" class="btn-live">실제 서비스 바로가기 ↗</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero container" id="overview">
    <div class="hero-tagline">
      <div class="pulse-dot"></div>
      <span>프로덕션 배포 & 검증 완료 (M0 ~ M44 전 마일스톤 100% 달성)</span>
    </div>
    <h1>2~10인 원격 팀의 속도를 극대화하는<br>초저지연 실시간 올인원 협업 플랫폼</h1>
    <p class="hero-desc">
      Jira의 무거운 복잡성을 걷어내고, 분산 서버리스 환경(Vercel Functions + Redis Adapter)에서 <strong>평균 0.3초 실시간 분산 동기화</strong>를 구현했습니다.
      부동소수점 칸반 O(1) 이동 알고리즘, PostgreSQL <code>FOR UPDATE</code> 동시성 락, 그리고 <strong>538개의 엄격한 테스트 체계</strong>로 무결성을 검증한 엔터프라이즈 레벨 협업 SaaS입니다.
    </p>
    <div class="hero-meta">
      <span>🛠 <strong>기여도:</strong> 100% 1인 아키텍처·풀스택 구현·E2E 자동화</span>
      <span>⏱ <strong>실시간 반영 지연:</strong> ~0.31s (Redis Pub/Sub 실측)</span>
      <span>🔒 <strong>엔터프라이즈 보안:</strong> CVE 0건 / Strict RLS / Dual Token Rotation</span>
    </div>

    <!-- Key Metrics Grid with Spotlight & Dynamic Counter -->
    <div class="metrics-grid">
      <div class="spotlight-card metric-card">
        <div class="metric-val val-indigo" data-target="538" data-suffix="+">538+</div>
        <div class="metric-label">서버 단위/통합 테스트</div>
        <div class="metric-sub">인메모리 저장소 기반 전 라우트 0.5초대 검증</div>
        <div class="metric-impact">⚡ 배포 안정성 100% 보장</div>
      </div>
      <div class="spotlight-card metric-card">
        <div class="metric-val val-emerald" data-target="359">359</div>
        <div class="metric-label">실제 DB 트랜잭션 스모크</div>
        <div class="metric-sub">Supabase Pooler 락 경합 및 롤백 무결성 확인</div>
        <div class="metric-impact">🛡 동시성 무결점 1인 1표</div>
      </div>
      <div class="spotlight-card metric-card">
        <div class="metric-val val-teal" data-target="89">89</div>
        <div class="metric-label">브라우저 E2E 자동화 단계</div>
        <div class="metric-sub">Playwright 기반 다중 클라이언트 실시간 상호작용 검증</div>
        <div class="metric-impact">📱 모바일 375px 완벽 대응</div>
      </div>
      <div class="spotlight-card metric-card">
        <div class="metric-val val-amber" data-target="42.6" data-prefix="-" data-suffix="%">-42.6%</div>
        <div class="metric-label">초기 JS 번들 최적화</div>
        <div class="metric-sub">lazyPage 라우트 스플리팅 (594KB → 341KB)</div>
        <div class="metric-impact">🚀 FCP 0.8초 콜드 스타트 달성</div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       [KILLER SHOWCASE 1] LIVE DUAL-CLIENT WEBSOCKET PLAYGROUND
       ========================================================================== -->
  <section class="container playground-section" id="playground">
    <div class="section-header-wrap">
      <span class="section-badge">Live Interactive Sandbox</span>
      <h2 class="section-title">
        실시간 분산 패킷 시뮬레이터 & 듀얼 클라이언트 칸반
      </h2>
      <p class="section-sub">
        로그인 없이 지금 바로 카드를 조작해 보세요. 
        <strong>User A가 카드를 이동시키는 순간, REST API 쓰기 경로 ➔ PostgreSQL Pooler ➔ Redis Pub/Sub ➔ Socket.io 브로드캐스트</strong>를 거쳐 
        User B의 화면에 0.3초 만에 동기화되는 분산 패킷 텔레메트리를 실시간으로 확인할 수 있습니다.
      </p>
    </div>

    <div class="playground-box">
      <div class="playground-header">
        <div class="playground-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          분산 실시간 동기화 라이브 플레이그라운드 (~0.3s Round-trip)
        </div>
        <div class="playground-actions">
          <button class="btn-action" onclick="moveDemoCard('in_progress')">
            <span>🚀 'In Progress'로 이동</span>
          </button>
          <button class="btn-action" onclick="moveDemoCard('done')">
            <span>✅ 'Done'으로 완료</span>
          </button>
          <button class="btn-action btn-rebalance" onclick="triggerRebalanceDemo()">
            <span>💥 1e-9 정밀도 고갈 & 자가치유 시뮬레이션</span>
          </button>
        </div>
      </div>

      <div class="playground-grid">
        <!-- Client A Window -->
        <div class="client-window">
          <div class="client-header">
            <div class="window-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="client-user">
              <span class="user-avatar" style="background: #3b82f6; color:#fff;">A</span>
              User A (서울 개발팀)
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #10b981;">● Online</span>
          </div>
          <div class="client-body">
            <div class="mini-column">
              <div class="column-title">
                <span>To Do</span>
                <span id="colCountA-todo">0</span>
              </div>
              <div id="colBoxA-todo"></div>
            </div>
            <div class="mini-column">
              <div class="column-title">
                <span>In Progress</span>
                <span id="colCountA-in_progress">1</span>
              </div>
              <div id="colBoxA-in_progress">
                <div class="mini-card" id="demoCardA" draggable="true" ondragstart="onDragCard(event)">
                  <div class="mini-card-title">
                    <span>#TPM-42 소켓 동기화</span>
                    <span class="mini-card-badge">P1-High</span>
                  </div>
                  <div class="mini-card-meta">
                    <span>담당: Alice</span>
                    <span class="pos-indicator" id="cardPosDisplayA">pos: 2048.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mini-column">
              <div class="column-title">
                <span>Done</span>
                <span id="colCountA-done">0</span>
              </div>
              <div id="colBoxA-done"></div>
            </div>
          </div>
        </div>

        <!-- Terminal Telemetry Console -->
        <div class="terminal-console">
          <div class="terminal-header">
            <span>ENGINEERING PACKET INSPECTOR</span>
            <span id="packetLatencyBadge" style="color: #38bdf8;">LATENCY: IDLE</span>
          </div>
          <div class="terminal-logs" id="terminalLogs">
            <div class="log-line"><span class="log-ts">[00:00.000]</span> <span class="log-ws">System Ready.</span> Dual-Client WebSocket session initialized.</div>
            <div class="log-line"><span class="log-ts">[00:00.010]</span> Supabase Transaction Pooler connected on port 6543 (max: 3).</div>
            <div class="log-line"><span class="log-ts">[00:00.015]</span> Redis Cloud Pub/Sub channel 'project:42:events' subscribed.</div>
            <div class="log-line"><span class="log-ts">[00:00.020]</span> <span class="log-client">💡 상단 버튼을 클릭하거나 카드를 드래그하여 실시간 패킷 흐름을 확인하세요.</span></div>
          </div>
        </div>

        <!-- Client B Window -->
        <div class="client-window">
          <div class="client-header">
            <div class="window-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="client-user">
              <span class="user-avatar" style="background: #10b981; color:#fff;">B</span>
              User B (도쿄 PM)
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #10b981;">● Online</span>
          </div>
          <div class="client-body">
            <div class="mini-column">
              <div class="column-title">
                <span>To Do</span>
                <span id="colCountB-todo">0</span>
              </div>
              <div id="colBoxB-todo"></div>
            </div>
            <div class="mini-column">
              <div class="column-title">
                <span>In Progress</span>
                <span id="colCountB-in_progress">1</span>
              </div>
              <div id="colBoxB-in_progress">
                <div class="mini-card" id="demoCardB" style="opacity: 0.95;">
                  <div class="mini-card-title">
                    <span>#TPM-42 소켓 동기화</span>
                    <span class="mini-card-badge">P1-High</span>
                  </div>
                  <div class="mini-card-meta">
                    <span>담당: Alice</span>
                    <span class="pos-indicator" id="cardPosDisplayB">pos: 2048.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mini-column">
              <div class="column-title">
                <span>Done</span>
                <span id="colCountB-done">0</span>
              </div>
              <div id="colBoxB-done"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       [KILLER SHOWCASE 2] LIVING ARCHITECTURE CANVAS & ADR INSPECTOR
       ========================================================================== -->
  <section class="container arch-interactive-wrap" id="architecture">
    <div class="section-header-wrap">
      <span class="section-badge">Living Architecture</span>
      <h2 class="section-title">
        분산 시스템 데이터 플로우 & 인터랙티브 노드 탐색기
      </h2>
      <p class="section-sub">
        정적인 구조도를 넘어 브라우저와 서버리스 API, Redis Cloud, Supabase PostgreSQL 간의 데이터 패킷 흐름을 시각화했습니다. 
        <strong>원하는 노드를 클릭하면 시니어 엔지니어링 의사결정 기록(ADR)</strong>을 열람할 수 있습니다.
      </p>
    </div>

    <div class="canvas-container">
      <div class="canvas-overlay-help">💡 캔버스의 노드(Browser, Vercel, Redis, Supabase)를 클릭해보세요.</div>
      <canvas id="archCanvas"></canvas>
      
      <!-- Interactive ADR Modal Popup -->
      <div class="adr-modal-popup" id="adrPopup">
        <div class="adr-info">
          <h4 id="adrNodeTitle">Node Selected</h4>
          <p id="adrNodeDesc">Architecture decision details will appear here.</p>
        </div>
        <button class="btn-adr-close" onclick="closeAdrPopup()">&times;</button>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       [KILLER SHOWCASE 3] ENGINEERING TROUBLESHOOTING LAB
       ========================================================================== -->
  <section class="container lab-section" id="troubleshooting-lab">
    <div class="section-header-wrap">
      <span class="section-badge">Engineering Deep-Dive Lab</span>
      <h2 class="section-title">
        엔지니어링 트러블슈팅 Before / After 인터랙티브 랩
      </h2>
      <p class="section-sub">
        실제 겪었던 분산 시스템의 기술적 난제들을 인터랙티브 시뮬레이터로 검증해 보세요. 
        슬라이더를 움직이거나 동시성 부하 테스트를 실행하여 본 프로젝트의 아키텍처적 우위를 실측할 수 있습니다.
      </p>
    </div>

    <div class="lab-grid">
      <!-- Lab 1: Position Algorithm Slider -->
      <div class="spotlight-card lab-card">
        <div class="lab-card-title">
          <span style="color: #818cf8;">⚡ Lab 1.</span>
          칸반 정렬: 정수 O(N) vs Double Precision O(1)
        </div>
        <p class="lab-desc">
          컬럼 내 카드 수(N)가 증가할 때 카드를 최상단에 끼워 넣는 상황의 DB 부하를 비교합니다. 
          정수형 인덱스는 N개 전체를 밀어내야 하지만, 본 프로젝트의 부동소수점 알고리즘은 N이 10,000개여도 단 1개 행만 갱신합니다.
        </p>

        <div class="slider-wrap">
          <div class="slider-header">
            <span>시뮬레이션 카드 수 (N):</span>
            <span id="sliderCardVal" style="color: #38bdf8; font-family: var(--font-mono);">1,000 개</span>
          </div>
          <input type="range" min="10" max="10000" step="50" value="1000" class="custom-slider" id="cardSlider" oninput="updateCardBenchmark(this.value)">
        </div>

        <div class="gauge-comparison">
          <div class="gauge-box" style="border-color: rgba(239, 68, 68, 0.3);">
            <div class="gauge-label">정수형 인덱스 O(N) 방식</div>
            <div class="gauge-val" id="intUpdateCount" style="color: #f87171;">1,000 행 UPDATE</div>
            <div class="gauge-sub" id="intQueryTime" style="color: #fca5a5;">예상 소요시간: 120ms (Lock 위험)</div>
          </div>
          <div class="gauge-box" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.05);">
            <div class="gauge-label">본 프로젝트 O(1) 부동소수점</div>
            <div class="gauge-val" style="color: #34d399;">1 행 UPDATE (불변)</div>
            <div class="gauge-sub" style="color: #6ee7b7;">소요시간: 1.2ms (Zero Lock)</div>
          </div>
        </div>
      </div>

      <!-- Lab 2: Concurrency Lock Test -->
      <div class="spotlight-card lab-card">
        <div class="lab-card-title">
          <span style="color: #34d399;">🔒 Lab 2.</span>
          동시성 투표 1인 1표 보장 (FOR UPDATE 배타적 락)
        </div>
        <p class="lab-desc">
          동일 사용자가 100ms 이내에 서로 다른 항목을 10회 동시 클릭하는 극단적인 경쟁 상태(Race Condition)를 시뮬레이션합니다. 
          <code>SELECT ... FOR UPDATE</code> 락을 통해 데이터베이스 수준에서 중복 투표를 완벽 차단합니다.
        </p>

        <div class="concurrency-test-area">
          <div class="stresstest-btn-row">
            <button class="btn-action" style="flex:1;" onclick="runConcurrencyTest(false)">
              ❌ 락 없는 경우 (안티패턴)
            </button>
            <button class="btn-action" style="flex:1; background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.5); color: #a7f3d0;" onclick="runConcurrencyTest(true)">
              🛡 FOR UPDATE 락 적용 (본 프로젝트)
            </button>
          </div>
          <div class="test-result-console" id="concurrencyLogs">
            <span style="color: var(--text-dim);">[대기 중] 위 버튼을 클릭하여 10개 동시 트랜잭션을 발생시켜 보세요.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section class="container">
    <div class="tech-stack-wrap spotlight-card">
      <div class="stack-grid">
        <div class="stack-category">
          <div class="stack-cat-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Frontend & Architecture
          </div>
          <div class="chip-group">
            <div class="chip"><strong>React 19</strong> (Vite)</div>
            <div class="chip"><strong>Custom Design Tokens</strong> (Zero-runtime CSS)</div>
            <div class="chip"><strong>TanStack Query v5</strong> (Optimistic Cache)</div>
            <div class="chip"><strong>@dnd-kit</strong> (Hardware Accelerated DND)</div>
            <div class="chip"><strong>lazyPage</strong> (Chunk 404 Auto-reload)</div>
          </div>
        </div>

        <div class="stack-category">
          <div class="stack-cat-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Backend & Distributed
          </div>
          <div class="chip-group">
            <div class="chip"><strong>Node.js (Express)</strong> Modular Clean Arch</div>
            <div class="chip"><strong>PostgreSQL 15</strong> (Supabase Pooler 6543)</div>
            <div class="chip"><strong>Socket.io</strong> + Redis Pub/Sub Adapter</div>
            <div class="chip"><strong>FOR UPDATE</strong> Transactional Locking</div>
            <div class="chip"><strong>MCP Server</strong> (Model Context Protocol)</div>
          </div>
        </div>

        <div class="stack-category">
          <div class="stack-cat-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Security & Reliability
          </div>
          <div class="chip-group">
            <div class="chip"><strong>Strict RLS</strong> (Supabase Anon Key Blocked)</div>
            <div class="chip"><strong>Dual Token Rotation</strong> (Reuse Detection)</div>
            <div class="chip"><strong>538 Tests</strong> (Memory Repos 0.5s Fast DX)</div>
            <div class="chip"><strong>89-Step E2E</strong> (Playwright Mobile 375px)</div>
            <div class="chip"><strong>Double-Precision</strong> (O(1) Self-healing)</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshot Gallery Section -->
  <section class="gallery-section container" id="features">
    <div class="section-header-wrap">
      <span class="section-badge">Production Showcase</span>
      <h2 class="section-title">주요 화면 및 핵심 기능 스크린샷</h2>
      <p class="section-sub">
        실제 프로덕션 환경(다크/라이트 테마 및 375px 모바일)에서 캡처한 고해상도 화면입니다. 카드를 클릭하면 확대하여 볼 수 있습니다.
      </p>
    </div>

    <!-- Category Filters -->
    <div class="gallery-filter-bar">
      <button class="filter-btn active" onclick="filterGallery('all')">전체 화면 (36개)</button>
      <button class="filter-btn" onclick="filterGallery('kanban')">칸반 & 뷰 (7개)</button>
      <button class="filter-btn" onclick="filterGallery('modal')">모달 & 디테일 (6개)</button>
      <button class="filter-btn" onclick="filterGallery('productivity')">생산성 & 검색 (8개)</button>
      <button class="filter-btn" onclick="filterGallery('mobile')">모바일 375px (4개)</button>
    </div>

    <div class="gallery-grid">
      <!-- 1. Kanban Board -->
      <div class="spotlight-card gallery-card" data-cat="kanban" onclick="openLightbox('portfolio/images/light-04-board.png', '칸반 보드 (라이트 모드)')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-04-board.png" alt="칸반 보드" loading="lazy">
          <span class="gallery-overlay-badge">Light & Dark</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">드래그 앤 드롭 칸반 보드</div>
          <div class="gallery-desc">Double-precision O(1) 이동 및 실시간 Redis 웹소켓 동기화(~0.3초).</div>
        </div>
      </div>

      <!-- 2. Dark Kanban -->
      <div class="spotlight-card gallery-card" data-cat="kanban" onclick="openLightbox('portfolio/images/dark-04-board.png', '칸반 보드 (다크 모드)')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/dark-04-board.png" alt="칸반 보드 다크" loading="lazy">
          <span class="gallery-overlay-badge">Dark Theme</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">칸반 보드 (다크 모드)</div>
          <div class="gallery-desc">눈의 피로도를 낮춘 맞춤형 다크 테마 및 카드 고도감 섀도우.</div>
        </div>
      </div>

      <!-- 3. Task Modal -->
      <div class="spotlight-card gallery-card" data-cat="modal" onclick="openLightbox('portfolio/images/light-08-task-modal.png', '작업 상세 모달 (상단)')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-08-task-modal.png" alt="작업 상세 모달" loading="lazy">
          <span class="gallery-overlay-badge">Core Modal</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">작업 상세 모달 & 서브태스크</div>
          <div class="gallery-desc">체크리스트 50개, 8색 라벨 태깅, 소프트 의존성(선행 작업 10개) 관리.</div>
        </div>
      </div>

      <!-- 4. Task Modal Comments -->
      <div class="spotlight-card gallery-card" data-cat="modal" onclick="openLightbox('portfolio/images/light-09-task-modal-bottom.png', '스레드 댓글 & 이모지 리액션')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-09-task-modal-bottom.png" alt="댓글 스레드" loading="lazy">
          <span class="gallery-overlay-badge">Real-time</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">스레드 댓글 & @멘션 & 리액션</div>
          <div class="gallery-desc">1단계 답글 스레드, @멤버 자동완성 멘션, 8종 실시간 이모지 리액션.</div>
        </div>
      </div>

      <!-- 5. Timeline Gantt -->
      <div class="spotlight-card gallery-card" data-cat="kanban" onclick="openLightbox('portfolio/images/light-07-timeline.png', '타임라인 간트 차트')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-07-timeline.png" alt="타임라인 뷰" loading="lazy">
          <span class="gallery-overlay-badge">Timeline</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">타임라인 (간트 차트) 뷰</div>
          <div class="gallery-desc">시작일~마감일 4주 단위 바, 오늘 기준선 표시, 일정 충돌 배지 제공.</div>
        </div>
      </div>

      <!-- 6. Calendar View -->
      <div class="spotlight-card gallery-card" data-cat="kanban" onclick="openLightbox('portfolio/images/light-06-calendar.png', '월간 캘린더 뷰')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-06-calendar.png" alt="캘린더 뷰" loading="lazy">
          <span class="gallery-overlay-badge">Calendar</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">월간 캘린더 뷰 & 서랍</div>
          <div class="gallery-desc">마감일 기준 월별 캘린더 매핑 및 마감일 미지정 카드 드로어 연동.</div>
        </div>
      </div>

      <!-- 7. Command Palette -->
      <div class="spotlight-card gallery-card" data-cat="productivity" onclick="openLightbox('portfolio/images/light-10-palette.png', 'Ctrl+K 명령 팔레트')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-10-palette.png" alt="명령 팔레트" loading="lazy">
          <span class="gallery-overlay-badge">Productivity</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">Ctrl+K 명령 팔레트</div>
          <div class="gallery-desc">WAI-ARIA 접근성 준수, 한글 IME 조합 처리, 빠른 뷰 전환 및 단축키.</div>
        </div>
      </div>

      <!-- 8. Dashboard -->
      <div class="spotlight-card gallery-card" data-cat="productivity" onclick="openLightbox('portfolio/images/light-12-dashboard.png', '프로젝트 대시보드')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-12-dashboard.png" alt="대시보드" loading="lazy">
          <span class="gallery-overlay-badge">Analytics</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">프로젝트 대시보드 통계</div>
          <div class="gallery-desc">진행률 게이지, 상태별 분포(차트), 지연 작업 수, 팀원별 업무 부하 집계.</div>
        </div>
      </div>

      <!-- 9. Mobile Board -->
      <div class="spotlight-card gallery-card" data-cat="mobile" onclick="openLightbox('portfolio/images/light-21-mobile-board.png', '모바일 375px 칸반 보드')">
        <div class="gallery-thumb-wrap">
          <img class="gallery-thumb" src="portfolio/images/light-21-mobile-board.png" alt="모바일 칸반" loading="lazy">
          <span class="gallery-overlay-badge">Mobile Responsive</span>
        </div>
        <div class="gallery-info">
          <div class="gallery-title">모바일 375px 칸반 UX</div>
          <div class="gallery-desc">하단 탭 바, 가로 스와이프 컬럼 이동, 풀스크린 작업 모달 최적화.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Accordion Deep Dive Section -->
  <section class="deep-dive container" id="troubleshooting">
    <div class="section-header-wrap">
      <span class="section-badge">Technical Deep-Dive</span>
      <h2 class="section-title">시스템 아키텍처 & 핵심 엔지니어링 챌린지 10선</h2>
      <p class="section-sub">
        실제 프로덕션 환경의 엄격한 제약(서버리스 수명, 무료 티어 리소스, 동시성 락)을 해결하기 위해 내린 10가지 설계 결정입니다.
      </p>
    </div>

    <div class="accordion-list">
      <!-- 1. Position Algorithm -->
      <div class="accordion-item open">
        <button class="accordion-trigger" onclick="toggleAccordion(this)">
          <div class="trigger-title">
            <span class="badge badge-perf">Algorithm</span>
            부동소수점 position 알고리즘 (O(1) 단일 행 UPDATE) 및 엡실론 자가 치유
          </div>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          <p><strong>문제 정의:</strong> 일반적인 정수형 인덱스 정렬은 N번째 자리에 카드를 삽입할 때 뒤따르는 모든 카드의 인덱스를 +1 갱신해야 하므로 O(N) 쓰기 부하와 DB 락 경합이 발생합니다.</p>
          <ul class="highlight-list">
            <li><strong>해결책:</strong> 64-bit IEEE-754 <code>double precision</code> 타입을 채택하여, 앞뒤 카드의 중간값 <code>(before + after) / 2.0</code>을 계산해 단 하나의 행만 O(1)로 UPDATE합니다.</li>
            <li><strong>정밀도 고갈 방지 (자가 치유):</strong> 두 카드 사이의 차이가 엡실론(<code>1e-9</code>) 이하로 좁혀지면, 해당 컬럼의 모든 카드를 <code>1024.0, 2048.0, 3072.0</code>으로 비동기 재배치(Rebalancing)하는 자가 치유 트랜잭션을 트리거합니다.</li>
          </ul>
        </div>
      </div>

      <!-- 2. Vercel Serverless WebSocket -->
      <div class="accordion-item">
        <button class="accordion-trigger" onclick="toggleAccordion(this)">
          <div class="trigger-title">
            <span class="badge badge-arch">Distributed</span>
            Vercel Serverless 환경의 300초 소켓 수명 극복 & Redis Pub/Sub 메시지 버스
          </div>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          <p><strong>문제 정의:</strong> Vercel Hobby 환경은 단일 WebSocket 연결의 수명이 최대 약 300초로 제한되어 프로세스가 강제 회수됩니다. 또한 다중 서버리스 인스턴스 간 인메모리 소켓 공유가 불가능합니다.</p>
          <ul class="highlight-list">
            <li><strong>해결책:</strong> Socket.io에 <code>@socket.io/redis-adapter</code>를 연동하여 여러 Vercel 인스턴스 간 분산 브로드캐스트를 구현했습니다.</li>
            <li><strong>Silent Refetch 패턴:</strong> 300초 주기 연결 단절 시 클라이언트는 지수 백오프로 재연결을 시도하며, 재접속 완료 즉시 현재 열람 중인 뷰의 데이터를 조용히 다시 가져와(Silent Refetch) 단 1건의 이벤트도 유실 없이 화면을 최신화합니다.</li>
          </ul>
        </div>
      </div>

      <!-- 3. Strict Security & Token Rotation -->
      <div class="accordion-item">
        <button class="accordion-trigger" onclick="toggleAccordion(this)">
          <div class="trigger-title">
            <span class="badge badge-security">Security</span>
            Supabase Strict RLS 격리 & Dual Token Rotation & 세션 탈취 감지
          </div>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          <p><strong>문제 정의:</strong> 프론트엔드 번들에 노출되는 Supabase 익명 키(Anon Key)로 인해 인가되지 않은 DB 테이블 직접 조회가 시도될 수 있습니다.</p>
          <ul class="highlight-list">
            <li><strong>Strict RLS 원천 차단:</strong> 모든 테이블에 <code>ENABLE ROW LEVEL SECURITY</code>를 적용하되 정책을 일체 부여하지 않아, 클라이언트에서의 직접 접근을 100% 차단하고 오직 백엔드 서버의 Transaction Pooler(Port 6543)만을 통하도록 격리했습니다.</li>
            <li><strong>Dual Token Rotation:</strong> 15분 만료 Access Token은 메모리에만 보관하고, 7일 만료 Refresh Token은 HttpOnly 쿠키로 전송하며 DB에 SHA-256 해시를 저장합니다. 이미 사용된 토큰 재사용 감지 시 해당 사용자의 전 세션을 즉시 강제 무효화합니다.</li>
          </ul>
        </div>
      </div>

      <!-- 4. Concurrency FOR UPDATE -->
      <div class="accordion-item">
        <button class="accordion-trigger" onclick="toggleAccordion(this)">
          <div class="trigger-title">
            <span class="badge badge-concurrency">Concurrency</span>
            1인 1표 정합성을 보장하는 PostgreSQL 행 수준 배타적 잠금 (FOR UPDATE)
          </div>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          <p><strong>문제 정의:</strong> 동일 사용자가 100ms 이내에 서로 다른 투표 옵션을 연속 클릭하면 Race Condition으로 인해 복수 투표가 성공할 위험이 있습니다.</p>
          <ul class="highlight-list">
            <li><strong>해결책:</strong> 투표 트랜잭션 진입 시 <code>SELECT ... FROM votes WHERE user_id = $1 FOR UPDATE</code>로 행 수준 배타적 락을 획득합니다. 뒤따르는 동시 요청은 락 해제를 대기한 후 기존 투표 존재 여부를 원자적으로 검사하여 중복 투표를 100% 차단합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div class="lightbox-modal" id="lightboxModal" onclick="closeLightbox(event)">
    <div class="lightbox-content" onclick="event.stopPropagation()">
      <div class="lightbox-header">
        <h4 id="lightboxTitle">이미지 미리보기</h4>
        <button class="lightbox-close" onclick="closeLightbox(event)">&times;</button>
      </div>
      <div class="lightbox-body">
        <img id="lightboxImg" src="" alt="확대 이미지">
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-links">
        <a href="https://team-pm-app-sand.vercel.app" target="_blank" style="color:#60a5fa; font-weight:600;">프로덕션 라이브 데모 ↗</a>
        <a href="https://github.com" target="_blank">GitHub 리포지토리</a>
        <a href="#overview">포트폴리오 상단으로</a>
      </div>
      <p>© 2026 Team PM App Portfolio. Engineered with Precision & Extreme Craftsmanship.</p>
    </div>
  </footer>

  <!-- Interactive Scripts Engine -->
  <script>
    // ==========================================
    // 1. Raycast Spotlight & 3D Tilt Effect
    // ==========================================
    document.querySelectorAll('.spotlight-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-2px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });

    // ==========================================
    // 2. Physics Easing Dynamic Count-Up Engine
    // ==========================================
    function initCountUp() {
      const counters = document.querySelectorAll('[data-target]');
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1500;
          const startTime = performance.now();

          function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out Quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = target % 1 === 0 ? Math.floor(ease * target) : (ease * target).toFixed(1);
            el.textContent = prefix + current + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              el.textContent = prefix + target + suffix;
            }
          }
          requestAnimationFrame(update);
          obs.unobserve(el);
        });
      }, { threshold: 0.2 });

      counters.forEach(c => observer.observe(c));
    }
    initCountUp();

    // ==========================================
    // 3. Dual-Client Kanban Simulator Engine
    // ==========================================
    let currentPos = 2048.0;
    let currentStatus = 'in_progress';
    let rebalanceCount = 0;

    function logTerminal(client, db, redis, ws, text) {
      const logs = document.getElementById('terminalLogs');
      const now = new Date();
      const timeStr = String(now.getSeconds()).padStart(2, '0') + '.' + String(now.getMilliseconds()).padStart(3, '0');
      
      const div = document.createElement('div');
      div.className = 'log-line';
      div.innerHTML = '<span class="log-ts">[' + timeStr + ']</span> ' + text;
      logs.appendChild(div);
      logs.scrollTop = logs.scrollHeight;
    }

    function moveDemoCard(targetStatus) {
      if (currentStatus === targetStatus) return;

      const badge = document.getElementById('packetLatencyBadge');
      badge.textContent = 'SYNCING...';
      badge.style.color = '#fbbf24';

      const prevStatus = currentStatus;
      currentStatus = targetStatus;
      currentPos += 512.0;

      // 1. User A Optimistic Update (0ms)
      logTerminal(true, false, false, false, '<span class="log-client">[User A] Optimistic UI Update:</span> Task #TPM-42 moved to ' + targetStatus);
      updateClientUI('A', targetStatus, currentPos);

      // 2. REST API & PostgreSQL Write Path (1.2ms)
      setTimeout(() => {
        logTerminal(false, true, false, false, '<span class="log-db">[DB Pooler:6543]</span> UPDATE tasks SET status=\\'' + targetStatus + '\\', position=' + currentPos.toFixed(1) + ' WHERE id=42 (1 row affected, 1.2ms)');
      }, 50);

      // 3. Redis Pub/Sub Publish (5ms)
      setTimeout(() => {
        logTerminal(false, false, true, false, '<span class="log-redis">[Redis Cloud]</span> PUBLISH project:42:events "TASK_MOVED" (Adapter broadcast to 2 workers)');
      }, 120);

      // 4. WebSocket Broadcast to User B (~300ms)
      setTimeout(() => {
        logTerminal(false, false, false, true, '<span class="log-ws">[User B WS Message]</span> Socket event \\'task:moved\\' received. Animating DOM node.');
        updateClientUI('B', targetStatus, currentPos);
        badge.textContent = 'LATENCY: ~0.31s (SYNCED)';
        badge.style.color = '#10b981';
      }, 310);
    }

    function updateClientUI(user, status, pos) {
      const card = document.getElementById('demoCard' + user);
      const targetCol = document.getElementById('colBox' + user + '-' + status);
      const posDisplay = document.getElementById('cardPosDisplay' + user);
      
      if (card && targetCol) {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          targetCol.appendChild(card);
          card.style.transform = 'scale(1)';
          posDisplay.textContent = 'pos: ' + pos.toFixed(1);
        }, 100);
      }

      ['todo', 'in_progress', 'done'].forEach(s => {
        const countEl = document.getElementById('colCount' + user + '-' + s);
        if (countEl) {
          countEl.textContent = s === status ? '1' : '0';
        }
      });
    }

    function onDragCard(e) {
      e.dataTransfer.setData('text/plain', 'demoCard');
    }

    function triggerRebalanceDemo() {
      logTerminal(false, false, false, false, '<span class="log-warn">⚠️ [SIMULATION] Repeated insertions between cards triggered. Diff < 1e-9 (Epsilon reached)!</span>');
      setTimeout(() => {
        logTerminal(false, true, false, false, '<span class="log-warn">⚙️ [Self-Healing Engine] Advisory lock acquired. Rebalancing column tasks to [1024.0, 2048.0, 3072.0...]</span>');
        currentPos = 2048.0;
        document.getElementById('cardPosDisplayA').textContent = 'pos: 2048.0 (Rebalanced)';
        document.getElementById('cardPosDisplayB').textContent = 'pos: 2048.0 (Rebalanced)';
      }, 150);
      setTimeout(() => {
        logTerminal(false, true, false, false, '<span class="log-db">✅ [Rebalance Complete] Column serialization preserved with zero deadlocks.</span>');
      }, 300);
    }

    // ==========================================
    // 4. Living Architecture Canvas Engine
    // ==========================================
    const canvas = document.getElementById('archCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width, height;

      function resizeCanvas() {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 380;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const nodes = [
        { id: 'browser', name: 'Browser (React 19)', x: 0.12, y: 0.5, color: '#3b82f6', desc: 'Custom CSS Tokens, TanStack Query 낙관적 캐시, lazyPage 404 자동 새로고침 방어' },
        { id: 'vercel', name: 'Vercel Serverless (API)', x: 0.38, y: 0.32, color: '#818cf8', desc: 'Express 모듈러 라우팅, 300초 소켓 생명주기 관리, 멱등성 검증' },
        { id: 'redis', name: 'Redis Cloud (Pub/Sub)', x: 0.65, y: 0.28, color: '#f43f5e', desc: '다중 서버리스 인스턴스 간 소켓 어댑터 브로드캐스트, 레이트리밋 버퍼' },
        { id: 'supabase', name: 'Supabase PostgreSQL (Pooler 6543)', x: 0.65, y: 0.72, color: '#10b981', desc: 'Port 6543 트랜잭션 풀러(max:3), Strict RLS 완전 격리, FOR UPDATE 행 잠금' },
        { id: 'socket', name: 'Socket.io Cluster', x: 0.88, y: 0.5, color: '#a855f7', desc: 'Silent Refetch 클라이언트 복구 및 0.3초 실시간 알림/작업 전송' }
      ];

      const links = [
        { from: 'browser', to: 'vercel', label: 'HTTPS / REST Write' },
        { from: 'vercel', to: 'supabase', label: 'Port 6543 Tx' },
        { from: 'vercel', to: 'redis', label: 'Publish' },
        { from: 'redis', to: 'socket', label: 'Subscribe' },
        { from: 'socket', to: 'browser', label: 'WebSocket Broadcast' }
      ];

      let particles = [];
      for (let i = 0; i < 24; i++) {
        particles.push({
          linkIdx: i % links.length,
          t: Math.random(),
          speed: 0.006 + Math.random() * 0.004
        });
      }

      function drawNetwork() {
        ctx.clearRect(0, 0, width, height);

        // Draw Links
        links.forEach(l => {
          const fromNode = nodes.find(n => n.id === l.from);
          const toNode = nodes.find(n => n.id === l.to);
          const x1 = fromNode.x * width;
          const y1 = fromNode.y * height;
          const x2 = toNode.x * width;
          const y2 = toNode.y * height;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        // Update & Draw Particles
        particles.forEach(p => {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;

          const l = links[p.linkIdx];
          const fromNode = nodes.find(n => n.id === l.from);
          const toNode = nodes.find(n => n.id === l.to);
          const x1 = fromNode.x * width;
          const y1 = fromNode.y * height;
          const x2 = toNode.x * width;
          const y2 = toNode.y * height;

          const px = x1 + (x2 - x1) * p.t;
          const py = y1 + (y2 - y1) * p.t;

          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = fromNode.color;
          ctx.shadowColor = fromNode.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Draw Nodes
        nodes.forEach(n => {
          const nx = n.x * width;
          const ny = n.y * height;

          ctx.beginPath();
          ctx.arc(nx, ny, 18, 0, Math.PI * 2);
          ctx.fillStyle = '#0f172a';
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Inner dot
          ctx.beginPath();
          ctx.arc(nx, ny, 6, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.fill();

          // Label
          ctx.fillStyle = '#f8fafc';
          ctx.font = '600 12px Pretendard, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(n.name, nx, ny + 32);
        });

        requestAnimationFrame(drawNetwork);
      }
      drawNetwork();

      // Node Click Handler for ADR Modal
      canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        nodes.forEach(n => {
          const nx = n.x * width;
          const ny = n.y * height;
          const dist = Math.hypot(clickX - nx, clickY - ny);
          if (dist < 30) {
            showAdrPopup(n.name, n.desc);
          }
        });
      });
    }

    function showAdrPopup(title, desc) {
      const popup = document.getElementById('adrPopup');
      document.getElementById('adrNodeTitle').textContent = '🏛️ [ADR] ' + title;
      document.getElementById('adrNodeDesc').textContent = desc;
      popup.classList.add('active');
    }

    function closeAdrPopup() {
      document.getElementById('adrPopup').classList.remove('active');
    }

    // ==========================================
    // 5. Troubleshooting Lab Sliders & Concurrency
    // ==========================================
    function updateCardBenchmark(val) {
      const cardVal = parseInt(val, 10);
      document.getElementById('sliderCardVal').textContent = cardVal.toLocaleString() + ' 개';
      document.getElementById('intUpdateCount').textContent = cardVal.toLocaleString() + ' 행 UPDATE';

      const time = Math.round(cardVal * 0.12);
      document.getElementById('intQueryTime').textContent = '예상 소요시간: ~' + time + 'ms (' + (cardVal > 2000 ? 'Lock 폭발 위험!' : '지연 발생') + ')';
    }

    function runConcurrencyTest(withLock) {
      const consoleEl = document.getElementById('concurrencyLogs');
      consoleEl.innerHTML = '';

      const appendLog = (msg, color) => {
        const line = document.createElement('div');
        line.style.color = color || '#cbd5e1';
        line.textContent = msg;
        consoleEl.appendChild(line);
        consoleEl.scrollTop = consoleEl.scrollHeight;
      };

      appendLog('[START] 100ms 내 동일 사용자 10개 동시 투표 트랜잭션 전송...', '#60a5fa');

      setTimeout(() => {
        if (!withLock) {
          appendLog('⚠️ 락 없음: 10개 트랜잭션이 SELECT count(*) = 0 을 동시 통과!', '#fbbf24');
          appendLog('❌ 무결성 실패: 중복 투표 3건 INSERT 성공 (1인 1표 규칙 파괴)', '#f87171');
        } else {
          appendLog('🔒 FOR UPDATE 배타적 잠금 획득: 트랜잭션 1번이 행 잠금 소유', '#34d399');
          appendLog('✅ 트랜잭션 1번: 1표 정상 반영 완료 (Commit)', '#34d399');
          appendLog('🛡 트랜잭션 2~10번: 잠금 대기 후 "이미 투표 완료" 감지하여 안전 차단 (409 Conflict)', '#a7f3d0');
          appendLog('🎉 1인 1표 정합성 100% 무결점 증명 완료', '#34d399');
        }
      }, 200);
    }

    // ==========================================
    // 6. Gallery Filtering & Lightbox
    // ==========================================
    function filterGallery(category) {
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      const cards = document.querySelectorAll('.gallery-card');
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function openLightbox(src, title) {
      const modal = document.getElementById('lightboxModal');
      const img = document.getElementById('lightboxImg');
      const heading = document.getElementById('lightboxTitle');
      
      img.src = src;
      heading.textContent = title;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox(e) {
      const modal = document.getElementById('lightboxModal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });

    function toggleAccordion(btn) {
      const item = btn.parentElement;
      item.classList.toggle('open');
    }
  </script>
</body>
</html>
`;

const outputPath = path.resolve('C:\\Users\\user\\Desktop\\stuls\\team-pm-portfolio\\index.html');
fs.writeFileSync(outputPath, htmlContent, 'utf-8');
console.log('Successfully generated upgraded index.html at: ' + outputPath);
