import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWineBottle} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faWineBottle} size='2x' color="black"/>
        <div className="qty-display">0</div>
      </div>
    );
  };

  export default CartWidget;