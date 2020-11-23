export const props = { size: [String, Number], color: String }
export const computed = {
  listeners() { return { ...this.$listeners } },
  styles() {
    const sizes = this.size ? { height: this.size, width: this.size } : {}
    return {...sizes, ...{"color":this.color || "currentColor"}}
  },
  attrs() {
    return {
      'viewBox': '0 0 24 24',
      'shape-rendering': 'geometricPrecision',
      'width': 24,
      'height': 24,
      ...this.$attrs,
    }
  },
}