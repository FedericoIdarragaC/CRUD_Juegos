import { Component, OnInit, HostBinding } from '@angular/core';
import {GamesService} from '../../services/games.service';
import {Game} from '../../modules/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = ('row');

  games: any = [];

  constructor(private gameService:GamesService) { 
    this.getGames();
  }

  ngOnInit() {
    this.getGames();
  }

  getGames()
  {
    this.gameService.getGames().subscribe(
      res => this.games = res,
      err => console.log(err)
    );
  }

  DeleteGame(id)
  {
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    )
  }

  editGame(id)
  {
    console.dir(id);
  }
}
