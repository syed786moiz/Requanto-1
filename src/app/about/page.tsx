import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Requanto Technologies — our mission, values, and leadership team.',
};

export default function Page() {
  return <AboutPage />;
}
