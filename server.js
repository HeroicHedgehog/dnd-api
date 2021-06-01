const fastify = require('fastify')({
  logger: true
})
const mariadb = require('mariadb');
const credentials = require('dotenv').config();


fastify.register(require("fastify-cors"), { // CORS headers 
  origin: "*",
  methods: "OPTIONS,GET,POST,PUT",
});

fastify.listen(1212, err => {
  if (err) throw err
  console.log('Server listening at http://localhost:3000')
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.post('/getCharacter', async function (request, reply) {
const connection = await mariadb.createConnection(credentials.parsed)
const query = `SELECT * FROM dnd.character WHERE characterID = ${request.body.id}`
results = await connection.query(query, [])
return results;
})

fastify.post('/newCharacter', async function (request, reply) {
const connection = await mariadb.createConnection(credentials.parsed)
const query = `INSERT INTO dnd.character (name, class, race, intelligence, wisdom, 
                charisma, strength, dexterity, height, weight, level, speed, healthpoints, 
                gold, copper, silver, platinum, alignment, temphp, inspiration, 
                deathsavefail, deathsavesuccess, constitution)
                VALUES ('${request.body.name}', '${request.body.class}', '${request.body.race}', 
                ${request.body.intelligence}, ${request.body.wisdom}, ${request.body.charisma}, ${request.body.strength}, 
                ${request.body.dexterity}, ${request.body.height}, ${request.body.weight}, ${request.body.level}, 
                ${request.body.speed}, ${request.body.healthpoints}, ${request.body.gold}, ${request.body.copper}, 
                ${request.body.silver}, ${request.body.platinum}, '${request.body.alignment}', ${request.body.temphp}, 
                ${request.body.inspiration}, ${request.body.deathsavefail}, ${request.body.deathsavesuccess}, ${request.body.constitution})`
results = await connection.query(query, [])
return results;
})

fastify.post('/newItem', async function (request, reply) {
const connection = await mariadb.createConnection(credentials.parsed)
const query = `INSERT INTO dnd.items (characterID, name, description, equipped)
               VALUES (${request.body.characterID}, '${request.body.name}', '${request.body.description}', ${request.body.equipped})`
results = await connection.query(query, [])
return results;
})