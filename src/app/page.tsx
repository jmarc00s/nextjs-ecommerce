import { HomeBanner, ProductsGrid } from '@/modules/Home/components';
import { Product } from '@/types';

async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products', {
    cache: 'force-cache',
  });
  return (await response.json()) as Product[];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col">
      <HomeBanner />
      <ProductsGrid products={products} />
    </main>
  );
}
