import React from 'react';

const MyCard = (props) => {
  const imgUrl = "https://img.buzzfeed.com/store-an-image-prod-us-east-1/k-TBla92.png?output-format=auto&output-quality=auto";

  return (
    <div className="card mr-3">
      <img className="card-img-top" src={imgUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column text-center justify-content-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde dignissimos magni tenetur expedita quibusdam repellat beatae? Fugiat fuga sequi eligendi, nam ipsam, harum explicabo aspernatur minus delectus obcaecati laudantium?</p>
        <a href="#" className="btn btn-primary w-50 mx-auto">Find out more</a>
      </div>
    </div>
  );
};

export default MyCard;
