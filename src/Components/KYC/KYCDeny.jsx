import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const KYCDeny = ({ onClose, onSendDenialMessage, email }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message) {
      setError("Message cannot be empty!");
      return;
    }

    setError("");

    onSendDenialMessage(email, message);
  };

  return (
    <div className="fixed inset-0 bg-black-fade flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl w-[320px] md:w-[40%] p-4 relative shadow-lg transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="absolute top-4 right-4 cursor-pointer">
          <IoCloseCircle
            size={24}
            style={{ color: "black" }}
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
          />
        </div>
        <h3 className="text-red text-xs font-medium text-center pb-4">
          Dollar Card Denial!
        </h3>

        <form className="flex flex-column gap-2 lg:w-[80%]">
          <label htmlFor="email" className="text-black font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            readOnly
            className="bg-green-opacity outline-0 p-2 py-1 text-white rounded mb-2"
          />

          <label className="text-black font-medium">Message</label>
          <textarea
            className="rounded-2xl border-1 border-zinc-400 text-gray-400 p-2 py-3 outline-0"
            name="message"
            rows={5}
            cols={50}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error && <p className="text-red text-xs mt-1">{error}</p>}

          <div className="text-right">
            <button
              onClick={handleSend}
              className="bg-black w-[100px] py-2 text-white rounded-3xl hover:bg-gray-500 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default KYCDeny;
