import './App.css'
import EmployeeCard from "./EmployeeCard.tsx";
import {useState} from "react";


const sampleEmployee = {
    name: {
        first: "Nicolas",
        last: "GIRARD",
    },
    email: "nicolas.girard@example.com",
    picture: {
        medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
};

function App() {
    const [employees, setEmployees] = useState(sampleEmployee);

    const getEmployee = () => {
        // Send the request
        fetch("http://localhost:3110/api/employees")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);setEmployees(data.results[0]);
            });
    };

  return (
      <div className='App'>
          <EmployeeCard employee={employees} />
          <button type="button" onClick={getEmployee}>Get employee</button>
      </div>
  )
}

export default App
