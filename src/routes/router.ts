export default interface Router<T> {
  init(server: T): void;
}
