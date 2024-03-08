import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){
    return(
        <>
        <h3>Edit Movie theater</h3>
        <MovieTheaterForm
        model={{name:'sambil'}}
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}