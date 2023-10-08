import image from "../../assets/cover_photo.jpg";
const Banner = () => {
    return (
        // <div >
        //     <img className="w-[1320px] h-[600px]" src={image} alt="" />
        // </div>

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/NCBYZCF/cover-photo.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Event Management</h1>
      <p className="mb-5">Mastering the Art of Event Management: Creating Memorable Experiences</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;