
function App() {
  const data = [{
    title: "Free",
    price: "$0/month",
    features : ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access'],
    notFeature: ['Unlimited private Projects','Delicated Project Support','Fee subdomain', 'Monthly Status Report']
  },{
    title: "Plus",
    price: "$9/month",
    features : ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited private Projects','Delicated Project Support','Fee subdomain'],
    notFeature: ['Monthly Status Report']
  },{
    title: "Pro",
    price: "$49/month",
    features : ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited private Projects','Delicated Project Support','Fee subdomain', 'Monthly Status Report'],
    notFeature: []
  }]



  return (
    <div className="App" style={{display:"flex", justifyContent:"space-around", alignItems:"center", backgroundColor:"blue", height:"100vh", textAlign:"center"}}>
      {
        data.map((d)=>(<Card key={d.title} obj={d}/>))
      }
      {/* <Card obj = {data[0]} /> */}
    </div>
  );
}

function Card({obj}) {
  // console.log("inside")
  return (
    <div style={{border: "1px solid", borderRadius:"25px", width: "18rem",  padding:"10px", margin:"20px", backgroundColor: "white", fontSize:"18px"}}>
      <h4 style={{opacity:"0.5"}}>{obj.title}</h4>
      <h1>{obj.price}</h1><hr></hr>
      {(obj.features).map((feature)=><p style={{textAlign:"left"}} key={obj.feature}>✔️ {feature}</p>)}
      {(obj.notFeature).map((feature)=><p key={obj.feature} style={{opacity:"0.5", textAlign:"left"}}>✖️ {feature}</p>)}
      <button style={{backgroundColor:"blue", width:"85%", color:"white", padding:"10px", borderRadius:"20px", border:"none", cursor:"pointer"}}>Button</button>
    </div>
  );
}

export default App;
