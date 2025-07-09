import React from "react";

export default function FooterBar() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-800 p-6">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">About FARFETCH</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Company Info</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="">
          <h3 className="font-semibold mb-2">Discounts & Membership</h3>
          <ul className="space-y-1 mb-4">
            <li><a href="#" className="hover:underline">Student Discount</a></li>
            <li><a href="#" className="hover:underline">Membership Perks</a></li>
            <li><a href="#" className="hover:underline">Refer a Friend</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex flex-col gap-4 ">
            <p className="font-medium mb-2">Follow us</p>
            <div className="flex gap-4 items-center">
                 <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/snapchat.png" alt="snapchat" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex gap-4 ">
            <a href="#" target="_blank" className="hover:underline capitalize">Privacy policy</a>
            <a href="#" target="_blank" className="hover:underline capitalize">Terms and conditions</a>
            <a href="#" target="_blank" className="hover:underline capitalize">Accessibility</a>
        </div>

        <div className="mt-8 border-t pt-4 text-left text-xs text-gray-500">
        <p>
          'FARFETCH' and the 'FARFETCH' logo are trademarks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.
        </p>
        <p className="mt-1">© Copyright 2025 FARFETCH UK Limited. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}
