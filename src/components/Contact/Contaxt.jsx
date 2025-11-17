import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ShinyText from "../ShinyText/ShinyText";
import ElectricBorder from "../ElectricBorder/ElectricBorder";

// 🧩 Schema validation với Zod
const formSchema = z.object({
  name: z
    .string()
    .nonempty("Hey, don’t be shy — what’s your name?")
    .min(2, "Your name’s too short to be real"),
  email: z
    .string()
    .nonempty("I can’t reach you if you don’t drop your email!")
    .email("That doesn’t look like a real email"),
  message: z
    .string()
    .nonempty("You forgot to say something")
    .min(5, "A few more words won’t hurt — type a bit more!"),
});

const Contaxt = () => {
  const [popup, setPopup] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // ✅ Hiện popup
      setPopup(data);

      // ✅ Reset form
      reset();

      // ✅ Gửi dữ liệu qua FormSubmit bằng fetch (không redirect)
      await fetch("https://formsubmit.co/ajax/trungnguyen1221999@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: "false", // Tắt captcha để gửi
        }),
      });
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") setPopup(null);
  };

  return (
    <div className="kontak mt-32 sm:p-10 p-0 z-10 relative" id="contact">
      <h1 className="text-xl md:text-3xl mb-2 font-bold text-center">
        Contact
      </h1>
      <p className="text-base/loose text-center mb-10 opacity-50">
        Get in touch with me
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-zinc-800 p-4 md:p-10 w-full rounded-md"
          >
            {/* Name */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                {...register("name")}
                className={`p-2 rounded-md bg-zinc-900 text-white border transition-all duration-300 focus:outline-none ${
                  errors.name
                    ? "border-red-500"
                    : "border-zinc-600 focus:ring-2 focus:ring-cyan-400"
                }`}
              />
              {errors.name && (
                <span className="text-red-400 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email..."
                {...register("email")}
                className={`p-2 rounded-md bg-zinc-900 text-white border transition-all duration-300 focus:outline-none ${
                  errors.email
                    ? "border-red-500"
                    : "border-zinc-600 focus:ring-2 focus:ring-cyan-400"
                }`}
              />
              {errors.email && (
                <span className="text-red-400 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-semibold">Message</label>
              <textarea
                placeholder="Say something to me..."
                rows="7"
                {...register("message")}
                className={`p-2 rounded-md bg-zinc-900 text-white border transition-all duration-300 focus:outline-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-zinc-600 focus:ring-2 focus:ring-cyan-400"
                }`}
              />
              {errors.message && (
                <span className="text-red-400 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <ElectricBorder
              color="#06b6d4" // Vibrant cyan
              speed={2} // Faster animation
              chaos={1} // More electric effect
              thickness={5} // Thicker border
              style={{
                borderRadius: 24,
                boxShadow: "0 0 24px #06b6d4, 0 0 48px #3b82f6", // Add glow
                transition: "box-shadow 0.3s, border 0.3s",
              }}
            >
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                >
                  <ShinyText
                    text={isSubmitting ? "Sending..." : "Send"}
                    disabled={false}
                    speed={3}
                  />
                </button>
              </div>
            </ElectricBorder>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div
          id="popup-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        >
          <div
            className="bg-zinc-900 border border-cyan-500/30 rounded-xl shadow-[0_0_25px_#06b6d4] p-8 max-w-md text-white space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Message Sent!
            </h2>
            <div className="text-left space-y-2 mb-6">
              <p>
                <strong>Name:</strong> {popup.name}
              </p>
              <p>
                <strong>Email:</strong> {popup.email}
              </p>
              <p>
                <strong>Message:</strong> {popup.message}
              </p>
              <p className="opacity-70 pt-10">
                Thanks {popup.name}, I’ll get back to you soon 💌
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => setPopup(null)}
                className="cursor-pointer bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contaxt;
