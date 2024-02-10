import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { sortByName, sortByEmail, sortByCompany } from "../Utils/SortFunctions";
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
  function handleSelect(e) {
    const value = e.target.value;
    if (value === "name") {
      setUser(sortByName(user));
    } else if (value === "email") {
      setUser(sortByEmail(user));
    } else if (value === "company") {
      setUser(sortByCompany(user));
    }
  }
  return user ? (
    <div>
      <div className="my-4">
        <label htmlFor="sortby" className="mr-2 text-lg">
          Sort By
        </label>
        <select
          onChange={(evt) => {
            handleSelect(evt);
          }}
          className="appearance-none bg-white border  px-4 py-2 pr-8 rounded shadow leading-tight inline-block cursor-pointer"
          name="sorting"
          id="sortby"
        >
          <option className="text-lg p-2">Choose</option>
          <option className="text-lg p-2" value="name">
            Name
          </option>
          <option className="text-lg p-2" value="email">
            Email
          </option>
          <option className="text-lg p-2" value="company">
            Company Name
          </option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {user.map((person) => {
          return (
            <div
              key={person.id}
              className="col cursor-pointer"
              onClick={() => {
                handleNewPage(person);
              }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={person.image}
                    className="card-img-top rounded-full"
                    alt="avatar"
                  />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      First Name : {person?.firstName}{" "}
                    </li>
                    <li className="list-group-item">
                      Last Name : {person?.lastName}{" "}
                    </li>
                    <li className="list-group-item">Email: {person?.email} </li>
                    <li className="list-group-item">
                      Address : {person?.address?.address}
                    </li>
                    <li className="list-group-item">
                      City : {person?.address?.city}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
