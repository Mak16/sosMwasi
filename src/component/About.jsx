import Partener from "./Partener";
import Team from "./Team";

function About() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col lg:mt-52 mt-24">
        <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0">
          <div className="flex lg:flex-row flex-col lg:w-1/2 w-full space-x-0 lg:space-x-5">
            <div className="border-t-2 bg-blue lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl" />
            <div className="lg:mt-1 -mt-8 lg:space-y-8 space-y-6">
              <h2 className="font-poppins text-black text-xl text-center lg:text-left">
                À PROPOS DE NOUS
              </h2>
              <p className="font-poppins text-2xl sm:text-2xl text-center lg:text-left font-medium text-black">
                Nous croyons en l'égalité, la dignité, et l'importance d'un
                soutien communautaire fort.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full justify-center flex flex-col lg:mt-20 -mt-8 lg:space-y-8 space-y-6">
            <p className="font-poppins text-justify lg:text-left text-xl text-black">
              SosMwasi est une initiative dédiée à la protection et à
              l'autonomisation des femmes en situations de vulnérabilité. Nous
              œuvrons pour offrir un soutien, des ressources et une voix aux
              femmes dans le besoin.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#91D2FB] relative lg:pb-60 lg:pt-28 pt-10 my-14 pb-16 rounded-lg z-0">
        <div className="lg:w-[90%] mx-auto flex flex-col">
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-10 w-[90%] mx-auto space-x-0 lg:space-x-20">
            <div className="lg:w-1/2 w-full space-y-3">
              <h2 className="font-poppins text-2xl text-center lg:text-left">
                NOTRE MISSION
              </h2>
              <p className="font-poppins lg:text-2xl font-semibold text-center lg:text-left">
              Sensibiliser, éduquer et soutenir les femmes
              </p>
              <p className="font-normal font-poppins text-center lg:text-left">
                Notre mission est de protéger et d'autonomiser les femmes en
                situation de vulnérabilité, en leur offrant un accès facile à
                des ressources essentielles, à un soutien psychologique, et à
                des conseils pratiques. Nous nous engageons à créer un espace
                sûr et accueillant où chaque femme peut trouver l'aide dont elle
                a besoin pour surmonter les défis qu'elle rencontre et bâtir un
                avenir meilleur.
              </p>
            </div>
            <div className="lg:w-1/2 w-full space-y-3">
              <h2 className="font-poppins text-center text-2xl lg:text-left">
                NOTRE VISION
              </h2>
              <p className="font-poppins lg:text-2xl font-semibold text-center lg:text-left">
              Référence des femmes en difficulté.
              </p>
              <p className="font-normal font-poppins text-center lg:text-left">
                Nous envisionnons un monde où chaque femme, indépendamment de sa
                situation, a accès à un soutien inconditionnel, à la sécurité,
                et à l'autonomie. SosMwasi aspire à devenir une référence
                incontournable pour l'accompagnement des femmes en difficulté,
                en sensibilisant les communautés et en bâtissant un réseau de
                solidarité puissant et efficace à travers le monde.
              </p>
            </div>
          </div>
          <div className="lg:mt-16 mt-10">
            <Partener />
          </div>
        </div>
      </div>
      <Team/>
    </div>
  );
}
export default About;
