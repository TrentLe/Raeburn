import react from 'react';
import modelx from '../../assets/images/modelx.jpg';
import beach from '../../assets/images/beach.jpg';
import flowers from '../../assets/images/flowers.jpg';
import './index.scss'

const Photos = () => {
    return (
      <div>
        <img src={modelx} alt="modelx" className="modelx" />

        <img src={flowers} alt="flowers" className="flowers" />
        
        <img src={beach} alt="beach" className="beach" />
        </div>

    )
}

export default Photos;
