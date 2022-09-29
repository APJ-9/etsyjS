const addElement = () => {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "yellow";
  const newContent = document.createTextNode("Hello World");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div1");
  document.body.append(newDiv);
};

document.body.onload = addElement();
