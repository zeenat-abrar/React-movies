import ActorForm from "./ActorForm";

export default function EditActor(){
    return(
        <>
        <h3>Edit Actor</h3>
        <ActorForm model={{name:'tom',dateOfBirth:new Date('1996-06-01T00:00:00'),
        biography:`# Something
        This person was born in **DR**`,
          pictureURL:'https://th.bing.com/th/id/OIP.STmTzXzoHInhuDJicKXdfwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
    }}
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}