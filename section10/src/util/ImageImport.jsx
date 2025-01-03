import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

function ImageImport(imgId) {
  switch (imgId) {
    case 1:
      return <img src={emotion1} alt="" />;
    case 2:
      return <img src={emotion2} alt="" />;
    case 3:
      return <img src={emotion3} alt="" />;
    case 4:
      return <img src={emotion4} alt="" />;
    case 5:
      return <img src={emotion5} alt="" />;
    default:
      return;
  }
}
export default ImageImport;
