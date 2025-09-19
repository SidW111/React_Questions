export default function Second() {
  for (var i = 0; i < 5; i++) {
    let button = document.createElement("button");
    button.innerText = `Button ${i}`;
    button.onclick = () => {
      alert(`Button ${i} clicked`);
    };
    document.querySelector("div")?.appendChild(button);
  }
  return <div></div>;
}

//this component will create 5 buttons and will alert with i = 5 for all the buttons
//because of the var used in for loop it is function scoped not block scoped
//so to overcome this we can use let
