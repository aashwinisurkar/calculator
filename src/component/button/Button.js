
import './Button.css'
const Button = (props) => {
  const {btfun , btName} = props;
  return (
   
         <div>
      <button className="btn-cal  px-6 py-2  rounded-lg" onClick={btfun}>
        {btName}{" "}
      </button>
    </div>
   
  )
}

export default Button



