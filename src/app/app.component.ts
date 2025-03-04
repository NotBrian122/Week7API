import { Component, booleanAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie Finder';
  movieData?:IOMDBResponse|undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}

    getMoveIeDetails(movieName:string): boolean {
      this._omdbService.getMovieData(movieName).subscribe(
        movieData => {
          this.movieData=movieData;
          console.log("Drirector Name: "+ this.movieData.Director);
        }
      )
      return false;
    }
  }
  

