// 类泛型
class Queue<TElementType> {
  private _list: TElementType[];

  constructor(initial: TElementType[]) {
    this._list = initial;
  }

  // 入队泛型子类型
  enqueue<TType extends TElementType>(ele: TType): TElementType[] {
    this._list.push(ele);
    return this._list;
  }

  // 入队任意元素 无需为队列泛型子类型
  enqueueWithUnknownType<TType>(element: TType): (TElementType | TType)[] {
    return [...this._list, element];
  }
  // 出队
  dequeue(): TElementType[] {
    this._list.shift();
    return this._list;
  }
}
