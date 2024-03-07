import { ErrorMessage, Field } from "formik";

export default function TextField(props:textFieldProps){
return(
    <div className="form-group">
    <label htmlFor={props.field}>{props.displayName}</label>
    <Field name={props.field} className="form-control" id={props.field}/>
    <ErrorMessage name={props.field}>{msg=>
    <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>
)
}

interface textFieldProps{
    field:string;
    displayName:string;
}