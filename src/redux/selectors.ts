import {RootState} from "./redux-store";
import {createSelector} from "reselect";
// const state = store.getState()

//Pagination
export const selectTotalUserCount = (state: RootState) => state.usersPage.totalUserCount
export const selectPageSize = (state: RootState) => state.usersPage.pageSize
export const selectPagesCount = createSelector([selectTotalUserCount, selectPageSize],
    (totalUserCount, pageSize) => {
    return Math.ceil(totalUserCount / pageSize)
})
export const selectPageNumber = (state: RootState) => state.usersPage.pageNumber

// ProfilePage
export const selectLoggedInUser = createSelector([(state: RootState) => {
    return state.profilePage.loggedInUser
}], (loggedInUser) => loggedInUser)
export const selectLoadingStatus = (state: RootState) => state.profilePage.loadingStatus

//MyPosts
export const selectPosts = createSelector([(state: RootState) => {
    return state.profilePage.posts
}], (posts) => posts)

//UsersPage
export const selectUsersPage = createSelector([(state: RootState) => state.usersPage],
    (usersPage) => usersPage)

//withAuthRedirect
export const selectIsLogin = (state: RootState) => state.authentication.isLogin

//App
export const selectAppReady =  (state: RootState) => state.app.appReady

//Dialogs
export const selectDialogsPage = createSelector([(state: RootState) => state.dialogsPage],
    (dialogsPage) => dialogsPage)
