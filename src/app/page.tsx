import { ProductsGrid } from '@/components/ProductsGrid';
import { HomeBanner } from '@/modules/Home/components';
import { getProducts } from '@/services/products';

export default async function Home() {
  const products = await getProducts('force-cache');

  return (
    <main className="flex flex-col">
      <HomeBanner />
      <ProductsGrid products={products} />
    </main>
  );
}
