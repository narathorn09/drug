const DisplayText = ({ text }) => {
  console.log("text", text.split("\\n"))
  
  return (
    <div>
      {text.split('\\n').map((line, index) => (
        <p key={index} >{line}</p>
      ))}
    </div>
  );
};


export default DisplayText;
