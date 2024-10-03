export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class.');
    }

    if (typeof sqft === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') this._sqft = newSqft;
    else throw new TypeError('Sqft must be a number');
  }

  // Abstract method, should be overridden in subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
