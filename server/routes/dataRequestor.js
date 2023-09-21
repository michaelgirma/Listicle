import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import characterData from '../data/NarutoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req,res) =>{
    res.status(200).json(characterData)
})

router.get('/:charaId', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/charaCard.html'))
})

export default router