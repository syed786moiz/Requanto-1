import type { Metadata } from 'next';
import ServicesPage from '@/views/ServicesPage';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Virtual CISO, Virtual CTO, managed IT, and technology advisory services.',
};

export default function Page() {
  return <ServicesPage />;
}
