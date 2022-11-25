/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.zh-CN.md
 * ### 题目
 * 创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。
 *
 * 例如：
 *
 * ```ts
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
 *
 * type teslaLength = Length<tesla> // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
 * ```
 */

/* _____________ 你的代码 _____________ */
type Length<T> = T extends readonly any[] ? T['length'] : never;

/**
 * Others:
 * @see https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/easy-tuple-length.md
 */
type Length1<T extends { length: number }> = T['length'];

type Length2<T> = T extends { length: number } ? T['length'] : never;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  Length<5>,
  Length<'hello world'>,
];
