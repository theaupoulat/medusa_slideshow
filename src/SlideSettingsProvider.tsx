import React, { createContext, useContext, useReducer } from "react";
import { slideColors } from "./colors";

interface SlideSettings {
  textPosition: number;
  contentAngle: number;
  contentPosition: number;
  slideColor: string;
}

type SettingAction =
  | { type: "changeTextPosition"; newTextPosition: number }
  | { type: "changeContentPosition"; newContentPosition: number }
  | { type: "changeAnglePosition"; newAnglePosition: number }
  | { type: "changeSlideColor"; newSlideColor: string };

const reducer = (
  settings: SlideSettings,
  action: SettingAction,
): SlideSettings => {
  switch (action.type) {
    case "changeTextPosition": {
      return {
        ...settings,
        textPosition: action.newTextPosition,
      };
    }
    case "changeContentPosition": {
      return {
        ...settings,
        contentPosition: action.newContentPosition,
      };
    }
    case "changeAnglePosition": {
      return {
        ...settings,
        contentAngle: action.newAnglePosition,
      };
    }
    case "changeSlideColor": {
      return {
        ...settings,
        slideColor: action.newSlideColor,
      };
    }
  }
};

type Reducer = React.ActionDispatch<[action: SettingAction]>;

const defaultSettings = {
  textPosition: 0,
  contentAngle: 0,
  contentPosition: 0,
  slideColor: slideColors[0].hex,
};

const SlideSettingsContext = createContext<SlideSettings | null>(null);

const SlideSettingsDispatchContext = createContext<Reducer | null>(null);

export const useSettings = () => {
  return useContext(SlideSettingsContext);
};
export const useSlideSettingsDispatch = () => {
  return useContext(SlideSettingsDispatchContext);
};

export const SlideSettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, dispatch] = useReducer(reducer, defaultSettings);

  return (
    <SlideSettingsContext value={settings}>
      <SlideSettingsDispatchContext value={dispatch}>
        {children}{" "}
      </SlideSettingsDispatchContext>
    </SlideSettingsContext>
  );
};
