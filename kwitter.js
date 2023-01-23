function login(){
    username= document.getElementById("text_input").value 
    localStorage.setItem("username", username)
    window.location= "kwitter_room.html"

}