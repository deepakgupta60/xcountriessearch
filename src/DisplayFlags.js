import React, { Fragment } from 'react'
import "./DisplayFlags.css";
function Card({name, image})
{
return  <>
    <div className='countryCard' >
    <img src={image} alt={name} className='cardImage'/> 
   <p>{name}</p>
  
    </div>
  </>
}
const DisplayFlags = ({searchData}) => {

  return (
    <>
  <div style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row", flexWrap:"wrap"}}>
    {
      searchData.map((data, idx)=>(
        <Fragment key={idx}>
          {/* {data.name.common} */}
          <Card name={data.name.common} image={data.flags.png}/>
       
        </Fragment>
      ))
    }
</div>
    </>
  )
}

export default DisplayFlags