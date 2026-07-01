import type { Metadata } from 'next';
import FinancialServicesPage from '@/views/FinancialServicesPage';

export const metadata: Metadata = {
  title: 'Financial Services',
  description: 'AI risk, AML, KYC, audit automation, and financial workflow solutions.',
};

export default function Page() {
  return <FinancialServicesPage />;
}
