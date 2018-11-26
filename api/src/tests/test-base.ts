import { should } from 'chai';

let service: any;

const init = (serviceType: any) => {
  should();
  service = new serviceType();
};

class LocalStorageMock {
  private store: any;

  constructor() {
    this.store = {};
  }

  public clear() {
    this.store = {};
  }

  public getItem(key: string) {
    return this.store[key] || null;
  }

  public setItem(key: string, value: string) {
    this.store[key] = value.toString();
  }

  public removeItem(key: string) {
    delete this.store[key];
  }
}

interface IGlobal extends NodeJS.Global {
  localStorage: LocalStorageMock;
}

declare var global: IGlobal;

global.localStorage = new LocalStorageMock();

export { init, service };
