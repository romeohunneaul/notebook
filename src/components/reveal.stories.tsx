import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const meta = {
  title: "UI/Reveal",
  component: Reveal,
  args: {
    children: <SectionHeading lede="Rises 16px and fades in once, on mount.">Selected work</SectionHeading>,
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Delayed: Story = { args: { delay: 0.6 } };
