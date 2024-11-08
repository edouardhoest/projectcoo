export default interface Server {
  config(): void;
  listen(callback?: () => void): void;
}
