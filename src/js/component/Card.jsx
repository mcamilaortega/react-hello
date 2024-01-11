import React from 'react';

const MyCard = () => {
  // Your component logic goes here
  return (
    <div className="card col-3 d-flex justify-content-center"> 
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde dignissimos magni tenetur expedita quibusdam repellat beatae? Fugiat fuga sequi eligendi, nam ipsam, harum explicabo aspernatur minus delectus obcaecati laudantium?</p>
            <a href="#" className="btn btn-primary">Find out more</a>
          </div>
        </div>
  );
};
export default MyCard;