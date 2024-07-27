import IBanner from "./IBanner";

export default interface IState {
  banners: {
    [key: string]: IBanner;
  };
}
