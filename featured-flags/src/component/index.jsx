import { useContext } from "react";
import CustomTab from "../custab";
import ThemeMode from "../theme";
import { FeatureFlagsContext } from "./context";
import '../App.css'

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentToRender = [
    {
      key: "showLightandDarkMode",
      component: <ThemeMode />,
    },
    {
      key: "showCustomTab",
      component: <CustomTab />,
    },
  ];

  if (loading) {
    return (
      <div>
        <h4>Please wait ... data is loading</h4>
      </div>
    );
  }

  function checkEnabledFlags(getCurrentIndex) {
    return enabledFlags[getCurrentIndex];
  }

  return (
    <div>
      <h1 className="h1">Feature Flags</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
