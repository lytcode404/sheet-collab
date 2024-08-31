'use client'

import React, { useEffect, useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaPrint,
  FaUndo,
  FaRedo,
} from "react-icons/fa";
import { BsFillGrid1X2Fill, BsTextCenter } from "react-icons/bs";
import { FiSearch, FiPercent } from "react-icons/fi";
import { HiOutlineCalculator, HiOutlineFilter } from "react-icons/hi";
import GenericPopup from "./GenericPopup";

const TopBar = () => {
  const [shareLink, setShareLink] = useState("");
  const [isRead, setIsRead] = useState(true);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  
  useEffect(() => {
    const generateLink = () => {
      const baseUrl = window.location.href;
      const params = new URLSearchParams();
      if (isRead) params.append("isRead", "true");
      const link = `${baseUrl.split('?')[0]}?${params.toString()}`;
      setShareLink(link);
    };

    generateLink();
  }, [isRead]);
  return (
    <div className="flex items-center bg-gray-100 p-2 shadow-sm rounded-lg space-x-2">
      {showInfoPopup ? (
        <GenericPopup
          paramvalue={shareLink}
          onConfirm={() => {
            setShowInfoPopup(false);
          }}
        />
      ) : null}
      {/* Search Icon */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <FiSearch />
      </button>

      {/* Undo/Redo */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaUndo />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaRedo />
      </button>

      {/* Print Icon */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaPrint />
      </button>

      {/* Zoom Dropdown */}
      <select className="border rounded p-1 bg-white">
        <option>100%</option>
        <option>75%</option>
        <option>50%</option>
      </select>

      {/* Currency Symbol */}
      <button className="p-2 hover:bg-gray-200 rounded">£</button>

      {/* Percentage Symbol */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <FiPercent />
      </button>

      {/* Alignment Buttons */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <BsTextCenter />
      </button>

      {/* Grid Toggle */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <BsFillGrid1X2Fill />
      </button>

      {/* Font Size Selector */}
      <select className="border rounded p-1 bg-white w-16">
        <option>10</option>
        <option>12</option>
        <option>14</option>
      </select>

      {/* Font Style Buttons */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaBold />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaItalic />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaUnderline />
      </button>

      {/* Color Picker (Simplified) */}
      <input type="color" className="w-10 h-10 border-0 rounded" />

      {/* Filter */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <HiOutlineFilter />
      </button>

      {/* Calculator Icon */}
      <button className="p-2 hover:bg-gray-200 rounded">
        <HiOutlineCalculator />
      </button>

      {/* Sum Symbol */}
      <button className="p-2 hover:bg-gray-200 rounded">∑</button>
      <button className="p-2 hover:bg-gray-200 rounded" onClick={() =>setShowInfoPopup(true)}>Share</button>
    </div>
  );
};

export default TopBar;
