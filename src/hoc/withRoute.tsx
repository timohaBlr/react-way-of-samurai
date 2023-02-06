import React, {ComponentType} from "react";
import { useParams} from "react-router-dom";




export function withRoute<T>(Component: ComponentType<T>) {
    const RoutedComponent = (props: T) => {
        let {userId} = useParams()
        return <Component userId={userId} {...props}/>
    }
    return RoutedComponent
}
