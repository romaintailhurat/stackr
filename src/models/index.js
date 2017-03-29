import uuid from "../utils/uuid";

// TODO use a Immutablejs Record instead
export class Item {
  constructor(text) {
    this.id = uuid();
    this.text = text;
  }
}
