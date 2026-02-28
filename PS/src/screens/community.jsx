import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Community = () => {
  const navigate = useNavigate();
  const recentGames = [
    { name: "GTA V", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" },
    { name: "Valorant", img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg" },
    { name: "Warzone", img: "https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Warzone_cover.jpg" },
  ];
  const toHome=()=>
  {
    navigate("/")
  }


  const friends = [
    {
      name: "GhostReaper",
      level: 52,
      activity: "Playing Warzone",
      avatar: "https://i.pravatar.cc/100?img=21",
    },
    {
      name: "ShadowStrike",
      level: 38,
      activity: "In GTA Online",
      avatar: "https://i.pravatar.cc/100?img=22",
    },
    {
      name: "NovaX",
      level: 44,
      activity: "Last seen 2h ago",
      avatar: "https://i.pravatar.cc/100?img=23",
    },
  ];

  const posts = [
    {
      user: "SynthWaveKid",
      avatar: "https://i.pravatar.cc/100?img=15",
      time: "10 min ago",
      text: "Anyone down for a heist in GTA Online? Just loaded up.",
    },
    {
      user: "BlazeOP",
      avatar: "https://i.pravatar.cc/100?img=24",
      time: "25 min ago",
      text: "Valorant ranked grind tonight. Need 2 serious players.",
    },
    {
      user: "PixelK9",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "1 hour ago",
      text: "Unlocked diamond camo in Warzone 🔥",
    },
    { user: "ShadowStrike",
      avatar: "https://i.pravatar.cc/100?img=22",
      time: "2 hours ago",
      text: "FIFA Pro Club trials starting this weekend.", },
    { user: "GhostReaper",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "3 hours ago",
      text: "Anyone playing GTA RP servers tonight?", },
  ];

  const voiceRooms = [
    {
      name: "GTA Online Squad",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
    },
    {
      name: "Valorant Ranked",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg"
    },
    {
        name: "Warzone Tactical", logo: "https://imgs.search.brave.com/xNcScUlS2QeCllaEE0QwWo9Cdpop6GFv_hzM4wYa4vY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cmVzLnlydWNkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMy9XYXJ6b25l/X2xvZ29fUE5HMi5w/bmc"

    },
    {
        name: "FIFA Pro Club", logo: "https://imgs.search.brave.com/vjrryF1E222_xUotG-AOd0HytjBKgj2KlkyyKvURT1M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvODY0/NjY2MS5qcGc"
    }
     ];
const [newPostText, setNewPostText] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [allPosts, setAllPosts] = useState(posts);

  const handlePostSubmit = () => {
  if (!newPostText.trim()) return;

  const newPost = {
    user: "PixelK9",
    avatar: "https://i.pravatar.cc/100?img=12",
    time: "Just now",
    text: newPostText,
    image: newPostImage,
  };

  setAllPosts([newPost, ...allPosts]);
  setNewPostText("");
  setNewPostImage(null);
};
  return (
     <div className="bg-[#0b0b0d] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="bg-black h-[60px] flex justify-between items-center px-8 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8" fill="blue" onClick={toHome}>
              <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
            </svg>
          {["Games", "PS5", "PS4", "PS Plus", "Accessories", "News", "Store", "Support"].map((item, i) => (
            <a key={i} href="#" className="text-sm text-gray-400 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm">
          Sign In
        </button>
      </nav>

      {/* DASHBOARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

        {/* LEFT PANEL */}
        <div className="bg-[#141414] rounded-2xl p-5">

          {/* Profile */}
          <div className="text-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="w-28 mx-auto rounded-full mb-3"
            />
            <h2 className="text-xl font-semibold">PixelK9</h2>
            <p className="text-gray-400 text-sm">Level 45</p>
          </div>

          {/* Recent Games */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Recent Games</h4>
            <div className="flex gap-3">
              {recentGames.map((game, index) => (
                <img
                  key={index}
                  src={game.img}
                  alt=""
                  className="w-16 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Friends */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Online Friends</h4>
            {friends.map((friend, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#1c1c1c] p-3 rounded-lg mt-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={friend.avatar}
                    alt=""
                    className="w-10 rounded-full"
                  />
                  <div>
                    <span className="block font-semibold text-sm">
                      {friend.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {friend.activity}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  Lv {friend.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
 <div className="bg-[#141414] rounded-2xl p-5">

  {/* CREATE POST BLOCK */}
  <div className="bg-[#1c1c1c] p-4 rounded-xl mb-6">
    <div className="flex gap-3">
      <img
        src="https://i.pravatar.cc/100?img=12"
        alt=""
        className="w-11 h-11 rounded-full"
      />
      <textarea
        placeholder="What's on your mind?"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
        className="flex-1 bg-[#2a2a2a] text-white p-3 rounded-lg resize-none focus:outline-none"
        rows="3"
      />
    </div>

    {/* Image Preview */}
    {newPostImage && (
      <img
        src={newPostImage}
        alt=""
        className="mt-3 rounded-lg max-h-60 object-cover"
      />
    )}

    {/* Actions */}
    <div className="flex justify-between items-center mt-4">
      <label className="cursor-pointer text-sm text-blue-500 hover:text-blue-400">
        📷 Upload Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setNewPostImage(URL.createObjectURL(e.target.files[0]))
          }
        />
      </label>

      <button
        onClick={handlePostSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm"
      >
        Post
      </button>
    </div>
  </div>

  {/* POSTS */}
  {allPosts.map((post, index) => (
    <div
      key={index}
      className="bg-[#1c1c1c] p-4 rounded-xl mb-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.avatar}
          alt=""
          className="w-11 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-sm">
            {post.user}
          </h4>
          <span className="text-xs text-gray-400">
            {post.time}
          </span>
        </div>
      </div>

      <p className="text-sm mb-3">{post.text}</p>

      {post.image && (
        <img
          src={post.image}
          alt=""
          className="rounded-lg max-h-72 object-cover mb-3"
        />
      )}

      <div className="flex gap-6 text-sm text-gray-400">
        <span className="cursor-pointer hover:text-white">👍 Like</span>
        <span className="cursor-pointer hover:text-white">💬 Comment</span>
      </div>
    </div>
  ))}
</div>

        {/* RIGHT PANEL */}
        <div className="bg-[#141414] rounded-2xl p-5">
          <h3 className="font-semibold mb-4">VOICE ROOMS</h3>

          {voiceRooms.map((room, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#1c1c1c] p-3 rounded-xl mb-3 hover:bg-[#252525] transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={room.logo}
                  alt=""
                  className="w-8 h-8 rounded-md object-cover"
                />
                <span className="text-sm">{room.name}</span>
              </div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Community;