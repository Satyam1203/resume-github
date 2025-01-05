export function swapElements(e1, e2) {
    const tempEl = document.createElement("div");
    e1.parentNode.insertBefore(tempEl, e1);
    e2.parentNode.insertBefore(e1, e2);
    tempEl.parentNode.insertBefore(e2, tempEl);
    tempEl.parentNode.removeChild(tempEl);
}