/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const tabs = [
  { name: 'Latest' },
  { name: 'Updates' },
  { name: 'Events' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("Latest");

  return (
    <div className="relative h-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={classNames(
                tab.name === currentTab
                  ? 'border-orange-400 text-orange-300 font-semibold'
                  : 'border-transparent text-white hover:text-gray-300 hover:border-gray-300',
                'w-1/5 py-3 text-center border-b-2 sm:w-1/4 sm:text-sm'
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => setCurrentTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className={`${
        currentTab === "Latest" ? "flex" : "hidden"
      } flex-col w-full text-white pt-1.5`}
      >
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Web Event "Journey With a Gentle Breeze" ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/22</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">"Vibro-Crystal Research" Gameplay Details</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/20</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Genshin Impact EP - The Shirasagi's Gentle ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/19</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">"Battle Chronicle: Tool Update</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/18</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">"Tsubaki in Thawing Snow" Short Trailer ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/18</p>
        </div>
      </div>
      <div className={`${
        currentTab === "Updates" ? "flex" : "hidden"
      } flex-col w-full text-white pt-1.5`}
      >
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">The Version 1.2 "The Chalk Prince and the ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2020/12/20</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Regarding Account Security and Account ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2020/11/18</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Version 1.1 "A New Star Approaches" : About ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2020/11/06</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Marvelous Merchandise Event Details</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2020/10/23</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">How to Unlock the Astrolabos Chapter Quest</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2020/10/23</p>
        </div>
      </div>
      <div className={`${
        currentTab === "Events" ? "flex" : "hidden"
      } flex-col w-full text-white pt-1.5`}
      >
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Web Event "Journey With a Gentle Breeze" ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/22</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Winners Notice: "Plane of Euthymia" Raiden ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/15</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Winners Notice: "Pearl of Wisdom" ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/15</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Prize Giveaway: The "Frostflake Heron" ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/04/11</p>
        </div>
        <div className="flex justify-between items-center px-3 mx-3 pb-2.5 mt-2.5 border-b-2 border-white border-opacity-30">
          <p className="xl:text-sm">Genshin Impact New Version Twitch ...</p>
          <p className="text-sm opacity-30 sm:text-xs sm:ml-2">2022/03/31</p>
        </div>
      </div>
      <div className="flex justify-between px-6 mt-1">
        <div></div>
        <button className="text-white hover:text-orange-300 xl:text-sm">+ More</button>
      </div>
    </div>
  )
}

export default Tabs;
