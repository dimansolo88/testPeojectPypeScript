import React, {useState} from 'react';
import style from "./Paginator.module.css"


interface Iprops {
    totalUsers:number,
    quantityUsersOnPage:any,
    onChanhePage:Function,
    currentPage:number,

}

const Paginator = ({totalUsers,quantityUsersOnPage,onChanhePage , currentPage}: Iprops)  => {

    let quantityUsersPages = Math.ceil(totalUsers / quantityUsersOnPage);

    let quantityPages = [];
    for (let i = 1; i <= quantityUsersPages; i++) {
        quantityPages.push(i)
    }

    let portionSize:number = 10
    let portionCount: number = Math.ceil(quantityUsersPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(2);
    let leftPortion: number = (portionNumber - 1) * portionSize + 1;
    let rightPortion: number = portionNumber * portionSize;


    return (
        <div className={style.pageHover}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> PREW </button>}

            {quantityPages.filter((p: number) => p >= leftPortion && p <= rightPortion)
                .map((p: number) => {
                    return <span key={p} onClick={() => {
                        onChanhePage(p)
                    }}
                                 className={currentPage === p ? style.numberLInk : ""}>
                        {p}
                    </span>
                })
            }

            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> NEXT </button>}


        </div>
    )
}


export default Paginator;
