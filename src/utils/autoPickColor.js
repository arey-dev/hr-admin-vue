const colors = ['#957DAD', '#FFC4C4', '#BAEEE5', '#D6D8F2', '#E7CBA9', '#B0EFEF', '#F498C2']

export function autoPickColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
