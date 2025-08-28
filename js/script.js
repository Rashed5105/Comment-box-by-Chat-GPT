const msgBox = document.getElementById('massage-area');
const cmtBtn = document.getElementById('cmt-btn');
const subSec = document.getElementById('sub-sec');

function addComment() {
    const msg = msgBox.value.trim();
    if(msg === "") return;

    const temp = document.createElement('p');
    temp.innerText = msg;

    subSec.appendChild(temp);

    // Scroll to bottom automatically
    subSec.scrollTop = subSec.scrollHeight;

    msgBox.value = '';
}

// Click button
cmtBtn.addEventListener("click", addComment);

// Enter key submit (Shift+Enter for newline)
msgBox.addEventListener("keydown", function(e){
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        addComment();
    }
});

// Page load scrollbar bottom
window.addEventListener("DOMContentLoaded", () => {
    subSec.scrollTop = subSec.scrollHeight;
});
