import React, { useContext, useState } from "react";
import Switch from "react-switch";
import AppContext from "../../context/AppContext";

function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [checked, setChecked] = useState(darkMode ? true : false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    setDarkMode(nextChecked ? "dark" : "");
  };
  return (
    <span className="absolute top-3 right-3">
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#414f64"
        onHandleColor="#1e293b"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={10}
        width={28}
        className="react-switch"
        id="material-switch"
      />
    </span>
  );
}

export default DarkModeSwitch;
