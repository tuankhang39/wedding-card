import clsx from "clsx";
import React, { useState, useRef } from "react";
import config from "../../config/envConfig";

const songs = [
  {
    title: "🎵 Ánh nắng của anh",
    url: "anhnangcuaanh.mp3",
  },
  {
    title: "🎵 Ngày đầu tiên",
    url: "ngaydautien.mp3",
  },
  {
    title: "🎵 Nothing gonna change my love for you",
    url: "nothinggona.mp3",
  },
  {
    title: "🎵 Beautiful in white",
    url: "btfiw.mp3",
  },
];

const MusicPlayer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [showList, setShowList] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const isPlaying = currentIndex !== null;
  const currentSong = isPlaying ? songs[currentIndex!] : null;

  const toggleMusicButton = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setCurrentIndex(null);
      setShowList(false);
      setExpanded(false);
    } else {
      setShowList((prev) => !prev);
    }
  };

  const handlePlay = (index: number) => {
    setCurrentIndex(index);
    setShowList(false);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const playNext = () => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  return (
    <div className="flex m-auto fixed bottom-4 left-4 z-50 gap-2 items-center">
      <div className="relative">
        <button
          className={clsx(
            "bg-pink-500 text-white rounded-full p-3 shadow-lg transition-transform hover:bg-pink-600",
            isPlaying && "animate-spin-slow"
          )}
          onClick={toggleMusicButton}
        >
          🎵
        </button>

        {showList && !isPlaying && (
          <div className="absolute bottom-14 left-0 bg-white rounded-xl shadow-xl w-48 overflow-hidden">
            {songs.map((song, idx) => (
              <button
                key={idx}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100"
                onClick={() => handlePlay(idx)}
              >
                {song.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {isPlaying && (
        <div className="w-64 bg-white rounded-xl shadow-lg p-3 flex flex-col space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold truncate">
              {currentSong?.title}
            </span>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-pink-500 text-sm hover:underline min-w-fit"
            >
              {expanded ? "Ẩn" : "Mở rộng"}
            </button>
          </div>

          <div
            className={clsx(
              "flex justify-between items-center",
              expanded ? "" : "hidden"
            )}
          >
            <button
              onClick={playNext}
              className="px-3 py-1 text-sm bg-pink-100 hover:bg-pink-200 rounded"
            >
              ⏭ Tiếp theo
            </button>
            <audio
              ref={audioRef}
              src={`${config.BASE_PATH}audio/${currentSong?.url}`}
              autoPlay
              onEnded={playNext}
              controls
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
