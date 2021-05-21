import {Router} from 'express';
import { indexControllers } from '../controllers/indexController';

class IndexRoutes 
{
    public router: Router = Router();
    constructor()
    {
        this.config();
    }

    config():void{
        this.router.get('/',indexControllers.index);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;