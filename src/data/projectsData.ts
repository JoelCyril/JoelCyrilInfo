import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'swap-uae',
    title: 'SwapUAE',
    subtitle: 'Community-Driven Zero-Cash Barter Marketplace',
    category: 'Full-Stack Web & Systems',
    status: 'Working App',
    featured: true,
    image: '/assets/projects/swap-live-app.png',
    galleryImages: ['/assets/projects/swap-live-app.png', '/assets/projects/swap-hero.png', '/assets/projects/swap-logo.png', '/assets/projects/nas-hardware.png'],
    description: 'A peer-to-peer barter marketplace built and launched across the UAE enabling students and community members to exchange goods without money.',
    longDescription: 'SwapUAE is a cashless trading platform designed to help students and residents circulate books, electronics, and supplies without financial barriers. Within two weeks of launch with zero paid marketing, the platform attracted 100+ active users and completed 12+ verified trades. When rapid adoption exceeded free cloud tiers, our engineering team migrated backend persistence to a custom scrap-built NAS server.',
    problem: 'Students own valuable unused equipment and textbooks, but lack cash to buy new essentials. Commercial classifieds involve fees, scams, or monetary overhead.',
    solution: 'Designed and deployed a responsive web app with real-time trade proposals, peer-to-peer chat, item condition verification, and a zero-cost self-hosted infrastructure.',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Socket.io', 'Leaflet Maps', 'Cloudflare', 'Vercel'],
    tags: ['Full-Stack', 'PostgreSQL', 'WebSockets', 'Self-Hosted'],
    metrics: [
      { label: 'Active Users', value: '100+' },
      { label: 'Active Listings', value: '110+' },
      { label: 'Completed Trades', value: '12+' },
      { label: 'Cloud Ad Budget', value: '$0.00' }
    ],
    links: [
      { label: 'Live App', url: 'https://swap-xi-nine.vercel.app/', type: 'live' },
      { label: 'GitHub Repository', url: 'https://github.com/JoelCyril/swap', type: 'github' }
    ],
    accentColor: '#10b981'
  },
  {
    id: 'reaper-one',
    title: 'Reaper One',
    subtitle: 'Multi-Protocol Handheld Hardware & RF Platform',
    category: 'Embedded Hardware & RF',
    status: 'Physically Built',
    featured: true,
    image: '/assets/projects/reaper-hero.jpg',
    galleryImages: ['/assets/projects/reaper-hero.jpg', '/assets/projects/reaper-pcb.jpg'],
    description: 'A standalone ESP32-based multi-protocol hardware device integrating Sub-GHz radio, NFC/RFID, Infrared transceivers, Wi-Fi, and Bluetooth into custom PCB circuitry.',
    longDescription: 'Developed over 1.5 years of hardware prototyping, Reaper One is an open embedded system designed to demystify wireless protocols. Overcoming tight GPIO constraints, the architecture multiplexes an SPI display, I2C peripherals, Sub-GHz CC1101 transceiver, PN532 NFC reader, infrared TX/RX diodes, and an SD card interface. Powered by custom C++ firmware featuring a responsive OLED menu-driven UI.',
    problem: 'Commercial RF analysis tools are proprietary, expensive, and black-boxed, preventing practical hands-on exploration of embedded communication layers.',
    solution: 'Engineered a custom handheld platform from schematic design to PCB soldering and 3D enclosure printing, running lightweight asynchronous RTOS firmware.',
    technologies: ['ESP32', 'C++', 'FreeRTOS', 'KiCAD', 'Sub-GHz (CC1101)', 'NFC/RFID (PN532)', 'Infrared', 'Bluetooth LE', '3D CAD'],
    tags: ['ESP32', 'Custom PCB', 'Sub-GHz', 'C++', 'Hardware'],
    metrics: [
      { label: 'Dev Duration', value: '1.5 Years' },
      { label: 'RF Protocols', value: '5 Wireless' },
      { label: 'Firmware Code', value: '100% C++' },
      { label: 'Enclosure', value: 'Custom 3D CAD' }
    ],
    links: [
      { label: 'GitHub Firmware', url: 'https://github.com/JoelCyril/reaper1.2', type: 'github' }
    ],
    accentColor: '#ff5d35'
  },
  {
    id: 'mangrove-buoy',
    title: 'Manarat Al-Qurm (منارة القرم)',
    subtitle: 'AI-Powered Smart Mangrove Monitoring Buoy System',
    category: 'IoT, Environmental & LoRa',
    status: 'Completed',
    featured: true,
    image: '/assets/projects/mangroves-dashboard.png',
    galleryImages: ['/assets/projects/mangroves-dashboard.png'],
    description: 'Autonomous floating environmental buoy and mission-control station for coastal mangrove preservation, featuring Sub-GHz LoRa telemetry and 48-hour AI trajectory forecasting.',
    longDescription: 'Manarat Al-Qurm is a self-hosted, offline-first environmental monitoring network for Avicennia marina mangrove forests. Low-power STM32WLE5CCU6 buoy nodes stream multiparameter telemetry over long-range LoRa to a local Raspberry Pi gateway. A scientific health engine calculates 6-parameter Water Quality Indices (DO, pH, Salinity, Turbidity, Temp, Water Level) with automated 10-minute emergency mode triggers for hypoxia or sedimentation risks.',
    problem: 'Mangrove degradation often goes undetected until irreversible root necrosis occurs, while commercial oceanographic buoys require costly recurring satellite subscriptions.',
    solution: 'Designed an ultra-low-power STM32 C firmware buoy and a mission-control web interface with moving-average predictive forecasting, running 100% offline on a Raspberry Pi.',
    technologies: ['STM32WLE5', 'LoRa (Sub-GHz)', 'C Firmware', 'Python (FastAPI)', 'SQLite WAL', 'React', 'Tailwind CSS', 'Leaflet', 'WebSockets'],
    tags: ['STM32', 'LoRa', 'FastAPI', 'Environmental', 'AI Forecasting'],
    metrics: [
      { label: 'Sensory Parameters', value: '6-Param WQI' },
      { label: 'Forecast Horizon', value: '48 Hours' },
      { label: 'Emergency Triggers', value: '< 4.8 mg/L DO' },
      { label: 'Cloud Cost', value: '$0 / Pi Native' }
    ],
    links: [
      { label: 'System Overview', url: '#projects', type: 'docs' }
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'adis-readtrack',
    title: 'ADIS ReadTrack',
    subtitle: 'AI-Powered Literacy & Reading Assessment Intelligence',
    category: 'AI & Educational Tech',
    status: 'Working App',
    featured: true,
    image: '/assets/projects/readtrack-live-portal.png',
    galleryImages: ['/assets/projects/readtrack-live-portal.png', '/assets/projects/readtrack-logo.png'],
    description: 'An AI-powered school reading activity and literacy assessment portal serving ~2,000 Abu Dhabi Indian School students, engineered in direct consultation with the high school English department to boost reading scores and eliminate teacher grading stress through automated AI analysis.',
    longDescription: 'ADIS ReadTrack was engineered to solve a systemic operational challenge in school-wide literacy programs: English teachers faced severe grading stress reviewing manual paper reading logs across thousands of students, while students lacked objective feedback on their reading habits. In close consultation with all high school English teachers, I designed an intelligent web platform that combines camera OCR text verification, automated reading pace benchmarks, and AI comprehension quizzes. The platform automatically assesses student summaries, monitors reading milestones, and ranks inter-house literacy points. Currently deployed across Abu Dhabi Indian School, ReadTrack supports nearly 2,000 active student users, freeing teachers from manual log verification and measurably increasing student reading scores.',
    problem: 'English teachers spent hundreds of hours manually verifying physical reading logs, creating immense grading stress, while paper logs allowed unverified claims without actionable comprehension data.',
    solution: 'Consulted with the entire school English faculty to engineer a full-stack platform with OCR book validation, automated AI summary evaluation, and student reading leaderboards, currently serving ~2,000 students.',
    technologies: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tesseract OCR', 'Tailwind CSS', 'Vite', 'AI APIs'],
    tags: ['React', 'TypeScript', 'OCR', 'Supabase', 'AI / EdTech'],
    metrics: [
      { label: 'Active Students', value: '2,000+' },
      { label: 'Faculty Impact', value: 'All English Teachers' },
      { label: 'Grading Stress', value: '-75% Teacher Workload' },
      { label: 'AI Engine', value: 'Automated OCR & NLP' }
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/JoelCyril/adis-readtrack', type: 'github' }
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'pulso-ai',
    title: 'Pulso.ai',
    subtitle: 'AI Healthcare Analytics Platform (UN SDG 3)',
    category: 'AI & Healthcare Technology',
    status: 'Award-Winning',
    featured: true,
    image: '/assets/projects/pulso-live-dashboard.png',
    galleryImages: ['/assets/projects/pulso-live-dashboard.png', '/assets/projects/pulso-dashboard.jpg', '/assets/projects/pulso-anatomy.png'],
    description: 'An AI health and wellness platform addressing UN Sustainable Development Goal 3 by synthesizing fragmented lifestyle telemetry into predictive wellness insights.',
    longDescription: 'Pulso.ai is an award-winning web application that empowers individuals to understand the holistic interplay between sleep architecture, physical activity, heart rate variance, and dietary habits. Built with TypeScript and Vite, the platform generates personalized risk-factor insights and visualizes health trajectory projections using interactive data dashboards.',
    problem: 'Health data is siloed across disparate apps and wearable devices, presenting raw numbers without contextualized guidance or early warning patterns.',
    solution: 'Constructed an intuitive analytics dashboard with predictive AI engines that process user lifestyle inputs to provide actionable health intelligence.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI APIs', 'Data Visualization (Recharts)', 'Vercel'],
    tags: ['AI/ML', 'HealthTech', 'TypeScript', 'SDG 3'],
    metrics: [
      { label: 'Recognition', value: 'Award-Winning' },
      { label: 'Alignment', value: 'UN SDG 3' },
      { label: 'Performance', value: '100% Client-Side' }
    ],
    links: [
      { label: 'Live App', url: 'https://pulso-ai.vercel.app/', type: 'live' },
      { label: 'GitHub Repository', url: 'https://github.com/JoelCyril/Pulso.ai', type: 'github' }
    ],
    accentColor: '#ec4899'
  },
  {
    id: 'diy-submarine',
    title: 'DIY Underwater Submarine (ROV)',
    subtitle: 'ESP32 Submersible Robotics & Marine Telemetry',
    category: 'Robotics & Marine Electronics',
    status: 'Completed',
    featured: false,
    image: '/assets/projects/submarine-schematic.svg',
    galleryImages: ['/assets/projects/submarine-schematic.svg'],
    description: 'An autonomous and tether-steered underwater robotic submersible equipped with differential brushless thrusters, depth regulation, and low-light video feed.',
    longDescription: 'Engineered as an exploration into marine robotics, this underwater remotely operated vehicle (ROV) utilizes an ESP32 central controller housed within a high-pressure acrylic cylinder. The system controls dual horizontal brushless thrusters and a vertical ballast thruster via bidirectional ESCs, integrating an MS5837 high-precision depth sensor and MPU6050 6-axis gyro for auto-depth hold and tilt compensation.',
    problem: 'Underwater environments severely attenuate standard 2.4GHz RF signals, making wireless underwater drone control impossible without acoustic or tethered links.',
    solution: 'Built a neutral-buoyancy RS-485 umbilical tether carrying low-latency motor control packets and sensor telemetry, complemented by PID closed-loop depth stabilization.',
    technologies: ['ESP32', 'C++', 'PID Control', 'Brushless Thrusters', 'MS5837 Depth Sensor', 'MPU6050 IMU', 'RS-485 Tether', 'Acrylic Fabrication'],
    tags: ['ESP32', 'Robotics', 'Marine', 'PID Control', 'Sensors'],
    metrics: [
      { label: 'Depth Rating', value: '30 Meters' },
      { label: 'Stabilization', value: 'PID Closed-Loop' },
      { label: 'Thrusters', value: '3x Brushless' },
      { label: 'Endurance', value: '2.5 Hours LiPo' }
    ],
    links: [
      { label: 'Technical Spec', url: '#projects', type: 'docs' }
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'home-nas',
    title: 'Home NAS & Self-Hosted Edge',
    subtitle: 'Scrap-Built Server Infrastructure & Storage Matrix',
    category: 'Systems & Infrastructure',
    status: 'Completed',
    featured: false,
    image: '/assets/projects/nas-hardware.png',
    galleryImages: ['/assets/projects/nas-hardware.png'],
    description: 'A high-availability self-hosted home server and storage cluster constructed entirely from salvaged PC hardware to maintain free community applications.',
    longDescription: 'When SwapUAE\'s cloud storage quotas were exceeded, rather than passing fees onto users, I engineered a dedicated home NAS server from scrap computer parts. Operating on Linux with software RAID and ZFS, the server hosts containerized databases, WebSocket relay servers, local media backups, and secure reverse-proxied endpoints protected with automated SSL certificates.',
    problem: 'Commercial cloud databases enforce steep tier pricing that makes keeping free student community apps sustainable without monetization.',
    solution: 'Assembled and configured discarded components into a robust headless Linux server with redundant storage, automated cron backups, and zero ongoing subscription costs.',
    technologies: ['Linux / Ubuntu Server', 'ZFS / RAID', 'Docker', 'PostgreSQL', 'Nginx Reverse Proxy', 'Tailscale / WireGuard', 'Hardware Salvaging'],
    tags: ['Linux', 'Self-Hosted', 'Networking', 'Storage', 'Zero Cost'],
    metrics: [
      { label: 'Component Sourcing', value: '100% Salvaged' },
      { label: 'Monthly Cost', value: '$0.00 / Month' },
      { label: 'Redundancy', value: 'RAID Array' },
      { label: 'Uptime', value: '99.8%' }
    ],
    links: [
      { label: 'Case Study', url: '#projects', type: 'docs' }
    ],
    accentColor: '#f59e0b'
  }
];
