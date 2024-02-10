import { UserForm } from "../UserForm/UserForm";

export function UserCard({
  user,
  searchField,
  handleNewPage,
  handleSearch,
  handleSelect,
  addNewUser,
}) {
  return (
    <div>
      <div className="my-4 flex justify-center items-center">
        <div>
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
        <div className="ml-3">
          <label htmlFor="search" className="text-lg">
            Search :
          </label>
          <input
            onChange={(evt) => {
              handleSearch(evt);
            }}
            value={searchField}
            type="text"
            id="search"
            placeholder="type name here"
            className="border border-solid h-10 p-3 m-2 text-lg"
          />
        </div>
      </div>
      <UserForm user={user} addNewUser={addNewUser} />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {user.map((person) => {
          return (
            <div
              key={person.id}
              className="col cursor-pointer hover:bg-sky-700"
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
  );
}
