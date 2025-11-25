class StrudelButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
	<style>
	    .shadow-button {
		padding-inline: 1rem;
		padding-block: 0.5rem;
		color: white;
		background: var(--accent-color);
		border: none;
		border-radius: var(--border-radius);

		&:hover {
		    cursor: pointer;
		    background-image: url("/assets/black-arms-resized.png");
		    background-size: cover;
		}
	    }
	section {
		border: 2px solid var(--app-text-color);
		padding: 1em;
		max-width: 50ch;
	}
	</style>
	<section>
	    <p><slot></slot></p>
	    <button class="shadow-button" id="play-button">Play</button>
	    <button class="shadow-button" id="stop-button">Stop</button>
	</section>
	
    `;
    this.shadowRoot.append(template.content.cloneNode(true));
    this.addEventListeners();
  }
  addEventListeners() {
    const playButton = this.shadowRoot.getElementById("play-button");
    const stopButton = this.shadowRoot.getElementById("stop-button");

    if (!playButton || !stopButton) {
      console.error(
        "Play or Stop button not found in StrudelButton's Shadow DOM.",
      );
      return; // Exit if buttons aren't found
    }
    const editor = () => document.getElementById("repl");
    const play = () => {
      const repl = editor();
      console.log(repl);
      repl.editor.evaluate();
    };
    const stop = () => {
      const repl = editor();
      repl.editor.stop();
    };
    playButton.addEventListener("click", play);
    stopButton.addEventListener("click", stop);
  }
}

customElements.define("strudel-button", StrudelButton);
