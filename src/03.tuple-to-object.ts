/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md
 * ### 题目
 * 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
 *
 * 例如：
 *
 * ```ts
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *
 * type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 * ```
 */

/* _____________ 你的代码 _____________ */

type TupleToObject<T extends readonly any[]> = T extends readonly (infer P extends
  | string
  | number
  | symbol)[]
  ? { [K in P]: K }
  : never;

/**
 * Other:
 * @see https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/easy-tuple-to-object.md
 */
type TupleToObject1<T extends readonly any[]> = {
  [K in T[number]]: K;
};

type A = TupleToObject<typeof tuple>;
type B = TupleToObject1<typeof tuple>;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
];

type error = TupleToObject<[[1, 2], {}]>;
