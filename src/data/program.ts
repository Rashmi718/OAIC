import type { ScheduleSlot, Workshop } from '@/types';

export const schedule: ScheduleSlot[] = [
  // Day 1 - October 15
  { day: 1, time: '08:00–09:00', title: 'Registration & Welcome Coffee', type: 'break' },
  { day: 1, time: '09:00–09:30', title: 'Opening Ceremony & Inaugural Address', type: 'social', room: 'Main Hall' },
  { day: 1, time: '09:30–10:30', title: 'Keynote: The Future of AI in India', type: 'keynote', room: 'Main Hall', speaker: 'Dr. Ananya Krishnan' },
  { day: 1, time: '10:30–11:00', title: 'Networking Break', type: 'break' },
  { day: 1, time: '11:00–12:30', title: 'Technical Session 1: Machine Learning & Deep Learning', type: 'panel', room: 'Hall A' },
  { day: 1, time: '12:30–14:00', title: 'Lunch Break', type: 'break' },
  { day: 1, time: '14:00–15:30', title: 'Workshop: Hands-on LLM Fine-tuning', type: 'workshop', room: 'Lab 1' },
  { day: 1, time: '14:00–15:30', title: 'Technical Session 2: Computer Vision', type: 'panel', room: 'Hall B' },
  { day: 1, time: '15:30–16:00', title: 'Coffee Break', type: 'break' },
  { day: 1, time: '16:00–17:30', title: 'Panel: Ethical AI in Practice', type: 'panel', room: 'Main Hall' },
  { day: 1, time: '19:00–21:00', title: 'Welcome Reception & Cultural Evening', type: 'social', room: 'Banquet Hall' },

  // Day 2 - October 16
  { day: 2, time: '09:00–10:00', title: 'Keynote: AI for Sustainable Development', type: 'keynote', room: 'Main Hall', speaker: 'Prof. Rajesh Mohanty' },
  { day: 2, time: '10:00–10:30', title: 'Coffee Break', type: 'break' },
  { day: 2, time: '10:30–12:00', title: 'Technical Session 3: NLP & Multilingual AI', type: 'panel', room: 'Hall A' },
  { day: 2, time: '10:30–12:00', title: 'Workshop: Edge AI & TinyML', type: 'workshop', room: 'Lab 2' },
  { day: 2, time: '12:00–13:30', title: 'Lunch Break', type: 'break' },
  { day: 2, time: '13:30–14:30', title: 'Keynote: Industry AI Adoption Patterns', type: 'keynote', room: 'Main Hall', speaker: 'Dr. Priya Sharma' },
  { day: 2, time: '14:30–16:00', title: 'Technical Session 4: AI Applications', type: 'panel', room: 'Hall A' },
  { day: 2, time: '14:30–16:00', title: 'Poster Session', type: 'panel', room: 'Exhibition Hall' },
  { day: 2, time: '16:00–16:30', title: 'Coffee Break', type: 'break' },
  { day: 2, time: '16:30–18:00', title: 'Hackathon — Ideation Presentations', type: 'workshop', room: 'Main Hall' },
  { day: 2, time: '19:00–21:30', title: 'Conference Banquet Dinner', type: 'social', room: 'Grand Ballroom' },

  // Day 3 - October 17
  { day: 3, time: '09:00–10:00', title: 'Keynote: Reinforcement Learning at Scale', type: 'keynote', room: 'Main Hall', speaker: 'Dr. Siddharth Panda' },
  { day: 3, time: '10:00–10:30', title: 'Coffee Break', type: 'break' },
  { day: 3, time: '10:30–12:00', title: 'Technical Session 5: Ethics & Governance', type: 'panel', room: 'Hall A' },
  { day: 3, time: '10:30–12:00', title: 'Industry Forum: AI Startup Ecosystem', type: 'panel', room: 'Hall B' },
  { day: 3, time: '12:00–13:30', title: 'Lunch Break', type: 'break' },
  { day: 3, time: '13:30–15:00', title: 'Hackathon Final Demos & Judging', type: 'workshop', room: 'Main Hall' },
  { day: 3, time: '15:00–15:30', title: 'Coffee Break', type: 'break' },
  { day: 3, time: '15:30–16:30', title: 'Awards Ceremony & Best Paper Announcement', type: 'social', room: 'Main Hall' },
  { day: 3, time: '16:30–17:00', title: 'Closing Ceremony & Valediction', type: 'social', room: 'Main Hall' },
];

export const workshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Hands-on LLM Fine-tuning with LoRA',
    organizers: ['Dr. Ankit Gupta (IIT Delhi)', 'Dr. Ritu Agarwal (IIIT Hyderabad)'],
    day: 1,
    time: '14:00–15:30',
    room: 'Lab 1',
    abstract: 'This workshop provides a practical introduction to fine-tuning large language models using Low-Rank Adaptation (LoRA). Participants will work with real datasets to adapt pre-trained models for domain-specific tasks in healthcare and agriculture.',
  },
  {
    id: 'w2',
    title: 'Edge AI & TinyML for IoT Applications',
    organizers: ['Prof. Sudhansu Sekhar Singh (VSSUT)', 'Dr. Chhabi Rani Panigrahi (IIIT Bhubaneswar)'],
    day: 2,
    time: '10:30–12:00',
    room: 'Lab 2',
    abstract: 'Learn to deploy AI models on microcontrollers and edge devices. This hands-on workshop covers model quantization, pruning, and deployment on Arduino and Raspberry Pi platforms for real-world IoT scenarios.',
  },
  {
    id: 'w3',
    title: 'Responsible AI: Bias Detection & Mitigation',
    organizers: ['Dr. Priyanka Sharma (Google India)', 'Dr. Sweta Panigrahi (NIT Rourkela)'],
    day: 2,
    time: '14:30–16:00',
    room: 'Lab 3',
    abstract: 'A deep dive into tools and techniques for identifying and mitigating algorithmic bias. Participants will use IBM AI Fairness 360 and other open-source toolkits to audit AI systems across various fairness metrics.',
  },
];
