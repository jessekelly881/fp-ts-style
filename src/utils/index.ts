export type Globals = "inherit" | "initial" | "revert" | "unset";

export interface TaggedValue<Tag, T> {
    _tag: Tag;
    value: T
}

export type Map<ObjA, ObjB> = ObjA extends Record<infer KeyA, any>
  ? { [K in KeyA]: ObjB[ObjA[K]] } : never
