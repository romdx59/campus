import { ProductNotFoundError, type Product } from './product.js';
import type { Logger } from './logger.js';

export class ProductsService {
  private products: Product[] = [];
  private nextId = 1;

  constructor(private readonly logger: Logger) {}

  create(data: Omit<Product, 'id'>): Product {
    const product: Product = { id: this.nextId++, ...data };
    this.products.push(product);
    this.logger.log(`Produit créé : ${product.name} (id ${product.id})`);
    return product;
  }

  findAll(): Product[] {
    return [...this.products];
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      this.logger.error(`findOne(${id}) : aucun produit`);
      throw new ProductNotFoundError(id);
    }
    return product;
  }
}