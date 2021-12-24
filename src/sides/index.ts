export type Sides<T> =  Partial<{
    top: T;
    bottom: T;
    left: T;
    right: T;
}>

export type Side = 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right';

const all = <T>(val: T): Sides<T> => ({
    top: val,
    bottom: val,
    left: val,
    right: val
})

const x = <T>(val: T): Sides<T> => ({
    left: val,
    right: val
})

const y = <T>(val: T): Sides<T> => ({
    top: val,
    bottom: val
})

const top = <T>(val: T): Sides<T> => ({
    top: val,
})

const bottom = <T>(val: T): Sides<T> => ({
    bottom: val,
})

const left = <T>(val: T): Sides<T> => ({
    left: val,
})

const right = <T>(val: T): Sides<T> => ({
    right: val,
})

const setMap = ({
    'all': all,
    'x': x,
    'y': y,
    'top': top,
    'bottom': bottom,
    'left': left,
    'right': right
})

export const setSides = (side: Side = 'all') => <T>(val: T) => setMap[side](val);
