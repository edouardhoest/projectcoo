export enum Order {
  LAWFUL = "LAWFUL",
  NEUTRAL = "NEUTRAL",
  CHAOTIC = "CHAOTIC",
}

export function orderAlignmentFromString(orderAligment: string) {
  for (const key in Order)
  {
    if (Order[key as keyof typeof Order] === orderAligment.toUpperCase()) {
      return Order[key as keyof typeof Order];
    }
  }
}