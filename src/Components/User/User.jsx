import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { sortByName, sortByEmail, sortByCompany } from "../Utils/SortFunctions";
import { UserCard } from "./UserCard";
export function User() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterdUser, setFilteredUser] = useState([]);
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
  useEffect(() => {
    if (searchField === "") {
      setFilteredUser([]);
      return;
    } else {
      const filteredUser = user.filter((person) => {
        return person.firstName.toLocaleLowerCase().includes(searchField);
      });
      setFilteredUser(filteredUser);
    }
  }, [searchField]);
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
  function handleSearch(evt) {
    const searchFieldString = evt.target.value.toLocaleLowerCase();
    setSearchField(() => {
      return searchFieldString;
    });
  }
  return user.length ? (
    <div>
      {filterdUser.length ? (
        <UserCard
          user={filterdUser}
          searchField={searchField}
          handleNewPage={handleNewPage}
          handleSelect={handleSelect}
          handleSearch={handleSearch}
        />
      ) : (
        <UserCard
          user={user}
          searchField={searchField}
          handleNewPage={handleNewPage}
          handleSelect={handleSelect}
          handleSearch={handleSearch}
        />
      )}
    </div>
  ) : (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
