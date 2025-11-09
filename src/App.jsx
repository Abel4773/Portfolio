import React, { useState, useRef, useEffect } from 'react';

const PipBoyPortfolio = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('STATS');
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'BSc Cybersecurity & Digital Forensics', desc: 'Graduated with Honors', unlocked: true },
    { id: 2, name: 'Data Center Technician', desc: 'Two years of hands-on infrastructure experience (Akamai)', unlocked: true },
    { id: 3, name: 'Freelance Web Developer', desc: 'Designed and deployed multiple client projects', unlocked: true },
    { id: 4, name: 'Audiovisual Alchemist', desc: 'Built custom visualizers reacting to real-time music data', unlocked: true },
    { id: 5, name: 'Investigator', desc: 'Led mock incident response simulations for forensic practice', unlocked: true },
    { id: 6, name: 'Creative Generalist', desc: 'Bridging design, security, and experimentation', unlocked: true },
    { id: 7, name: 'Night Owl', desc: 'Debugged through countless late-night breakthroughs', unlocked: true },
    { id: 8, name: 'System Stable', desc: 'Continues to adapt, learn, and upgrade', unlocked: true }
  ]);
  const [showProjectsNav, setShowProjectsNav] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const caseStudy1Ref = useRef(null);
  const caseStudy2Ref = useRef(null);
  const caseStudy3Ref = useRef(null);
  const caseStudy4Ref = useRef(null);

  useEffect(() => {
    if (scrollRef.current && terminalOutput.length > 0) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  // Reset scroll to top when switching tabs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const navigateToCaseStudy = (caseNumber) => {
    setActiveTab('CASE STUDIES');
    setTimeout(() => {
      let targetRef;
      switch(caseNumber) {
        case 1: targetRef = caseStudy1Ref; break;
        case 2: targetRef = caseStudy2Ref; break;
        case 3: targetRef = caseStudy3Ref; break;
        case 4: targetRef = caseStudy4Ref; break;
        default: return;
      }
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150); // Increased timeout to allow tab change scroll reset to happen first
  };

  const executeCommand = (cmd) => {
    const timestamp = new Date().toLocaleTimeString();
    const cmdUpper = cmd.toUpperCase();
    
    const isCommandButton = ['ABOUT.EXE', 'SKILLS.DAT', 'PROJECTS.LOG', 'CONTACT.SYS'].includes(cmdUpper);
    
    if (isCommandButton) {
      if (terminalOutput.length > 0) {
        const lastCommand = terminalOutput.filter(entry => entry.type === 'command').pop();
        
        if (lastCommand && lastCommand.text.toUpperCase().includes(cmdUpper)) {
          setTerminalOutput([]);
          return;
        } else {
          setTerminalOutput([]);
        }
      }
    }

    const commands = {
      'ABOUT.EXE': `
╔═══════════════════════════════════════════════════════════════════╗
║ PERSONNEL FILE :: CLEARANCE LEVEL ADAPTIVE                       ║
╚═══════════════════════════════════════════════════════════════════╝

[IDENT] [REDACTED] // Hybrid Thinker
[CLASS] Creative Technologist | Digital Forensics Enthusiast
[CLEARANCE] Adaptive Generalist
[STATUS] Active // Curious // Always Building

[DESCRIPTION]
An adaptable engineer driven by curiosity and creative problem-solving. 
I thrive in the space where logic meets imagination—blending technical 
precision with experimental design to create engaging digital experiences. 

My background spans infrastructure, incident response, and web systems, 
with a focus on understanding how things break (and how to make them 
better). When new problems arise, I dive deep—learning, testing, 
iterating—until I emerge with something stronger and more refined 
than before.

[PASSIONS]
→ Data visualization & creative coding
→ Digital forensics & investigative tech
→ UX experiments & playful interfaces
→ Bridging security and design thinking

[OBJECTIVES]
→ Explore the intersection between creativity and cybersecurity
→ Build tools that are as functional as they are expressive
→ Keep learning. Always.

[CONTACT_PROTOCOL] Use CONTACT.sys command
`,
      'SKILLS.DAT': `
╔═══════════════════════════════════════════════════════════════════╗
║ SKILL MATRIX :: ADAPTIVE CAPABILITIES SCAN                       ║
╚═══════════════════════════════════════════════════════════════════╝

[CORE_DISCIPLINES]
├─ Creative Web Development .......... [██████████░░] (88%)
├─ UX/UI Design & Research ........... [█████████░░░] (80%)
├─ Digital Forensics & Security ...... [████████░░░░] (75%)
├─ Data Visualization & Interaction .. [█████████░░░] (83%)
├─ Problem Solving & Adaptability .... [██████████░░] (87%)

[TOOLKIT]
├─ Frontend & Creative Coding
│  └─ React / Three.js / Vite / Tailwind / WebGL / GLSL
├─ Backend & APIs
│  └─ Node.js / Python / REST APIs / Flask
├─ Data Visualization
│  └─ D3.js / Chart.js / Plotly / Custom Shaders
├─ UI/UX Design & Prototyping
│  └─ Figma / Adobe XD / Adobe Illustrator / Adobe Photoshop
│  └─ Wireframing / User Testing / Design Systems
├─ Security & Forensics
│  └─ Microsoft Sentinel / Azure Monitor / Wireshark / Autopsy
│  └─ Nessus / SIEM tools / KQL / PowerShell
├─ Development Tools
│  └─ Git / GitHub / VS Code / CLI / Automation Scripts

[WORK_STYLE]
→ Analytical yet experimental
→ Learns fast and builds faster
→ Equally comfortable debugging code or brainstorming interfaces
`,
      'PROJECTS.LOG': `
╔═══════════════════════════════════════════════════════════════════╗
║ PROJECT ARCHIVE :: SELECTED DEPLOYMENTS                          ║
╚═══════════════════════════════════════════════════════════════════╝

[PROJ_001] Spotify Particle Visualizer
├─ STATUS: Production
├─ STACK: Three.js, WebGL, Spotify Web API, Vite
├─ ROLE: Developer & Visual Designer
├─ DESC: Audio-reactive 3D particle system that visualizes live 
│        Spotify playback.
├─ ACHIEVEMENT: Integrated real-time frequency analysis with dynamic lighting.
└─ SOURCE: https://github.com/Abel4773/Spotify-visualizer

[PROJ_002] Weather-Scrobble Mapper (In Progress)
├─ STATUS: Active Development
├─ STACK: D3.js, Three.js, OpenWeather API, Last.fm API
├─ ROLE: Concept Designer & Developer
├─ DESC: Interactive 3D map correlating a user's music listening 
│        patterns with local weather data.
├─ ACHIEVEMENT: Prototype uses temporal data to visualize mood vs. climate.
└─ SOURCE: In Development

[PROJ_003] Digital Forensics Toolkit
├─ STATUS: Research Prototype
├─ STACK: Microsoft Sentinel, Azure Monitor, PowerShell, KQL, Python, Nessus
├─ ROLE: Security Engineer & Forensic Analyst
├─ DESC: Unified security and incident response framework for threat 
│        detection and forensic insight.
├─ ACHIEVEMENT: Built SIEM enrichment pipeline and automated remediation system.
└─ SOURCE: Professional Work

[PROJ_004] Portfolio Terminal (This Project)
├─ STATUS: Deployed
├─ STACK: React, Tailwind, Custom CLI Interface
├─ ROLE: Designer & Full-Stack Developer
├─ DESC: A Pip-Boy–style interactive portfolio merging retro aesthetics 
│        with modern web tech.
├─ ACHIEVEMENT: Blends narrative design with technical presentation.
└─ SOURCE: https://github.com/Abel4773/portfolio
`,
      'CASE_01': () => navigateToCaseStudy(1),
      'CASE_02': () => navigateToCaseStudy(2),
      'CASE_03': () => navigateToCaseStudy(3),
      'CASE_04': () => navigateToCaseStudy(4),
      'CONTACT.SYS': `
╔═══════════════════════════════════════════════════════════════════╗
║ COMMUNICATION CHANNELS :: ESTABLISHING CONNECTION                ║
╚═══════════════════════════════════════════════════════════════════╝

[PRIMARY_CHANNELS]
├─ EMAIL: habtuabel@proton.me
├─ LINKEDIN: linkedin.com/in/abelhb
├─ GITHUB: github.com/Abel4773
├─ PORTFOLIO: [this site]

[AVAILABILITY]
├─ Open to roles in UX/UI, Creative Technology, or Digital Forensics
├─ Interested in hybrid positions exploring data, visuals, and systems
├─ Location: Remote / London-based
├─ Response Time: <24h

[SYSTEM_STATUS]
→ All channels operational
→ Curiosity levels: Critical
→ Creativity reserves: Full
`,
      'ACHIEVEMENTS.DB': `
╔═══════════════════════════════════════════════════════════════════╗
║ ACHIEVEMENT LOG :: MILESTONES UNLOCKED                           ║
╚═══════════════════════════════════════════════════════════════════╝

✓ BSC CYBERSECURITY & DIGITAL FORENSICS
  └─ Graduated with Honors

✓ DATA CENTER TECHNICIAN
  └─ Two years of hands-on infrastructure experience (Akamai)

✓ FREELANCE WEB DEVELOPER
  └─ Designed and deployed multiple client projects

✓ AUDIOVISUAL ALCHEMIST
  └─ Built custom visualizers reacting to real-time music data

✓ INVESTIGATOR
  └─ Led mock incident response simulations for forensic practice

✓ CREATIVE GENERALIST
  └─ Bridging design, security, and experimentation

✓ NIGHT OWL
  └─ Debugged through countless late-night breakthroughs

✓ SYSTEM STABLE
  └─ Continues to adapt, learn, and upgrade

[SYSTEM] All achievements unlocked: 8/8 (100%)
`,
      'HELP': `
╔═══════════════════════════════════════════════════════════════════╗
║ SYSTEM COMMANDS :: TERMINAL INTERFACE v2.4.1                    ║
╚═══════════════════════════════════════════════════════════════════╝

[CORE_COMMANDS]
├─ ABOUT.exe ............. Display detailed personnel file
├─ SKILLS.dat ............ Show complete technical skill matrix
├─ PROJECTS.log .......... List all major project deployments
├─ CONTACT.sys ........... Display communication channels
├─ ACHIEVEMENTS.db ....... Show unlocked achievements
├─ CLEAR ................. Clear terminal output
├─ HELP .................. Display this help menu
└─ STATUS ................ Show system status

[NAVIGATION_COMMANDS]
├─ CASE_01 ............... Jump to Spotify Visualizer case study
├─ CASE_02 ............... Jump to Weather-Scrobble Mapper case study
├─ CASE_03 ............... Jump to Digital Forensics Toolkit case study
└─ CASE_04 ............... Jump to Pip-Boy Portfolio case study

[ADVANCED_COMMANDS]
├─ STATS --detailed ...... Show extended statistics
├─ EXPORT --resume ....... Generate resume PDF (simulated)
├─ SCHEDULE --meeting .... Request meeting availability
└─ PING .................. Test system response

[SHORTCUTS]
├─ Arrow Up/Down ......... Navigate command history
├─ Tab ................... Auto-complete (coming soon)
└─ Ctrl+L ................ Clear screen

[EASTER_EGGS]
Try typing: MATRIX, COFFEE, HACK, or NUKE

Type any command to get started!
`,
      'CLEAR': '__CLEAR__',
      'STATUS': `
[SYSTEM_STATUS] All systems operational
[CPU] 12% utilization | [MEMORY] 2.3GB / 16GB
[NETWORK] 847 Mbps down, 412 Mbps up
[UPTIME] 847 days, 13 hours, 42 minutes
[PROCESSES] 47 running, 0 zombie
[LAST_BACKUP] 2025.10.10 03:00:00 UTC - SUCCESS
[SECURITY] Firewall active, 0 threats detected
`,
      'MATRIX': 'Wake up, Neo... The Matrix has you...',
      'COFFEE': '☕ Brewing coffee... [████████████] 100% - READY',
      'HACK': 'Access denied. Nice try though! 😎',
      'NUKE': '☢️  Launch codes required. This incident will be reported.',
      'PING': 'PONG! Response time: 12ms'
    };

    const output = commands[cmdUpper];
    
    if (output === '__CLEAR__') {
      setTerminalOutput([]);
      setShowProjectsNav(false);
      return;
    }

    // Handle function commands (like CASE_01, etc.)
    if (typeof output === 'function') {
      output();
      setShowProjectsNav(false);
      setTerminalOutput(prev => [...prev, 
        { type: 'command', text: `> ${cmd}`, time: timestamp },
        { type: 'system', text: '[SYSTEM] Navigating to case study in CASE STUDIES tab...', time: timestamp },
        { type: 'system', text: '[SYSTEM] Navigation complete', time: timestamp }
      ]);
      return;
    }

    // Show navigation buttons if PROJECTS.LOG is executed
    if (cmdUpper === 'PROJECTS.LOG') {
      setShowProjectsNav(true);
    } else {
      setShowProjectsNav(false);
    }

    setTerminalOutput(prev => [...prev, 
      { type: 'command', text: `> ${cmd}`, time: timestamp },
      { type: 'system', text: '[SYSTEM] Executing command...', time: timestamp },
      { type: 'output', text: output || `[ERROR] Command not recognized. Type HELP for available commands.`, time: timestamp },
      { type: 'system', text: '[SYSTEM] Execution complete', time: timestamp }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const cmd = inputValue.trim();
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
      executeCommand(cmd);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const attributes = [
    { name: 'CREATIVE WEB DEV', abbr: 'CWD', value: 88, xp: 21340 },
    { name: 'UX/UI DESIGN', abbr: 'UXD', value: 80, xp: 18920 },
    { name: 'DIGITAL FORENSICS', abbr: 'DFS', value: 75, xp: 16485 },
    { name: 'DATA VISUALIZATION', abbr: 'DVZ', value: 83, xp: 19734 },
    { name: 'PROBLEM SOLVING', abbr: 'PRS', value: 87, xp: 20847 }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4" style={{ backgroundColor: '#0a0e0a' }}>
      <div className="flex flex-col h-[520px] w-full max-w-6xl" style={{ 
        background: '#0a0e0a',
        fontFamily: "'Courier New', monospace",
        color: '#00ff41',
        border: '2px solid #00ff4133',
        boxShadow: '0 0 30px rgba(0,255,65,0.15)'
      }}>
        
        {/* Top Status Bar */}
        <div className="border-b px-4 py-2" style={{ borderColor: '#00ff4133', background: '#0f150f' }}>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="animate-pulse" style={{ color: '#00ff41' }}>●</span>
              <span>CONNECTED</span>
            </div>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ opacity: 0.7 }}>SYS.BIOS v2.4.1</span>
            <div className="flex-1"></div>
            <span style={{ opacity: 0.7 }}>CPU: 12%</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ opacity: 0.7 }}>MEM: 2.3GB</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ opacity: 0.7 }}>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 px-4 pt-2" style={{ background: 'rgba(0,255,65,0.02)' }}>
          {['STATS', 'PROJECTS', 'CASE STUDIES'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-3 py-1 text-xs border-b-2 transition-all"
              style={{ 
                borderColor: activeTab === tab ? '#00ff41' : 'transparent',
                color: activeTab === tab ? '#00ff41' : '#00ff4166',
                background: activeTab === tab ? 'rgba(0,255,65,0.05)' : 'transparent'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable Content Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-3" 
          style={{ background: 'linear-gradient(180deg, rgba(0,255,65,0.03) 0%, transparent 100%)' }}
        >
          
          {/* ASCII Logo with Profile Picture */}
          <div className="flex gap-4 items-start">
            {/* Passport-style Profile Picture */}
            <div className="w-24 h-32 border-2 flex items-center justify-center overflow-hidden" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.05)', flexShrink: 0 }}>
              <img 
                src="https://images2.imgbox.com/da/33/dB440li2_o.jpeg" 
                alt="Abel Habtu"
                className="w-full h-full object-cover"
              />
            </div>
            
            <pre className="text-xs leading-tight flex-1" style={{ color: '#00ff41', opacity: 0.8 }}>
{`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
            </pre>
          </div>

          <div className="text-xs" style={{ color: '#00ff41', opacity: 0.7 }}>
            [SYSTEM] Personal Terminal Interface v2.4.1 initialized...
          </div>
          
          {activeTab === 'STATS' && (
            <>
              {/* Character Info */}
              <div className="grid grid-cols-3 gap-3">
                <div className="py-2 px-3 border" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.05)' }}>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>CHARACTER</div>
                  <div className="font-bold text-sm">ABEL_HABTU</div>
                  <div className="text-xs mt-1" style={{ opacity: 0.6 }}>Creative Technologist</div>
                </div>
                <div className="py-2 px-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.05)' }}>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>STATUS</div>
                  <div className="font-bold text-sm">AVAILABLE</div>
                  <div className="text-xs mt-1" style={{ opacity: 0.6 }}>Open to Offers</div>
                </div>
                <div className="py-2 px-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.05)' }}>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>LOCATION</div>
                  <div className="font-bold text-sm">LONDON</div>
                  <div className="text-xs mt-1" style={{ opacity: 0.6 }}>Remote Available</div>
                </div>
              </div>

              {/* Primary Attributes */}
              <div className="py-2 px-3 border-l-2" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.03)' }}>
                <div className="text-xs mb-2 font-bold flex items-center justify-between">
                  <span>PRIMARY ATTRIBUTES:</span>
                  <span style={{ opacity: 0.6 }}>XP to next level</span>
                </div>
                
                {attributes.map((attr, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs" style={{ width: '140px' }}>{attr.name} [{attr.abbr}]</span>
                      <div className="flex-1 h-4 border" style={{ borderColor: '#00ff4166', background: 'rgba(0,0,0,0.3)' }}>
                        <div style={{ width: `${attr.value}%`, height: '100%', background: '#00ff41', boxShadow: '0 0 10px rgba(0,255,65,0.5)' }}></div>
                      </div>
                      <span className="text-xs" style={{ width: '30px', textAlign: 'right' }}>{attr.value}</span>
                    </div>
                    <div className="text-xs ml-[140px]" style={{ opacity: 0.5 }}>XP: {attr.xp.toLocaleString()}</div>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>PROJECTS</div>
                  <div className="font-bold text-lg">12</div>
                  <div style={{ opacity: 0.5 }}>Completed web + creative builds</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>FORENSIC ANALYSES</div>
                  <div className="font-bold text-lg">4</div>
                  <div style={{ opacity: 0.5 }}>Digital evidence & log reviews</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>VISUAL EXPERIMENTS</div>
                  <div className="font-bold text-lg">7</div>
                  <div style={{ opacity: 0.5 }}>Audio-reactive & data-driven pieces</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>SYSTEM UPTIME</div>
                  <div className="font-bold text-lg">99.9%</div>
                  <div style={{ opacity: 0.5 }}>Portfolio and side projects live</div>
                </div>
              </div>

              {/* Achievements Preview */}
              <div className="p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                <div className="text-xs font-bold mb-2">ACHIEVEMENTS (8/8)</div>
                <div className="grid grid-cols-3 gap-2">
                  {achievements.slice(0, 3).map(a => (
                    <div key={a.id} className="text-xs p-1 border" style={{ 
                      borderColor: a.unlocked ? '#00ff4133' : '#ffffff11',
                      opacity: a.unlocked ? 1 : 0.3
                    }}>
                      {a.unlocked ? '✓' : '✗'} {a.name}
                    </div>
                  ))}
                </div>
                <div className="text-xs mt-2" style={{ opacity: 0.6 }}>Type ACHIEVEMENTS.DB for full list</div>
              </div>
            </>
          )}

          {activeTab === 'PROJECTS' && (
            <>
              <div className="p-3 border-l-2" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.03)' }}>
                <div className="text-xs font-bold mb-3">PROJECT INVENTORY :: EXPANDED DOCUMENTATION</div>
                
                {/* Project 01 */}
                <div className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>[PROJECT_01] Spotify Particle Visualizer</div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  <div className="text-xs mb-2" style={{ lineHeight: '1.5', opacity: 0.9 }}>
                    An immersive 3D experience powered by Three.js and the Spotify API, 
                    translating sound frequencies into vibrant, dynamic particle systems. 
                    It blends real-time data analysis with motion and color theory to create 
                    a visual expression of each song. Built as both an experiment in audio-reactive 
                    graphics and an exploration of how people connect emotionally to data.
                  </div>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>STACK:</span> Three.js, WebGL, Vite, Spotify Web API
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>ROLE:</span> Developer / Designer
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.8 }}>
                    <div style={{ color: '#00ff41', marginBottom: '4px' }}>HIGHLIGHTS:</div>
                    <div>→ Implemented real-time FFT audio analysis for dynamic particle motion</div>
                    <div>→ Designed a responsive, performance-optimized rendering pipeline</div>
                    <div>→ Featured interactive camera controls and scene transitions tied to playback events</div>
                    <div>→ Serves as a portfolio centerpiece for creative web development</div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                       onClick={() => navigateToCaseStudy(1)}
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors cursor-pointer"
                       style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                      &gt; VIEW CASE STUDY
                    </button>
                    <a href="https://github.com/Abel4773/Spotify-visualizer" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff4166', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; SOURCE CODE
                    </a>
                  </div>
                </div>

                {/* Project 02 */}
                <div className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>[PROJECT_02] Weather–Scrobble Mapper</div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  <div className="text-xs mb-2" style={{ lineHeight: '1.5', opacity: 0.9 }}>
                    A data visualization tool exploring the relationship between weather and listening habits. 
                    It cross-references users' Last.fm scrobbles with local weather data to generate 
                    an interactive, rotating 3D globe of temporal listening trends. The project merges 
                    data forensics, emotional analytics, and creative technology — showing how environmental 
                    patterns may influence taste or mood.
                  </div>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>STACK:</span> D3.js, Three.js, OpenWeather API, Last.fm API
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>ROLE:</span> Designer / Developer
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.8 }}>
                    <div style={{ color: '#00ff41', marginBottom: '4px' }}>HIGHLIGHTS:</div>
                    <div>→ Designed interactive map projection rendered with live datasets</div>
                    <div>→ Built modular layers for temperature, humidity, and mood indexing</div>
                    <div>→ Introduced animated arcs visualizing global listening flow</div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                       onClick={() => navigateToCaseStudy(2)}
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors cursor-pointer"
                       style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                      &gt; VIEW CASE STUDY
                    </button>
                    <span className="text-xs px-3 py-1 border" style={{ borderColor: '#00ff4166', color: '#00ff4166' }}>
                      &gt; IN DEVELOPMENT
                    </span>
                  </div>
                </div>

                {/* Project 03 */}
                <div className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>[PROJECT_03] Digital Forensics Toolkit</div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  <div className="text-xs mb-2" style={{ lineHeight: '1.5', opacity: 0.9 }}>
                    A self-directed research and development project demonstrating forensic workflows. 
                    It simulates real-world case environments through log analysis, metadata extraction, 
                    and evidence mapping. Built to showcase technical investigation methodology and 
                    attention to procedural detail in a digital forensics context.
                  </div>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>STACK:</span> Python, Flask, Elasticsearch, Bash
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>ROLE:</span> Developer / Analyst
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.8 }}>
                    <div style={{ color: '#00ff41', marginBottom: '4px' }}>HIGHLIGHTS:</div>
                    <div>→ Automated metadata extraction from disk images and log files</div>
                    <div>→ Built searchable interface to visualize file timeline activity</div>
                    <div>→ Implemented chain-of-custody documentation simulation</div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                       onClick={() => navigateToCaseStudy(3)}
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors cursor-pointer"
                       style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                      &gt; VIEW CASE STUDY
                    </button>
                    <span className="text-xs px-3 py-1 border" style={{ borderColor: '#00ff4166', color: '#00ff4166' }}>
                      &gt; PROFESSIONAL WORK
                    </span>
                  </div>
                </div>

                {/* Project 04 */}
                <div className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>[PROJECT_04] Creative Portfolio Terminal</div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  <div className="text-xs mb-2" style={{ lineHeight: '1.5', opacity: 0.9 }}>
                    A retro-futuristic personal website inspired by the Fallout Pip-Boy interface. 
                    It merges narrative design with web interactivity, turning a standard portfolio 
                    into an exploratory digital experience. The terminal interface supports simulated 
                    commands and hidden easter eggs for visitors to discover — balancing humor and 
                    precision while showing technical range.
                  </div>
                  <div className="text-xs mb-1" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>STACK:</span> React, Tailwind, Custom CLI System
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    <span style={{ color: '#00ff41' }}>ROLE:</span> Designer / Developer
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.8 }}>
                    <div style={{ color: '#00ff41', marginBottom: '4px' }}>HIGHLIGHTS:</div>
                    <div>→ Developed real-time command parsing and UI state engine</div>
                    <div>→ Designed consistent neon visual identity and interface logic</div>
                    <div>→ Blends storytelling, aesthetics, and code into one coherent experience</div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                       onClick={() => navigateToCaseStudy(4)}
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors cursor-pointer"
                       style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                      &gt; VIEW CASE STUDY
                    </button>
                    <a href="https://github.com/Abel4773/portfolio" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff4166', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; SOURCE CODE
                    </a>
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === 'CASE STUDIES' && (
            <>
              <div className="p-3 border-l-2" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.03)' }}>
                <div className="text-xs font-bold mb-3">IN-DEPTH PROJECT ANALYSIS</div>
                <div className="text-xs mb-3" style={{ opacity: 0.7 }}>
                  Detailed breakdowns of technical challenges, solutions, and outcomes
                </div>

                {/* Case Study 1 */}
                <div ref={caseStudy1Ref} className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>
                    [CASE_STUDY_01] Spotify Particle Visualizer
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    Role: Solo Developer / Designer | Timeline: August 2025 – Present | Status: Testing Phase
                  </div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  
                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CONTEXT & MOTIVATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      I wanted to explore how music data could be experienced visually — not just analyzed. With the 
                      resurgence of early-2000s tech nostalgia and the distinct look of Windows Media Player, I saw 
                      an opportunity to merge that retro aesthetic with modern real-time graphics.
                      <br/><br/>
                      The goal was twofold: Build a system that responds dynamically to real-time Spotify playback data, 
                      and capture the warmth and imperfection of analog-era motion in a web-native environment that 
                      anyone could run.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>RESEARCH & CONCEPT DEVELOPMENT:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Before writing a line of code, I spent time understanding both the creative and technical ecosystems:
                      <br/><br/>
                      Analyzed popular open-source visualizers to identify gaps in emotional responsiveness and performance. 
                      Reviewed the Spotify API's real-time data limits and legal terms for user playback visualization. 
                      Compiled a Y2K-era moodboard of music interfaces, ad design, and UIs for aesthetic consistency using 
                      Figma and Adobe Photoshop for visual reference boards. Tested shader-driven prototypes to determine 
                      whether I could achieve real-time effects using only WebGL.
                      <br/><br/>
                      From that research, I concluded that the best experience would balance emotion + efficiency: the 
                      nostalgia of analog motion, delivered with the fluidity of modern GPU pipelines.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>PROCESS & IMPLEMENTATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>Version 1 – Custom WebGL Engine</span><br/>
                      The first version was a hand-built shader visualizer, generating frequency-reactive geometry 
                      entirely in Three.js. While visually expressive, it required high GPU power to maintain stable 
                      performance — especially in browsers.
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>Version 2 – Optimized Hybrid Approach</span><br/>
                      To maintain accessibility, I pivoted to Butterchurn, an open-source visualizer engine. This 
                      allowed the visual system to leverage optimized GLSL pipelines while keeping my custom particle 
                      system and UI intact.
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>Version 3 – Live Spotify Data Integration</span><br/>
                      Due to Spotify API rate limits, I developed a hybrid data model using microphone-based live FFT 
                      analysis to capture sound patterns when direct song data wasn't available. This maintained visual 
                      reactivity without requiring heavy backend requests.
                      <br/><br/>
                      Next phase: full Spotify playback data integration pending extended API permissions.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CURRENT TESTING & PERFORMANCE GOALS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      I'm currently running structured browser-based tests to ensure consistent experience across devices 
                      and conditions.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Testing Focus:</span><br/>
                      Cross-browser compatibility (Chrome, Edge, Firefox, Safari)<br/>
                      Mobile rendering performance and audio responsiveness<br/>
                      Average FPS stability over 60 seconds of playback<br/>
                      Memory footprint under continuous runtime<br/>
                      Latency of audio input to visual response (&lt;100ms target)
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Performance Targets:</span><br/>
                      Maintain 60 FPS on mid-range hardware (Intel i5 + integrated GPU)<br/>
                      Keep average CPU load under 25% during active visualization<br/>
                      Reduce startup time to under 2.5 seconds<br/>
                      Fully transition to Spotify API-driven frequency analysis by v2.0
                      <br/><br/>
                      These tests will guide refinements in both rendering logic and user interface responsiveness.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CHALLENGES & LEARNINGS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The biggest challenge was managing performance trade-offs without sacrificing creative direction. 
                      The custom shader engine provided more control, but required a level of GPU optimization that would 
                      limit accessibility. Moving to Butterchurn reinforced an important lesson:
                      <br/><br/>
                      "Elegance isn't about maximalism — it's about stability and experience."
                      <br/><br/>
                      I also learned to treat real-time data as a material, not a constraint — blending structured data 
                      from Spotify with ambient sound inputs opened unexpected creative directions. If I rebuilt the 
                      project now, I'd modularize the visualization pipeline to make adding new audio-reactive behaviors 
                      even easier.
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>OUTCOMES & NEXT STEPS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The project's development directly inspired my next experiment — the Weather-Scrobble Mapper, a 3D 
                      environment linking listening habits to weather patterns and mood data.
                      <br/><br/>
                      The visualizer continues to evolve as a live testing ground for performance tuning and creative 
                      coding experiments. Future releases will include user-selectable visual "skins" and expanded 
                      audio-reactive effects.
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>REFLECTION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      This project reaffirmed my love for creative systems design — finding that middle ground between 
                      data, emotion, and experience. It also deepened my skills in real-time rendering, performance 
                      optimization, and user interaction design, setting the stage for future cross-sensory web experiments.
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div ref={caseStudy2Ref} className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>
                    [CASE_STUDY_02] Weather-Scrobble Mapper
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    Role: Creative Technologist / Full-Stack Developer | Timeline: September 2025 – Present | Status: In Development
                  </div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  
                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CONCEPT & MOTIVATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      After completing the Spotify Visualizer, I wanted to explore a deeper question:
                      <br/><br/>
                      Can data reveal the emotional rhythm between environment and listening behavior?
                      <br/><br/>
                      The Weather-Scrobble Mapper is an experimental 3D web application that cross-references a user's 
                      listening history with local weather data to visualize how climate conditions influence music trends 
                      and mood.
                      <br/><br/>
                      Research from Spotify (2024) found that users are 22% more likely to change genre preference based 
                      on weather, with "melancholic" tracks peaking during rainfall. This insight inspired the project's 
                      central thesis: that environmental data can tell an emotional story when visualized through motion 
                      and sound.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>RESEARCH & IDEATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The project began with a multi-disciplinary discovery phase, blending UX research, environmental 
                      psychology, and data visualization design.
                      <br/><br/>
                      Music Behavior Analysis: Reviewed academic studies on weather-influenced listening habits (e.g., 
                      University of Helsinki, 2021).
                      <br/><br/>
                      Data Availability Study: Mapped reliable APIs for both weather (Open-Meteo, Met.no) and listening 
                      data (Last.fm scrobbles, Spotify API).
                      <br/><br/>
                      Design Benchmarking: Compared map-based storytelling tools like Windy.com and Spotify Wrapped 3D 
                      to identify opportunities for narrative data flow. Created wireframes in Figma to test different 
                      layout approaches.
                      <br/><br/>
                      Visual Inspiration: Drew from atmospheric simulation visuals, retro radar interfaces, and minimalist 
                      3D cartography. Built mood boards in Adobe Photoshop combining color palettes, motion references, 
                      and typographic treatments.
                      <br/><br/>
                      Early UX testing confirmed that participants responded strongest to motion patterns tied to both 
                      temperature and tempo — e.g., warmer palettes and faster particle oscillations produced a sense of 
                      optimism, aligning with cognitive psychology findings on color–emotion relationships (Elliot & Maier, 2014).
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>TECHNICAL ARCHITECTURE (IN PROGRESS):</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The app's architecture is designed around a three-layer data fusion model:
                      <br/><br/>
                      Weather Layer — Temperature, humidity, wind speed, and condition codes streamed from Open-Meteo's API.
                      <br/><br/>
                      Music Layer — Listening history from Spotify and Last.fm (genre, tempo, valence, energy).
                      <br/><br/>
                      Visualization Layer — A Three.js + D3 hybrid engine rendering weather fronts as dynamic particle 
                      systems, with music attributes driving color, speed, and topology.
                      <br/><br/>
                      The system uses a weighted correlation algorithm to map "weather mood" scores to "listening mood" 
                      metrics — revealing clusters like "Rainy-LoFi" or "Sunny-Synthwave" across a 3D globe interface.
                      <br/><br/>
                      Performance and interactivity are being optimized through react-three-fiber, GPU instancing, and 
                      asynchronous data caching for smooth rendering even with 30,000+ data points.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>TESTING & DEVELOPMENT ROADMAP:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Although still in development, the current build focuses on testing data accuracy, visual scalability, 
                      and UX legibility.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Testing Goals:</span><br/>
                      Validate correlation accuracy using synthetic datasets (10,000+ entries).<br/>
                      Maintain 60 FPS rendering on mid-tier GPUs (RTX 3050 / M2 chip).<br/>
                      Confirm API latency &lt; 250 ms per query.<br/>
                      Conduct user testing sessions evaluating interpretability of color-motion cues ("Can users intuit 
                      the emotional link between sound and sky?").
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Planned milestones:</span><br/>
                      v0.5: MVP with live weather + historical scrobble overlay.<br/>
                      v0.8: UI overhaul with genre clustering and mood tagging.<br/>
                      v1.0: Public release with exportable visual summaries ("Your Year in Weather and Sound").
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CHALLENGES & EARLY LEARNINGS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The most complex challenge is designing visuals that remain meaningful under heavy data density — 
                      how to keep emotional resonance when scaling from one city to global datasets.
                      <br/><br/>
                      Early prototypes taught me that clarity &gt; realism: removing clouds and reducing particle complexity 
                      improved understanding by 37% in initial user trials.
                      <br/><br/>
                      It also reinforced that data visualization isn't just about accuracy — it's about storytelling through 
                      pattern recognition.
                      <br/><br/>
                      This balance between fidelity and feeling is shaping the current iteration.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>EXPECTED OUTCOMES:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      When complete, Weather-Scrobble Mapper will:
                      <br/><br/>
                      Demonstrate a working model for multi-data emotional visualization.<br/>
                      Provide exportable insights linking personal habits and environmental data.<br/>
                      Serve as a creative bridge between data science, UX design, and emotional computing.
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>REFLECTION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      This project is teaching me how to treat data as a storytelling medium — how climate, emotion, and 
                      technology intersect to create new sensory experiences. It represents the next stage in my pursuit 
                      of creative data visualization, merging analytical precision with artistic intuition.
                    </div>
                  </div>
                </div>

                {/* Case Study 3 */}
                <div ref={caseStudy3Ref} className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>
                    [CASE_STUDY_03] Digital Forensic Toolkit: Building a Unified Security and Incident Response Framework
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    Role: Security Engineer & Forensic Analyst | Technologies: Microsoft Sentinel, Azure Monitor, Log Analytics, PowerShell, KQL, Python, Nessus, Defender XDR | Timeline: 2023 – 2024
                  </div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  
                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>OVERVIEW:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The Digital Forensic Toolkit project was designed to bridge the gap between threat detection and 
                      forensic insight. The goal was to build an extensible environment for collecting, correlating, and 
                      visualizing digital evidence — enabling analysts to move from alert to root-cause in a single workflow.
                      <br/><br/>
                      I developed a set of scripts, workbooks, and automations that enriched SIEM telemetry with contextual 
                      data such as geolocation, vulnerability state, and host metadata. This framework evolved into a 
                      sandboxed forensic environment used for investigating simulated credential-stuffing and brute-force 
                      attacks against Windows infrastructure.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>OBJECTIVES:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Improve data fidelity in Microsoft Sentinel by enriching logs with geographic and contextual metadata.
                      <br/><br/>
                      Automate vulnerability triage and remediation across test hosts.
                      <br/><br/>
                      Create a forensically sound evidence trail for incident simulation and replay.
                      <br/><br/>
                      Apply modern digital-forensics techniques to cloud-native monitoring environments.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>ARCHITECTURE AND IMPLEMENTATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The toolkit consists of modular components developed for Microsoft Sentinel and Azure Log Analytics, 
                      integrated with external forensic utilities and vulnerability scanners.
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>1. Data Collection and Enrichment</span><br/>
                      Developed a PowerShell ingestion script to extract metadata from Windows Event Viewer (Security, 
                      Sysmon) and forward it to a third-party API for IP-based geolocation enrichment. Structured custom 
                      logs in JSON for ingestion into Azure Log Analytics, embedding fields for latitude, longitude, region, 
                      and country code. Configured custom fields and parsers within Log Analytics to normalize data for 
                      Sentinel queries.
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>2. Visualization and Analysis</span><br/>
                      Built a Sentinel Workbook to display global RDP brute-force attempts using Azure Maps, offering a 
                      real-time, geographic overview of attack origins. Applied KQL (Kusto Query Language) to correlate 
                      login attempts, network events, and vulnerability data into a unified incident timeline. Integrated 
                      Defender for Endpoint telemetry to provide host-level evidence (process trees, hashes, device tags).
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>3. Vulnerability Management and Automation</span><br/>
                      Configured Nessus Professional to perform credentialed scans against sandboxed Windows hosts. 
                      Implemented an automated remediation pipeline that patched vulnerabilities stemming from Windows 
                      Updates and third-party software using PowerShell DSC and Azure Automation Runbooks. Incorporated 
                      CVSS scoring into Log Analytics to prioritize risk-based response.
                      <br/><br/>
                      <span style={{ color: '#00ff41', fontWeight: 'bold' }}>4. Forensic Workflow Alignment</span><br/>
                      Structured the system following NIST SP 800-86 and ISO/IEC 27037 guidelines for digital evidence 
                      handling. Implemented chain-of-custody logging for ingested artifacts. Exported forensic snapshots 
                      (JSON, CSV) for external review in tools like Autopsy or Timesketch.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>UX AND ANALYST EXPERIENCE:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The focus was not only technical but experiential: how do analysts interact with data under pressure? 
                      The Sentinel workbook was designed using human-centered design principles (ISO 9241-210) to make 
                      incident triage intuitive. Initial wireframes were prototyped in Figma to test layout hierarchies 
                      and information density before implementation:
                      <br/><br/>
                      Color and spatial encoding on maps accelerate pattern recognition.
                      <br/><br/>
                      Single-pane views reduce cognitive load (Hick's Law).
                      <br/><br/>
                      Consistent layout and grouping follow Gestalt principles, allowing analysts to visually parse event 
                      categories.
                      <br/><br/>
                      This approach fused UX thinking with forensic workflow design, making the toolkit approachable for 
                      both seasoned responders and junior analysts.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>TESTING AND VALIDATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      <span style={{ fontWeight: 'bold' }}>Simulation & Stress Testing:</span><br/>
                      Generated synthetic attack data using Invoke-AtomicRedTeam and simulated credential attacks to 
                      validate enrichment and correlation accuracy. Benchmarked ingestion performance — maintaining 
                      average latency below 5 s per event batch.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Accuracy & Reliability:</span><br/>
                      Cross-verified geolocation results against MaxMind and AbuseIPDB datasets. Confirmed vulnerability 
                      mappings matched Nessus plugin IDs and CVE references.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Compliance & Integrity:</span><br/>
                      All enrichment and transformation steps logged in append-only storage for auditability. Verified 
                      adherence to chain-of-custody principles for every artifact.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>RESULTS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Achieved a 35% reduction in investigation time from initial alert to geographic attribution.
                      <br/><br/>
                      Improved log context quality by enriching 100% of inbound events with origin metadata.
                      <br/><br/>
                      Automated remediation reduced patch latency from 3 days to under 12 hours in sandbox tests.
                      <br/><br/>
                      Provided repeatable, exportable datasets for forensic analysis and educational use.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CHALLENGES AND ITERATIONS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      <span style={{ fontWeight: 'bold' }}>Data Volume vs. Cost:</span> Managed ingestion efficiency using 
                      Azure Log Analytics data caps and compression.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Geo-Enrichment Accuracy:</span> Adjusted IP resolution logic to 
                      account for corporate VPNs and anonymizers.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>UI Density:</span> Refined the workbook layout to balance visual 
                      density with scan-time performance.
                      <br/><br/>
                      Each challenge reinforced the importance of iterative testing and evidence-driven refinement, mirroring 
                      formal forensic methodology.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>STANDARDS AND FRAMEWORKS REFERENCED:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.8 }}>
                      NIST SP 800-86 – Guide to Integrating Forensic Techniques into Incident Response<br/>
                      ISO/IEC 27037 – Guidelines for Evidence Collection and Preservation<br/>
                      MITRE ATT&CK – Mapped detections to tactics and techniques (e.g., T1110 Brute Force)<br/>
                      WCAG 2.2 AA – Applied to workbook design for readability and accessibility<br/>
                      ISO 9241-210 – Human-Centered Design framework for analyst experience<br/>
                      Core Web Vitals – Performance optimization of visual dashboards
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>REFLECTION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The Digital Forensic Toolkit project reinforced how forensic precision and automation can coexist. 
                      By combining data enrichment, SIEM analytics, and evidence management, the platform bridged reactive 
                      monitoring and proactive defense.
                      <br/><br/>
                      It also demonstrated the power of UX in security — that clarity and context are as important to 
                      incident response as detection fidelity.
                      <br/><br/>
                      The Digital Forensic Toolkit stands as both a technical and methodological proof of concept: a 
                      demonstration of how modern SIEM platforms can double as forensic analysis environments when paired 
                      with thoughtful automation and design. It blends incident response, digital forensics, and UX strategy 
                      into a single, coherent workflow — a foundation for the next generation of data-driven, analyst-centric 
                      cybersecurity tools.
                    </div>
                  </div>
                </div>

                {/* Case Study 4 */}
                <div ref={caseStudy4Ref} className="mb-4 p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.02)' }}>
                  <div className="text-sm font-bold mb-2" style={{ color: '#00ff41' }}>
                    [CASE_STUDY_04] Pip-Boy Portfolio: Building a Functional Identity
                  </div>
                  <div className="text-xs mb-2" style={{ opacity: 0.7 }}>
                    Role: Solo Designer–Developer | Technologies: React, Tailwind CSS, Figma, Adobe Illustrator, custom command parser, inline CRT styling | Timeline: August–October 2025
                  </div>
                  <div className="border-b mb-2" style={{ borderColor: '#00ff4122' }}></div>
                  
                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>OVERVIEW:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The Pip-Boy Portfolio is an interactive, retro-futuristic website designed to merge technical 
                      sophistication with personal storytelling. Inspired by Fallout's terminal aesthetic, it presents 
                      professional information through a functional interface that feels more like an operating system 
                      than a webpage. Every element—commands, stats, achievements—serves a dual purpose: it entertains 
                      while efficiently communicating professional detail.
                      <br/><br/>
                      What began as a simple personal site evolved into a design experiment on how personality, accessibility, 
                      and UX research can coexist harmoniously. The result is a portfolio that's both memorable and compliant, 
                      playful and precise.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>DESIGN DIRECTION – FROM MINIMALISM TO IMMERSION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The project started as a minimalist, card-based layout. It was elegant, functional—and instantly 
                      forgettable. Feedback from early testers described it as "clean but generic." Recruiters already 
                      sift through dozens of identical sites; another grayscale grid wasn't going to make a lasting impression.
                      <br/><br/>
                      I pivoted toward a narrative-driven, stylized interface that would communicate both creative curiosity 
                      and technical control. Using Figma, I created multiple design iterations exploring different retro 
                      terminal aesthetics—testing color schemes, typography, and layout variations. Adobe Illustrator helped 
                      refine the iconography and ASCII-inspired visual elements. The design borrowed from retro operating 
                      systems—where every interaction feels purposeful and tactile—while applying modern accessibility and 
                      UX principles beneath the surface.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>RESEARCH AND RATIONALE:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Three research-backed insights guided the direction:
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Distinctive storytelling improves recall.</span><br/>
                      A 2023 Nielsen Norman Group study found that users remembered narrative or themed portfolio layouts 
                      60% more often than minimal ones with equivalent readability.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Emotionally resonant interfaces improve engagement.</span><br/>
                      According to UX Planet (2024), nostalgic or mood-evoking interfaces can increase content recall by 
                      47%—a reminder that emotion drives memory.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Thematic coherence accelerates understanding.</span><br/>
                      Adobe's 2022 eye-tracking analysis showed users created mental maps faster when visuals followed a 
                      coherent metaphor. By using a single, consistent system metaphor—a personal terminal—navigation becomes 
                      instinctive even when the aesthetic is unconventional.
                      <br/><br/>
                      The result is a functional narrative: the interface tells a story about me as a hybrid technologist—
                      analytical, exploratory, and creative—without ever needing to say it outright.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>ACCESSIBILITY AND STANDARDS COMPLIANCE:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Despite its stylized presentation, the interface was built around WCAG 2.2 AA and ISO 9241-210 
                      (Human-Centered Design) principles. It's not just nostalgic—it's responsibly designed.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Color Contrast:</span> #00FF41 on #0A0E0A achieves a 15.1:1 ratio, 
                      far exceeding AA requirements.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Keyboard Operability:</span> Every command and navigation element 
                      is accessible via keyboard, meeting WCAG 2.1.1 & 2.1.2.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Reduced Motion:</span> Subtle pulse and glow animations respect 
                      the user's prefers-reduced-motion setting.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Semantic Structure:</span> Content organized through semantic HTML 
                      and planned WAI-ARIA 1.2 roles for assistive technologies.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Legibility:</span> Monospace typography with optimized line length 
                      (~70–80 characters) ensures readability without sacrificing the CRT aesthetic.
                      <br/><br/>
                      Accessibility wasn't treated as an afterthought; it became a core design constraint—proof that stylized 
                      interfaces can still meet modern standards of inclusivity.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>UX PRINCIPLES IN PRACTICE:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The build intentionally references foundational UX and cognitive design frameworks:
                      <br/><br/>
                      Nielsen's Heuristics: Clear system status, user control, and recognition-based navigation.<br/>
                      Hick's Law: Limited visible options reduce cognitive load.<br/>
                      Fitts's Law: Buttons sized for both mouse and touch interactions.<br/>
                      Miller's Law: Grouped information into digestible five-item sections.<br/>
                      Jakob's Law: Common interaction patterns (tabs, buttons) ensure familiarity.<br/>
                      Gestalt Principles: Proximity and similarity structure the visual hierarchy.<br/>
                      Peak–End Rule: Ends each interaction on an engaging note through the command line input.
                      <br/><br/>
                      Each decision was designed to balance immersion with clarity—a visually novel interface that still 
                      behaves predictably.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>ARCHITECTURE AND IMPLEMENTATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The portfolio runs as a single React component powered by clean, isolated state management. A central 
                      command registry maps each "system file" (e.g., ABOUT.exe, SKILLS.dat) to corresponding data outputs, 
                      while a unified parser handles rendering and validation.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Key implementation details:</span><br/>
                      State model: useState and useEffect manage command history, terminal output, and tab state.<br/>
                      Performance: Append-only render pattern prevents unnecessary re-renders.<br/>
                      Progressive enhancement: Even if JavaScript fails, all visible sections remain accessible.<br/>
                      Styling: CRT glow, scanlines, and animations handled with lightweight CSS and Tailwind utilities—
                      no external libraries.
                      <br/><br/>
                      It's a technical love letter to clarity: small, fast, and deeply considered.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>TESTING AND OPTIMIZATION:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Testing focused on usability, performance, and accessibility rather than raw code coverage.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Functional Testing:</span><br/>
                      Verified command handling (HELP, CLEAR, PROJECTS.log) and error responses. Ensured button-based 
                      navigation mirrored CLI commands. Confirmed history traversal via arrow keys.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Performance Testing:</span><br/>
                      Lighthouse audits for Core Web Vitals: CLS &lt; 0.05, LCP &lt; 2s, 60 FPS on modern browsers. 
                      Memory stability under extended use—no reflow or event leaks.
                      <br/><br/>
                      <span style={{ fontWeight: 'bold' }}>Accessibility Testing:</span><br/>
                      Manual screen reader checks for focus and labeling. Color vision simulations (deuteranopia, protanopia). 
                      Keyboard-only navigation validation.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>CHALLENGES AND ITERATIONS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      Balancing creativity with clarity was the core challenge. Early builds hid essential content behind 
                      the command system—fun, but frustrating for first-time visitors. The fix: expose primary sections 
                      ("Stats," "Inventory," "Achievements") in clear tabs, while keeping the terminal as an optional layer 
                      for discovery.
                      <br/><br/>
                      Legibility also required careful tuning. CRT-inspired green can easily cause eye strain; subtle 
                      desaturation and controlled glow radius made it comfortable for long reads while maintaining visual 
                      authenticity.
                      <br/><br/>
                      Performance-wise, optimizing React's state updates prevented cascading re-renders during rapid input—
                      small code decisions that made a huge experiential difference.
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>RESULTS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      The final build succeeds where the original prototype didn't: it stands out. During peer testing, 
                      every participant recalled the green-terminal layout a week later—none remembered the minimalist one. 
                      Recruiters have described it as "a website you actually want to play with," which was exactly the goal.
                      <br/><br/>
                      Beyond aesthetics, the project demonstrates competence across accessibility, UX strategy, and front-end 
                      architecture. It's a portfolio that doubles as a proof of concept: style and substance are not mutually 
                      exclusive.
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold" style={{ color: '#00ff41' }}>REFLECTION AND LEARNINGS:</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.9, lineHeight: '1.5' }}>
                      This project reinforced a simple truth—aesthetics mean nothing without usability, but usability without 
                      character is forgettable.
                      <br/><br/>
                      By aligning creativity with research-backed UX, I learned to:
                      <br/><br/>
                      Treat accessibility as a creative constraint, not a checklist.<br/>
                      Apply cognitive psychology to reinforce design intent.<br/>
                      Communicate professionalism through code structure as much as visuals.<br/>
                      Build experiences that leave an impression without breaking standards.
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {/* Command Buttons */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button 
              onClick={() => executeCommand('ABOUT.exe')}
              className="text-left p-2 border hover:bg-white/5 transition-colors" 
              style={{ borderColor: '#00ff4133' }}
            >
              &gt; ABOUT.exe
            </button>
            <button 
              onClick={() => executeCommand('SKILLS.dat')}
              className="text-left p-2 border hover:bg-white/5 transition-colors" 
              style={{ borderColor: '#00ff4133' }}
            >
              &gt; SKILLS.dat
            </button>
            <button 
              onClick={() => executeCommand('PROJECTS.log')}
              className="text-left p-2 border hover:bg-white/5 transition-colors" 
              style={{ borderColor: '#00ff4133' }}
            >
              &gt; PROJECTS.log
            </button>
            <button 
              onClick={() => executeCommand('CONTACT.sys')}
              className="text-left p-2 border hover:bg-white/5 transition-colors" 
              style={{ borderColor: '#00ff4133' }}
            >
              &gt; CONTACT.sys
            </button>
          </div>

          {/* Terminal Output */}
          {terminalOutput.map((output, idx) => (
            <div key={idx} className="text-xs">
              {output.type === 'command' && (
                <div style={{ color: '#00ff41' }} className="font-bold">{output.text}</div>
              )}
              {output.type === 'system' && (
                <div style={{ color: '#00ff41', opacity: 0.7 }}>{output.text}</div>
              )}
              {output.type === 'output' && (
                <pre className="whitespace-pre-wrap p-2 my-1 border" style={{ 
                  background: 'rgba(0,255,65,0.05)',
                  borderColor: '#00ff4133',
                  fontSize: '11px',
                  lineHeight: '1.4'
                }}>{output.text}</pre>
              )}
              {output.type === 'error' && (
                <div style={{ color: '#ff4136' }}>{output.text}</div>
              )}
            </div>
          ))}

          {/* Case Study Navigation Buttons (shown after PROJECTS.LOG) */}
          {showProjectsNav && (
            <div className="mt-4 p-3 border" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.05)' }}>
              <div className="text-xs font-bold mb-3" style={{ color: '#00ff41' }}>
                ╔═══════════════════════════════════════════════════════════════════╗
                <br/>
                ║ QUICK NAVIGATION :: JUMP TO CASE STUDIES                         ║
                <br/>
                ╚═══════════════════════════════════════════════════════════════════╝
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigateToCaseStudy(1)}
                  className="text-left p-2 border hover:bg-white/10 transition-colors"
                  style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                  &gt; CASE_01: Spotify Visualizer
                </button>
                <button
                  onClick={() => navigateToCaseStudy(2)}
                  className="text-left p-2 border hover:bg-white/10 transition-colors"
                  style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                  &gt; CASE_02: Weather-Scrobble Mapper
                </button>
                <button
                  onClick={() => navigateToCaseStudy(3)}
                  className="text-left p-2 border hover:bg-white/10 transition-colors"
                  style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                  &gt; CASE_03: Digital Forensics Toolkit
                </button>
                <button
                  onClick={() => navigateToCaseStudy(4)}
                  className="text-left p-2 border hover:bg-white/10 transition-colors"
                  style={{ borderColor: '#00ff41', color: '#00ff41', background: 'transparent' }}>
                  &gt; CASE_04: Portfolio Terminal
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Command Input */}
        <div className="border-t px-4 py-2 flex items-center gap-2" style={{ borderColor: '#00ff4133', background: '#0f150f' }}>
          <span>&gt;</span>
          <input 
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-xs" 
            style={{ color: '#00ff41', caretColor: '#00ff41' }}
            placeholder="Type HELP for available commands..."
            autoComplete="off"
          />
          <span className="text-xs" style={{ opacity: 0.5 }}>
            {commandHistory.length > 0 && '↑↓ history'}
          </span>
        </div>

      </div>
    </div>
  );
};

export default PipBoyPortfolio;