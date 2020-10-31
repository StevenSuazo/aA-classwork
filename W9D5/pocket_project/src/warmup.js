const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const children = Array.from(htmlElement.children);
  // debugger;
  if (children.length > 0) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
  
  const newPTag = document.createElement("p");
  newPTag.textContent = string;
  htmlElement.append(newPTag);
};

htmlGenerator('Party Time.', partyHeader);
