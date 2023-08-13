import React, { Component } from 'react'

export  class NewsItem extends Component {
  render() {
    let {title,discription,url, newsUrl,author,date,source}=this.props;
    return (
       <>
       <div  className="card my-3"   >
  <img src={!url?"https://www.hindustantimes.com/ht-img/img/2023/07/23/1600x900/PTI07-09-2023-000136B-0_1690088161887_1690088223448.jpg":url}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title"> {title}...</h5>
     
  <span className="badge text-bg-danger"> {source}</span>
    <p  className="card-text"> {discription}...</p>
    <p className="card-text"><small className="text-body-secondary" >By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href= {newsUrl} target="_blank"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
       </>
    )
  }
}

export default NewsItem
