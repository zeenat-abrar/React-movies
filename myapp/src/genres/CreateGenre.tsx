import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { Field, Form, Formik } from "formik";

export default function CreateGenre(){
   // const history=useHistory()
    return(
        <>
        <h3>Create Genre</h3>

<Formik initialValues={{
    name:''
}}
onSubmit={value=>{
    //when the form is posted
    console.log(value)
}}
>

<Form>
    <div className="form-group">
<label htmlFor="name">Name</label>
<Field name="name" className="form-control" id='name'/>
    </div>
    <Button type='submit'>Save Changes</Button>
    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
</Form>

</Formik>



        
        </>
    )
}