import React, { createContext, useContext, useReducer } from "react";
import { slideColors } from "./colors";

interface SlideSettings {
  textPosition: number;
  contentAngle: number;
  contentPosition: number;
  slideColor: string;
  slideTitle: string;
  mediaName: string;
}

type SettingAction =
  | { type: "changeTextPosition"; newTextPosition: number }
  | { type: "changeContentPosition"; newContentPosition: number }
  | { type: "changeAnglePosition"; newAnglePosition: number }
  | { type: "changeSlideColor"; newSlideColor: string }
  | { type: "changeSlideTitle"; newSlideTitle: string }
  | { type: "changeMediaName"; newMediaName: string };

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
    case "changeSlideTitle": {
      return {
        ...settings,
        slideTitle: action.newSlideTitle,
      };
    }
    case "changeMediaName": {
      return {
        ...settings,
        mediaName: action.newMediaName,
      };
    }
  }
};

type Reducer = React.ActionDispatch<[action: SettingAction]>;

const defaultSettings: SlideSettings = {
  textPosition: 0,
  contentAngle: 0,
  contentPosition: 0,
  slideColor: slideColors[0].hex,
  slideTitle: "Zyed et Bouna: 20 ans",
  mediaName: "a la tv sur ma tv",
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
