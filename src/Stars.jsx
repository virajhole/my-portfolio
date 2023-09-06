
import React, { useState } from 'react'


function Stars() {

    const [clickColor1, setclickColor1] = useState(false)

    const changeColor1 = () => {
        setclickColor1(!clickColor1)
        console.log(clickColor1)
    }

    const [clickColor2, setclickColor2] = useState(false)

    const changeColor2 = () => {
        setclickColor2(!clickColor2)
        console.log(clickColor2)
    }

    const [clickColor3, setclickColor3] = useState(false)

    const changeColor3 = () => {
        setclickColor3(!clickColor3)
        setclickColor1(!clickColor1)
        setclickColor2(!clickColor2)
        console.log(clickColor3)
    }

    const [clickColor4, setclickColor4] = useState(false)

    const changeColor4 = () => {
        setclickColor4(!clickColor4)
        console.log(clickColor4)
    }

    const [clickColor5, setclickColor5] = useState(false)

    const changeColor5 = () => {
        setclickColor5(!clickColor5)
        console.log(clickColor5)
    }


    return (

        <div className='stars'>
            <span style={{ color: clickColor1 ? "blue" : "black" }} onClick={changeColor1}>*</span>
            <span style={{ color: clickColor2 ? "blue" : "black" }} onClick={changeColor2}>*</span>
            <span style={{ color: clickColor3 ? "red" : "black" }} onClick={changeColor3}>*</span>
            <span style={{ color: clickColor4 ? "red" : "black" }} onClick={changeColor4}>*</span>
            <span style={{ color: clickColor5 ? "red" : "black" }} onClick={changeColor5}>*</span>
        </div>

    )

}

export default Stars
