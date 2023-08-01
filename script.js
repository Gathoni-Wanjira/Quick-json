document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBlog();
});

function addBlog() {
  blogDetails = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    date: document.getElementById("date-posted").value,
    avatar_url: document.getElementById("url").value,
    category: document.getElementById("cat").value,
    blog_post: document.getElementById("post").value,
    comments: document.getElementById("comments").value,
    mins: document.getElementById("mins-toread").value,
    likes: document.getElementById("likes").value,
  };
  fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogDetails),
  })
    .then((res) => res.json())
    .then((blogData) => {
      console.log(blogData);
    });
}
