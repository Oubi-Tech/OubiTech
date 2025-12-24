import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const BookCallDrawer = memo(({ open, onClose, language }) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    when: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const update = useCallback((k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
  }, []);

  const submit = useCallback(
    (e) => {
      e.preventDefault();

      const subject = `Call booking - ${form.name || "New Lead"}`;
      const body = `
Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Preferred time: ${form.when}

Notes:
${form.notes}
      `;

      window.location.href = `mailto:hello@oubitech.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({
          name: "",
          company: "",
          email: "",
          when: "",
          notes: "",
        });
        onClose();
      }, 2000);
    },
    [form, onClose]
  );

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex justify-end"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-md h-full bg-white dark:bg-gray-900 border-l p-6 shadow-2xl overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === "ar" ? "احجز مكالمة" : "Book a Call"}
          </h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {sent ? (
          <div className="h-64 flex flex-col items-center justify-center gap-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <p className="text-xl font-semibold">
              {language === "ar" ? "تم الإرسال بنجاح!" : "Sent successfully!"}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input
              required
              placeholder={language === "ar" ? "الاسم" : "Name"}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full border rounded-xl px-4 py-2.5"
            />
            <input
              placeholder={language === "ar" ? "الشركة" : "Company"}
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="w-full border rounded-xl px-4 py-2.5"
            />
            <input
              required
              type="email"
              placeholder={language === "ar" ? "الإيميل" : "Email"}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border rounded-xl px-4 py-2.5"
            />
            <input
              placeholder={
                language === "ar" ? "الوقت المفضل" : "Preferred time"
              }
              value={form.when}
              onChange={(e) => update("when", e.target.value)}
              className="w-full border rounded-xl px-4 py-2.5"
            />
            <textarea
              rows={4}
              placeholder={language === "ar" ? "ملاحظات" : "Notes"}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="w-full border rounded-xl px-4 py-2.5"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold"
            >
              {language === "ar" ? "إرسال" : "Send"}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
});

export default BookCallDrawer;
