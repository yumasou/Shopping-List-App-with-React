import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Itemlist = (props) => {
  const add = (e) => {
    props.setlist(
        props.list
          .map((m) => {
            if (m.id === e) return { ...m, quantity: parseInt(m.quantity) + 1 };
            else return m;
          })
      );
  };
  const reduc = (e) => {
    props.setlist(
        props.list.map((m) => {
          if (m.id === e) {
            return { ...m, quantity: parseInt(m.quantity) - 1 };
          } else return m;
        })
      );
  };
  const selected=(e)=>{
    props.setlist(props.list.map(m=>{
        if(m.id===e)
        return{...m,select:!m.select}
        else return m
    }))
  }
  return (
    <tr className="col-lg-10 col-10 d-flex justify-content-between mx-auto">
      <th>
        {props.select ? (
          <p className="h6" onClick={()=>selected(props.id)}>
            <FontAwesomeIcon icon={faCircleCheck} />
            &nbsp; <del>{props.name}</del>
          </p>
        ) : (
          <p className="h6" onClick={()=>selected(props.id)}>
            <FontAwesomeIcon icon={faCircle} style={{ color: "#dde5f4" }} />
            &nbsp; {props.name}
          </p>
        )}
      </th>
      <td className=" border rounded">
        <button className="btn" onClick={() => reduc(props.id)}>
          <FontAwesomeIcon icon={faLessThan} />
        </button>
        <span>{props.q}</span>
        <button className="btn" onClick={()=>add(props.id)}>
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </td>
    </tr>
  );
};
export default Itemlist;
