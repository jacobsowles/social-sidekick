export interface Global extends NodeJS.Global {
  localStorage: ILocalStorageMock;
}

export interface ILocalStorageMock {
  clear: () => void;
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}
