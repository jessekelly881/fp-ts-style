export interface TaggedValue<Tag, T> {
    _tag: Tag;
    value: T
}
