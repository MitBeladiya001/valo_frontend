"use client";
import React, { useState } from "react";
import {
  Play,
  ThumbsUp,
  MessageCircle,
  Upload,
  PlusCircle,
} from "lucide-react";
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

const VideoUploadModal = ({ isOpen, onClose }: VideoUploadModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 w-96 shadow-2xl transform transition-all hover:scale-105">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Upload Video</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>
        <div
          className="border-2 border-dashed border-blue-300 p-6 rounded-lg text-center 
          hover:border-blue-500 hover:bg-blue-50 transition-all group cursor-pointer"
        >
          <Upload
            className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform"
            size={48}
          />
          <p className="text-gray-600">
            Drag and drop or
            <span className="text-blue-600 ml-1 font-semibold">
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

const VideoCard = ({ video }: { video: Video }) => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="relative group cursor-pointer bg-white rounded-lg shadow-md 
      hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image width={1080} height={720}
          src={video.thumbnail}
          alt="sjbjsh"
          className="w-full h-48 object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
        {showControls && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Play className="text-white w-16 h-16 opacity-80 hover:opacity-100" />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex space-x-3">
          <Image width={1080} height={720}
            src={video.avatar}
            alt="jvdhf"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-bold text-sm line-clamp-2">{video.title}</h3>
            <p className="text-xs text-gray-500">{video.channel}</p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
              <span>{video.views} views</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  {video.likes}
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  {video.comments}
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
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Recommended</h1>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full 
            hover:bg-blue-700 transition-colors group"
          >
            <PlusCircle className="mr-2 group-hover:rotate-180 transition-transform" />
            Upload Video
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
