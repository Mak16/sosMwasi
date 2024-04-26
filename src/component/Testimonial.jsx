import { Icon } from "@iconify/react";
import img from "../assets/images/image 1.png"
function Testimonial(props){
    return(
        <>
        <div className={props.classTestimonial}>
            <Icon icon={props.iconName} className="text-4xl sm:text-[80px]"  />
            <span className="sm:text-lg text-[12px] font-bold text-center mt-1"> {props.title} </span>
            <p className="text-center text-[10px] sm:text-sm mt-2"> {props.children} </p>
           <a href=""> <img className="w-[80px] sm:w-full pt-3" src={img} alt="enter"/></a>
        </div>
        </>
    )
}
export default Testimonial;