import React, {useState} from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CURRENT_STYLE ={
    posistion: 'relative',
    zIndex: 2 ,
    backgroundColor: 'red',
    padding: '10px'
}

export default function App(){
    const [isOpen, setIsOpen] = useState(false)
    return (
    <>
        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
            <button onClick={() => setIsOpen(true)}> Open Model</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Fancy Model
            </Modal>
        </div>

        <div style={OTHER_CURRENT_STYLE}> Other Content</div>
    </>
    )
}