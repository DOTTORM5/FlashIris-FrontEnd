import './ConfirmationPopup.css';
import { Button } from './Button';

function ConfirmationPopup(props){
    return (
        <>
        <div className={props.showConfirmationPopup ? 'confirmation-popup-show' : 'confirmation-popup-hidden'}>
            <div className="title">
                <h1>ATTENZIONE</h1>
            </div>
            <h2>Per accedere devi essere maggiorenne</h2>
            <div className='mybutton'>
                <Button buttonStyle="btn--outline--black" buttonSize="btn--large" onClick={props.hideConfirmationPopup}>Sono maggiorenne</Button>
            </div>
            {/*Se il tizio dice che non è maggiorenne lo sparo su google... che schifo*/}
            <div className='mybutton' style={{marginBottom: "7%"}}>
                <Button buttonStyle="btn--outline--black" onClick={() => {window.location.href="https://www.google.com"}}>Non sono maggiorenne</Button>
            </div>
        </div>
        </>
    );
}

export default ConfirmationPopup