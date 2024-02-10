import { useState } from "react";

export function UserForm({ user, addNewUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [enableBtn, setEnableBtn] = useState(false);

  function handleState(evt) {
    const { name, value } = evt.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setlastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "avatar":
        setAvatar(value);
        break;
    }
    const enableButton =
      firstName && lastName && email && address && city && avatar;

    if (enableButton) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }
  function handleClick(evt) {
    evt.preventDefault();
    const obj = {
      firstName,
      lastName,
      email,
      address: {
        address,
        city,
      },
      image: avatar,
    };
    addNewUser([...user, obj]);
    resetValue();
  }
  function resetValue() {
    setFirstName("");
    setlastName("");
    setEmail("");
    setAddress("");
    setCity("");
    setAvatar("");
  }
  return (
    <div className="mb-4 border border-x-green-400 p-3">
      <form className="flex">
        <div className="mb-3">
          <label htmlFor="firstName" className="text-lg">
            First Name :
          </label>
          <input
            onChange={handleState}
            value={firstName}
            name="firstName"
            type="text"
            id="firstName"
            className="form-control"
            placeholder="first name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="text-lg">
            Last Name :
          </label>
          <input
            onChange={handleState}
            value={lastName}
            name="lastName"
            type="text"
            id="lastName"
            className="form-control"
            placeholder="last name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-lg">
            Email :
          </label>
          <input
            onChange={handleState}
            value={email}
            name="email"
            type="email"
            placeholder="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="text-lg">
            Address :
          </label>
          <input
            onChange={handleState}
            value={address}
            name="address"
            type="text"
            id="address"
            placeholder="address"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="text-lg">
            City :
          </label>
          <input
            onChange={handleState}
            value={city}
            name="city"
            type="text"
            id="city"
            placeholder="city"
            className="form-control"
            required
          />
        </div>
        <div>
          <label htmlFor="firstName" className="text-lg">
            Avatar :
          </label>
          <input
            onChange={handleState}
            value={avatar}
            name="avatar"
            type="text"
            id="avatar"
            placeholder="image link"
            className="form-control"
            required
          />
        </div>
      </form>
      <button
        className={`btn btn-primary ${enableBtn ? null : "disabled"}`}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Add User
      </button>
    </div>
  );
}
