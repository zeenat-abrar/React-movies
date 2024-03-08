export default function Button(props: buttonProps){
  const { type = "button", disabled = false, className, onClick } = props;
    return <button 
    type={type} 
    disabled={disabled}
    className={className}
    onClick={onClick}
    >{props.children}</button>
}

interface buttonProps{
  children: React.ReactNode;
  onClick?():void;
  type?:"button"|"submit";
  disabled?:boolean;
  className:string;
}

Button.deafultProps={
    type:"button",
    disabled:false,
    className:"btn btn-primary"
}