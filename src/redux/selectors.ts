import {RootState} from "./redux-store";
import {createSelector} from "reselect";



export const selectTotalUserCount = (state: RootState) => state.usersPage.totalUserCount
export const selectPageSize = (state: RootState) => state.usersPage.pageSize
export const selectPagesCount =  createSelector([selectTotalUserCount,selectPageSize], (totalUserCount,pageSize)=> {
    return Math.ceil(totalUserCount / pageSize)
})
export const selectPageNumber = (state: RootState) => state.usersPage.pageNumber
