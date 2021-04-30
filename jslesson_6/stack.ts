const stack = () => {
  const data = [];
  let top = 0;

  function push(element: unknown) {
    data[top++] = element;
  }

  function pop() {
    return data.pop();
  }

  function peek() {
    return data[--top];
  }

  function isEmpty(): boolean {
    return top === 0;
  }

  function length() {
    return top;
  }

  return {
    push,
    isEmpty,
    length,
    peek,
  };
};

export default stack;
