/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md
 * ### 题目
 * 实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。
 *
 * 例如：
 *
 * ```ts
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 *
 * type head1 = First<arr1> // expected to be 'a'
 * type head2 = First<arr2> // expected to be 3
 * ```
 */

/* _____________ 你的代码 _____________ */
type First<T extends any[]> = T extends [infer P, ...any] ? P : never;

/**
 * Other:
 * @see https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/easy-first.md
 */
type First1<T extends any[]> = T extends [] ? never : [0];

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
];
