"use client"
import React from "react";
import Image from "next/image";
import pentagon from "../public/octagon.png"
import cube from "../public/cube.png"
import dashboard from "../public/dashboard.png"
import customer from "../public/customer.png"
import income from "../public/income.png"
import promote from "../public/promote.png"
import help from "../public/help.png"
// import earnings from "../public/earnings.png"
import girl from "../public/girl.png"
import list from "../public/list.png"
import balance from "../public/balance.png"
import sales from "../public/sales.png"
import hand from "../public/hand.png"
import last from "../public/last.jpg"
import good from "../public/good.png"








const HomeScreen = () => {
 
  
  return (
    <> 
   
      <div style={{ marginLeft: "-170px" }} className="flex h-screen hi">
        <div className="w-1/4 bg-blue-600 text-white p-4  ">
        <Image  src={pentagon} alt = "Description of the image" width = {30} height = {30}  style={{display:"inline", marginLeft: "180px", marginTop:"-7px"}}/>
          <p style={{ marginTop:"100px",display:"inline", fontSize:"25px", fontWeight:"30px", }}>
          
              <b>  Dashboard</b>
          </p>
       <div style={{marginTop:"30px"}}>
       <ul style={{ marginLeft: "200px" }} >
            <li><button className="button">  <Image style={{display:"inline"}} src={dashboard} alt = "Description of the image" width = {20} height = {20}/> Dashboard   </button></li>
            <li className="l1"><button className="button"><Image style={{display:"inline"}} src={cube} alt = "Description of the image" width = {20} height = {20}/>  Product    <b style={{marginLeft:"91px"}} className="arrow right"></b></button></li>
            <li className="l1"><button className="button"><Image style={{display:"inline"}} src={customer} alt = "Description of the image" width = {20} height = {20}/>   Customers     <b style={{marginLeft:"70px"}} className="arrow right"></b></button></li>
            <li className="l1"><button className="button"><Image style={{display:"inline"}} src={income} alt = "Description of the image" width = {20} height = {20}/>   Income    <b style={{marginLeft:"96px"}} className="arrow right"></b></button></li>
            <li className="l1"><button className="button"><Image style={{display:"inline"}} src={promote} alt = "Description of the image" width = {20} height = {20}/>     Promote    <b style={{marginLeft:"87px"}} className="arrow right"></b></button></li>
            <li className="l1"><button className="button"><Image style={{display:"inline"}} src={help} alt = "Description of the image" width = {20} height = {20}/>    Help     <b style={{marginLeft:"115px"}} className="arrow right"></b></button></li>

          </ul>
          <div>
            <button style={{ marginLeft: "165px", marginTop:"280px",border:"1px white solid",padding:"2px 20px",width:"230px" ,textAlign:"center",borderRadius:"10px", backgroundColor:"rgba(92,53,233,255)" }}>
              <Image style={{display:"inline-block",borderRadius:"300px "}} src={good} width={50} height={50} />
              <p style={{display:"inline-block",marginLeft:"10px"}}><b style={{fontSize:"small"}}>Evano</b> <br/> <i style={{fontSize:"x-small"}}>Project Manager</i></p>
            </button>
          </div>
       </div>
        </div>

        <div className="w-3/4 h-screen flex flex-col">
         
          <div style={{backgroundColor:"#f5f6f8"}} className="h-2/5 text-black ">
          <div style={{marginTop:"10px", marginLeft:"82%"}} className="container">
          <span style={{marginLeft:"-1000px", color:"grey"}}>
      <b >Hello Sharukh</b>
         </span>
         <Image style={{display:"inline-block"}} src={hand} width={20} height={20}/>
         ,
          <form style={{display:"inline-block" , marginLeft:"867px"}} className="search-form">
  <input style={{width:"200px", height:"30px" , borderRadius:"5px"}} className="search-input" type="search" placeholder=" Search..."/>
</form>

</div>
            <div className="m-2 grid grid-cols-4 gap-4">
              <div style={{backgroundColor:"#ffffff", width:"250px", height:"150px", marginLeft:"30px",marginTop:"20px"  }}  className="  p-4 rounded-lg">
               <Image  style={{display:"inline-block", marginTop:"-45px"}} src={girl} alt="money" width={100} height={100}/> 
               <ul style={{display:"inline-block", marginLeft:"10px", marginTop:"20px"}}>
                <li style={{fontSize:"x-small", color:"gray"}}>Earnings</li>
                <li><b>$198k</b></li>
                <li style={{fontSize:"x-small"}}><b style={{color:"green"}}>&#8593;37.8%</b> this month</li>

               </ul>
              </div>
              <div style={{backgroundColor:"#ffffff", width:"250px", height:"150px", marginLeft:"30px",marginTop:"20px"  }}  className="  p-4 rounded-lg">
               <Image  style={{display:"inline-block", marginTop:"-45px"}} src={list} alt="money" width={100} height={100}/> 
               <ul style={{display:"inline-block", marginLeft:"10px", marginTop:"20px"}}>
                <li style={{fontSize:"x-small", color:"gray"}}>Orders</li>
                <li><b>$2.4k</b></li>
                <li style={{fontSize:"x-small"}}><b style={{color:"red"}}>&#8595;2%</b> this month</li>

               </ul>
              </div>
              <div style={{backgroundColor:"#ffffff", width:"250px", height:"150px", marginLeft:"30px",marginTop:"20px"  }}  className="  p-4 rounded-lg">
               <Image  style={{display:"inline-block", marginTop:"-45px"}} src={balance} alt="money" width={100} height={100}/> 
               <ul style={{display:"inline-block", marginLeft:"10px", marginTop:"20px"}}>
                <li style={{fontSize:"x-small", color:"gray"}}>Balance</li>
                <li><b>$2.4k</b></li>
                <li style={{fontSize:"x-small"}}><b style={{color:"red"}}>&#8595;2%</b> this month</li>

               </ul>
              </div>
              <div style={{backgroundColor:"#ffffff", width:"250px", height:"150px", marginLeft:"30px",marginTop:"20px"  }}  className="  p-4 rounded-lg">
               <Image  style={{display:"inline-block", marginTop:"-45px"}} src={sales} alt="money" width={100} height={100}/> 
               <ul style={{display:"inline-block", marginLeft:"10px", marginTop:"20px"}}>
                <li style={{fontSize:"x-small", color:"gray"}}>Total Sales</li>
                <li><b>$89k</b></li>
                <li style={{fontSize:"x-small"}}> <b style={{color:"green"}}>&#8593;11%</b> this week</li>

               </ul>
              </div>
           
           
            </div>
          </div>
          {/* <div style={{backgroundColor:"#f5f6f8"}} className="h-3/5  text-black overflow-hidden">
            <div className="m-3 w-100% h-full bg-blue-300">
              <h1 className="title">Job Status</h1>
            </div>
          </div> */}
          <div style={{backgroundColor:"#f5f6f8", marginTop:"0px"}}>
          <div  style={{backgroundColor:"#ffffff", width:"820px", height:"350px", marginLeft:"30px", display:"inline-block", marginTop:'20px'  }}  className="  p-4 rounded-lg">
           <div>
           <h1><b>Overview</b></h1>
             <p style={{display:"inline-block", fontSize:"x-small",color:"gray"}}>Monthly Earning</p>
             <form style={{display:"inline-block",marginLeft:"700px",position:"relative", top:"-45px"}}>
              <select style={{fontSize:"x-small",color:"gray"}} >
                <option >Quarterly</option>
                <option >112</option>


              </select>
             </form>
           </div>
             <ul style={{marginTop:"20px"}}>
              <li style={{width:"40px", height:"140px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"35px"}}></li>
              <li style={{width:"40px", height:"110px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"200px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"160px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"170px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"80px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"170px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"210px", backgroundColor:"blue", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"190px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"170px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"160px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              <li style={{width:"40px", height:"200px", backgroundColor:"#f1f6f8", borderRadius:"10px",display:"inline-block",marginLeft:"15px"}}></li>
              

             </ul>
             <div>
              <ul>
              <li style={{display:"inline-block",marginLeft:"50px",fontSize:"x-small",color:"grey"}}><b>Jan</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Feb</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Mar</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Apr</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>May</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Jun</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Jul</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Aug</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Sep</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Oct</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Nov</b></li>
              <li style={{display:"inline-block",marginLeft:"37px",fontSize:"x-small",color:"grey"}}><b>Dec</b></li>
             

             </ul>
              </div>
              </div>
              
              <div style={{backgroundColor:"#ffffff", width:"350px", height:"350px", marginLeft:"40px", display:"inline-block",position:"relative", top:"-160px" }}  className="  p-4 rounded-lg">
<h1><b>Customers</b></h1>
<p style={{fontSize:"x-small", color:"grey"}}>Customers that buy products</p>
<div class="pie no-round" style={{"--p":65,"--c":"purple","--b":"15px", marginLeft:"100px", marginTop:"60px"}}> 65% <span style={{fontSize:"x-small"}}>Total New</span><div style={{fontSize:"x-small"}}>Customers</div></div>

              </div>
               <div style={{backgroundColor:"#ffffff", width:"1210px", height:"150px", marginLeft:"30px", marginTop:"-150px" }}  className="  p-4 rounded-lg">
            <div>
              <b>Product Sell</b>
              <form style={{display:"inline-block" , marginLeft:"780px"}} className="search-form">
  <input style={{width:"200px", height:"30px",backgroundColor:"#fff",fontSize:"x-small" , borderRadius:"5px"}} className="search-input" type="search" placeholder=" Search..."/>
</form>
  <form style={{display:"inline-block",marginLeft:"0px"}}>
              <select style={{fontSize:"x-small",color:"gray"}} >
                <option >Last 30 days</option>
              </select>
             </form>
            </div>
            <div>
              <ul style={{fontSize:"small", color:"grey"}}>
                <li style={{display:"inline-block"}}>Product Name</li>
                <li style={{display:"inline-block", marginLeft:"790px"}}>Stock</li>
                <li style={{display:"inline-block",marginLeft:"70px"}}>Price</li>
                <li style={{display:"inline-block",marginLeft:"70px"}}>Total Sales</li>

              </ul>
            </div>
            <hr style={{marginTop:"3px"}}/>   
             <div>
                <ul>
                  <li style={{display:"inline-block"}}><Image src={last} width={70} style={{marginTop:"10px", borderRadius:"5px"}}/></li>
                  <li style={{display:"inline-block", marginLeft:"25px"}}><b style={{fontSize:"small",marginTop:"-15px"}}>Abtract 3D</b> <br/><p style={{fontSize:"x-small", color:"grey"}}>Lorem ipsum dolor giver subtravy like edit.</p></li>
                  <li style={{display:"inline-block",fontSize:"small", marginLeft:"580px"}}>32 in Stock</li>
                  <li style={{display:"inline-block",fontSize:"small",marginLeft:"40px"}}><b>$45.99</b></li>
                  <li style={{display:"inline-block",fontSize:"small",marginLeft:"70px"}}>20</li>

                </ul>
              </div>
                    
              </div>
             
          </div>
           
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
