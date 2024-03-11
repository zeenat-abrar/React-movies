import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie(){
    
    const nonSelectedGenres:genreDTO[]=[{id:2, name:'Drama'}]
    const selectedGenres:genreDTO[]=[{id:1, name:'Comedy'}]

    const nonSelectedMovieTheaters:movieTheaterDTO[]=
    [{id:2,name:'Agora'}]

    const selectedMovieTheaters:movieTheaterDTO[]=
    [{id:1,name:'Sambil'}]

    const selectedActors: actorMovieDTO[]=[{
        id:1,name:'gian',character:'Geralt',picture:'https://th.bing.com/th?id=OIP.K05KLRguazP2mX2bqDGKZwHaMl&w=191&h=325&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
       }];

    return(
        <>
        <h3>edit movie</h3>
        <MovieForm model={{title:'Toy story',inTheaters:true,trailer:'url',
       releaseDate: new Date('2024-01-01T00:00:00')    
    }} 
        onSubmit={values=>console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}

        nonSelectMovieTheaters={nonSelectedMovieTheaters}
        selectMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
        />
        </>
    )
}