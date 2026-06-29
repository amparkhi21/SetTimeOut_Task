function showNames() {
    const names = ["Login", "New Emails", "Meeting in 10 minutes", "New messages"];
    const list = document.getElementById("nameList");
    list.innerHTML = ""; 
    function displayName(index){
        if(index<names.length){
        const li=document.createElement("li");
        li.textContent = names[index];
        list.appendChild(li);
        setTimeout(() => displayName(index + 1), 1500);
        }
    }
    displayName(0);
}