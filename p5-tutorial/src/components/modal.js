import React from 'react'
import ReactDOM from 'react-dom'

const ModalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#fff',
  zIndex: 1000,
}

const OverlayStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 1000,
}

export default function Modal({open, children, toggle}) {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div style={OverlayStyles}>
        <div style={ModalStyles}>
          <p onClick={toggle}>X</p>
          {children}
        </div>
      </div>
    </>, document.getElementById("portal"))
}

