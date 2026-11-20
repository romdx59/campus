import slugify from 'slugify'

const name = process.argv[2]
console.log(`Bienvenue sur Campus, ${name} ! `)
const id = slugify(name, { lower: true, strict: true })
const date = new Date();
console.log("Date du jour :", date.toLocaleDateString("fr-FR"));
console.log("ID :", id);