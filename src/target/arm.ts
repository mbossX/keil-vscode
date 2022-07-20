
import Target from "./target";

export default class ArmTarget extends Target {
  get exe() {
    return this.config.get('MDK.Uv4Path') as string;
  }
}