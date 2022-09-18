import './ConfirmationPopup.css';
import { Button } from './Button';

function ConfirmationPopup(props){
    return (
        <>
        <div className={props.showConfirmationPopup ? 'confirmation-popup-show' : 'confirmation-popup-hidden'}>
            <h1>Attenzione</h1>
            <h2>Per accedere devi essere maggiorenne</h2>
            <Button buttonStyle="btn--outline--green" onClick={props.hideConfirmationPopup}>Sono maggiorenne</Button>
            {/*Se il tizio dice che non è maggiorenne lo sparo su google... che schifo*/}
            <Button buttonStyle="btn--outline--red" onClick={() => {window.location.href="https://www.google.com"}}>Non sono maggiorenne</Button>
        </div>
        </>
    );
}

export default ConfirmationPopup