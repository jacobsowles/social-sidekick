import chai, { should } from 'chai';
import { Global, ILocalStorageMock } from './types';

let objectUnderTest: any;

const init = (objectToTest: any) => {
  should();
  objectUnderTest = new objectToTest();
};

class LocalStorageMock implements ILocalStorageMock {
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

declare var global: Global;

global.localStorage = new LocalStorageMock();

export { chai, init, LocalStorageMock, objectUnderTest, should };
