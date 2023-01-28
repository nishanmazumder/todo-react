export default function Text({addEmoji, bracket}) {
  let text = "I am text";

  if(addEmoji){
    text = addEmoji(text, '🔒')
  }

  if(bracket){
    text = bracket(text)
  }

  return <div>{ text }</div>;
}
