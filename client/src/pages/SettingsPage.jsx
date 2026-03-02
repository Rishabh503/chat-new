// import { THEMES } from "../constants";
// import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
//   const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-20">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Theme Section */}
        {/* <div>
          <h2 className="text-xl font-semibold text-gray-800">Theme</h2>
          <p className="text-sm text-gray-500">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`flex flex-col items-center gap-2 p-2 rounded-lg transition 
                border 
                ${theme === t 
                  ? "bg-gray-200 border-gray-400" 
                  : "bg-white border-gray-200 hover:bg-gray-100"}
              `}
            >
              <div className="h-8 w-full rounded-md overflow-hidden">
                <div className="grid grid-cols-4 gap-1 p-1 h-full">
                  <div className="bg-blue-500 rounded"></div>
                  <div className="bg-purple-500 rounded"></div>
                  <div className="bg-pink-500 rounded"></div>
                  <div className="bg-gray-700 rounded"></div>
                </div>
              </div>

              <span className="text-xs font-medium text-gray-700 truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div> */}

        {/* Preview Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Preview</h3>

          <div className="rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
            <div className="p-6 bg-gray-50">

              <div className="max-w-lg mx-auto bg-white rounded-xl shadow overflow-hidden">

                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                    J
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-xs text-green-500">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-3 shadow-sm text-sm
                          ${
                            message.isSent
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800"
                          }
                        `}
                      >
                        <p>{message.content}</p>
                        <p className="text-[10px] mt-1 opacity-70">
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 flex gap-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="bg-blue-500 text-white px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                    <Send size={18} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;