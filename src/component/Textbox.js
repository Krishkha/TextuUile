import React, {useState} from 'react'

export default function Textbox(props) {
    //uppercase
    const hendleupclick = () =>{
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        SetText(newtext);
    }

    //lowercase
    const hendlelowclick = () =>{
        let newtext = text.toLowerCase();
        SetText(newtext);
    }

    const hendlecopy = () =>{
        const text = document.getElementById('mytext')
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const hendleonchange = (event) =>{
        console.log("on change");
        SetText(event.target.value);
    }

    const[text,SetText] = useState("Enter the text here")
    // SetText("New text")
    return (
    <>
    <div className='container'>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={hendleonchange} id="mytext" rows="20"></textarea>
        </div>
            <button className="btn btn-primary mx-2"  onClick={hendleupclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={hendlelowclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={hendlecopy}>Copy Text</button>
    </div>
    <div className="container my-3" >
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} charactors</p>
        <p>{0.08 * text.split(" ").length} minutes to reade</p>\
        <h2>Priview</h2>
        <p>{text}</p>
    </div>
</>
    )
}
