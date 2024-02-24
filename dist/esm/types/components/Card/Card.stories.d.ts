/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ card }: import("./Card").CardProps) => import("react").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CardSample: Story;
export declare const CardAnnie: Story;
export declare const CardJuan: Story;
export declare const CardLee: Story;
