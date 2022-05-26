function TiposBasicos() {
  // const string: string = "String";
  // const number: number = 1;
  // const boolean: boolean = true;
  const array: number[] = [1, 2, 3];
  return (
    <>
      <h3>TiposBasicos</h3>
      {array.join(",")}
    </>
  );
}

export default TiposBasicos;
