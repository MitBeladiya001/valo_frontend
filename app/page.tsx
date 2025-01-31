"use client";
import React, { useState } from "react";
import Image from "next/image";
const videoData = [
  {
    id: "1",
    title: "Amazing Nature Exploration",
    channel: "Nature Wanderers",
    views: "2.3M",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "12:45",
    likes: "125K",
    comments: "4.2K",
  },
  {
    id: "2",
    title: "Tech Innovations 2024",
    channel: "TechPulse",
    views: "1.7M",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "18:30",
    likes: "89K",
    comments: "3.6K",
  },
  {
    id: "3",
    title: "World Travel Secrets",
    channel: "Global Wanderer",
    views: "3.1M",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "22:15",
    likes: "215K",
    comments: "7.2K",
  },
  {
    id: "4",
    title: "Cooking Masterclass",
    channel: "Chef's Table",
    views: "950K",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "45:20",
    likes: "62K",
    comments: "2.1K",
  },
  {
    id: "5",
    title: "Fitness Revolution",
    channel: "Fit Warriors",
    views: "1.5M",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "35:10",
    likes: "98K",
    comments: "3.8K",
  },
  {
    id: "6",
    title: "Music Production Secrets",
    channel: "Sound Lab",
    views: "800K",
    thumbnail: "/api/placeholder/360/202",
    avatar: "/api/placeholder/40/40",
    duration: "29:55",
    likes: "55K",
    comments: "1.9K",
  },
];

interface VideoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoUploadModal: React.FC<VideoUploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center">
      <div
        className="bg-gray-800 rounded-xl p-8 w-96 shadow-2xl transform transition-all 
      hover:scale-105 border border-gray-700"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Upload Video</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>
        <div
          className="border-2 border-dashed border-gray-600 p-6 rounded-lg text-center 
          hover:border-blue-500 hover:bg-gray-700 transition-all group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.2 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M14 2v8h3l-5 5-5-5h3V2z" />
          </svg>
          <p className="text-gray-400">
            Drag and drop or
            <span className="text-blue-400 ml-1 font-semibold">
              Browse Files
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
  avatar: string;
  duration: string;
  likes: string;
  comments: string;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="relative group cursor-pointer bg-gray-900 rounded-lg shadow-lg 
      hover:shadow-2xl hover:border-blue-600 border border-transparent
      transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          width={360}
          height={202}
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
        {showControls && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-16 h-16 opacity-80 hover:opacity-100"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex space-x-3">
          <Image
            width={40}
            height={40}
            src={video.avatar}
            alt={video.channel}
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <div className="flex-1">
            <h3 className="font-bold text-sm line-clamp-2 text-white">
              {video.title}
            </h3>
            <p className="text-xs text-gray-400">{video.channel}</p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
              <span>{video.views} views</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-1 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                  <span className="text-gray-300">{video.likes}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-1 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span className="text-gray-300">{video.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YouTubeInterface = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
            <button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center justify-center w-[400px] h-[400px] bg-blue-600 text-white 
            rounded-xl hover:bg-blue-700 hover:scale-105 transition-all group 
            border-4 border-blue-500 shadow-2xl hover:shadow-blue-500/50 mx-auto"
            >
            <div className="text-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 group-hover:rotate-180 transition-transform"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <h2 className="text-2xl font-bold mb-2">Upload Video</h2>
              <p className="text-sm text-blue-200">
              Click or drag files to upload
              </p>
              <div
              className="absolute inset-0 bg-blue-500/20 rounded-xl 
              opacity-0 group-hover:opacity-100 transition-opacity 
              pointer-events-none"
              ></div>
            </div>
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {videoData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      <VideoUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

export default YouTubeInterface;
