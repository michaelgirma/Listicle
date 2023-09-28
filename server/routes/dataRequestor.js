import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GiftsController from '../controllers/storage.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:charaId', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/charaCard.html'))
})

export default router