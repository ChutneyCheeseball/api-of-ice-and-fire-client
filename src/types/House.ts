// Typed from https://github.com/joakimskoog/AnApiOfIceAndFire/wiki/Houses

export type House = {
  url: string; // The hypermedia URL of this resource
  name: string; // The name of this house
  region: string; // The region that this house resides in
  coatOfArms: string; // Text describing the coat of arms of this house
  words: string; // The words of this house
  titles: string[]; // The titles that this house holds
  seats: string[]; // The seats that this house holds
  currentLord: string; // The Character resource URL of this house's current lord
  heir: string; // The Character resource URL of this house's heir
  overlord: string; // The House resource URL that this house answers to
  founded: string; // The year that this house was founded
  founder: string; // The Character resource URL that founded this house
  diedOut: string; // The year that this house died out
  ancestralWeapons: string[]; // An array of names of the noteworthy weapons that this house owns
  cadetBranches: string[]; // An array of House resource URLs that was founded from this house
  swornMembers: string[]; // An array of Character resource URLs that are sworn to this house
};
