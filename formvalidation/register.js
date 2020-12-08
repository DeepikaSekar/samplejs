document.getElementById("register").addEventListener("submit", function (e) {
    console.log(e);
    e.preventDefault();
    try {
      const uname = e.target[0].value;
      const email= e.target[1].value;
      const password1 = e.target[2].value;
      const password2 = e.target[3].value;
  
      console.log(uname, email, password1, password2);
  
      if (password1.length < 5) throw "password is too short";
      if (password1 != password2) throw "Password didnt match";
      document.getElementById("newUser").innerHTML = `Hello ${uname}`;
    } catch (error) {
      document.getElementById(
        "newUser"
      ).innerHTML = `<p class="text-danger">${error}</p>`;
    } finally {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      

    }
  });