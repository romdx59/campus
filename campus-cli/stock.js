const stock = Number(process.argv[2] ?? 0);

if (stock === 0) {
    console.log("Rupture de stock");
} else {
    console.log(`${stock} exemplaires disponibles`);
}