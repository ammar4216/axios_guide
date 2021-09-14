import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/1`).then((res) => {
      setPost(res.data);
    });
  }, []);

  const createPost = () => {
    axios
      .post(baseUrl, {
        title: "Ammar Ahmed",
        body: "This is a new Post created by me!",
      })
      .then((res) => {
        setPost(res.data);
      });
  };

  const updatePost = () => {
    axios
      .put(`${baseUrl}/1`, {
        title: "Hello World!",
        body: "This post is updated by me!",
      })
      .then((res) => {
        setPost(res.data);
      });
  };

  const deletePost = () => {
    axios.delete(`${baseUrl}/1`).then(() => {
      alert("Post Deleted Successfully..!!");
      setPost(null);
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                onCreate={createPost}
                onUpdate={updatePost}
                onDelete={deletePost}
                post={post}
              />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
