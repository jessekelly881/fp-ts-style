import { Show } from 'fp-ts/Show';

import { TaggedValue } from '../utils';


type Inherit = TaggedValue<"Inherit", "inherit">;
type Initial = TaggedValue<"Initial", "initial">;
type Revert = TaggedValue<"Revert", "revert">;
type Unset = TaggedValue<"Unset", "unset">;

export type Global = Inherit | Initial | Revert | Unset;

export const inherit = (): Inherit => ({ _tag: "Inherit", value: "inherit" });
export const initial = (): Initial => ({ _tag: "Initial", value: "initial" });
export const revert = (): Revert => ({ _tag: "Revert", value: "revert" });
export const unset = (): Unset => ({ _tag: "Unset", value: "unset" });

export const showGlobal: Show<Global> = ({
    show: x => x.value
})

