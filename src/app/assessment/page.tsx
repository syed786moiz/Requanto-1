import type { Metadata } from 'next';
import AssessmentPage from '@/views/AssessmentPage';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment',
  description: '10-question AI maturity assessment for your organization.',
};

export default function Page() {
  return <AssessmentPage />;
}
