import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6"> 
      <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">
        Contact
      </h3>
      <ul className="space-y-4 text-sm text-base-content/70">
        <li className="flex items-center gap-3">
          <Mail size={16} className="text-primary" />
          support@ScholarSource.com
        </li>
        <li className="flex items-center gap-3">
          <Phone size={16} className="text-primary" />
          +880 1878 566957
        </li>
        <li className="flex items-center gap-3">
          <MapPin size={16} className="text-primary" />
          Dhaka, Bangladesh
        </li>
      </ul>
    </div>
  );
};

export default Contact;
