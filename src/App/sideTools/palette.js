const palette = {
  'Black': '#000',
  'White': '#fff',
  'Red': '#f00',
  'Green': '#0f0',
  'Blue': '#00f',
};

export default palette;
export const list = Object.keys(palette).map(name => palette[name]);
