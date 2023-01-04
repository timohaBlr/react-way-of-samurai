import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {Dialogs} from "./Dialogs";
import {addNewMessageAC, DialogsInitialStateType, updateNewMessageAC} from "../../redux/reducers/dialogs-add-reducer";
import React from "react";



export type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}
export type mapDispatchToProps = {
    addMessage: () => void
    updateTextArea: (value: string) =>void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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