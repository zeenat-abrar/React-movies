
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import { ReactElement } from "react-markdown";
import { useState } from "react";


export default function TypeAheadActors(props:typeAheadActorsProps){
   
   const actors:actorMovieDTO[]=[{
    id:1,name:'gian',character:'',picture:'https://th.bing.com/th?id=OIP.K05KLRguazP2mX2bqDGKZwHaMl&w=191&h=325&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
   },{
    id:2,name:'schinchan',character:'',picture:'https://www.enwallpaper.com/wp-content/uploads/2021/05/400-4009174-cartoon-crayon-shin-chan-hd-png-download.png'
   },{
    id:3,name:'doraemon',character:'',picture:'https://th.bing.com/th?id=OIP.uXLLU88V0TEjbvPPIBchmQHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
   },{
    id:4,name:'tom',character:'',picture:'https://th.bing.com/th?id=OIP.XPXaFc6wSOdJXn69ovAFnAHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
   },{
    id:5,name:'jerry',character:'',picture:'https://th.bing.com/th?id=OIP.B36MsMfrQMF84D7nz5aqRAHaJb&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
   }]
   
   const selected: actorMovieDTO[]=[];
const[draggedElement,setDraggedElement]=useState<actorMovieDTO | undefined>(undefined);

   function handleDragStart(actor:actorMovieDTO){
      setDraggedElement(actor);
   }
   function handleDragOver(actor:actorMovieDTO){
    if(!draggedElement){
        return;
    }
    if(actor.id!==draggedElement.id){
        const draggedElementIndex=props.actors.findIndex(x=>x.id === draggedElement.id)
        const actorIndex=props.actors.findIndex(x=>x.id === actor.id)
        const actors=[...props.actors];
        actors[actorIndex]=draggedElement;
        actors[draggedElementIndex]=actor;
        props.onAdd(actors);
    }
   }
    return(
        <div className="mb-3">
        <label>{props.displayName}</label>
        <Typeahead
        id="typeahead"
        onChange={actors=>{
            if(props.actors.findIndex(x=>x.id===actors[0].id)=== -1){
                props.onAdd([...props.actors, actors[0]])
            }
            
            console.log(actors)
        }}
        options={actors}
        labelKey={actor=>actor.name}
        filterBy={['name']}
        placeholder="Write the name of the actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={actor=>(
            <>
            <img alt="actor" src={actor.picture}
            style={{

                height:'64px',
                marginRight:'10px',
                width:'64px'
            }}
            />
            <span>{actor.name}</span>
            </>
        )}
        />
        <ul className="list-group">
         {props.actors.map(actor=><li key={actor.id}
         draggable={true}
         onDragStart={()=>handleDragStart(actor)}
         onDragOver={()=>handleDragOver(actor)}
         className="list-group-item list-group-item-action"
         >
            {props.listUI(actor)}
            <span className="badge badge-primary badge-pill pointer text-dark"
            style={{marginLeft:'0.5rem'}}
            onClick={()=>props.onRemove(actor)}
            
            >X</span>
            </li>)}
        </ul>
        </div>
    )
}

interface typeAheadActorsProps{
    displayName:string;
    actors:actorMovieDTO[];
    onAdd(actors:actorMovieDTO[]):void;
    onRemove(actor:actorMovieDTO):void;
    listUI(actor: actorMovieDTO):ReactElement;
}