import React from 'react'

export default function Home() {
  const stories = [
    {
      name: "Ria Sharma",
      class: "Class 10",
      image: "https://via.placeholder.com/150", 
      text: "Thanks to CUET Plus, I was able to find the stream that truly aligns with my skills. Disha Plus counseling was a game-changer!",
    },
    {
      name: "Arjun Singh",
      class: "Class 12",
      image: "https://via.placeholder.com/150", 
      text: "CUET Plus’s Vision Plus career counseling gave me the direction I needed to pursue my dream career. Highly recommended!",
    },
  ];
  return (

    <div className=" text-white font-sans">
      
      <div className="bg-green-950  px-4 py-8 text-center md:flex md:justify-between md:items-center w-full">
        <div className=" w-full md:w-full">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Unlock Your Path with{' '}
            <span className="text-orange-500">Expert Counseling</span> at CUET Plus
          </h1>
          <p className="text-2xl mb-6">
            Personalized guidance to help students make informed academic and career choices for a bright future
          </p>
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded">
            Book a Free Counseling Session
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-0 md:mt-0">
          <img
            src="https://www.shutterstock.com/image-photo/happy-indian-student-schoolgirl-do-260nw-2248446779.jpg"
            className="rounded-md w-4/5 h-4/5 mr-50"
          />
        </div>
      </div>

     
      <div className="bg-green-950 py-12 text-center">
        <h2 className="text-5xl font-bold mb-6">Why Choose CUET Plus Counseling?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          The journey to academic and career success begins with the right guidance. CUET Plus
          offers expert counseling services designed to help students at every stage. Whether
          you're deciding which stream to pursue or planning your career path, our experienced
          counselors provide the insight and support you need.
        </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center bg-white mb-6">
  {/* Card 1 */}
  <div className="bg-green-950 text-white rounded-lg shadow-md flex-1 mx-8 md:mx-16 lg:mx-24 -mt-6 md:-mt-8">
    <div className="flex items-center justify-center mb-4 mt-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BuBT44Bptwl2N6-nyaJWi7W0G-K5h5xWAA&s" alt="Icon 1" className="w-20 h-20" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-center">Personalized Guidance:</h3>
    <p className="text-center px-4">
      Tailored advice based on individual strengths and aspirations.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-green-950 text-white rounded-lg shadow-md flex-1 mx-8 md:mx-12 lg:mx-20 -mt-6 md:-mt-8 ">
    <div className="flex items-center justify-center mb-4 mt-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BuBT44Bptwl2N6-nyaJWi7W0G-K5h5xWAA&s" alt="Icon 2" className="w-20 h-20" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-center">Experienced Counselors:</h3>
    <p className="text-center px-4">
      Experts with years of experience in academic and career counseling.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-green-950 text-white rounded-lg shadow-md flex-1 mx-8 md:mx-12 lg:mx-20 -mt-6 md:-mt-8">
    <div className="flex items-center justify-center mb-4 mt-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BuBT44Bptwl2N6-nyaJWi7W0G-K5h5xWAA&s" alt="Icon 3" className="w-20 h-20" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-center">Proven Success:</h3>
    <p className="text-center px-4">
      Countless students have achieved their goals with our help.
    </p>
   
  </div>
  
</div>
<div className="bg-white flex justify-center items-center mt-20">
  <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded w-1/3 text-semibold">
    [Get Started Today]
  </button>
</div>

<div className="bg-white p-8">
  
  <h1 className="text-5xl font-bold text-center mb-8 text-black">Our Counseling Services</h1>


  <div className="flex flex-col md:flex-row justify-between mb-12">
   
    <div className="md:w-1/2 p-4">
      <h2 className="text-3xl font-semibold mb-4 text-black">Stream Counseling – Disha Plus</h2>
      <p className="text-lg mb-4 text-black">
        Making the right stream choice in classes 8th, 9th, and 10th can be challenging.
        Our Disha Plus program helps students identify their strengths, interests, and
        future goals to choose the best path forward.
      </p>
      <p className="text-xl font-bold mb-2 text-black">Who It’s For:</p>
      <p className="text-lg mb-4 text-black">Students in classes 8th to 10th.</p>
      <p className="text-xl font-bold mb-2 text-black">Key Features:</p>
      <ul className="list-disc ml-6 text-lg mb-4 text-black">
        <li>Personality and aptitude assessments</li>
        <li>Guidance in choosing Commerce, Humanities, or Science</li>
        <li>Insights into future academic and career options within each stream</li>
      </ul>
      <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded text-lg">
        Explore Disha Plus Counseling
      </button>
    </div>

    {/* Career Counseling */}
    <div className="md:w-1/2 p-4">
      <h2 className="text-3xl font-semibold mb-4 text-black">Career Counseling – Vision Plus</h2>
      <p className="text-lg mb-4 text-black">
        For students in 11th and 12th grades, Vision Plus offers in-depth career
        guidance tailored to individual goals. Our counselors provide valuable
        insights into career options, exam preparation, college admissions, and more.
      </p>
      <p className="text-xl font-bold mb-2 text-black">Who It’s For:</p>
      <p className="text-lg mb-4 text-black">Students in classes 11th and 12th.</p>
      <p className="text-xl font-bold mb-2 text-black">Key Features:</p>
      <ul className="list-disc ml-6 text-lg mb-4 text-black">
        <li>Comprehensive career options analysis</li>
        <li>CUET and other exam preparation guidance</li>
        <li>Support for university and course selection</li>
      </ul>
      <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded text-lg">
        Explore Vision Plus Counseling
      </button>
    </div>
  </div>

  
  <h2 className="text-4xl font-bold text-center mb-4 text-black">How Our Counseling Process Works</h2>

 
  <div className="flex flex-col md:flex-row items-center mt-8">

  <div className="ml-0 mr-16 md:mr-8 lg:mr-16 xl:mr-20" style={{ textAlign: "right", marginTop: "100px" }}>
    <h3 className="text-4xl font-bold mb-4 text-black ml-20">Book a Free Initial Consultation</h3>
    <p className="text-lg mb-2 text-black ml-20">
      Start with a no-obligation consultation to discuss your needs and goals.
    </p>
  </div>

  {/* Dot and Dotted Line - Centered */}
  <div className="flex flex-col items-center justify-center">
  
    <div className="w-8 h-8 bg-green-950 rounded-full mb-8"></div>


    <div
      style={{
        height: "120px", 
        borderLeft: "4px dashed black", 
      }}
    ></div>
  </div>
</div>



</div>

{/* Third Section */}
<div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "2rem 0",
  }}
>
  {/* Left Text Section */}
  <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", marginRight: "2rem" }}>
    {/* One-on-One Counseling Sessions */}
    <div style={{ textAlign: "right", marginTop: "100px" }}>
      <h3 style={{ fontWeight: "bold", color: "black", fontSize: "2rem" ,marginTop:"100px"}}>One-on-One Counseling Sessions</h3>
      <p style={{ color: "black", fontSize: "1.2rem" }}>
        Receive tailored guidance in private sessions with our experienced counselors.
      </p>
    </div>
  </div>

  {/* Middle Timeline Section */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 2rem",
    }}
  >
    {/* Top Dot */}
    <div
      style={{
        width: "32px",
        height: "32px",
        backgroundColor: "#0d1f12",
        borderRadius: "50%",
        marginBottom: "4rem",
      }}
    ></div>

    {/* Dashed Line */}
    <div
      style={{
        width: "2px",
        height: "100px",
        backgroundColor: "transparent",
        borderLeft: "4px dashed #0d1f12",
        marginBottom: "4rem",
      }}
    ></div>

    {/* Middle Dot */}
    <div
      style={{
        width: "32px",
        height: "32px",
        backgroundColor: "#0d1f12",
        borderRadius: "50%",
        marginBottom: "4rem",
      }}
    ></div>

    {/* Dashed Line */}
    <div
      style={{
        width: "2px",
        height: "100px",
        backgroundColor: "transparent",
        borderLeft: "4px dashed #0d1f12",
        marginBottom: "4rem",
      }}
    ></div>

    {/* Bottom Dot */}
    <div
      style={{
        width: "32px",
        height: "32px",
        backgroundColor: "#0d1f12",
        borderRadius: "50%",
      }}
    ></div>
  </div>

  {/* Right Text Section */}
  <div style={{ flex: 1 }}>
 
    <div style={{ marginBottom: "6rem" }}>
      <h3 style={{ fontWeight: "bold", color: "black", fontSize: "2rem" }}>Personalized Assessment</h3>
      <p style={{ color: "black", fontSize: "1.2rem" }}>
        Our counselors will conduct aptitude and personality assessments to understand your unique
        strengths.
      </p>
    </div>

    
    <div style={{ marginTop: "50px" }}>
      <h3 style={{ fontWeight: "bold", color: "black", fontSize: "2rem" ,marginTop:"350px"}}>Ongoing Support</h3>
      <p style={{ color: "black", fontSize: "1.2rem" }}>
        We provide continuous support and regular follow-ups to help you stay on track.
      </p>
    </div>
  </div>
</div>
<div className="bg-white flex justify-center items-center  mt-20 mb-20">
  <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded w-1/3 text-semibold">
    [ Start Your Counseling Journey ]
  </button>
</div>

<div className="bg-green-950 text-white py-10 px-4 w-full">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
    Success Stories from Our Students
  </h2>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
    {/* Card 1 */}
    <div className="bg-green-950 p-6 rounded-[25px] shadow-lg border-4 border-black max-w-xs sm:max-w-md w-full flex flex-col items-center">
      <img
        src="https://www.shutterstock.com/image-photo/happy-smiling-african-american-girl-600nw-2346454877.jpg" 
        alt="Ria Sharma"
        className="w-40 h-50 rounded-full  mb-2"
      />
      <h3 className="text-xl font-bold mb-1">Ria Sharma</h3>
      <p className="text-lg font-semibold mb-2">Class 10</p>
      <p className="text-lg font-semibold text-center">
        Thanks to CUET Plus, I was able to find the stream that truly aligns
        with my skills. Disha Plus counseling was a game-changer!
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-green-950 p-6 rounded-[25px] shadow-lg border-4 border-black max-w-xs sm:max-w-md w-full flex flex-col items-center">
      <img
        src="https://www.shutterstock.com/image-photo/student-university-portrait-black-man-600nw-2353231721.jpg" 
        alt="Arjun Singh"
        className="w-40 h-50 rounded-full mb-2"
      />
      <h3 className="text-xl font-bold mb-1">Arjun Singh</h3>
      <p className="text-lg font-semibold mb-2">Class 12</p>
      <p className="text-lg font-semibold  text-center">
        CUET Plus’s Vision Plus career counseling gave me the direction I
        needed to pursue my dream career. Highly recommended!
      </p>
    </div>
  </div>

  <div className="flex justify-center mt-6">
    <button className="bg-orange-500 text-white py-2 px-6 rounded text-lg font-semibold hover:bg-orange-600">
      See More Success Stories
    </button>
  </div>

  <h3 className="text-3xl sm:text-4xl font-bold text-center mt-8">
    Meet Our Expert Counselors
  </h3>

  <div className="flex justify-center mt-6 sm:mt-20">
    <button className="bg-orange-500 text-white py-2 px-6 rounded text-lg font-semibold hover:bg-orange-600">
      Meet Our Team
    </button>
  </div>
</div>
<div className="bg-green-950 text-white font-sans p-10">
  <div className="text-center mb-10">
    <h1 className="text-4xl font-extrabold">Frequently Asked Questions</h1>
  </div>

  <div className="mb-5">
    <h2 className="text-3xl font-bold">Q1: How does the counseling process work at CUET Plus?</h2>
    <p className="text-xl">
      A: Our counseling process includes an initial consultation, personalized assessments, one-on-one sessions, and ongoing support to help you achieve your academic and career goals.
    </p>
  </div>

  <div className="mb-5">
    <h2 className="text-3xl font-bold">Q2: Is the initial consultation free?</h2>
    <p className="text-xl">
      A: Yes, we offer a free initial consultation to help you understand how our services can benefit you.
    </p>
  </div>

  <div className="mb-5">
    <h2 className="text-3xl font-bold">Q3: Can parents be involved in the counseling process?</h2>
    <p className="text-xl">
      A: Absolutely. We encourage parents to be part of the process, especially in the initial sessions.
    </p>
  </div>

  <div className="text-center mb-10">
    <button className="bg-[#f26b3a] text-white py-2 px-4 rounded-lg cursor-pointer text-xl font-semibold">
      Read More FAQs
    </button>
  </div>

  <div className="text-center pt-5  ">
    <h2 className="text-3xl font-bold">Ready to Take the Next Step?</h2>
    <p className="my-5 text-xl">
      Don’t leave your future to chance. Get the guidance you need to make informed decisions and reach your full potential. Whether you’re choosing a stream or mapping out a career, CUET Plus is here to help.
    </p>
    <button className="bg-[#f26b3a] text-white py-3 px-6 rounded-lg cursor-pointer text-xl font-semibold mt-10">
      Book Your Free Counseling Session Today
    </button>
  </div>
</div>

    </div>

  
  )
}
