import Testimonial from "./Testimonial";
import vector1 from "../assets/images/Vector (1).png";
import vector from "../assets/images/Vector.png";
import Header from "./Header";
function Home() {
  return (
    <>
      <Header />
      <section className="bg-blue text-white flex flex-col lg:flex-row py-[50px] px-[5%] justify-between ">
        <Testimonial
          iconName="fa-regular:sad-cry"
          title="Je suis Victime"
          classTestimonial="lg:w-[30%] w-full flex flex-col items-center lg:border-r-[2px] border-r-[Opx] lg:border-b-[0px] border-b-[2px] pr-3 sm:pr-10 lg:mb-O pb-10"
        >
          Si vous êtes ou avez été victime de violence sexuelle, voici quelques
          points de repère pour vous aider à y voir plus clair et vous orienter.
        </Testimonial>
        <Testimonial
          iconName="fa6-solid:ear-listen"
          title="Une victime s’est confiée à moi"
          classTestimonial="lg:w-[30%] w-full flex flex-col items-center lg:border-r-[2px] border-r-[Opx] lg:border-b-[0px] border-b-[2px] pr-3 sm:pr-10 lg:py-0 py-10"
        >
          Voici quelques points de repère pour vous aider à y voir plus clair et
          vous orienter.
        </Testimonial>
        <Testimonial
          iconName="fa-solid:eye"
          title="Je suis Témoin"
          classTestimonial="lg:w-[30%] w-full flex flex-col items-center lg:mt-0 mt-10"
        >
          Si vous êtes ou avez été témoin de violence sexuelle, voici quelques
          points de repère pour vous aider à y voir plus clair et vous orienter.
        </Testimonial>
      </section>
      <section className="bg-[#91D2FB] text-[#095789] ">
        <div className="pt-[2rem] pb-[2rem] ">
          <div className="pt-0 flex pl-[3%] pr-[3%] flex-row items-center justify-between ">
            <img src={vector} className="w-[17px] h-[29px]" alt="vector" />
            <p className="w-[80%] flex justify-center text-center font-poppins text-lg">
              "La violence à l'égard des femmes et des filles est une grave
              violation des droits de l'homme, entraînant des conséquences
              physiques, sexuelles, mentales et parfois mortelles. Elle affecte
              le bien-être général des femmes, les empêchant de participer
              pleinement à la société, et a des répercussions négatives sur leur
              famille, leur communauté et le pays. En outre, la violence
              engendre des coûts élevés, notamment en matière de santé, de
              justice et de pertes de productivité, impactant les budgets
              nationaux et le développement global."
            </p>
            <img src={vector1} className="w-[17px] h-[29px] " alt="vecctor" />
          </div>
          <div className="flex pt-[1rem] sm:justify-start justify-center">
            <p className="sm:pl-[13%] font-bold">
              ONUFEMMES - <br /> unwomen.org
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
