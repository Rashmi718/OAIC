import type { Topic } from '@/types';

export const topics: Topic[] = [
  {
    category: 'Machine Learning & Deep Learning',
    items: [
      'Large Language Models (LLMs)',
      'Generative AI & Foundation Models',
      'Federated Learning & Privacy-Preserving ML',
      'Explainable AI (XAI)',
      'Reinforcement Learning',
      'Transfer Learning & Domain Adaptation',
    ],
  },
  {
    category: 'AI Applications',
    items: [
      'AI for Healthcare & Bioinformatics',
      'AI in Agriculture & Rural Development',
      'AI for Smart Cities & Urban Planning',
      'AI in Education & EdTech',
      'AI for Climate & Environmental Sustainability',
      'AI in Manufacturing & Industry 4.0',
    ],
  },
  {
    category: 'Computer Vision & NLP',
    items: [
      'Image Recognition & Object Detection',
      'Natural Language Processing (NLP)',
      'Multilingual & Low-Resource NLP',
      'Speech Recognition & Synthesis',
      'Video Understanding & Generation',
    ],
  },
  {
    category: 'Ethics, Policy & Society',
    items: [
      'Responsible & Ethical AI',
      'AI Governance & Policy Frameworks',
      'Bias, Fairness & Transparency in AI',
      'AI for Social Good',
      'Digital Inclusion & AI Equity',
    ],
  },
  {
    category: 'Emerging & Interdisciplinary',
    items: [
      'Quantum Computing & AI',
      'AI + Blockchain',
      'Robotics & Autonomous Systems',
      'Edge AI & TinyML',
      'Human-AI Interaction (HAI)',
    ],
  },
];

export const submissionTypes = [
  {
    type: 'Full Paper',
    pages: '8–10 pages',
    description: 'Original, unpublished research contributions.',
  },
  {
    type: 'Short Paper',
    pages: '4–6 pages',
    description: 'Concise research or work-in-progress.',
  },
  {
    type: 'Industry Paper',
    pages: '4–6 pages',
    description: 'Applied AI research from industry practitioners.',
  },
  {
    type: 'Demo / Poster',
    pages: '2–4 pages',
    description: 'Live demonstrations and poster presentations.',
  },
];
