module.exports = {
    "type": "mysql",
    "url": "http://localhost:3000/",
    "cache": true,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/database/migrations/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/database/migrations/**/*.ts",
       "subscribersDir": "src/subscriber"
    }
 }