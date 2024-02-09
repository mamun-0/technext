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
      {user.map((user) => {
        return (
          <div
            key={user.id}
            className="col pointer"
            onClick={() => {
              handleNewPage(user);
            }}
          >
            <div className="card h-100">
              <div className="card-body">
                <img src={user.image} className="card-img-top" alt="avatar" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    First Name : {user?.firstName}{" "}
                  </li>
                  <li className="list-group-item">
                    Last Name : {user?.lastName}{" "}
                  </li>
                  <li className="list-group-item">Email: {user?.email} </li>
                  <li className="list-group-item">
                    Address : {user?.address?.address}
                  </li>
                  <li className="list-group-item">
                    City : {user?.address?.city}
                  </li>
                </ul>
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
