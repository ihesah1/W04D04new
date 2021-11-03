
import React, { useState } from "react"
import { useHistory } from "react-router"
const Cards =()=>{
    const hitory = useHistory();
const [Cards,setCards]=useState([
]);
 
let history = useHistory();

const viewCardPage = (id) => {
  //console.log(id);
  history.push(`/card/${id}`);
};
const changeRoute=(id)=>{
    console.log(id)
    hitory.push('/card/${id}')
}
return <div className="cards">{
    Cards.map((item,i)=>{
      return  <div className="card" key ={item.id} onClick={()=>{changeRoute(item.id)}}>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.desc}</p>

            </div>
    }
    )
}
</div>

}
export default Cards;    

