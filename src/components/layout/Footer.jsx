import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

const Footer = ({ language, content }) => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-purple-600" />
            <span className="font-bold text-lg">Oubi Tech</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {language === "ar"
              ? "نحوّل أفكارك الرقمية إلى واقع"
              : "Turning digital ideas into reality"}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            {language === "ar" ? "تواصل معنا" : "Contact"}
          </h4>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" /> {content.contact.email}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" /> {content.contact.phone}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" /> {content.contact.location}
          </p>
        </div>

        <div className="text-sm text-gray-500 md:text-right">
          © {new Date().getFullYear()} Oubi Tech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
