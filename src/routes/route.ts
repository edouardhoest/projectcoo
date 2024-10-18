export default interface Route<T> {
  init(app: T): void;
}
