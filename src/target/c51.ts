
import Target from "./target";

export default class C51Target extends Target {
  get exe() {
    return this.config.get('C51.Uv4Path') as string;
  }
}