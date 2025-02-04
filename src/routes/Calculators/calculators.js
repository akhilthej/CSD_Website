import { useState } from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaSearch, FaLaptop, FaWrench, FaChartLine } from "react-icons/fa";

const DigitalMarketingCalculator = () => {
  const [posters, setPosters] = useState(0);
  const [reels, setReels] = useState(0);
  const [content, setContent] = useState("none");
  const [smm, setSmm] = useState(0);
  const [adsbudget, setAdsbudget] = useState(0);
  const [dailyBudget, setDailyBudget] = useState(0);
  const [days, setDays] = useState(0);
  const [seo, setSeo] = useState("none");
  const [emailMarketing, setEmailMarketing] = useState(0);
  const [whatsappMarketing, setWhatsappMarketing] = useState(0);
  const [websiteType, setWebsiteType] = useState("none");
  const [maintenance, setMaintenance] = useState(false);
  const [influencerMarketing, setInfluencerMarketing] = useState(0);
  const [analytics, setAnalytics] = useState(false);

  const posterPrice = 450;
  const reelPrice = 3000;
  const adsbudgetPrice = 1;

  const contentPrices = {
    none: 0,
    basic: 10000,
    advance: 20000,
    expert: 30000,
  };

  const seoPrices = {
    none: 0,
    onpage: 15000,
    offpage: 20000,
    local: 10000,
  };

  const websitePrices = {
    none: 0,
    landing: 10000,
    blogwebiste: 15000,
  };

  const maintenancePrice = 5000;
  const smmPrice = 10000;
  const emailPrice = 500;
  const whatsappPrice = 800;
  const influencerPrice = 5000;
  const analyticsPrice = 3000;

  const totalAmount =
    posters * posterPrice +
    reels * reelPrice +
    contentPrices[content] +
    seoPrices[seo] +
    (smm ? smmPrice : 0) +
    dailyBudget * days +
    emailMarketing * emailPrice +
    whatsappMarketing * whatsappPrice +
    websitePrices[websiteType] +
    (maintenance ? maintenancePrice : 0) +
    influencerMarketing * influencerPrice +
    (analytics ? analyticsPrice : 0);

  return (
    <div className=" mx-auto p-6 bg-gray-900 text-white shadow-lg rounded-lg pt-24">
      <h2 className="text-2xl font-bold text-center mb-6">
        Digital Marketing Calculator
      </h2>

      {/* Posters & Reels */}
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <FaInstagram className="mr-2" /> Design & Content Creation
      </h3>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Posters 
        </label>
        <input
          type="number"
          min="0"
          value={posters}
          onChange={(e) => setPosters(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        /><span className="text-[10px]">per poster (₹450 each)</span>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Reels
        </label>
        <input
          type="number"
          min="0"
          value={reels}
          onChange={(e) => setReels(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        /><span className="text-[10px]">per reel (₹3000 each)</span>
      </div>

      {/* Content Writing */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Content Writing
        </label>
        <select
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        >
          <option value="none">None</option>
          <option value="basic">Basic - ₹10,000</option>
          <option value="advance">Advance - ₹20,000</option>
          <option value="expert">Expert - ₹30,000</option>
        </select><span className="text-[10px]">it depends on the plan you choose.</span>
      </div>

      {/* Ads Budget */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 flex items-center">
          <FaFacebook className="mr-2" /> Facebook & Instagram Ads Daily Budget (₹)
        </label>
        <input
          type="number"
          min="0"
          value={dailyBudget}
          onChange={(e) => setDailyBudget(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Days</label>
        <input
          type="number"
          min="0"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        /><span className="text-[10px]">the following amount completely goes to ads.</span>
      </div>

      {/* SEO */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 flex items-center">
          <FaSearch className="mr-2" /> Search Engine Optimization (SEO)
        </label>
        <select
          value={seo}
          onChange={(e) => setSeo(e.target.value)}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        >
          <option value="none">None</option>
          <option value="onpage">On-Page SEO - ₹15,000</option>
          <option value="offpage">Off-Page SEO - ₹20,000</option>
          <option value="local">Local SEO - ₹10,000</option>
        </select><span className="text-[10px]">The following cost is per month.</span>
      </div>

      {/* Email & WhatsApp Marketing */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 flex items-center">
          <FaEnvelope className="mr-2" /> Email Campaigns (₹500 per 1,000 emails)
        </label>
        <input
          type="number"
          min="0"
          value={emailMarketing}
          onChange={(e) => setEmailMarketing(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        /><span className="text-[10px]">rates are decided by the supplier.</span>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 flex items-center">
          <FaWhatsapp className="mr-2" /> WhatsApp Broadcast (₹800 per 1,000 messages)
        </label>
        <input
          type="number"
          min="0"
          value={whatsappMarketing}
          onChange={(e) => setWhatsappMarketing(Number(e.target.value))}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        /><span className="text-[10px]">rates are decided by the supplier.</span>
      </div>

      {/* Website Development & Maintenance */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 flex items-center">
          <FaLaptop className="mr-2" /> Website Development
        </label>
        <select
          value={websiteType}
          onChange={(e) => setWebsiteType(e.target.value)}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
        >
          <option value="none">None</option>
          <option value="landing">Landing Page - ₹10,000</option>
          <option value="blogwebiste">Blog Website - ₹15,000</option>
        </select>
      </div>

      {/* Total Amount */}
      <div className="text-center mt-6 p-4 bg-gray-800 rounded-md">
        <p className="text-xl font-bold">
          Total Amount: ₹{totalAmount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketingCalculator;