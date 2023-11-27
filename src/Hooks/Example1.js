import { useState } from 'react';
import { Link } from 'react-router-dom';

function Example1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
      You pressed me {count} times
    </button>
    <Link to="/posts">View All Posts</Link>
    </div>
  );
}

export default Example1
