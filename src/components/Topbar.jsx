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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Copy } from "lucide-react";
import { Switch } from "@/components/ui/switch"

const TopBar = () => {
  const [shareLink, setShareLink] = useState("");
  const [isRead, setIsRead] = useState(true);
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };
  return (
    <div className="flex items-center bg-gray-100 p-2 shadow-sm rounded-lg space-x-2">
      <button className="p-2 hover:bg-gray-200 rounded">
        <FiSearch />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaUndo />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaRedo />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaPrint />
      </button>
      <select className="border rounded p-1 bg-white">
        <option>100%</option>
        <option>75%</option>
        <option>50%</option>
      </select>
      <button className="p-2 hover:bg-gray-200 rounded">£</button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FiPercent />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <BsTextCenter />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <BsFillGrid1X2Fill />
      </button>
      <select className="border rounded p-1 bg-white w-16">
        <option>10</option>
        <option>12</option>
        <option>14</option>
      </select>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaBold />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaItalic />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <FaUnderline />
      </button>
      <input type="color" className="w-10 h-10 border-0 rounded" />
      <button className="p-2 hover:bg-gray-200 rounded">
        <HiOutlineFilter />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">
        <HiOutlineCalculator />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded">∑</button>
      {/* <button className="p-2 hover:bg-gray-200 rounded"></button> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <img src="/images/share.svg" className="w-5 h-5" alt="Share" />
            </DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                value={shareLink} 
                readOnly
              />
              <div>
                <p>Read Access Only</p>
                <Switch 
                  checked={isRead} 
                  onCheckedChange={setIsRead} 
                />
              </div>
            </div>
            <Button type="button" size="sm" className="px-3" onClick={handleCopyLink}>
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TopBar;
