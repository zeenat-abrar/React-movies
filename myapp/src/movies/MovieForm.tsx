import {Form,Formik} from 'formik';
import { movieCreationDTO } from './movies.model';
import * as Yup from 'yup';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';



export default function MovieForm(props: movieFormProps){
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            title:Yup.string().required('This field is required').firstLetterUppercase()
        })}
        >
{(formikProps)=>(
    <Form>

      <TextField displayName='Title' field='title'/>


        <Button disabled={formikProps.isSubmitting} type='submit' className='btn btn-primary'>Save changes</Button>
       <Link className='btn btn-secondary' to="/genres">Cancel</Link>
    </Form>
)}
        </Formik>
    )
}

interface movieFormProps{
    model:movieCreationDTO;
    onSubmit(values:movieCreationDTO, actions:FormikHelpers<movieCreationDTO>):void
}