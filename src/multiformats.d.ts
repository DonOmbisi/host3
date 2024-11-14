// src/types/multiformats.d.ts
declare module "multiformats/cid" {
    export class CID {
      static parse(input: string): CID;
      toString(): string;
    }
  }
  