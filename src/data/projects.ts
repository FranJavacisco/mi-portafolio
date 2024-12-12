export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  status: 'En Desarrollo' | 'Completado' | 'Desplegando' | 'Mantenimiento' | 'Beta';
  startDate: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
    otros?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard Pro',
    description: 'Panel de administración completo para comercio electrónico con análisis en tiempo real.',
    longDescription: 'Sistema integral de gestión para e-commerce que incluye análisis de ventas, gestión de inventario, procesamiento de pedidos y panel de administración personalizable.',
    image: '/projects/ecommerce-dashboard.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: 'https://dashboard.example.com',
    github: 'https://github.com/user/ecommerce-dashboard',
    status: 'Completado',
    startDate: '2024-01',
    technologies: {
      frontend: ['React', 'Redux Toolkit', 'TailwindCSS', 'Chart.js'],
      backend: ['Node.js', 'Express', 'WebSocket'],
      database: ['MongoDB', 'Redis'],
      devops: ['Docker', 'AWS', 'CI/CD'],
    }
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Plataforma de generación de contenido potenciada por IA para marketing digital.',
    longDescription: 'Herramienta avanzada que utiliza modelos de lenguaje para generar contenido optimizado para SEO, incluyendo artículos, descripciones de productos y posts para redes sociales.',
    image: '/projects/ai-content.jpg',
    tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
    link: 'https://ai-content.example.com',
    github: 'https://github.com/user/ai-content',
    status: 'En Desarrollo',
    startDate: '2024-02',
    technologies: {
      frontend: ['React', 'TypeScript', 'Material-UI'],
      backend: ['Python', 'FastAPI', 'Celery'],
      database: ['PostgreSQL'],
      otros: ['OpenAI API', 'Hugging Face']
    }
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'Plataforma inmobiliaria con visualización 3D y tours virtuales.',
    longDescription: 'Sistema completo para agencias inmobiliarias con funcionalidades de tours virtuales, modelado 3D de propiedades y sistema de citas integrado.',
    image: '/projects/real-estate.jpg',
    tags: ['Vue.js', 'Three.js', 'Django', 'PostgreSQL'],
    link: 'https://realestate.example.com',
    github: 'https://github.com/user/real-estate',
    status: 'Beta',
    startDate: '2023-12',
    technologies: {
      frontend: ['Vue 3', 'Three.js', 'TailwindCSS'],
      backend: ['Django', 'DRF'],
      database: ['PostgreSQL'],
      otros: ['WebGL', 'AR/VR']
    }
  },
  {
    id: 4,
    title: 'Smart City IoT Dashboard',
    description: 'Sistema de monitoreo IoT para ciudades inteligentes con análisis en tiempo real.',
    longDescription: 'Plataforma de visualización y análisis para datos de sensores IoT urbanos, incluyendo calidad del aire, tráfico y consumo energético.',
    image: '/projects/iot-dashboard.jpg',
    tags: ['Angular', 'Node.js', 'InfluxDB', 'MQTT'],
    link: 'https://smartcity.example.com',
    github: 'https://github.com/user/smart-city',
    status: 'Desplegando',
    startDate: '2024-01',
    technologies: {
      frontend: ['Angular', 'D3.js', 'NgRx'],
      backend: ['Node.js', 'MQTT', 'Socket.io'],
      database: ['InfluxDB', 'MongoDB'],
      devops: ['Kubernetes', 'GCP']
    }
  },
  {
    id: 5,
    title: 'Educational Platform LMS',
    description: 'Sistema de gestión de aprendizaje con características avanzadas de interactividad.',
    longDescription: 'Plataforma educativa completa con soporte para cursos en vivo, evaluaciones automatizadas y seguimiento de progreso del estudiante.',
    image: '/projects/edu-platform.jpg',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: 'https://edu.example.com',
    github: 'https://github.com/user/edu-platform',
    status: 'Mantenimiento',
    startDate: '2023-11',
    technologies: {
      frontend: ['Next.js', 'Apollo Client', 'TailwindCSS'],
      backend: ['Node.js', 'GraphQL', 'TypeORM'],
      database: ['PostgreSQL'],
      otros: ['WebRTC', 'FFmpeg']
    }
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Bot automatizado para trading de criptomonedas con estrategias personalizables.',
    longDescription: 'Sistema automatizado de trading que utiliza análisis técnico y aprendizaje automático para ejecutar operaciones en múltiples exchanges.',
    image: '/projects/crypto-bot.jpg',
    tags: ['Python', 'TensorFlow', 'MongoDB'],
    link: 'https://cryptobot.example.com',
    github: 'https://github.com/user/crypto-bot',
    status: 'En Desarrollo',
    startDate: '2024-02',
    technologies: {
      frontend: ['React', 'TradingView API'],
      backend: ['Python', 'FastAPI'],
      database: ['MongoDB', 'TimescaleDB'],
      otros: ['TensorFlow', 'ccxt']
    }
  },
  {
    id: 7,
    title: 'Health Monitoring App',
    description: 'Aplicación móvil para monitoreo de salud con integración de dispositivos wearables.',
    longDescription: 'Aplicación completa de salud que integra datos de dispositivos wearables, seguimiento de actividad física y recomendaciones personalizadas.',
    image: '/projects/health-app.jpg',
    tags: ['React Native', 'Node.js', 'HealthKit'],
    link: 'https://health.example.com',
    github: 'https://github.com/user/health-app',
    status: 'Completado',
    startDate: '2023-12',
    technologies: {
      frontend: ['React Native', 'Redux', 'Native Base'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      otros: ['HealthKit', 'Google Fit API']
    }
  },
  {
    id: 8,
    title: 'Social Media Analytics',
    description: 'Plataforma de análisis de redes sociales con ML para insights de mercado.',
    longDescription: 'Herramienta de análisis de redes sociales que utiliza ML para proporcionar insights de mercado y análisis de sentimiento en tiempo real.',
    image: '/projects/social-analytics.jpg',
    tags: ['Python', 'React', 'NLP', 'BigQuery'],
    link: 'https://social-analytics.example.com',
    github: 'https://github.com/user/social-analytics',
    status: 'Beta',
    startDate: '2024-01',
    technologies: {
      frontend: ['React', 'D3.js', 'Chakra UI'],
      backend: ['Python', 'FastAPI', 'Celery'],
      database: ['BigQuery', 'Redis'],
      otros: ['BERT', 'Twitter API']
    }
  },
  {
    id: 9,
    title: 'Cloud Gaming Platform',
    description: 'Plataforma de juegos en la nube con streaming de baja latencia.',
    longDescription: 'Servicio de gaming en la nube que permite jugar títulos AAA desde el navegador, con soporte para múltiples dispositivos y baja latencia.',
    image: '/projects/cloud-gaming.jpg',
    tags: ['WebRTC', 'C++', 'CUDA', 'React'],
    link: 'https://gaming.example.com',
    github: 'https://github.com/user/cloud-gaming',
    status: 'Desplegando',
    startDate: '2024-02',
    technologies: {
      frontend: ['React', 'WebRTC', 'Three.js'],
      backend: ['C++', 'CUDA', 'FFmpeg'],
      devops: ['Kubernetes', 'AWS'],
      otros: ['Vulkan', 'DirectX']
    }
  },
  {
    id: 10,
    title: 'Supply Chain Blockchain',
    description: 'Sistema de trazabilidad de cadena de suministro basado en blockchain.',
    longDescription: 'Plataforma blockchain para trazabilidad en cadena de suministro con smart contracts y verificación de autenticidad de productos.',
    image: '/projects/blockchain-supply.jpg',
    tags: ['Solidity', 'React', 'Node.js', 'Ethereum'],
    link: 'https://supply-chain.example.com',
    github: 'https://github.com/user/supply-chain',
    status: 'En Desarrollo',
    startDate: '2024-01',
    technologies: {
      frontend: ['React', 'Web3.js', 'Material-UI'],
      backend: ['Node.js', 'Express'],
      database: ['IPFS', 'PostgreSQL'],
      otros: ['Solidity', 'Ethereum']
    }
  }
];