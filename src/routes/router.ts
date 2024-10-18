export default interface Router<T> {
  init(app: T): void;
}
