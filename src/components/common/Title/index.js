import React from "react"
import "./Title.scss"

const Title = ({children}) => {
    return (<h1 className="title"><span className="title__content">{children}</span></h1>)
}

export default Title;
