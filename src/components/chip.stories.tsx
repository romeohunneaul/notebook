import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Chip } from "./chip";

const meta = {
  title: "UI/Chip",
  component: Chip,
  args: { children: "note" },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A small rounded tag, soft ink on a hairline. */
export const Rest: Story = {};
/** Ink type, ink border. */
export const Selected: Story = { args: { state: "selected" } };
/** 38% opacity. */
export const Disabled: Story = { args: { state: "disabled" } };
/** Static: hovering the row changes nothing on the chip. */
export const InsideARow: Story = {
  render: () => (
    <button type="button" className="draws border-rule flex w-full items-baseline gap-3 border-b py-4 text-left">
      <span className="font-semibold">A catalogue you can talk to</span>
      <Chip>in progress</Chip>
    </button>
  ),
};
