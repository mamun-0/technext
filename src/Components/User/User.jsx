import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./User.css";

export function User() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const API = "https://dummyjson.com/users"; //https://dummyjson.com/users
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleNewPage(user) {
    history.push({
      user,
      pathname: `/${user.id}`,
    });
  }
  return user ? (
    <div className="row row-cols-1 row-cols-md-3 g-4 p-0">
      {user.map((eachUser) => {
        return (
          <div
            key={eachUser.id}
            className="col pointer"
            onClick={() => {
              handleNewPage(eachUser);
            }}
          >
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Username : {eachUser.username}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
