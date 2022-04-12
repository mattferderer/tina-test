import * as React from "react";
import { Actions, ActionsFields, ActionProps } from "../actions";
import { Container } from "../container";
import { Section } from "../section";
import { ThemeContext } from "../theme";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import Image from 'next/image'

export interface BannerProps {
  // children: React.ReactNode;
  data: BannerPropsData;
  parentField: any;
}

export interface BannerPropsData {
  headline?: string;
  tagline?: string;
  actions?: ActionProps[];
  justifyActions?: string;// "justify-center" | "justify-start" | "justify-end";
  alignTextBox?: string; // "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center" | "middle-right" | "middle-left" | "middle-center";
  alignText?: string;  // "left" | "right" | "center";
  bgImage?: string;  // "Amanda" | "Weights";
}

export const Banner: React.FunctionComponent<BannerProps> = ({ data, parentField }) => {
  const myLoader = ({ src }) => {
    return process.env.NODE_ENV === 'development'
      ? `http://localhost:3000${src}`
      : `https://tina-test-beta.vercel.app${src}`;
  }

  const alignTextOuterWrapper = () => {
    switch (data.alignTextBox) {
      case ("top-center"):
        return "grid-cols-1 items-start justify-center";
      
      case ("middle-center"):
      default:
        return "grid-cols-1 place-items-center";
      
      case ("top-right"):
        return "grid-cols-2 items-start justify-end";
      
      case ("top-left"):
        return "grid-cols-2 items-start justify-start";

      case ("bottom-right"):
        return "grid-cols-2 items-end justify-start";
      case ("bottom-left"):
        return "grid-cols-2 items-end justify-start";
      
      case ("bottom-center"):
        return "grid-cols-1 items-end";
      
      case ("middle-right"):
        return "grid-cols-2 items-center"
      
      case ("middle-left"):
        return "grid-cols-2 items-center justify-start";
    }
  }

  const alignTextWrapper = () => {
    switch (data.alignTextBox) {
      case ("top-right"):
        return "col-start-2";
      case ("top-left"):
        return "";
      case ("top-center"):
        return "";
      case ("bottom-right"):
        return "col-start-2";
      case ("bottom-left"):
        return "";
      case ("bottom-center"):
        return "";
      case ("middle-right"):
        return "col-start-2";
      case ("middle-left"):
        return "";
      case ("middle-center"):
      default:
        return "";
    }
  }

  return (
    <div
      className={`flex-1 relative transition duration-150 ease-out body-font overflow-hidden text-white text-3xl h-96 md:h-128 lg:h-128 grid`}
    >
      <div className="absolute h-full w-full overflow-hidden -z-1">
        <Image
          loader={myLoader}
          alt="Woman in black tank top with hands on hips"
          src={`/components/Banner/${data.bgImage}.jpg`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className={`text-white font-proximal grid ${alignTextOuterWrapper()} h-full`}>
        <div className={`${alignTextWrapper()} ${data.alignText} leading-tight`}>
          <span className="text-white text-4xl lg:text-8xl  block uppercase font-bold  ">
            {data.headline}
          </span>
          <span className="text-orange-300 text-4xl lg:text-8xl block uppercase font-bold ">
            {data.tagline}
          </span>
          {data.actions && (
            <Actions
              parentField={`${parentField}.actions`}
              className={`py-2 ${data.justifyActions}`}
              actions={data.actions}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  ui: {
    previewSrc: "/blocks/banner.jpg",
    defaultItem: {
      tagline: "Find Your",
      headline: "Best Self",
    },
  },
  fields: [
    {
      type: "string",
      label: "Background Image",
      name: "bgImage",
      options: ["Amanda", "Weights"],
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Align Text Box",
      name: "alignTextBox",
      options: [
        { value: "top-right", label: "Top Right" },
        { value: "top-left", label: "Top Left" },
        { value: "top-center", label: "Top Center" },
        { value: "bottom-right", label: "Bottom Right" },
        { value: "bottom-left", label: "Bottom Left" },
        { value: "bottom-center", label: "Bottom Center" },
        { value: "middle-right", label: "Middle Right" },
        { value: "middle-left", label: "Middle Left" },
        { value: "middle-center", label: "Middle Center" },
      ],
    },
    {
      type: "string",
      label: "Align Text",
      name: "alignText",
      options: [{ value: "text-left", label: "Left" }, { value: "text-center", label: "Center" }, { value: "text-right", label: "Right" }],
    },
    ActionsFields,
    {
      type: "string",
      label: "Align Actions",
      name: "justifyActions",
      options: [{ value: "justify-start", label: "Left" }, { value: "justify-center", label: "Center" }, { value: "justify-end", label: "Right" }],
    },
    // {
    //   label: "Text",
    //   name: "text",
    //   type: "rich-text",
    // },
    // {
    //   label: "Actions",
    //   name: "actions",
    //   type: "object",
    //   list: true,
    //   ui: {
    //     defaultItem: {
    //       label: "Action Label",
    //       type: "button",
    //       icon: true,
    //       link: "/",
    //     },
    //   },
    //   fields: [
    //     {
    //       label: "Label",
    //       name: "label",
    //       type: "string",
    //     },
    //     {
    //       label: "Type",
    //       name: "type",
    //       type: "string",
    //       options: [
    //         { label: "Button", value: "button" },
    //         { label: "Link", value: "link" },
    //       ],
    //     },
    //     {
    //       label: "Icon",
    //       name: "icon",
    //       type: "boolean",
    //     },
    //     {
    //       label: "Link",
    //       name: "link",
    //       type: "string",
    //     },
    //   ],
    // },
    // {
    //   type: "object",
    //   label: "Image",
    //   name: "image",
    //   fields: [
    //     {
    //       name: "src",
    //       label: "Image Source",
    //       type: "image",
    //     },
    //     {
    //       name: "alt",
    //       label: "Alt Text",
    //       type: "string",
    //     },
    //   ],
    // },
    // {
    //   type: "string",
    //   label: "Color",
    //   name: "color",
    //   options: [
    //     { label: "Default", value: "default" },
    //     { label: "Tint", value: "tint" },
    //     { label: "Primary", value: "primary" },
    //   ],
    // },
  ],
};
