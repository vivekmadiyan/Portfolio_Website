const page = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center justify-start pt-14 space-y-6">
      
      <div className="font-montserrat font-bold text-[30px] leading-[128%] w-[367px] tracking-[0.3554em] border-[4px] border-black p-4 bg-white text-black text-center">
        CONTACT
      </div>

    <div className="relative w-[763px] text-center text-black">
  <p className="mb-6">
    Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
  </p>

  <img
    src="./v.png"
    alt="Contact Illustration"
    className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[100px] h-auto mt-8"
  />
</div>
<form className="max-w-xl mx-auto px-4 py-8">

<div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
      
          required
          className="w-full bg-transparent border-b-4 border-black outline=none py-2 placeholder-gray-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
       
          required
          className="w-full bg-transparent border-b-4 border-black outline-none py-2 placeholder-gray-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          
          className="w-full bg-transparent border-b-4 border-black outline-none py-2 placeholder-gray-500"
        />
      </div>
      <div className="mb-8">
        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
         
          required
          rows={4}
          className="w-full bg-transparent border-b-4 border-black outline-none py-2 placeholder-gray-500 resize-none"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-10 py-2 border-t border-b border-black text-black font-semibold tracking-widest"
        >
          SUBMIT
        </button>
      </div>
    </form>

      

    </div>
  );
};

export default page;