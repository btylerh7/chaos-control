class StrudelButton extends HTMLElement {
  constructor() {
    super();
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
	    <slot></slot>
	    <button class="shadow-button" id="play-button">Play</button>
	    <button class="shadow-button" id="stop-button">Stop</button>
	</section>
	
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.querySelector("#play-button").addEventListener("click", () => {
      document.getElementById("repl").repl.editor.evaluate();
    });
    shadow.querySelector("#stop-button").addEventListener("click", () => {
      document.getElementById("repl").repl.editor.stop();
    });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("strudel-button", StrudelButton);
