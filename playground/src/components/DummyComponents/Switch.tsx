import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchToggle({toggleHandler}) {
  const [enabled, setEnabled] = useState(false);
  
  const toggle = () => {
    setEnabled(!enabled);
    toggleHandler(enabled);
  }
  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={toggle}
        className={`${
          enabled ? "bg-gray-200" : "bg-gray-500"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">toggle darkmode</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        ></span>
      </Switch>
    </>
  );
}
