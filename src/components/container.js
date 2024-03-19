import React from "react"
import { container } from "../styles/container.module.css"

const Container = ({ children }) => {
    return (
        <div className={container}>
            {children}
        </div>
    )
}
export default Container