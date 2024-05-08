
import Button from '../button/Button';
import './CalWrapper.css';

const CalWrapper = (props) => {

const allBtnArr =[0,1,2,3,4,5,6,7,8,9];




const allButton = allBtnArr.map((btnvalue)=>{
    return <Button bttName={btnvalue}/>
});
console.log("allButton" , allButton);
return(
    <div>
         {allButton}
    </div>
)
    
}

export default CalWrapper;