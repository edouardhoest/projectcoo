export enum Moral {
  EVIL = "EVIL",
  GOOD = "GOOD",
  NEUTRAL = "NEUTRAL",
}

export function moralAlignmentFromString(moralAligment: string) {
  if (moralAligment.toUpperCase() == "EVIL") {
    return Moral.EVIL;
  } else if (moralAligment.toUpperCase() == "GOOD") {
    return Moral.GOOD;
  } else if (moralAligment.toUpperCase() == "NEUTRAL") {
    return Moral.NEUTRAL;
  }
}
