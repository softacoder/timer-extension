const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storge.sync.set(
    {
      name,
    },
    () => {
      console.log("Name is set ${name}");
    }
  );
});
