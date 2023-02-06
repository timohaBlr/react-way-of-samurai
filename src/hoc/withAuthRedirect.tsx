import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

export type MapStatePropsType = {
    isLogin: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isLogin: state.authentication.isLogin
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const redirectComponent = (props: MapStatePropsType) => {
        debugger
        let {isLogin, ...restProps} = props
        if (!isLogin) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }


    return connect(mapStateToProps,{})(redirectComponent)
}