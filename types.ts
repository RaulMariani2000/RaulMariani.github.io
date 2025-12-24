
import React from 'react';

export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  category: 'web' | 'ai' | 'design' | 'other';
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum Section {
  Home = 'home',
  Work = 'work',
  About = 'about',
  Contact = 'contact'
}
