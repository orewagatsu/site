import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, CalendarCheck, MessageCircle } from "lucide-react";

const SCROLL_THRESHOLD = 0.40;
const SESSION_KEY = "contact-popup-dismissed";

export default function ScrollContactPopup() {
  const location = useLocation();
  const isJapanese = !location.pathname.startsWith("/en");

  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [tabVisible, setTabVisible] = useState(false);

  const isContactPage =
    location.pathname === "/contact" ||
    location.pathname === "/en/contact";

  const contactPath = isJapanese ? "/contact" : "/en/contact";

  const content = {
    heading: isJapanese ? "無料体験レッスン" : "Free Trial Lesson",
    subheading: isJapanese
      ? "今すぐご相談ください"
      : "Get in touch today",
    cta: isJapanese ? "お問い合わせ・ご予約" : "Contact Us",
    phone: "+81-80-2839-8777",
    email: "iwakidream@outlook.com",
    tabLabel: isJapanese ? "お問い合わせ" : "Contact",
  };

  const handleScroll = useCallback(() => {
    if (dismissed || isContactPage) return;
    const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    if (scrolled >= SCROLL_THRESHOLD) {
      setVisible(true);
    }
  }, [dismissed, isContactPage]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDismissed(true);
      return;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setVisible(false);
    setTabVisible(false);
  }, [location.pathname]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    setTabVisible(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  const reopen = () => {
    setVisible(true);
    setTabVisible(false);
    setDismissed(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  if (isContactPage) return null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="popup"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-6 right-5 z-50 w-72 rounded-2xl shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
          >
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 px-5 pt-4 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="text-white shrink-0" size={20} />
                  <div>
                    <p className="text-white font-bold text-base leading-tight">
                      {content.heading}
                    </p>
                    <p className="text-orange-100 text-xs mt-0.5">
                      {content.subheading}
                    </p>
                  </div>
                </div>
                <button
                  onClick={dismiss}
                  className="text-white/70 hover:text-white transition-colors mt-0.5 shrink-0"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div className="bg-white px-5 py-4 space-y-3">
              <a
                href={`tel:${content.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                  <Phone size={15} className="text-orange-500" />
                </div>
                <span className="text-sm font-medium">{content.phone}</span>
              </a>

              <a
                href={`mailto:${content.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                  <Mail size={15} className="text-orange-500" />
                </div>
                <span className="text-sm font-medium">{content.email}</span>
              </a>

              <Link
                to={contactPath}
                onClick={dismiss}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white font-semibold py-2.5 text-sm transition-all active:scale-95"
              >
                <MessageCircle size={15} />
                {content.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {tabVisible && (
          <motion.button
            key="tab"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={reopen}
            className="fixed bottom-6 right-0 z-50 bg-gradient-to-b from-orange-400 to-amber-500 text-white text-xs font-semibold px-3 py-6 rounded-l-xl shadow-lg hover:shadow-xl hover:from-orange-500 hover:to-amber-600 transition-all"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.05em" }}
          >
            {content.tabLabel}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
