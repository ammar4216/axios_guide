import React from "react";
import "bootswatch/dist/cyborg/bootstrap.min.css";

import style from "./Home.module.css";

function Home({ post, onCreate, onUpdate, onDelete }) {
  if (!post) {
    return (
      <div className={style.content}>
        <h2>No Posts!</h2>
        <br />
        <div class="btn-group" role="group" aria-label="Basic example">
          <button onClick={onCreate} type="button" class="btn btn-secondary">
            Create
          </button>
          <button onClick={onUpdate} type="button" class="btn btn-secondary">
            Update
          </button>
          <button onClick={onDelete} type="button" class="btn btn-secondary">
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.content}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={onCreate} type="button" class="btn btn-secondary">
          Create
        </button>
        <button onClick={onUpdate} type="button" class="btn btn-secondary">
          Update
        </button>
        <button onClick={onDelete} type="button" class="btn btn-secondary">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Home;
