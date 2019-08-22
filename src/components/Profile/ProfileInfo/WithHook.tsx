import React, {useEffect, useState} from "react";
import Prealoder from "../../Common/Ptrealoder";

interface Iprops {
    isFetching: any,
    status: string,
    updateStatus: Function


}


const ProfileStatusWithHook = (props: Iprops) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    let activeEditMode = () => {
        setEditMode(true)
    }

    let disableEditMode = () => {
        setEditMode(false)

        props.updateStatus(status)


    }

    let onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }


    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    if (props.status === null) {  // to fix
        return <Prealoder/>
    }

    return (
        <div>

            <div>
                {props.isFetching ? <Prealoder/> : null}
            </div>

            {!editMode ? <div>
                <span onDoubleClick={activeEditMode}> {props.status || "change status"} </span>
            </div> : <div>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={disableEditMode} value={status}/>
            </div>
            }

        </div>
    )
}


export default ProfileStatusWithHook;
