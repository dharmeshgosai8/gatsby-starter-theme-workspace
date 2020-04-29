import React from "react"
import View from "../components/View"
import "../styles/style.css"

export default ({ children }) => (
    <div className="container">
        <View />
        {children}
    </div>
)