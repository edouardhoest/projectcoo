export interface UseCase<T, K> {
  execute(requestBody: K): T;
}
