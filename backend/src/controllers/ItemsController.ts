import { Request, Response } from 'express'
import connection from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await connection('items').select('*')
        const serializedData  = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                url_image: `http://192.168.0.105:3333/uploads/${item.image}` 
            }
        })
        return response.json(serializedData)
    }
}

export default ItemsController