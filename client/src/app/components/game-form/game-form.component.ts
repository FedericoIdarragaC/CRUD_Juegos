import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/modules/Game';
import { GamesService } from 'src/app/services/games.service';
import { from } from 'rxjs';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  game: any = {
    id : 0,
    title : "",
    description : '',
    image : '',
    created_at : new Date()
  };
  
  edit:boolean = false;

  constructor(private gameService:GamesService,private route:Router,private activeRoute:ActivatedRoute) {

  }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.id)
    {
      return this.gameService.getGame(params.id).subscribe((res) => {
        console.log(res);
        this.game = res;
        this.edit = true;
      });
    }  }

  saveNewGame()
  {
    delete this.game.created_at;
    delete this.game.id;
    
      this.gameService.saveGame(this.game).subscribe(
        res => 
        {
          console.log(res);
          this.route.navigate(['/games']);
        },
        err => console.log(err)
      );
  }
  updateGame()
  {
    delete this.game.created_at;
    this.gameService.update(this.game.id,this.game).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/games']);
      },
      err => {console.log(err)}
    )
  }
}
