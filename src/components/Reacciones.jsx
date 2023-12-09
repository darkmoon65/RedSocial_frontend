import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTears, faHeart, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Reacciones = () => {
  const [reacciones, setReacciones] = useState({
    like: 0,
    divierte: 0,
    encanta: 0,
    comentar: 0,
  });

  const [activeReaccion, setActiveReaccion] = useState(null);

  const handleReaccionClick = (tipo) => {
    setReacciones((prevReacciones) => {
      const nuevasReacciones = {
        like: 0,
        divierte: 0,
        encanta: 0,
        comentar: 0,
      };

      if (activeReaccion === tipo) {
        setActiveReaccion(null);
      } else {
        nuevasReacciones[tipo] = 1;
        setActiveReaccion(tipo);
      }

      return nuevasReacciones;
    });
  };

  const renderCount = (count) => (count === 0 ? null : count);

  const iconoStyle = (tipo) => {
    const isActive = activeReaccion === tipo;
    const colorOriginal = getColorOriginal(tipo);
    const color = isActive ? colorOriginal : darkenColor(colorOriginal, 0.5); //oscurece
  
    return {
      fontSize: isActive ? '30px' : '25px',
      color,
      transform: isActive ? 'scale(1.2)' : 'scale(1)',
    };
  };

  const getColorOriginal = (tipo) => {
    switch (tipo) {
      case 'like':
        return 'blue';
      case 'divierte':
        return '#FFC107';
      case 'encanta':
        return 'red';
      case 'comentar':
        return 'green';
      case 'share':
        return 'skyblue';
      default:
        return 'cian';  
    }
  };

  const darkenColor = (color, factor) => {
    if (color.toLowerCase() === 'skyblue') {
      return 'skyblue';  
    }
  
    const hex = color.slice(1);  
    const num = parseInt(hex, 16);
    const darkenedNum = (num >> 0) * factor;
    const darkenedHex = darkenedNum.toString(16);
    return `#${darkenedHex}`;
  };

  const botonEstilo={
    background: 'none', textDecoration: 'none', border: 'none', display: 'flex'
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={botonEstilo  }
        onClick={() => handleReaccionClick('like')}
      >
        <FontAwesomeIcon icon={faThumbsUp} style={iconoStyle('like')} />
        <span>{renderCount(reacciones.like)}</span>
      </button>

      <button
        style={botonEstilo  }
        onClick={() => handleReaccionClick('divierte')}
      >
        <FontAwesomeIcon icon={faGrinTears} style={iconoStyle('divierte')} />
        <span>{renderCount(reacciones.divierte)}</span>
      </button>

      <button
        style={botonEstilo  }
        onClick={() => handleReaccionClick('encanta')}
      >
        <FontAwesomeIcon icon={faHeart} style={iconoStyle('encanta')} />
        <span>{renderCount(reacciones.encanta)}</span>
      </button>

      <button
        style={botonEstilo  }
        onClick={() => handleReaccionClick('comentar')}
      >
        <FontAwesomeIcon icon={faComment} style={iconoStyle('comentar')} />
        <span>{renderCount(reacciones.comentar)}</span>
      </button>

      <button style={{ background: 'none', textDecoration: 'none', border: 'none', display: 'flex' }}>
        <FontAwesomeIcon icon={faShare} style={iconoStyle('share')} />
        <span>Compartir</span>
      </button>
    </div>
  );
};

export default Reacciones;
