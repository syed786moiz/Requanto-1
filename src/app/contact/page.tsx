import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a consultation, request a demo, or talk to a Requanto expert.',
};

export default function Page() {
  return <ContactPage />;
}
