// middleware gives access to store, action, and next middle ware 
// here we will use the concept of cascade functions or currying in javasCript 


export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){

            console.log("[Log]: "+ action.type+" "+ new Date().toString())
            // now call next midlle ware


            next(action);

            // check the modified store

            console.log(store.getState());

        }
    }
}