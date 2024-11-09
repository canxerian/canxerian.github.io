export type TGradient = "blue-rose" | "purple-yellow" | "stone-blue" | "neutral-fuschia";

export const Gradients: { [key in TGradient]: string } = {
  "blue-rose": "bg-gradient-to-br from-blue-300 to-rose-300",
  "purple-yellow": "bg-gradient-to-tr from-purple-400 to-yellow-300",
  "stone-blue": "bg-gradient-to-br from-stone-300 to-blue-200",
  "neutral-fuschia": "bg-gradient-to-tl from-neutral-300 to-fuchsia-200"
};

export function getRandomGradient() {
  const keys = Object.keys(Gradients)
  const randomIndex = Math.floor(Math.random() * keys.length);
  return Gradients[keys[randomIndex] as TGradient];
}