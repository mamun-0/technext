import { useEffect, useState } from "react";

export function User() {
  const [user, setUser] = useState(null);
  const API = "https://dummyjson.com/users";
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
  console.log(user);
  return user ? (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {user.map((eachUser) => {
        return (
          <div key={eachUser.id} className="col">
            <div className="card h-100">
              <img
                src={eachUser.image}
                className="card-img-top"
                alt="userAvatar"
              />
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
