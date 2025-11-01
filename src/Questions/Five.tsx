export function Child({ sendData }: { sendData: any }) {
  return (
    <div>
      <button onClick={() => sendData("HII Parents")}>send</button>
    </div>
  );
}
export function Parent() {
  function sid(msg: string) {
    console.log(msg);
  }
  return <Child sendData={sid} />;
}
