import type { Metadata } from 'next';
import ResourcesPage from '@/views/ResourcesPage';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Blogs, case studies, guides, and AI transformation resources.',
};

export default function Page() {
  return <ResourcesPage />;
}
