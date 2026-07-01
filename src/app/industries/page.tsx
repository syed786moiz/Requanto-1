import type { Metadata } from 'next';
import IndustriesPage from '@/views/IndustriesPage';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'AI solutions for real estate, financial services, healthcare, manufacturing, and more.',
};

export default function Page() {
  return <IndustriesPage />;
}
