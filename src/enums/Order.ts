export enum Order {
  LAWFUL = "LAWFUL",
  NEUTRAL = "NEUTRAL",
  CHAOTIC = "CHAOTIC",
}

export function orderAlignmentFromString(orderAligment: string) {
  if (orderAligment.toUpperCase() == "LAWFUL") {
    return Order.LAWFUL;
  } else if (orderAligment.toUpperCase() == "NEUTRAL") {
    return Order.NEUTRAL;
  } else if (orderAligment.toUpperCase() == "CHAOTIC") {
    return Order.CHAOTIC;
  }
}