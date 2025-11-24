class Strudel extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["filename"]; // Observe the 'filename' attribute
  }
  async attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    if (name == "filename" && oldValue != newValue) {
      console.log("value changed", oldValue, newValue);
      this.setCode(newValue);
    }
  }
  async getFileContents(filename) {
    console.log("getting contents for ", filename);
    const url = `/assets/strudel-songs/${filename}.js`;
    console.log("fetching ", url);
    const file = await fetch(url);
    const text = await file.text();
    console.log(text);
    return text;
  }
  async connectedCallback() {}
  async setCode(filename) {
    console.log("setting code");
    const code = await this.getFileContents(filename);
    const editorCheck = this.querySelector("strudel-editor");
    if (editorCheck) {
      document.getElementById("repl").remove();
    }
    const editor = document.createElement("strudel-editor");
    editor.setAttribute("id", "repl");
    editor.setAttribute("code", code);
    this.append(editor);
  }
}

customElements.define("strudel-repl", Strudel);
