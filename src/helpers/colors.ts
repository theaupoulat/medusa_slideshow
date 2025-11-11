export const slideColors = [
  {
    hex: "#95CF84",
    name: "eelvert",
  },
  {
    hex: "#9BACD2",
    name: "bleu démocrates chrétiens",
  },
  {
    hex: "#FFEFB9",
    name: "sable",
  },
  {
    hex: "#2B6C40",
    name: "vert palestine",
  },
  {
    hex: "#A93C40",
    name: "rouge brun",
  },
  {
    hex: "#EDBF9A",
    name: "orange mélange",
  },
  {
    hex: "#FFF6B8",
    name: "jaune hopital",
  },
  {
    hex: "#000000",
    name: "black block",
  },

  {
    hex: "#BC9BD3",
    name: "violet lilas",
  },
];

type ColorHexCode = string;

export const isColorDark = (rawColor: ColorHexCode) => {
  const color =
    rawColor.charAt(0) === "#" ? rawColor.substring(1, 7) : rawColor;

  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB

  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L <= 0.179;
};
