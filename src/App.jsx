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
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const executeCommand = (cmd) => {
    const timestamp = new Date().toLocaleTimeString();
    const cmdUpper = cmd.toUpperCase();
    
    // Check if this is a command button click
    const isCommandButton = ['ABOUT.EXE', 'SKILLS.DAT', 'PROJECTS.LOG', 'CONTACT.SYS'].includes(cmdUpper);
    
    if (isCommandButton) {
      // If there's already output, check what command it was
      if (terminalOutput.length > 0) {
        // Find the last command that was run
        const lastCommand = terminalOutput.filter(entry => entry.type === 'command').pop();
        
        if (lastCommand && lastCommand.text.toUpperCase().includes(cmdUpper)) {
          // Same command clicked again - toggle it off (clear)
          setTerminalOutput([]);
          return;
        } else {
          // Different command - clear old output before showing new
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
├─ React / Three.js / Vite / Tailwind
├─ Node.js / Python / REST APIs
├─ D3.js / WebGL / GLSL
├─ Figma / Adobe XD / Prototyping
├─ Linux / Wireshark / Autopsy / SIEM tools
├─ Git / CLI / Automation Scripts

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
├─ LIVE DEMO: YOUR_DEMO_URL_1
└─ SOURCE: YOUR_GITHUB_URL_1

[PROJ_002] Weather-Scrobble Mapper (In Progress)
├─ STATUS: Active Development
├─ STACK: D3.js, Three.js, OpenWeather API, Last.fm API
├─ ROLE: Concept Designer & Developer
├─ DESC: Interactive 3D map correlating a user's music listening 
│        patterns with local weather data.
├─ ACHIEVEMENT: Prototype uses temporal data to visualize mood vs. climate.
├─ LIVE DEMO: YOUR_DEMO_URL_2
└─ SOURCE: YOUR_GITHUB_URL_2

[PROJ_003] Digital Forensics Toolkit Demo
├─ STATUS: Research Prototype
├─ STACK: Python, Flask, Elasticsearch
├─ ROLE: Developer & Researcher
├─ DESC: Demonstration of log parsing, metadata extraction, and case 
│        file generation for forensic workflows.
├─ ACHIEVEMENT: Built modular analyzer modules to simulate an incident workflow.
├─ LIVE DEMO: YOUR_DEMO_URL_3
└─ SOURCE: YOUR_GITHUB_URL_3

[PROJ_004] Portfolio Terminal (This Project)
├─ STATUS: Deployed
├─ STACK: React, Tailwind, Custom CLI Interface
├─ ROLE: Designer & Full-Stack Developer
├─ DESC: A Pip-Boy–style interactive portfolio merging retro aesthetics 
│        with modern web tech.
├─ ACHIEVEMENT: Blends narrative design with technical presentation.
├─ LIVE DEMO: [You're looking at it]
└─ SOURCE: YOUR_GITHUB_URL_4
`,
      'CONTACT.SYS': `
╔═══════════════════════════════════════════════════════════════════╗
║ COMMUNICATION CHANNELS :: ESTABLISHING CONNECTION                ║
╚═══════════════════════════════════════════════════════════════════╝

[PRIMARY_CHANNELS]
├─ EMAIL: yourname@proton.me
├─ LINKEDIN: linkedin.com/in/yourname
├─ GITHUB: github.com/yourhandle
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
      return;
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

  const recentActivity = [
    { action: 'Deployed v2.4.1 to production', time: '2h ago', status: 'success' },
    { action: 'Code review completed (PR #847)', time: '5h ago', status: 'success' },
    { action: 'Fixed critical bug in auth module', time: '1d ago', status: 'success' },
    { action: 'Team meeting: Q4 planning', time: '2d ago', status: 'info' },
    { action: 'Merged feature branch', time: '3d ago', status: 'success' }
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
          {['STATS', 'PROJECTS', 'ACTIVITY'].map(tab => (
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
            <div className="w-24 h-32 border-2 flex items-center justify-center" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.05)', flexShrink: 0 }}>
              <div className="text-center w-full h-full flex flex-col items-center justify-center border-2 border-dashed" style={{ borderColor: '#00ff4133' }}>
                <div className="text-xs" style={{ opacity: 0.5 }}>PROFILE</div>
                <div className="text-xs" style={{ opacity: 0.3 }}>[Photo]</div>
              </div>
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
                  <div className="font-bold text-lg">47</div>
                  <div style={{ opacity: 0.5 }}>+3 this month</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>COMMITS</div>
                  <div className="font-bold text-lg">3.2K</div>
                  <div style={{ opacity: 0.5 }}>847 streak</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>CODE REVIEWS</div>
                  <div className="font-bold text-lg">1.8K</div>
                  <div style={{ opacity: 0.5 }}>98% approved</div>
                </div>
                <div className="p-2 border text-center" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div style={{ opacity: 0.6 }}>COFFEE</div>
                  <div className="font-bold text-lg">∞</div>
                  <div style={{ opacity: 0.5 }}>Always brewing</div>
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
                <div className="text-xs font-bold mb-3">PROJECT DEEP DIVE :: EXPANDED DOCUMENTATION</div>
                
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
                    <a href="YOUR_DEMO_URL_1" target="_blank" rel="noopener noreferrer" 
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff41', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; LIVE DEMO
                    </a>
                    <a href="YOUR_GITHUB_URL_1" target="_blank" rel="noopener noreferrer"
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
                    <a href="YOUR_DEMO_URL_2" target="_blank" rel="noopener noreferrer" 
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff41', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; LIVE DEMO
                    </a>
                    <a href="YOUR_GITHUB_URL_2" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff4166', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; SOURCE CODE
                    </a>
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
                    <a href="YOUR_DEMO_URL_3" target="_blank" rel="noopener noreferrer" 
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff41', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; LIVE DEMO
                    </a>
                    <a href="YOUR_GITHUB_URL_3" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff4166', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; SOURCE CODE
                    </a>
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
                    <a href="#" 
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff41', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; YOU'RE HERE
                    </a>
                    <a href="YOUR_GITHUB_URL_4" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 border hover:bg-white/10 transition-colors"
                       style={{ borderColor: '#00ff4166', color: '#00ff41', textDecoration: 'none' }}>
                      &gt; SOURCE CODE
                    </a>
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === 'ACTIVITY' && (
            <>
              <div className="p-3 border-l-2" style={{ borderColor: '#00ff41', background: 'rgba(0,255,65,0.03)' }}>
                <div className="text-xs font-bold mb-3">RECENT ACTIVITY LOG</div>
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-2 mb-2 pb-2 border-b" style={{ borderColor: '#00ff4111' }}>
                    <span className="text-xs" style={{ 
                      color: activity.status === 'success' ? '#00ff41' : '#4dabf7',
                      width: '60px' 
                    }}>
                      {activity.time}
                    </span>
                    <div className="flex-1 text-xs">{activity.action}</div>
                    <span style={{ 
                      color: activity.status === 'success' ? '#00ff41' : '#4dabf7',
                      fontSize: '10px'
                    }}>
                      {activity.status === 'success' ? '✓' : 'ℹ'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div className="text-xs font-bold mb-2">THIS WEEK</div>
                  <div className="text-xs space-y-1">
                    <div>Commits: 47</div>
                    <div>PRs Merged: 12</div>
                    <div>Issues Closed: 23</div>
                    <div>Code Reviews: 31</div>
                  </div>
                </div>
                <div className="p-3 border" style={{ borderColor: '#00ff4133', background: 'rgba(0,255,65,0.03)' }}>
                  <div className="text-xs font-bold mb-2">THIS MONTH</div>
                  <div className="text-xs space-y-1">
                    <div>Commits: 187</div>
                    <div>PRs Merged: 52</div>
                    <div>Issues Closed: 94</div>
                    <div>Code Reviews: 128</div>
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