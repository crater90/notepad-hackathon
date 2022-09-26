console.log("asd")

var Notes = {"Title":"Check off your notes once you've reviewed them once. Notes are automatically dated when you create them. Click into an item to add unlimited notes, bookmarks, images, video... even a table of contents. Notes are tagged by course title/number!"}


document.getElementById("save-btn").addEventListener("click", addNotes);


function addNotes(e) {
    e.preventDefault();
    var title = document.getElementById("text-area-title").value;
    var task = document.getElementById("text-area-note").value;
    Notes[title] = task;
    console.log(Notes);
    refresh_cont()
    document.getElementById("text-area-title").value = "";
    document.getElementById("text-area-note").value = "";
  }

refresh_cont()

function refresh_cont() {
    const container = document.getElementById("parent-grid");
    container.innerHTML = ``;
    Object.keys(Notes).forEach((key) => {
      console.log(key, Notes[key]);
      //   Create card element
      const card = document.createElement("div");
      card.classList = "card-body";
      // Construct card content
      const content = `
      <div class="bg-white rounded-md shadow-md p-2">
      <h2 class="font-semibold sm:text-sm md:text-sm lg:text-xl" id="note-title">${key}</h2>
      <p class="sm:text-sm lg:text-base" id="note-body">${Notes[key]}</p>
      <div class="mt-2 flex justify-end gap-x-4 px-2">
          <button class="hover:bg-gray-200 rounded-md p-1" id="copy-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
          </button>
          <button class="hover:bg-gray-200 rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
          </button>
          <button class="hover:bg-gray-200 rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
          </button>                      
        </div>
      
     </div>`;

    container.innerHTML += content;
    });
  }

function editNotes() {
    var noteBodyTitle = document.getElementById("note-title").innerHTML;
    var noteBodyContent = document.getElementById("note-body").innerHTML;

}

document.querySelector("#copy-btn").addEventListener("click", copyButton);
function copyButton() {
    var copyNoteBody = document.querySelector('#note-body');
    copyNoteBody.focus()
    copyNoteBody.setSelectionRange(0,10)
    try {
        var successful = document.getSelection().toString();
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log(successful)
        successful.copy
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
}