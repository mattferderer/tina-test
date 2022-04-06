import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../styles.css"
import { Banner, BannerProps, BannerPropsData } from '../components/blocks/banner';

// const HeroSection = ({ children, className }) => (<div className={className}>HERO SECTION<div>{children}</div></div>)

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Proximal/Banner',
    component: Banner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      headline: { control: 'text' },
      tagline: { control: 'text' },
      // className: { control: 'text' },
    },
  } as ComponentMeta<typeof Banner>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args: BannerPropsData) =>
    <Banner data={args} parentField={null} />
  
;
  
export const Primary = Template.bind({});
Primary.args = {
    headline: 'Find Your',
    tagline: 'Best Self',
  // className: 'bg-black text-white',
};
