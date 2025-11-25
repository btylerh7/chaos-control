class CDCover extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.getAttribute("title");
    const artist = this.getAttribute("artist");
    const coverSrc = `/assets/albums/${artist}/${title}.jpg`;
    const template = document.createElement("template");
    const imageAlt = `${title} by ${artist} album cover`;
    template.innerHTML = `
      <div class="cd-wrapper">
	      <div class="cd-cover">
		      <img class="album-cover" alt="${imageAlt}" src="${coverSrc}" />
	      </div>
	      <div class="cd-case"></div>
      </div>

      <style>
	      .cd-wrapper {
		      margin-inline: auto;
		      position: relative;
		      width: 250px;
		      aspect-ratio: 1/1;
		      perspective: 1000px;
		      margin-block: 2em;

		      &:hover {
			      & .cd-case {
				      display: none;
				      border: none;
			      }

			      & .cd-cover {
				      transform: rotateY(0deg);

				      &::before,
				      &::after {
					      display: none;
				      }
			      }
		      }
	      }

	      .cd-case {
		      border-left: 2px solid var(--app-text-color);
		      position: absolute;
		      inset: 0;
		      /* transform-style: flat; */
		      /* perspective: 1000px; */
		      transform: translateX(-10px) rotateY(45deg);
		      z-index: -1;
		      /* transform: rotateY(-110deg); */
	      }

	      .cd-cover {
		      position: absolute;
		      inset: 0;
		      border: 2px solid var(--app-text-color);
		      background: var(--app-background);
		      transform: rotateY(45deg);
		      z-index: 2;

		      &::before,
		      &::after {
			      content: "";
			      position: absolute;
			      width: 15px;
			      height: 2px;
			      z-index: 10;
			      background: var(--app-text-color);
		      }

		      &::before {
			      top: -2px;
			      left: -15px;
		      }

		      &::after {
			      bottom: -2px;
			      left: -15px;
		      }

		      & img {
			      width: 100%;
			      object-fit: cover;
			      margin-bottom: 1em;
		      }
	      }
      </style>
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("cd-cover", CDCover);
