/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md
 * ### 题目
 * 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
 *
 * > 从联合类型T中排除U的类型成员，来构造一个新的类型。
 *
 * 例如：
 *
 * ```ts
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 * ```
 */
/* _____________ 你的代码 _____________ */

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
