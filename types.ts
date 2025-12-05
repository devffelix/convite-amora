import { LucideIcon } from 'lucide-react';

export interface ItineraryItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image?: string;
}

export enum AppState {
  LOCKED, // The initial envelope/cover
  OPENING, // The transition animation
  VIEWING, // Scrolling through the plan
  ACCEPTED // After she says yes
}