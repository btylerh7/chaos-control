class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
	<style>
	    header {
		font-family: var(--main-font);
		display: grid;
		align-items: center;
		@media (width > 500px) {
		    grid-template-columns: 1fr 1fr;
		}
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
		color: var(--app-text-color);
		height: fit-content;
		&:hover {
		    text-decoration: underline;
		}
	    }
	    .header-text {
		display: flex;
		flex-direction: column;
	    }
	    .logo {
		display: flex;
		gap: 1em;
		align-items: center;
		& p {
		    margin: 0 0 0.25em 0;
		    font-family: "Pixellari";
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
		    <p style="font-size: 1.75em;">CHAOS CONTROL</p>
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
