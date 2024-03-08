import { Field, useFormikContext } from "formik";
import ReactMarkDown from "react-markdown"
import './MarkdownField.css';



export default function MarkdownField(props:markdownFieldProps){
   const {values}=useFormikContext<any>();
    return(
        <div className="mb-3 form-markdown" >
            <div>
                <label>
               {props.displayName}
                </label>
                <div>
                    <Field name={props.field} as="textarea" className="form-textarea"/>
                </div>
            </div>
            <div>
                <label>
                    {props.displayName} (preview):
                </label>
                <div className="markdown-contaainer">
                   <ReactMarkDown>
                    {values[props.field]}
                   </ReactMarkDown>
                </div>
            </div>
        </div>
    )
}

interface markdownFieldProps{
    displayName:string;
    field:string;
}