import React,{useEffect} from 'react'
import Newsitem from './Newsitem'
import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
  // static defaultProps={
  //   country:"in",
  //   pageSize:5
  // }
  // static PropTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number
  // }
   
  const [articles,setArticles]= useState([])
  const [totalResults,settotalResults]= useState(0)
   const [page, setPage] = useState(1)

    


    const  capitalizeFirstLetter=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    document.title=`${capitalizeFirstLetter(props.category)} News`
   const updatefun=async()=>{
      props.setProgress(0);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a873237f8e954c15b9164d436259cc9c&page=${page}&pageSize=${props.pageSize}`;
      let data=await fetch(url);
      props.setProgress(30);
      let persionalData=await data.json();
      console.log(persionalData)
      props.setProgress(70);
      setArticles(persionalData.articles)
      settotalResults(persionalData.totalResults)
      props.setProgress(100);
    }

    useEffect(() => {
      updatefun();
    }, [])
    
    // async componentDidMount(){
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a873237f8e954c15b9164d436259cc9c&page=1&pageSize=${props.pageSize}`;
    //     // let data=await fetch(url);
    //     // let persionalData=await data.json();
    //     // console.log(persionalData)
    //     // this.setState({
    //     //   articles: persionalData.articles,
    //     //   totalResults:persionalData.totalResults
    //     // })
        
    //     this.updatefun()
    // }
    // handleNext= async()=>{
    //     if( this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)){

    //     }
    //     else{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a873237f8e954c15b9164d436259cc9c&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //     let data=await fetch(url);
    //     let persionalData=await data.json();
    //    this.setState({

    //    page:this.state.page+1,
    //    articles: persionalData.articles

        
    //    })
    // }


    // this.setState({
    //   page:this.state.page+1,

      
    // })
    // this.updatefun();
    // }
    // handlePrev=async()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a873237f8e954c15b9164d436259cc9c&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    //     let data=await fetch(url);
    //     let persionalData=await data.json();
    //    this.setState({

    //    page:this.state.page-1,
    //    articles: persionalData.articles

        
    //    })
    //   // this.setState({
    //   //   page:this.state.page-1
    //   // })
    //   // this.updatefun()
    // }



    const fetchMoreData = async() => {
      setPage(page+1)

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a873237f8e954c15b9164d436259cc9c&page=${page+1}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    let persionalData=await data.json();
    console.log(persionalData)
    setArticles(articles.concat(persionalData.articles))
    settotalResults(persionalData.totalResults)

    // this.setState({
    //   articles: this.state.articles.concat(persionalData.articles),
    //   totalResults:persionalData.totalResults
    // })
    
    };
  
    return (
        <>
    
      <center>  <h2 style={{marginTop:'50px'}}>Top HeadLine Of {capitalizeFirstLetter(props.category)}</h2></center><br />
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="container mt-3">
        <div className="row">
            {articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source
                ={element.source.name}/>
                </div>
            })
            }
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="containew d-flex justify-content-between">
      <button type="button"disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div> */}
     
      </>
    )
  
}
export default News
