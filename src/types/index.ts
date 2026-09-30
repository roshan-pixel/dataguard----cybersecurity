export interface NavItem {
  label: string;
  href: string;
}

export interface SecurityFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SecurityTab {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  stats: {
    label: string;
    value: string;
  }[];
  imageSrc: string;
}

export interface ThreatAlert {
  id: string;
  label: string;
  ip: string;
  location: string;
  status: 'critical' | 'warning' | 'mitigated';
  timestamp: string;
}

export interface StepItem {
  id: string;
  title: string;
  description: string;
  details: string;
  terminalLogs: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  portraitSrc: string;
}
