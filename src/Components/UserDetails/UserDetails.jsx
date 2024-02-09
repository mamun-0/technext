export function UserDetails(props) {
  const { user } = props.location;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={user.image} className="card-img-top" alt="avatar" />
      <div className="card-body"></div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">First Name : {user?.firstName} </li>
        <li className="list-group-item">Last Name : {user?.lastName} </li>
        <li className="list-group-item">Email: {user?.email} </li>
        <li className="list-group-item">Address : {user?.address?.address}</li>
        <li className="list-group-item">City : {user?.address?.city}</li>
      </ul>
    </div>
  );
}
