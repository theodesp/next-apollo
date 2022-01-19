declare type ZEUS_INTERFACES = never;
declare type ZEUS_UNIONS = never;
export declare type ValueTypes = {};
export declare type ModelTypes = {};
export declare type GraphQLTypes = {};
export declare class GraphQLError extends Error {
    response: GraphQLResponse;
    constructor(response: GraphQLResponse);
    toString(): string;
}
export declare type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export declare type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export declare type ZeusHook<T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>, N extends keyof ReturnType<T>> = ZeusState<ReturnType<T>[N]>;
export interface GraphQLResponse {
    data?: Record<string, any>;
    errors?: Array<{
        message: string;
    }>;
}
declare type DeepAnify<T> = {
    [P in keyof T]?: any;
};
declare type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
declare type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
declare type FlattenArray<T> = T extends Array<infer R> ? R : T;
declare type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS ? {
    [P in keyof SRC]: SRC[P] extends '__union' & infer R ? P extends keyof DST ? IsArray<R, '__typename' extends keyof DST ? DST[P] & {
        __typename: true;
    } : DST[P]> : {} : never;
}[keyof DST] & {
    [P in keyof Omit<Pick<SRC, {
        [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
    }[keyof DST]>, '__typename'>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
} : {
    [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
};
export declare type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export declare type InputType<SRC, DST> = IsPayLoad<DST> extends {
    __alias: infer R;
} ? {
    [P in keyof R]: MapType<SRC, R[P]>;
} & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>> : MapType<SRC, IsPayLoad<DST>>;
declare type Func<P extends any[], R> = (...args: P) => R;
declare type AnyFunc = Func<any, any>;
export declare type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export declare type OperationOptions = {
    variables?: Record<string, any>;
    operationName?: string;
};
export declare type SubscriptionToGraphQL<Z, T> = {
    ws: WebSocket;
    on: (fn: (args: InputType<T, Z>) => void) => void;
    off: (fn: (e: {
        data?: InputType<T, Z>;
        code?: number;
        reason?: string;
        message?: string;
    }) => void) => void;
    error: (fn: (e: {
        data?: InputType<T, Z>;
        errors?: string[];
    }) => void) => void;
    open: () => void;
};
export declare type SelectionFunction<V> = <T>(t: T | V) => T;
export declare type fetchOptions = ArgsType<typeof fetch>;
declare type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export declare type chainOptions = [fetchOptions[0], fetchOptions[1] & {
    websocket?: websocketOptions;
}] | [fetchOptions[0]];
export declare type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
export declare type SubscriptionFunction = (query: string) => any;
declare type NotUndefined<T> = T extends undefined ? never : T;
export declare type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;
export declare const ZeusSelect: <T>() => SelectionFunction<T>;
export declare const ScalarResolver: (scalar: string, value: any) => string | false;
export declare const TypesPropsResolver: ({ value, type, name, key, blockArrays }: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}) => string;
export declare const queryConstruct: (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) => string;
export declare const fullChainConstruct: (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>, options?: OperationOptions) => Promise<any>;
export declare const fullSubscriptionConstruct: (fn: SubscriptionFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>, options?: OperationOptions) => any;
export declare const $: (t: TemplateStringsArray) => any;
export declare const resolverFor: <X, T extends never, Z extends keyof ValueTypes[T]>(type: T, field: Z, fn: (args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any, source: any) => Z extends keyof ModelTypes[T] ? X | ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any) => (args?: any, source?: any) => any;
export declare const apiFetch: (options: [input: RequestInfo, init?: RequestInit]) => (query: string, variables?: Record<string, any>) => Promise<Record<string, any>>;
export declare const apiSubscription: (options: chainOptions) => (query: string) => {
    ws: WebSocket;
    on: (e: (args: any) => void) => void;
    off: (e: (args: any) => void) => void;
    error: (e: (args: any) => void) => void;
    open: (e: () => void) => void;
};
export declare type GenericOperation<O> = O extends 'query' ? never : O extends 'mutation' ? never : never;
export declare const Thunder: (fn: FetchFunction) => <O extends any, R extends never = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => Promise<InputType<GraphQLTypes[R], Z>>;
export declare const Chain: (...options: chainOptions) => <O extends any, R extends never = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => Promise<InputType<GraphQLTypes[R], Z>>;
export declare const SubscriptionThunder: (fn: SubscriptionFunction) => <O extends any, R extends never = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => SubscriptionToGraphQL<Z, GraphQLTypes[R]>;
export declare const Subscription: (...options: chainOptions) => <O extends any, R extends never = GenericOperation<O>>(operation: O) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) => SubscriptionToGraphQL<Z, GraphQLTypes[R]>;
export declare const Zeus: <Z extends ValueTypes[R], O extends any, R extends never = GenericOperation<O>>(operation: O, o: Z | ValueTypes[R], operationName?: string) => string;
export declare const Selector: <T extends never>(key: T) => SelectionFunction<ValueTypes[T]>;
export {};
