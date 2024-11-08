export enum Moral {
  EVIL = "EVIL",
  GOOD = "GOOD",
  NEUTRAL = "NEUTRAL",
}

export function moralAlignmentFromString(moralAlignment: string) {
  for (const key in Moral) {
    if (Moral[key as keyof typeof Moral] === moralAlignment.toUpperCase()) {
      return Moral[key as keyof typeof Moral];
    }
  }
}
