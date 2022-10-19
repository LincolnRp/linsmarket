export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPassword = () => {
    return this.password;
  };

  public getRole = () => {
    return this.role;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setEmail = (newEmail: string) => {
    this.email = newEmail;
  };

  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };

  public setRole = (newRole: USER_ROLES) => {
    this.role = newRole;
  };
}

export interface ISignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface ISignupOutputDTO {
  message: string;
  userInfo: userInfo;
  token: string;
}

export interface ILoginInputDTO {
  email: string;
  password: string;
}

type userInfo = {
  id: string;
  name: string;
};

export interface ILoginOutputDTO {
  message: string;
  userInfo: userInfo;
  token: string;
}

export interface ILoginOutputDTOadmin {
  token: string;
  role: USER_ROLES;
}

export type car = {
  id: string;
  name: string;
  price: string;
  qty_stock: number;
  image: string;
  quantity: number;
};

export type products = {
  id: string;
  name: string;
  price: string;
  qty_stock: number;
  image: string;
  quantity: number;
};

export interface IPurchaseInputDTO {
  id: string;
  name: string;
  city: string;
  road: string;
  complement: string;
  number: number;
  car: car[];
}

export interface IPurchaseInputDTO2 {
  id: string;
  name: string;
  city: string;
  road: string;
  complement: string;
  number: number;
  products: products[];
}

export interface IPurchaseInputDTO3 {
  id: string;
  user_id: string;
  name: string;
  city: string;
  road: string;
  complement: string;
  number: number;
  product_id: string;
  quantity: number;
}
