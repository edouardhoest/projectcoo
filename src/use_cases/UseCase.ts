export interface UseCase<T> {
  execute(): T;
}
