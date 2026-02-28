import React from "react";

const Community = () => {
  const recentGames = [
    { name: "GTA V", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" },
    { name: "Valorant", img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg" },
    { name: "Warzone", img: "https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Warzone_cover.jpg" },
  ];

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

  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="bg-black h-[60px] flex justify-between items-center px-8 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg"
            alt="PlayStation"
            className="h-6 mr-4"
          />
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
          {posts.map((post, index) => (
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
              <p className="text-sm">{post.text}</p>

              <div className="mt-3 flex gap-6 text-sm text-gray-400">
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