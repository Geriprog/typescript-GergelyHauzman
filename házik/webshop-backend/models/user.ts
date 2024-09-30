import {Product} from "./product";
import {Order} from "./order";

export class User{
  constructor(
    private userId: string,
    private name: string,
    private email: string
  ){

  }
}