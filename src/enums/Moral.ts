export enum Moral {
  EVIL = "EVIL",
  GOOD = "GOOD",
  NEUTRAL = "NEUTRAL",
}

export function moralAlignmentFromString(moralAligment: string) {
  for (const key in Moral)
  {
    if (Moral[key as keyof typeof Moral] === moralAligment.toUpperCase()) {
      return Moral[key as keyof typeof Moral];
    }
  }
}
