function Tower(stack: any, stackNumber: number) {
  const allItemInStack = stack.getAll();

  return (
    <div>
      {allItemInStack.map((stackItem: any) => {
        return <div></div>;
      })}
      <div>Tower: {stackNumber}</div>
    </div>
  );
}

export default Tower;
