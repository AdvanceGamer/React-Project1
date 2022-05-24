
export default function Card(props){
//     let img=props.img;
// let image=```<img src=+{img}+ alt="pic" />```;
// console.log(image);
// function createImg(){
//     let str=```<img src=```+{img}+ ```alt="pic" />```;
//     console.log(str);
//     return str;
// }
    return (

        <div className="Card">
         <img src={props.img} alt="img"/>
         
          <p>
              <span>  ⭐ </span>
              <span>{props.rating}  </span>
              <span>  ({props.review})-  </span>
           USA <br/>
          {props.about}<br/>
          <strong>From <span>{props.cost}</span>/person</strong>
          </p>
          <div>{props.status}</div>
        </div>
    )
}