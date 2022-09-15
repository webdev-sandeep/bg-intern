import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, selectData, sortList } from "./features/data/dataSlice";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Chart from "./Components/Chart";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector(selectData);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    setData([...userData]);
  }, [userData]);
  const handleClick = () => {
    let temp = [...userData].sort((a, b) =>
      a.first_name > b.first_name ? 1 : -1
    );
    dispatch(sortList(temp));
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            Burgwalden Internship Assignment
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h2 className="text-center mt-3">
        Fetching the User Data and Displaying it.
      </h2>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={handleClick} style={{ cursor: "pointer" }}>
                First Name
              </th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              const { first_name, last_name, email } = user;
              return (
                <tr key={index}>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <h2 className="text-center mt-3">Replicate the line chart in react</h2>
      <h3 className="mx-5"></h3>
      <Container className="my-5">
        <Chart />
      </Container>
    </>
  );
}

export default App;
