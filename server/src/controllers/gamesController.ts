import {Request,Response, request} from 'express'
import pool from '../database';

class GamesControllers
{
    public async list(req: Request,res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }
    public async getOne(req:Request,res:Response)
    {
        const game = await pool.query("SELECT * FROM games WHERE id = ?",req.params.id);
        if(game.length > 0)
        {
            res.json(game[0]);
        }
        else{
            res.status(404).json({"text":"Game dont exist"});
        }
        
    }
    public async create(req: Request,res: Response): Promise<void>
    {
        await pool.query('INSERT INTO games SET ?',[req.body]);
        res.json({"message":"Game saved"});
    }
    public async delete(req: Request,res: Response)
    {
        await pool.query("DELETE FROM games WHERE id = ?",req.params.id);
        res.json({"text":"Game deleted"});
    }
    public async update(req: Request,res: Response)
    {
        pool.query("UPDATE games SET ? WHERE id = ?",[req.body,req.params.id]);
        res.json({"text":"Game updated"});
    }
}

export const gamesController = new GamesControllers();