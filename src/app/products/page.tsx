import type { Metadata } from 'next';
import ProductsPage from '@/views/ProductsPage';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Requanto AI enterprise platforms — mySFT AI, Studio, Shield, Command, and more.',
};

export default function Page() {
  return <ProductsPage />;
}
