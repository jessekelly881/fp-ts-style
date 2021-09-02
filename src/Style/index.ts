import * as CSS from 'csstype';
import { pipe } from 'fp-ts/lib/function';

import { LengthPercent, showLengthPercent } from '../Length';

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type Edge = "top" | "bottom" | "left" | "right";

// Internal representation.
export interface Style {
    padding: PartialRecord<Edge, LengthPercent>
}

export const toCss = (style: Style): CSS.Properties => ({
    paddingRight: style?.padding?.right && pipe(style.padding.right, showLengthPercent.show)
})