import { Icon } from "@iconify/react";
import img from "../assets/images/image 1.png";
function Testimonial(props) {
  return (
    <>
      <div className={props.classTestimonial}>
        <Icon icon={props.iconName} className="text-6xl mb-4" />
        <span className="sm:text-2xl text-xl font-bold text-center font-poppins lg:my-0 my-4">
          {props.title}
        </span>
        <p className="text-center font-poppins text-lg mt-4">
          {props.children}
        </p>
        <a href="">
          <img className="w-40 sm:w-full pt-3" src={img} alt="enter" />
        </a>
      </div>
    </>
  );
}
export default Testimonial;
