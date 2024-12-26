import { ReactNode } from "react";
import Button from "./Button";

interface Props {
    children: ReactNode;
    onClose: () => void;

}

const Alert = ( {children, onClose}: Props) => {
  return (
    <>
    
    <div className="alert alert-primary alert-dismissible"> 
        <strong>
            {children}
        </strong> 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
    </>
  )
}

export default Alert