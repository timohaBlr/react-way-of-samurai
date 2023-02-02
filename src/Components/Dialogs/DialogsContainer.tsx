import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addNewMessageAC, DialogsInitialStateType, updateNewMessageAC} from "../../redux/reducers/dialogs-add-reducer";
import React from "react";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";



export type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}
export type mapDispatchToProps = {
    addMessage: () => void
    updateTextArea: (value: string) =>void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateTextArea: (value: string) => {
            dispatch(updateNewMessageAC(value))
        }

    }
}
export const DialogsContainer =React.memo( connect(mapStateToProps, mapDispatchToProps)(Dialogs))