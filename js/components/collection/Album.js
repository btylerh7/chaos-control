class Album extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const artist = this.getAttribute("artist");
    const title = this.getAttribute("title");
    const url = this.getAttribute("url");
    const artistUrl = url.split("/")[0];
    const titleUrl = url.split("/")[1];
    const pageLink = `/collection/album?artist=${artistUrl}&title=${titleUrl}`;
    const imageLink = `/assets/albums/${artist}/${title}.jpg`;
    const template = document.createElement("template");
    template.innerHTML = `
      <a class="collection-link" href="${pageLink}">
	<article class="album" title=${title}>
	  <cd-cover title="${title}" artist="${artist}"></cd-cover>
	  <div class="metadata">
	    <h2>${title}</h2>
	    <p>${artist}</p>
	  </div>
	</article>
      </a>
      <style>
	.collection-link {
		justify-self: center;
		color: white;
		&:visited {
			color: white;
		}
		& > * {
			text-align: center;
		}
	}
	.album {
		display: grid;
		justify-content: start;
		gap: 0;
		/* width: fit-content; */
		padding: 1rem;
		/* border-radius: 5px; */
		grid-template-rows: 3fr 1fr;
		position: relative;

		& .metadata {
			display: grid;
			align-items: start;

			& > * {
				margin: 0;
			}
		}
	}
      </style>
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("music-album", Album);
