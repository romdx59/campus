interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Clavier mécanique",
        price: 89.99,
        description: "Clavier mécanique RGB"
    },
    {
        id: 2,
        name: "Souris gaming",
        price: 39.99,
        description: "Souris sans fil"
    },
    {
        id: 3,
        name: "Écran 24 pouces",
        price: 149.99,
        description: "Écran Full HD"
    },
    {
        id: 4,
        name: "Casque audio",
        price: 49.99
    },
    {
        id: 5,
        name: "Tapis de souris",
        price: 12.99,
        description: "Tapis antidérapant"
    }
];

/**function findById(products: Product[], id: number): Product | undefined {
    return products.find(product => product.id === id);
}

function cheaperThan(products: Product[], max: number): Product[] {
    return products.filter(product => product.price < max);
}

const id = Number(process.argv[2] ?? 0);

const product = findById(products, id);

if (product) {
    console.log(`Nom : ${product.name}`);
    console.log(`Prix : ${product.price} €`);
    console.log(`Description : ${product.description ?? "Pas de description"}`);
} else {
    console.log(`Produit ${id} introuvable`);
}

console.log("\nProduits à moins de 50 € :");

const cheapProducts = cheaperThan(products, 50);

cheapProducts.forEach(product => {
    console.log(product.name);
});*/

import { ConsoleLogger, SilentLogger, TimestampLogger, type Logger } from './logger.js';
import { ProductNotFoundError } from './product.js';
import { ProductsService } from './products.service.js';

const logger: Logger = new ConsoleLogger();
const service = new ProductsService(logger);

service.create({ name: 'Clavier mécanique', price: 89.99, description: 'Clavier mécanique RGB' });
service.create({ name: 'Souris gaming', price: 39.99, description: 'Souris sans fil' });
service.create({ name: 'Casque audio', price: 49.99 });

const id = Number(process.argv[2] ?? 1);

try {
  const product = service.findOne(id);
  console.log(`Nom : ${product.name}`);
  console.log(`Prix : ${product.price} €`);
  console.log(`Description : ${product.description ?? 'Pas de description'}`);
} catch (error) {
  if (error instanceof ProductNotFoundError) {
    console.log(error.message);
  } else {
    throw error;
  }
}