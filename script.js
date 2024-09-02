document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const imageFile = document.querySelector(".image-upload").files[0];

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // Redirect to display.html with user data in URL parameters
      window.location.href = `display.html?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&image=${encodeURIComponent(imageUrl)}`;
    };
    reader.readAsDataURL(imageFile); // Convert image to Base64 URL
  }
});
