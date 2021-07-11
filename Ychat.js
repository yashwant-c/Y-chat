function addUser() 
{
    user_name = document.getElementById("user-name").value ;
    localStorage.setItem("user-name",user_name);
    window.location = "Ychat_room.html" ;
}