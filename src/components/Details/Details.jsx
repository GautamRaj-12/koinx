import { useState } from "react";

const Details = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <h2 className="mb-4 text-2xl font-semibold">Performance</h2>
            <div className="mb-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                  <p className="text-slate-500">Today's low</p>
                  <p className="font-semibold md:text-xl text-slate-500">
                    46,930.22
                  </p>
                </div>
                <div className="col-span-8">
                  <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 h-1 rounded-md w-[100%] relative mt-6">
                    <p className="absolute font-semibold -right-10 -top-2 text-slate-600"></p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-500">Today's high</p>
                  <p className="font-semibold md:text-xl text-slate-500">
                    49,343.83
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-2">
                  <p className="text-slate-500">52W Low</p>
                  <p className="font-semibold md:text-xl text-slate-500">
                    16,930.22
                  </p>
                </div>
                <div className="col-span-8">
                  <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 h-1 rounded-md w-[100%] relative mt-6">
                    <p className="absolute font-semibold -right-10 -top-2 text-slate-600"></p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-500">52W High</p>
                  <p className="font-semibold md:text-xl text-slate-500">
                    49,743.83
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-slate-500">
                Fundamentals <i className="text-xl fa-solid fa-circle-info"></i>
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="flex justify-between px-2 py-3 border-b-2">
                    <p className="font-semibold text-slate-500">
                      Bitcoin price
                    </p>
                    <p className="font-semibold">$16815.46</p>
                  </div>
                  <div className="flex justify-between px-2 py-3 border-b-2">
                    <p className="font-semibold text-slate-500">
                      24h Low/24h High
                    </p>
                    <p className="font-semibold">$16382.07/16874.12</p>
                  </div>
                  <div className="flex justify-between px-2 py-3 border-b-2">
                    <p className="font-semibold text-slate-500">
                      7h Low/7d High
                    </p>
                    <p className="font-semibold">$16382.07/16874.12</p>
                  </div>
                  <div className="flex justify-between px-2 py-3 border-b-2">
                    <p className="font-semibold text-slate-500">
                      Trading Volume
                    </p>
                    <p className="font-semibold">$23,249,202,782</p>
                  </div>
                  <div className="flex justify-between px-2 py-3 border-b-2">
                    <p className="font-semibold text-slate-500">
                      Market Cap Rank
                    </p>
                    <p className="font-semibold">#1</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex justify-between px-2 py-3 border-b-2">
                      <p className="font-semibold text-slate-500">Market Cap</p>
                      <p className="font-semibold">$323,507,290,047</p>
                    </div>
                    <div className="flex justify-between px-2 py-3 border-b-2">
                      <p className="font-semibold text-slate-500">
                        Market Cap Dominance
                      </p>
                      <p className="font-semibold">38.343%</p>
                    </div>
                    <div className="flex justify-between px-2 py-3 border-b-2">
                      <p className="font-semibold text-slate-500">
                        Volume/Market Cap
                      </p>
                      <p className="font-semibold">0.0718</p>
                    </div>
                    <div className="flex justify-between px-2 py-3 border-b-2">
                      <p className="font-semibold text-slate-500">
                        All-Time High
                      </p>
                      <p className="font-semibold">$69044.77</p>
                    </div>
                    <div className="flex justify-between px-2 py-3 border-b-2">
                      <p className="font-semibold text-slate-500">
                        All-Time Low
                      </p>
                      <p className="font-semibold">$67.81</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "Fundamentals":
        return (
          <>
            <p>Fundamentals</p>
          </>
        );
      case "News Insights":
        return (
          <>
            <p>News</p>
          </>
        );
      case "Sentiments":
        return (
          <>
            <p>Sentiments</p>
          </>
        );
      case "Team":
        return (
          <>
            <p>Team</p>
          </>
        );
      case "Technicals":
        return (
          <>
            <p>Technicals</p>
          </>
        );
      case "Tokenomics":
        return (
          <>
            <p>Tokenomics</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="details p-4 bg-white rounded-sm md:w-[60%] mx-[5%] mt-4 relative">
        <div className="tabs">
          <ul className="flex flex-wrap gap-6 py-2 mb-4 font-semibold border-b-2 text-slate-600">
            {[
              "Overview",
              "Fundamentals",
              "News Insights",
              "Sentiments",
              "Team",
              "Techincals",
              "Tokenomics",
            ].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        {tabContent()}
      </section>
    </>
  );
};

export default Details;
