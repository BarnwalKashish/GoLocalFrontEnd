import * as React from "react";

const SettingsPanel: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
      <div className="space-y-6">
        {/* Privacy & Security */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-medium text-gray-900 mb-4">Privacy & Security</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show my profile in search results</span>
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Allow providers to contact me directly</span>
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Enable two-factor authentication</span>
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 rounded-xl p-6">
          <h4 className="font-medium text-red-900 mb-4">Danger Zone</h4>
          <p className="text-sm text-red-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
