type Corders<T> = Partial<{
    topLeft: T;
    topRight: T;
    bottomLeft: T;
    bottomRight: T;
}>

type Corner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "top" | "bottom" | "left" | "right" | "all";
