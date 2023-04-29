import { useState } from 'react';
import { lvl, sizeItem, itemMaterial, moneyLvl, moneyMaterial, moneySize } from './opis.js';

const RunesLvL = () => {
  const [values, setValues] = useState([]);

  function Lista(props) {
    const { items, name, moneyArray, classes } = props;
    const itemsOptions = items.map((obj, index) => (
      <button className="buttons-styles" key={index} value={moneyArray[index]} onClick={handleButtonClick}>
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
    }
  };

  return (
    <div>
      <div>
        <label>Runes Lvl</label>
        <form>
          <Lista items={lvl} name="runes-lvl" moneyArray={moneyLvl} classes={'lvlBlock'} />
        </form>
      </div>
      <div>
        <label>Item Size</label>
        <form>
          <Lista items={sizeItem} name="item-size" moneyArray={moneySize} classes={'sizeBlock'} />
        </form>
      </div>
      <div>
        <label>Item Material</label>
        <form>
          <Lista items={itemMaterial} name="item-material" moneyArray={moneyMaterial} classes={'materialBlock'} />
        </form>
      </div>
      <div>
        <p>Values: {values.reduce((acc, cur) => acc + cur, 0)}</p>
      </div>
    </div>
  );
};

export default RunesLvL;
