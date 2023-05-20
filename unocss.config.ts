import { defineConfig } from "@unocss/vite";

// Presets.
import presetUno from "@unocss/preset-uno";

// Transformers.
import transformerVariantGroup from "@unocss/transformer-variant-group";

// Themes.
import { extendCatppuccin } from "unocss-catppuccin-colours";

export default defineConfig({
  presets: [
    presetUno()
  ],

  transformers: [
    transformerVariantGroup()
  ],

  theme: {
    colors: extendCatppuccin(),

    fontFamily: {
      sans: "Lexend"
    }
  }
});