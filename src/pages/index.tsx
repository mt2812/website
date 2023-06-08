import socials from "@/data/socials";
import { IconContext } from "react-icons";
import Image from "next/image";

function Index() {
  return (
    <div className="w-screen h-screen bg-radial-gradient grid place-content-center p-6 relative">
      <main className="bg-card backdrop-blur-md border border-stroke max-w-lg rounded-xl overflow-hidden relative z-10">
        <div className="w-full h-64 relative">
          <Image
            src="/image/me.jpeg"
            alt="Max Taylor"
            fill
            className="object-cover"
            style={{
              filter: "sepia(1) hue-rotate(160deg) saturate(0.5) contrast(1.2)"
            }}
            loading="eager"
          />
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h1>Max Taylor</h1>
            <h2>
              Co-Founder, Backend Developer and Client Liaison at <a href="https://novatura.co/" target="_blank">Novatura</a>.
            </h2>
          </div>
          <p>
          Creating professional products designed with clients and employees in mind. Aiming to make life easier and improve a business’s digital footprint.
          </p>
          <p className="font-medium">
            <a href="mailto:hello@taylorbusiness.dev">hello@taylorbusiness.dev</a>
          </p>
          <div className="flex gap-4">
            <IconContext.Provider value={{size: "24"}}>
              {socials.map(({ name, url, icon: Icon }, index) => (
                <a href={url} target="_blank" key={index} className="text-light/70 hover:text-light">
                  <span className="sr-only">{name}</span>
                  <Icon />
                </a>
              ))}
            </IconContext.Provider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;