import React, { useState } from "react";

const CongratsForm: React.FC = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  return (
    <div>
      <h2 className="text-2xl text-left font-ephesis mx-5">
        Gửi lời chúc mừng
      </h2>
      <div className="p-4 transition-colors text-black text-left font-ephesis">
        <div className="max-w-md mx-auto bg-white  rounded-xl shadow-md p-5 space-y-6">
          <div className="flex justify-between items-center"></div>
          <div>
            <label className="block mb-1 font-medium">Họ tên</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-white"
              placeholder="Nhập họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Lời chúc</label>
            <textarea
              rows={3}
              className="w-full p-2 rounded border border-gray-300  bg-white"
              placeholder="Nhập lời chúc..."
              value={wish}
              onChange={(e) => setWish(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Bạn sẽ tham dự chứ?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attend"
                  value="yes"
                  checked={attending === "yes"}
                  onChange={() => setAttending("yes")}
                />
                Có
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attend"
                  value="no"
                  checked={attending === "no"}
                  onChange={() => setAttending("no")}
                />
                Không
              </label>
            </div>
          </div>
          <button
            className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => alert("Cảm ơn bạn đã gửi lời chúc!")}
          >
            Gửi lời chúc
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratsForm;
