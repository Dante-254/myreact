import { ReactNode } from "react";

interface alertProps{
    children : ReactNode;
    onClose: () => void
}


const Alert = ({children, onClose}: alertProps) => {
  return (
    <div className="alert alert-info alert-dismissible fade show">{children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert