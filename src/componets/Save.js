import React,{ useState } from 'react'
import PropTypes from 'prop-types'


const Save = props => {
  let Newin ;
  let Perent_Elm ;
  let Sort_Saved_Get;
  let Re_Saved_Get;
  let Saved_Get = JSON.parse(localStorage.getItem("SAVE"));
  let Saved_Get_Get_lenght;
  let Swich_Esy_Splice ;


  if(Saved_Get !== null){
    Sort_Saved_Get = [...Saved_Get];
    Sort_Saved_Get.map((e,index)=> {if(e){ e["id"]=index; return e }} );
     Re_Saved_Get = Saved_Get.filter((e)=> e.note === undefined || "");
  }
   
  let Saved_Get_Delete = (e)=>{
    Perent_Elm = e.nativeEvent.path[1]
    Delet_Saved(Number(Perent_Elm.id));
    Perent_Elm.style.display = "none";
  };

   Swich_Esy_Splice =(index)=> {
      Saved_Get.splice(Number(index), 1);
    }
    
   let Delet_Saved=(index)=>{
    Saved_Get.filter((e,IN) =>{if (e.id === index){Newin = IN;}} );
    Swich_Esy_Splice(Newin)
     
   localStorage.setItem("SAVE",JSON.stringify(Saved_Get));
}
 

  return (
    <>
       <h1>SAVE</h1>    
       {
        Re_Saved_Get && Re_Saved_Get.map((e, index)=>{
         return (
        <div key={e.id} id={e.id}>
            <span>{e.HH}</span> // <span>{e.NO}</span> // <span>{e.RE}</span> // <span>{e.id}</span> // <span>{e.PR}</span> 
           <button onClick={Saved_Get_Delete}>Delete</button>
        </div>)
        }
        )
      }
         
       
      
    </>
  )
}

Save.propTypes = {}

export default Save