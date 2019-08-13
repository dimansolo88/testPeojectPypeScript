import {auhMeThunkCreator} from "./Auth-reducer";

let initialisatiom_ap = "initialisatiom_ap";



export interface Istate {
    initialisation:any
}




let initialisationState: Istate  = {
    initialisation: null,
};


const appReducer = (state = initialisationState, action:any): Istate  => {
    switch (action.type) {
        case initialisatiom_ap: {

            return{
                ...state,
                initialisation: true,

            }
        }

        default: return state
    }

};

export default appReducer;


export const initialisationActionCreator = () => ({
    type:initialisatiom_ap

});



export const initiakisationThunkCreator = () => (dispatch:Function) => {
    let pr = dispatch(auhMeThunkCreator());
    Promise.all([pr]).then(
        () => {
            dispatch(initialisationActionCreator())
        }
    )
};





