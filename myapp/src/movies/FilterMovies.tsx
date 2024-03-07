import { Formik } from "formik"

export default function FilterMovies(){

// const initialValues: filterMoviesForm={
//     title:'',
//     genreId:0,
//     upcomingReleases:false,
//     inTheaters:false
// }

    return(
        <>
        <h3>filter movie</h3>
        {/* <Formik initialValues={initialValues} onSubmit={values=>console.log(values)}>
{{formikProps}=>(
    <Form>
        <div className="row gx-3 allign-items-center">
          <div className="col-auto">
           <input type="text" className="form-control" id="title"
           name="title" placeholder="Title of the movie"
        {...formikProps.getFieldProps("title")}
        />
          </div>
        </div>
    </Form>
)}
        </Formik> */}
        </>
    )
}