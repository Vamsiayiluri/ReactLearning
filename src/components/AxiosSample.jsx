import axios from "axios";
import { useState } from "react";

export default function AxiosSample() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");
  const getMessage = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { title }
      );
      console.log(response);
      setResponse("Post Created Successsfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
          <button type="submit">Submit</button>
        </form>
        {response && <p>{response}</p>}
      </div>

      <div>
        {" "}
        <button onClick={getMessage}>Click to get data</button>
      </div>

      <h3>Example using Async/Await</h3>
      <button onClick={getData}> Click to get data</button>
      <div>
        <h1>Posts</h1>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
