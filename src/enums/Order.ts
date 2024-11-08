export enum Order {
  LAWFUL = "LAWFUL",
  NEUTRAL = "NEUTRAL",
  CHAOTIC = "CHAOTIC",
}

export function orderAlignmentFromString(orderAlignment: string) {
  for (const key in Order) {
    if (Order[key as keyof typeof Order] === orderAlignment.toUpperCase()) {
      return Order[key as keyof typeof Order];
    }
  }
}
