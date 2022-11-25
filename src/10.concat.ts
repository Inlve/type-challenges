/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md
 * ### 题目
 * 在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
 *
 * 例如：
 *
 * ```ts
 * type Result = Concat<[1], [2]> // expected to be [1, 2]
 * ```
 */
/* _____________ 你的代码 _____________ */
type Concat<T, U> = T extends any[] ? (U extends any[] ? [...T, ...U] : never) : never;

/**
 * Others:
 * @see https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/easy-concat.md
 */
type Concat1<T extends unknown[], U extends unknown[]> = [...T, ...U];

type A = Concat<[1, 2], [3, 4]>;
type B = Concat1<[1, 2], [3, 4]>;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
];
