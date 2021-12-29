type Corners<T> = Partial<{
    topLeft: T;
    topRight: T;
    bottomLeft: T;
    bottomRight: T;
}>

type Corner = keyof Corners<unknown>
