const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class goji {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const goji_formatter = (value, unit) => new goji(value, unit);

goji_formatter.convert = convert;
goji_formatter.setDisplay = units.setDisplay;
goji_formatter.setUnit = units.setUnit;
goji_formatter.getUnit = units.getUnit;
goji_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const moji_to_goji = (moji) => {
  return goji_formatter(Number.parseInt(moji), 'moji').to('goji').value();
};

export const goji_to_moji = (goji) => {
  return goji_formatter(Number.parseFloat(Number(goji)), 'goji')
    .to('moji')
    .value();
};

export const moji_to_goji_string = (moji) => {
  return goji_formatter(Number(moji), 'moji').to('goji').toString();
};

export const moji_to_colouredcoin = (moji) => {
  return goji_formatter(Number.parseInt(moji), 'moji')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_moji = (colouredcoin) => {
  return goji_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('moji')
    .value();
};

export const moji_to_colouredcoin_string = (moji) => {
  return goji_formatter(Number(moji), 'moji').to('colouredcoin').toString();
};
