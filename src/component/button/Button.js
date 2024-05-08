
import './Button.css'
const Button = (props) => {
  const { bttName} = props;
  return (
   
         <div className='container'>
          <div className='calsi'>
<form>
  <div className='display'>
{/* <input type='text' value={bttName}/> */}
  </div>
  <div>
  <button className="btn-cal  " >
        {bttName}
      </button>
  </div>
</form>
          </div>

 </div>
   
  )
}

export default Button



