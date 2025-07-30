export default function Partners() {
  return (
    <div className="h-[50rem] 2xl:mb-5 w-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-[50rem] w-full object-cover"
      >
        <source src="/partners.mp4" type="video/mp4" />
      </video>
      <h2 className="sm:text-7xl  text-3xl text-white absolute bottom-15 right-15 font-extrabold object-cover">
        Rejoins nos <br />
        Partenaires
      </h2>
    </div>
  );
}
