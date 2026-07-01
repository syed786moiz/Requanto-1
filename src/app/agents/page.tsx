import type { Metadata } from 'next';
import AgentsPage from '@/views/AgentsPage';

export const metadata: Metadata = {
  title: 'AI Agents',
  description: 'Deploy specialized AI agents for sales, compliance, procurement, security, and finance.',
};

export default function Page() {
  return <AgentsPage />;
}
