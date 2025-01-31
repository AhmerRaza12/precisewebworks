

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded. Fetching data...");

    const web_url = window.location.href;
    console.log("Web URL:", web_url);

    const urlField = document.getElementById("web_url");
    if (urlField) {
      urlField.value = web_url;
    } else {
      console.error("web_url input field not found!");
    }

    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log("User IP:", data.ip);

        const ipField = document.getElementById("user_ip");
        if (ipField) {
          ipField.value = data.ip;

        } else {
          console.error("user_ip input field not found!");
        }
      })
      .catch((error) => console.error("Error fetching IP:", error));
  });