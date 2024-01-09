import React from "react";

export const Jumbotron = (props) => {
  return (
    <div class = "container">
      <div class="card w-100">
        <div class="card-body">
          <h1 class="card-title">{props.title}</h1>
          <p class="card-text">{props.description}</p>
          <a href="#" class="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};
// export const Jumbotron = ({title, description}) => {
//     return (
//       <div class = "container">
//         <div class="card w-100">
//           <div class="card-body">
//             <h1 class="card-title">{title}</h1>
//             <p class="card-text">{description}</p>
//             <a href="#" class="btn btn-primary">
//               Button
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   };