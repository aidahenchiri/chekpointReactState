import React from 'react'
import './App.css'
class App extends React.Component{
 
  state ={  person :{fullName:"aida",
    Bio : "Hello to you dear reader, This is Philippe, I am a digital project manager and a graduate of the higher school of graphic arts in Marseille and Paris. You have before you a enthusiast in corporate design adapted to the image of companies working in the medical sector, tourism or even high-tech.",
    imgSrc :"https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8fHwxNjYxMzc5NDEz&ixlib=rb-1.2.1&q=80&w=2000" ,
    profession :"Graphiste" } ,
  Shows : false,
  count :0
  }
  


 handleShow =()=> {
  this.setState({Shows:!this.state.Shows})/*show prend # de show*/
 }




 componentDidMount() {
  this.myInterval = setInterval( () => 
  {this.setState(prevState=>({count:prevState.count+1}))
   },1000) 
   return ()=>clearInterval(this.count);
   
}




  render(){  
    const {count} =this.state  
  return (
     <div className='selection'>

<header>
    <div class="company-logo">D</div>
    <nav class="navbar">
      <ul class="nav-items">
        <li class="nav-item"><a href="#" class="nav-link">HOME</a></li>
        <li class="nav-item"><a href="#" class="nav-link">bio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">profession</a></li>
        <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
        <li class="nav-item"> <button onClick={this.handleShow}  >  click  </button></li>
        <li class="nav-item">  {this.state.count}</li>

      </ul>
    </nav>
    <div class="menu-toggle">
      <i class="bx bx-menu"></i>
      <i class="bx bx-x"></i>
    </div>
  </header>





    {this.state.Shows?
          <div>
          <h3> My name {this.state.person.fullName }</h3>
          <h3> My profession {this.state.person.profession }</h3>

         <h4> My bio :</h4> 
          <p>{this.state.person.Bio }</p>
          <img  src={this.state.person.imgSrc } alt="aida" />
          </div>:<div>
          <p>{this.count}{this.componentDidMount}</p>

          </div>

          }
                   <span className='count'></span>

       </div>
       
  )
  

} 
 }


export default App;
