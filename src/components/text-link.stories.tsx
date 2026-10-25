import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextLink } from "./text-link";

const meta = {
  title: "UI/TextLink",
  component: TextLink,
  args: { href: "/work", children: "Work" },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rest: Story = {};
export const Current: Story = { args: { current: true } };
export const External: Story = { args: { href: "https://example.com", children: "LinkedIn" } };
