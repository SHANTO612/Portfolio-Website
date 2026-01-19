'use client'
import { useState, useRef, useEffect } from 'react';

const commands = [
  { cmd: 'help', desc: 'List all available commands' },
  { cmd: 'about', desc: 'Display information about me' },
  { cmd: 'skills', desc: 'List my technical skills' },
  { cmd: 'projects', desc: 'List my projects' },
  { cmd: 'achievements', desc: 'List my achievements' },
  { cmd: 'certifications', desc: 'List my certifications' },
  { cmd: 'contact', desc: 'Show contact details' },
  { cmd: 'clear', desc: 'Clear the terminal screen' },
];

export default function Terminal({ data }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to my portfolio terminal! Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-white">
            <div>Available commands:</div>
            {commands.map((c) => (
              <div key={c.cmd} className="grid grid-cols-[140px_1fr]">
                <span className="text-yellow-400">{c.cmd}</span>
                <span>{c.desc}</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'about':
        output = data?.about?.about_me || "I am a passionate developer.";
        break;
      case 'skills':
        output = data?.about?.skills || "No skills listed.";
        break;
      case 'projects':
        if (data?.projects?.length) {
          output = (
            <div className="space-y-1 text-white">
              <div>My Projects:</div>
              {data.projects.map((p, i) => (
                <div key={i} className="ml-2">
                  <span className="text-yellow-400">- {p.name}</span>: {p.technologies}
                </div>
              ))}
            </div>
          );
        } else {
          output = "No projects found.";
        }
        break;
      case 'achievements':
         if (data?.achievements?.length) {
          output = (
            <div className="space-y-1 text-white">
              <div>My Achievements:</div>
              {data.achievements.map((a, i) => (
                <div key={i} className="ml-2">
                   <span className="text-yellow-400">- {a.year}</span>: {a.title} ({a.description})
                </div>
              ))}
            </div>
          );
        } else {
          output = "No achievements found.";
        }
        break;
      case 'certifications':
        if (data?.certifications?.length) {
          output = (
            <div className="space-y-1 text-white">
              <div>My Certifications:</div>
              {data.certifications.map((c, i) => (
                <div key={i} className="ml-2">
                   <span className="text-yellow-400">- {c.year}</span>: {c.title} by {c.issuer}
                </div>
              ))}
            </div>
          );
        } else {
          output = "No certifications found.";
        }
        break;
      case 'contact':
        output = (
            <div className="space-y-1 text-white">
                <div>You can reach me at:</div>
                <div>Email: fahadshanto653@gmail.com</div>
                <div>GitHub: https://github.com/SHANTO612</div>
                <div>LinkedIn: https://www.linkedin.com/in/al-fahad-shanto-7ab153288/</div>
            </div>
        )
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = `Command not found: ${cleanCmd}. Type "help" for valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: output },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        handleCommand(input);
      }
      setInput('');
    }
  };

  return (
    <div 
      className="w-full h-full rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-700 font-mono text-sm sm:text-base shadow-2xl text-white"
      onClick={focusInput}
      style={{ color: 'white' }}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-gray-400 text-xs select-none">shanto@portfolio: ~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[400px] overflow-y-auto text-white scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            {entry.type === 'input' ? (
              <div className="flex gap-2 text-white">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span>{entry.content}</span>
              </div>
            ) : (
              <div className="pl-6 text-white whitespace-pre-wrap" style={{ color: 'white' }}>{entry.content}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex gap-2 items-center">
          <span className="text-green-500">➜</span>
          <span className="text-blue-400">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
            style={{ color: 'white' }}
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
