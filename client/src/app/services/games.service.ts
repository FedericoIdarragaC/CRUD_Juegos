import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';

import { Game } from '../modules/Game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  api_uri="http://localhost:3000/api";
  constructor(private http: HttpClient) 
  { 

  }
  getGames()
  {
    return this.http.get(this.api_uri+'/games');
  }
  getGame(id: string)
  {
    return this.http.get(this.api_uri+"/games/"+id);
  }
  saveGame(game:Game)
  {
    return this.http.post(this.api_uri+"/games/",game);
  }
  deleteGame(id: string)
  {
    return this.http.delete(this.api_uri+"/games/"+id);
  }
  update(id:string|number,updatedGame: Game)
  {
    return this.http.put(this.api_uri+"/games/"+id,updatedGame);
  }
  
}
