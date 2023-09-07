const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  try {
    if (!dividend || !divider){
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
    } else if(dividend < 0 || divider <= 0){
      result.innerText = "Division not performed. Invalid number provided. Try again";
      throw new Error("Invalid Number");
    } else if (isNaN(dividend) || isNaN(divider)){
      document.body.innerHTML = `
      <h1>Something critical went wrong. Please reload the page.</h1>`;
      throw new Error("Not a number");
    } else {
    result.innerText = Math.floor(dividend / divider);
    } 
  } catch (e) {
    console.error(e)
  }
});