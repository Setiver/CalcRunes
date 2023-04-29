import { useState } from 'react';

import { lvl, sizeItem, itemMaterial, moneyLvl, moneyMaterial, moneySize } from './opis.js';

const RunesLvL = () => {
  const [values, setValues] = useState([]);

  function Lista(props) {
    const { items, name, moneyArray, classes } = props;
    const [colors, setColors] = useState(Array(items.length).fill('black'));

    const handleColor = (event, index) => {
      event.preventDefault();

      const newColors = [...colors];
      newColors[index] = newColors[index] === 'black' ? 'green' : 'black';
      setColors(newColors);
    };

    const itemsOptions = items.map((obj, index) => (
      <button
        className={`buttons-styles`}
        key={index}
        value={moneyArray[index]}
        onClick={event => {
          handleColor(event, index);
          handleButtonClick(event);
        }}
        style={{ backgroundColor: colors[index] }}>
        {obj}
      </button>
    ));
    return (
      <div className={classes} name={name}>
        {itemsOptions}
      </div>
    );
  }

  const handleButtonClick = event => {
    const value = parseInt(event.target.value);
    if (values.length < 3) {
      setValues([...values, value]);
    } else {
      setValues([...values.slice(1), value]);
    }
  };

  const mathRunes = values.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="container ">
      {/* ------------------------------------------------------------------ */}
      <div className="text-abowe-buttons runes-lvl-position">Runes Lvl</div>
      <div className="row">
        <form>
          <Lista items={lvl} name="runes-lvl" moneyArray={moneyLvl} classes={'Block block-lvl'} />
        </form>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div className="text-abowe-buttons item-size-position">Item Size</div>
      <div className="row">
        <form>
          <Lista items={sizeItem} name="item-size" moneyArray={moneySize} classes={'Block block-size'} />
        </form>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div className="text-abowe-buttons item-material-position">Item Material</div>
      <div className="row">
        <form>
          <Lista items={itemMaterial} name="item-material" moneyArray={moneyMaterial} classes={'Block block-money'} />
        </form>
      </div>
      {/* ------------------------------------------------------------------ */}
      <p className="equation">Cost: {mathRunes}</p>
    </div>
  );
};

export default RunesLvL;
