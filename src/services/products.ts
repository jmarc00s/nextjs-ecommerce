import { Product } from '@/types';

export async function getProducts(cache: RequestCache = 'default') {
  const response = await fetch('https://fakestoreapi.com/products', {
    cache,
  });
  return (await response.json()) as Product[];
}
