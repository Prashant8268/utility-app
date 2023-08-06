// action constants


// aaction cratores
export const ADD_NOTE = "Add note";
export const DELETE_NOTE= "Delete note";

 export const  handleAdd = (text)=> ({text, type:ADD_NOTE});
 export const handleRemove = (index)=>({index, type:DELETE_NOTE});

