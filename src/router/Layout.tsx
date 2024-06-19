import { Link,Outlet } from "react-router-dom"
export const Layout = () => {
  return (
    <div>Layout

      <ul>
        <Link to="home">Home</Link>
        <Link to="/about"> About</Link>
      </ul>
    </div>
  )
}
