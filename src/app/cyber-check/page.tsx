import type { Metadata } from 'next';
import CyberCheckPage from '@/views/CyberCheckPage';

export const metadata: Metadata = {
  title: 'Cybersecurity Health Check',
  description: 'Instant cybersecurity scorecard for your organization.',
};

export default function Page() {
  return <CyberCheckPage />;
}
