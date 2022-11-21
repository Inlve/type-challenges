/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md
 * ### 题目
 *
 * 实现 TS 内置的 `Pick<T, K>`，但不可以使用它。
 *
 * **从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。
 *
 * 例如：
 *
 * ```ts
 * interface Todo {
 *   title: string
 *   description: string
 *   completed: boolean
 * }
 *
 * type TodoPreview = MyPick<Todo, 'title' | 'completed'>
 *
 * const todo: TodoPreview = {
 *     title: 'Clean room',
 *     completed: false,
 * }
 * ```
 */
/* _____________ 你的代码 _____________ */

type MyPick<T, K> = {
  [key in Extract<keyof T, K>]: T[key];
};

// others:
/**
 * @see https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/easy-pick.md
 *
 * ```ts
 * type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
 * ```
 */

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-ignore
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
