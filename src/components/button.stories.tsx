import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: { children: "Read the note" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A rounded hairline on the card colour; the paper shows through on hover. Never a fill. */
export const Outlined: Story = {};
export const OutlinedDisabled: Story = { args: { disabled: true, children: "Not yet written" } };
/** Bare type; it underlines on hover. */
export const Quiet: Story = { args: { variant: "quiet", children: "Ask me directly" } };
