import type { Metadata } from 'next';
import InnovationLabPage from '@/views/InnovationLabPage';

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Industry AI solutions from the Requanto innovation lab.',
};

export default function Page() {
  return <InnovationLabPage />;
}
