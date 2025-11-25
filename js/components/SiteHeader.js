class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
	<style>
	    header {
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: 1fr;
		@media (width > 750px) {
		    grid-template-columns: 1fr 1fr;
		    justify-content: start;
		}
		font-family: var(--secondary-font);
		padding-inline: 1em;
	    }
	    nav {
		display: flex;
		justify-content: center;
		@media (width > 500px) {
		    justify-content: flex-end;
		}
		gap: 2em;
	    }
	    a {
		text-decoration: none;
		font-weight: 700;
		font-family: var(--secondary-font);
		color: var(--app-text-color);
		padding: 1rem 1.5rem;
		@media (width > 550px) {
			max-width: 30ch;
		}

		&:visited {
			color: var(--app-text-color);
		}
		&:hover {
			text-decoration: underline;
			background-color: var(--accent-color);
			color: white !important;
			background-image: url("/assets/black-arms-resized.png");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
	    }
	    .header-text {
		font-size: 14px;
		display: flex;
		flex-direction: column;
		font-weight: 700;
	    }
	    .logo {
		display: flex;
		align-items: center;
		gap: 1rem;

		& p {
		    margin: 0 0 0.25em 0;
		    text-align: center;
		}
		& img {
		    width: 100%;
		    max-width: 100px;
		}
	    }
	</style>
	<header>
	    <div class="logo">
		<img src="/assets/ChaosEmeraldRed.png" alt="A red chaos emerald" />
		<div class="header-text">
		    <p style="font-size: 1.50em;">CHAOS CONTROL</p>
		    <p style="font-size: 0.75em;">Life is chaotic, write fun HTML instead</p>
		</div>
	    </div>
	    <nav>
		<a href="/">Home</a>
		<a href="/strudel-showcase">Strudel Showcase</a>
		<a href="/collection">Music Collection</a>
	    </nav>
	</header>
    `;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("site-header", SiteHeader);
