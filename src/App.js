// import logo from './logo.svg';
import './App.css';


// const student = [
//         {name:"ritu" , email:"ritu@gmail.com" , contactno:23456},
//         {name:"aman" , email:"aman@gmail.com", contactno:245678},
//         {name:"shwetam" , email:"shwetu@gmail.com" , contactno:234322}
// ]

function App() {

  const student = [
    {name:"ritu" , email:"ritu@gmail.com" , contactno:23456},
    {name:"aman" , email:"aman@gmail.com", contactno:245678},
    {name:"shwetam" , email:"shwetu@gmail.com" , contactno:234322}
]
  
  return (
  <>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">contactno</th>
     
    </tr>
  </thead>
  { student.map((data , i)=>
  <tbody key={i}>
    <tr >
      <th scope="row">{data.name}</th>
      <td>{data.email}</td>
      <td>{data.contactno}</td>
     
    </tr>
   
   
  </tbody>
  )
}
</table>

  </>
  );
}

export default App;
