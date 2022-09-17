import './ConfirmationPopup.css';
import { Button } from './Button';

function ConfirmationPopup(props){
    return (
        <>
        <div className={props.showConfirmationPopup ? 'confirmation-popup-show' : 'confirmation-popup-hidden'}>
            <h1>Attenzione</h1>
            <h2>Per accedere devi essere maggiorenne</h2>
            <Button onClick={props.hideConfirmationPopup}>Sono maggiorenne</Button>
            {/*Se il tizio dice che non è maggiorenne lo sparo su google... che schifo*/}
            <Button onClick={() => {window.location.href="https://www.google.com"}}>"Non sono maggiorenne"</Button>
        </div>
        </>
    );
}

export default ConfirmationPopup