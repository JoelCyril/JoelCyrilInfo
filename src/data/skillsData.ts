export interface TechSkill {
  name: string;
  category: 'Languages' | 'Embedded & IoT' | 'Web & Frontend' | 'Backend & Cloud' | 'AI & Robotics';
  icon: string;
  level: string;
  context: string;
  highlight?: boolean;
}

export const SKILLS: TechSkill[] = [
  // Languages
  { name: 'Python', category: 'Languages', icon: 'Terminal', level: 'Advanced', context: 'FastAPI backends, AI data processing, scripts', highlight: true },
  { name: 'TypeScript', category: 'Languages', icon: 'FileCode', level: 'Advanced', context: 'Full-stack type safety, React, Vite apps', highlight: true },
  { name: 'JavaScript', category: 'Languages', icon: 'Code', level: 'Advanced', context: 'ESNext, Node.js, asynchronous event-driven code' },
  { name: 'C / C++', category: 'Languages', icon: 'Cpu', level: 'Proficient', context: 'ESP32 & STM32 firmware, FreeRTOS tasks, hardware drivers', highlight: true },
  { name: 'HTML5 & CSS3', category: 'Languages', icon: 'Layout', level: 'Advanced', context: 'Responsive layouts, animations, accessibility' },
  { name: 'SQL', category: 'Languages', icon: 'Database', level: 'Proficient', context: 'PostgreSQL, SQLite WAL queries & schema modeling' },

  // Embedded & IoT
  { name: 'ESP32', category: 'Embedded & IoT', icon: 'Cpu', level: 'Advanced', context: 'Dual-core MCU, Wi-Fi/BLE, Reaper One, Submarine ROV', highlight: true },
  { name: 'STM32', category: 'Embedded & IoT', icon: 'Microchip', level: 'Proficient', context: 'STM32WLE5 low-power LoRa buoy firmware', highlight: true },
  { name: 'LoRa & RF (Sub-GHz)', category: 'Embedded & IoT', icon: 'Radio', level: 'Proficient', context: 'Long-range coastal telemetry, CC1101 transceivers', highlight: true },
  { name: 'Electronics & Robotics', category: 'Embedded & IoT', icon: 'Zap', level: 'Advanced', context: 'ESC motor control, sensor integration, PID tuning', highlight: true },
  { name: 'Custom PCB & KiCAD', category: 'Embedded & IoT', icon: 'Layers', level: 'Intermediate', context: 'Schematic capture, PCB routing, handmade soldering' },
  { name: 'Hardware Protocols', category: 'Embedded & IoT', icon: 'Activity', level: 'Advanced', context: 'I2C, SPI, UART, RS-485, NFC/RFID, Infrared' },

  // Web & Frontend
  { name: 'React', category: 'Web & Frontend', icon: 'Atom', level: 'Advanced', context: 'React 19, hooks, custom components, state mgmt', highlight: true },
  { name: 'Tailwind CSS', category: 'Web & Frontend', icon: 'Palette', level: 'Advanced', context: 'Modern glassmorphic styling, responsive dark themes' },
  { name: 'Framer Motion', category: 'Web & Frontend', icon: 'Sparkles', level: 'Advanced', context: 'Fluid micro-interactions, layout transitions, 3D tilt', highlight: true },
  { name: 'Vite', category: 'Web & Frontend', icon: 'Zap', level: 'Advanced', context: 'Next-gen bundler, fast HMR, optimized production builds' },
  { name: 'REST & WebSockets', category: 'Web & Frontend', icon: 'Network', level: 'Advanced', context: 'Real-time telemetry feeds, peer-to-peer chat' },

  // Backend & Cloud
  { name: 'Supabase', category: 'Backend & Cloud', icon: 'Database', level: 'Proficient', context: 'Auth, row-level security, realtime subscriptions', highlight: true },
  { name: 'PostgreSQL', category: 'Backend & Cloud', icon: 'Server', level: 'Proficient', context: 'Relational data modeling, SwapUAE marketplace backend' },
  { name: 'Vercel', category: 'Backend & Cloud', icon: 'Cloud', level: 'Advanced', context: 'Production CI/CD deployment, edge functions, DNS', highlight: true },
  { name: 'Git & GitHub', category: 'Backend & Cloud', icon: 'GitBranch', level: 'Advanced', context: 'Version control, multi-project repos, collaborative commits', highlight: true },
  { name: 'Linux & Self-Hosted NAS', category: 'Backend & Cloud', icon: 'HardDrive', level: 'Proficient', context: 'Scrap-built server, ZFS/RAID storage, systemd services', highlight: true },

  // AI & Robotics
  { name: 'AI / ML Integration', category: 'AI & Robotics', icon: 'BrainCircuit', level: 'Proficient', context: 'LLM APIs, health intelligence, reading assessment', highlight: true },
  { name: 'Computer Vision & OCR', category: 'AI & Robotics', icon: 'Scan', level: 'Intermediate', context: 'Tesseract OCR text validation in ADIS ReadTrack' },
  { name: 'Predictive Telemetry', category: 'AI & Robotics', icon: 'TrendingUp', level: 'Proficient', context: '48h moving-average environmental trajectory engine' },
  { name: 'FLL Autonomous Robotics', category: 'AI & Robotics', icon: 'Bot', level: 'Advanced', context: 'Team Captain, robot game precision navigation & missions', highlight: true }
];
