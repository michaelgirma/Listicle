import { pool } from '../config/database.js'

const getGifts = async (req,res) => {
    try{
        const request = await pool.query('SELECT * FROM Naruto ORDER BY id ASC')
        res.status(200).json(request.rows)
    }catch(error){
        res.status(409).json({error: error.message})
    }
}

export default {
    getGifts
}