/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md
 * ### 题目
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 *
 * 例如：`Promise<ExampleType>`，请你返回 ExampleType 类型。
 *
 * ```ts
 * type ExampleType = Promise<string>
 *
 * type Result = MyAwaited<ExampleType> // string
 * ```
 */
/* _____________ 你的代码 _____________ */
type MyAwaited<T> = T extends PromiseLike<infer P> ? MyAwaited<P> : T;

// interface PromiseLike<T> {
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
//     onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
//   ): PromiseLike<TResult1 | TResult2>;
// }
type MyAwaited1<T> = T extends {
  then(onfulfilled: ((value: infer P) => any) | undefined | null): any;
}
  ? MyAwaited<P>
  : T;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
];

type error = MyAwaited<number>;
