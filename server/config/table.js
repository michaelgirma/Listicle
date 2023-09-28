import {pool} from "./database.js"
import './dotenv.js'
import characterData from '../data/NarutoData.js'

const createGiftsTable = async () =>{
    const createTableQuery = `
    DROP TABLE IF EXISTS Naruto;

    CREATE TABLE IF NOT EXISTS Naruto (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        ranking VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
`

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 Naruto table created successfully')
    }catch (err) {
        console.error('⚠️ error creating Naruto table', err)
    }
}

const seedGiftsTable = async () => {
    await createGiftsTable()

    characterData.forEach((character) => {
        const insertQuery = {
            text: 'INSERT INTO Naruto (name, location, ranking, image, description) VALUES ($1, $2, $3, $4, $5)',
            values: [
                character.name,
                character.location,
                character.ranking,
                character.image,
                character.description
            ]
        }

        pool.query(insertQuery.text, insertQuery.values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting character', err)
                return
            }
        
            console.log(`✅ ${character.name} added successfully`)
        })
    })
}

seedGiftsTable()