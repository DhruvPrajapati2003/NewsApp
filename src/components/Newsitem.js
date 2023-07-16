import React, { Component } from 'react'

const Newsitem=(props)=> {
  
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      
        <>
        <div className="card" style={{width:"18rem"}}>
        <img src={!imgUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqiIFP7qqDNsU_CfmEh0gBhViBnBhm_UIxWsv2m1-&s':imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>
   {source}

  </span>
          <p className="card-text">{description}...</p>
          <small className="text-body-secondary">Publish by {!author?"Unknown":author} On {date}</small><br />
          <a href={newsUrl} target="-blank"className="btn btn-dark">Read More</a>
        </div>
      </div>
      </>
    )
  
}
export default Newsitem