import Image from "next/image";

export default function Header() {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col">
      <div
        style={{   
          WebkitMaskImage: "url('/img/christening/mask-3.png')",          
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain", 
          WebkitMaskPosition: "center"            
        }}
        className="w-80 h-64" 
      >
        <Image
          alt="header"
          width={320}
          height={320}
          src={"/img/christening/gallery-02.jpg"}
          priority
          className="pt-5"
        />        
      </div>
      <p className="text-center">Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija</p>
      <h1>Annete Rivera Palacios</h1>
    </section>
  );
}
