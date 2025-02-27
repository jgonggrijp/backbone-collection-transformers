import { Model, Collection }  from 'backbone';

export interface CollectionProxy<
    M extends Model = Model,
    C extends Collection<M> = Collection<M>
> {
    _underlying: C;

    // TypeScript cannot accurately type the return value, so we opt out of type
    // checking by returning `any` instead.
    readonly underlying: any;
}

export default const CollectionProxy: CollectionProxy;
