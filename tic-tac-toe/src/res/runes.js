import { useState } from 'react';

const RunesLvL = () => {
  const lvl = [
    'I ==> 50G',
    'II ==> 200G',
    'III ==> 500G',
    'IV ==> 2.000G',
    'V ==> 10.000G',
    'VI ==> 50.000G',
    'VII ==> 250.000G',
    'VIII ==> 1.000.000G',
    'IX ==> 5.000.000G',
    'X ==> 25.000.000G',
  ];

  const sizeItem = [
    '0.05m < 0.5m ==> 50G',
    '0.5m < 1m ==> 200G',
    '1m <1.5m ==> 1.000G',
    '1.5m < 2m ==> 3.000G',
    '2m < 3m ==> 7.000G',
    '3m < 4m ==> 15.000G',
  ];

  const itemMaterial = [
    'Banalne:        Patyk, kamień                       == 20G',
    'Proste:         Skóra, proste drewno                == 50G',
    'Znane:          Żelazo, miedź                       == 100G',
    'Niezwykłe:      Złoto, Srebro                       == 1000G',
    'Rzadkie:        Diament, Skóra latającego Wieloryba == 3.000G',
    'Bardzo Rzadkie: Platyna, Specyficzne Kryształy      == 7.000G',
    'Legendarne:     Łuski Smoka, Ząb Lewiatana          == 100.000G',
    'Święte:         Łzy Świętej Bestii, Pióra Feniksa   == 300.000G',
    'Boskie:         Tkanina ze sukni Ateny, Krew Boga   == 1.000.000',
    'Demoniczne:     Róg Szatana, Krew Demonów           == 2.000.000',
  ];
  const moneyLvl = [50, 200, 500, 2000, 10000, 50000, 250000, 1000000, 5000000, 25000000];
  const moneySize = [50, 200, 1000, 3000, 7000, 15000];
  const moneyMaterial = [20, 50, 100, 1000, 3000, 7000, 100000, 300000, 1000000, 2000000];

  const [values, setValues] = useState([]);

  function Lista(props) {
    const { items, name, moneyArray, classes } = props;
    const itemsOptions = items.map((obj, index) => (
      <button key={index} value={moneyArray[index]} onClick={handleButtonClick}>
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
