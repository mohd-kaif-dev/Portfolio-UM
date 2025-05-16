import { useEffect, useState } from "react";
import Particles from "./ui/Particles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        SERVICE_ID, // 🔁 Replace with your EmailJS service ID
        TEMPLATE_ID, // 🔁 Replace with your EmailJS template ID
        templateParams,
        PUBLIC_KEY // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          setIsFormSubmitted(true);
          setIsLoading(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
  }, [isFormSubmitted]);

  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col items-center justify-center p-5 md:p-10 tracking-wider font-['PP']"
    >
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <h1 className="text-5xl font-bold font-['Contten'] z-10">
        Let's Connect
      </h1>

      <div className="max-w-3xl w-full z-10 p-10">
        <div className="text-xl text-center mb-8">
          <p>
            Feel free to leave me a message via the form, or contact me at{" "}
            <span className="font-bold text-emerald-600">
              umar_designer@gmail.com
            </span>
          </p>
          <p>Let’s create something creative and impactful.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full border-2 border-gray-300 p-2 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border-2 border-gray-300 p-2 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type Something..."
              rows={5}
              className="w-full border-2 border-gray-300 p-2 rounded-lg text-white resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>

          {isFormSubmitted && (
            <p className="text-green-500 mt-4 text-center">
              Message sent successfully! 🎉
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
