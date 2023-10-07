let s = document.getElementById("s");
let id;
s.addEventListener("input", () => {
    clearTimeout(id)
  let z = 0;
  console.log("----------------");

  id=setInterval(() => {
    let i = parseInt(s.value) * z;
   // if (s.value !== s.previousValue) {
      console.log(i);
    //}
    z++;
  }, 1000);
});