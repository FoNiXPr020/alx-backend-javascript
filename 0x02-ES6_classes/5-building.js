export default class Building {
  constructor(sqft) {
    if (new.target !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static get mustOverrideError() {
    return new Error('Class extending Building must override evacuationWarningMessage');
  }

  get evacuationWarningMessage() {
    throw this.constructor.mustOverrideError;
  }
}
