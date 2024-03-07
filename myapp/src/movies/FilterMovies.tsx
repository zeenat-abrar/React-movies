import { Field, Form, Formik } from "formik"
import { genreDTO } from "../genres/genres.model";

export default function FilterMovies() {

    const initialValues: filterMoviesForm = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
    }

    const genres: genreDTO[] = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Comedy' }]
    return (
        <>
            <h3>filter movie</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form placeholder={undefined}>
                        <div className="row gx-3 allign-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title"
                                    placeholder="Title of the movie"
                                    {...formikProps.getFieldProps("title")}
                                />
                            </div>
                            <div className="col-auto">
                                <select className="form-select"
                                    {...formikProps.getFieldProps("genreId")}
                                >
                                    <option value="0">--choose a genre--</option>
                                    {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="upcomingReleases"
                                        name="upcomingReleases" type="checkbox" />
                                    <label className="form-check-label" htmlFor="upcomingReleases">Upcoming Releases</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="inTheaters"
                                        name="inTheaters" type="checkbox" />
                                    <label className="form-check-label" htmlFor="inTheaters">In Theaters</label>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filterMoviesForm {
    title: string;
    genreId: number;
    upcomingReleases: boolean;
    inTheaters: boolean;
}