import MovieForm from "./MovieForm";

export default function EditMovie(){
    return(
        <>
        <h3>edit movie</h3>
        <MovieForm model={{title:'Toy story',inTheaters:true,trailer:'url',
       releaseDate: new Date('2024-01-01T00:00:00')    
    }} 
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}