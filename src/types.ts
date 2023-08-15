export const femininity = <const>[1, 2, 3, 4, 5, 6, 7, 8];
export const masculinity = <const>["H", "G", "F", "E", "ᗡ", "C", "B", "A"];

export type Gender<
  F extends number,
  M extends number
> = `${(typeof femininity)[F]}${(typeof masculinity)[M]}`;

export type AnyGender = Gender<-1, -1>;

export function genderify(gender: string): AnyGender | undefined {
  if (gender.length !== 2) return undefined;
  const [fem, masc] = gender;
  const femIndex = (femininity as readonly number[]).indexOf(parseInt(fem));
  const mascIndex = (masculinity as readonly string[]).indexOf(masc);
  if (femIndex === -1 || mascIndex === -1) return undefined;
  return gender as AnyGender;
}

export function genderFromHash(): AnyGender | undefined {
  return genderify(decodeURIComponent(window.location.hash.replace(/^#/g, "")));
}
