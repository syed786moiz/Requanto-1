import type { Metadata } from 'next';
import SolutionsPage from '@/views/SolutionsPage';

export const metadata: Metadata = {
  title: 'AI Solutions',
  description: 'Enterprise AI SaaS, low-code automation, cybersecurity, and executive advisory solutions.',
};

export default function Page() {
  return <SolutionsPage />;
}
