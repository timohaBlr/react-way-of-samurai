import React, {MouseEvent} from "react";
import {useAppSelector} from "../../redux/hooks";
import {selectPageNumber, selectPagesCount} from "../../redux/selectors";
import s from "./Users.module.css";

type PaginationPropsType = {
    setCurrentPageCallBack: (currentPage: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({setCurrentPageCallBack}) => {

    const pagesCount = useAppSelector(selectPagesCount)
    const pageNumber = useAppSelector(selectPageNumber)

    const spanOnClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
        const pageNumber = Number(e.currentTarget.textContent)
        setCurrentPageCallBack(pageNumber)
    }
    const buttonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value)
        const buttonsPageNumber = Number(e.currentTarget.value)
        setCurrentPageCallBack(buttonsPageNumber)
    }
    let arrPages = [pageNumber - 4, pageNumber - 3, pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2, pageNumber + 3, pageNumber + 4];


    const mappedArrPages = arrPages.filter(f => {
        return (f > 0 && f < pagesCount)
    })
        .map(m => {
            return <span key={m}
                         className={m === pageNumber ? s.pageNumber : ''}
                         onClick={spanOnClickHandler}>{m}</span>
        })
    return (
        <div>
            <button name={'first'}
                    value={1}
                    onClick={buttonClickHandler}>First
            </button>
            <button name={'previous'}
                    value={pageNumber - 1}
                    onClick={buttonClickHandler}>Previous
            </button>
            {mappedArrPages}
            <button name={'next'}
                    value={pageNumber + 1}
                    onClick={buttonClickHandler}>Next
            </button>
            <button name={'last'}
                    value={pagesCount}
                    onClick={buttonClickHandler}>Last
            </button>

        </div>
    )
}