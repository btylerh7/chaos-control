class MarkdownDisplay extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    const artist = this.getAttribute("artist");
    const title = this.getAttribute("title");
    const url = `/assets/albums/${artist}/${title}.md`;
    const fileData = await fetch(url);
    if (!fileData) return;
    const text = await fileData.text();
    const htmlData = marked.parse(text);
    if (!htmlData) return;
    this.innerHTML = htmlData;
  }
}

customElements.define("markdown-display", MarkdownDisplay);
