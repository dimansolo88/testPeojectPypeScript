import {createSelector} from "reselect";

const getSelectDialogIDSelector = (state:any) => {
    return state.dialogspages.selectDialogID

};

export const getSelectDialogId = createSelector(getSelectDialogIDSelector, (selectDialogID) => {
    return selectDialogID
} )

