import Itemlist from "./component/Itemlist";
import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [list, setlist] = React.useState([
    { id: 1, item: "Chicken", quantity: "1", select: false },
    { id: 2, item: "Cola", quantity: "1", select: false },
    { id: 3, item: "Sunkis", quantity: "1", select: false },
    { id: 4, item: "Flare", quantity: "1", select: false },
  ]);
  const [input, setinput] = React.useState("");
  const reduc = (e) => {
    
  };
  //   React.useEffect(()=>{
  // add()
  //   },[list])
  const add = (e) => {
    
  };
  const settext = (e) => {
    setinput(e.target.value);
  };
  const setitems = () => {
    let id = list.length + 1;
    if (input !== "")
      setlist([...list, { id: id, item: input, quantity: "1", select: false }]);
  };
  return (
    <div className="card card-body bg-warning col-lg-5 col-10 mx-auto mt-5 App">
      <div className="card-title col-lg-10 my-4 mx-auto">
        <div className=" input-group">
          <input
            type="text"
            placeholder="additem"
            className="form-control"
            onChange={settext}
          />
          <button className="btn btn-info input-group-text" onClick={setitems}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="table table-striped">
        {list.map((m, index) => (
          <Itemlist
            key={index}
            setlist={setlist}
            list={list}
            id={m.id}
            name={m.item}
            q={m.quantity}
            select={m.select}
            reduc={reduc}
            add={add}
          />
        ))}
      </div>
      <div className="card-footer ">
        <h5 className="d-flex justify-content-end mx-5">
          {list.map((m) => parseInt(m.quantity)).reduce((A, m) => A + m)}
        </h5>
      </div>
    </div>
  );
}

export default App;
