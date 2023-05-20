import "@unocss/reset/tailwind.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/600.css";
import "virtual:uno.css";

import { render } from "solid-js/web";
import { type Component, createSignal, batch } from "solid-js";

import { textToBlblinary, blblinaryToText } from "./lib";

const MainApp: Component = () => {
  const [text, setText] = createSignal("");
  const [blblinary, setBlblinary] = createSignal("");

  return (
    <section class="min-h-screen h-full flex flex-col gap-8 items-center justify-center p-4">
      <header class="text-center flex flex-col gap-1">
        <h1 class="text-2xl text-latteText">Blblinary</h1>
        <p class="text-latteSubtext0">
          When 0 and 1 are too basic, b and l are your friends.
        </p>
      </header>

      <main class="flex flex-col gap-4 items-center w-full">
        <label class="group flex flex-col gap-0.5 max-w-md w-full items-center">
          <p class="text-sm w-full text-left group-focus-within:(text-lg text-latteMauve font-medium) transition-all">
            Text
          </p>
          <textarea
            class="w-full resize-none h-32 rounded-lg outline-none border-2 border-latteText/20 hover:border-latteMauve/20 focus:border-latteMauve p-2 text-sm transition-colors"
            value={text()}
            onInput={(event) => {
              const value = event.currentTarget.value;
              if (!value) {
                batch(() => {
                  setText("");
                  setBlblinary("");
                });

                return;
              }

              const blblinary = textToBlblinary(value);

              batch(() => {
                setText(value);
                setBlblinary(blblinary);
              });
            }}
          />
        </label>
        <label class="group flex flex-col gap-0.5 max-w-md w-full items-center">
          <p class="text-sm w-full text-left group-focus-within:(text-lg text-latteMauve font-medium) transition-all">
            Blblinary
          </p>
          <textarea
            class="w-full resize-none h-32 rounded-lg outline-none border-2 border-latteText/20 hover:border-latteMauve/20 focus:border-latteMauve p-2 text-sm transition-colors"
            value={blblinary()}
            onInput={(event) => {
              const value = event.currentTarget.value;
              if (!value) {
                batch(() => {
                  setText("");
                  setBlblinary("");
                });

                return;
              }

              const text = blblinaryToText(value);

              batch(() => {
                setText(text);
                setBlblinary(value);
              });
            }}
          />
        </label>
      </main>

      <footer class="text-center">
        Made with love by Vexcited
      </footer>
    </section>
  )
}

const root = document.getElementById("root") as HTMLDivElement;
render(() => <MainApp />, root);
