import styles from './paginator.module.css';
import React, {useState} from "react";
import cn from "classnames";

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize

    return(<div className={styles.paginator}>
            { portionNumber > 1 &&
                <button className={styles.button} onClick={() => {setPortionNumber(portionNumber - 1)}}>Назад</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={cn({
                    [styles.selectedPage]:props.currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
            { portionCount > portionNumber &&
                <button className={styles.button} onClick={()=>{setPortionNumber(portionNumber + 1)}}>Вперед</button>}
        </div>
    )
}

export default Paginator;