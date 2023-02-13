import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";
import {selectIsLogin} from "../redux/selectors";

export type MapStatePropsType = {
    isLogin: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isLogin: selectIsLogin(state),
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isLogin, ...restProps} = props
        if (!isLogin) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }


    return connect(mapStateToProps, {})(RedirectComponent)
}