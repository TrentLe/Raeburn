import react from 'react';


const ImageButton = ( props ) => {
    return (
        <button className="imageButton" onClick={props.onClick}> 
            <img src={props.src} alt={props.alt} />
        </button>
    );
};

export default ImageButton;