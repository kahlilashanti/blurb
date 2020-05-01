// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

// copy text from long version
function copyClipboard() {
  /* Get the text field */
  const firstText = document.getElementById("regtext").textContent;

  // firstText.textContent - didn't need this at all

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert("Copied the text: " + firstText);
}

// copy text from med version
function copyMedClipboard() {
  /* Get the text field */
  const firstText = document.getElementById("regtextMed").textContent;

  // firstText.textContent - didn't need this at all

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert("Copied the text: " + firstText);
}

// copy text from short version
function copySMClipboard() {
  /* Get the text field */
  const firstText = document.getElementById("regtextSM").textContent;

  // firstText.textContent - didn't need this at all

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert("Copied the text: " + firstText);
}

// //copy pass to clipboard (example from password generator)
// clipboardEl.addEventListener('click', ()=> {
//   //create a DOM element
//   const textarea = document.createElement('textarea');
//   // grab the password value we have already generated
//   const password = resultEl.innerText;

//   //if the password field is blank we do nothing
//   if(!password){
//       return
//   };
//   //otherwise return the value of the textarea with value of password into it
//   textarea.value = password
//   document.body.appendChild(textarea);
//   textarea.select();
//   // to copy to clipboard
//   document.execCommand('copy');
//   // then remove textarea
//   textarea.remove();
//   //let user know it's copied
//   alert('password copied to clipboard!');
// });
//= require serviceworker-companion
