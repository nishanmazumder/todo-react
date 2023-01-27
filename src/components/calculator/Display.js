export default function Display({value = 0}) {
  if(value <= 100){
    return "cold"
  }
  return "hot"
}
