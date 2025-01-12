import react from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Elaine from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Elaine1.jpeg";
import Lura from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Lura1.jpeg";
import Jill from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Jill1.jpeg";
import Jay from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Jay1.jpeg";
import Lina from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Lina1.jpeg";
import Anna from "/Users/Juliemk/paws-claws-repo/paws1/src/images/anna.jpeg";
import Anna2 from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Anna3.jpeg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Slide
        autoplay={false}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        <div className="mySlides ">
          <div class="nametext">Lura F. ⭐️⭐️⭐️⭐️⭐️</div>
          <img className="testImg" alt="pinkAvatar" src={Lura}></img>
          <div className="text">
            "Julie is wonderful! We have used her several times and she is just
            the best! Our dogs absolutely adore her and she always goes the
            extra mile. She even took on our new baby bearded dragon and was
            fantastic. We always come home to a clean home and happy pets..."
          </div>
        </div>

        <div class="mySlides">
          <div class="nametext">Elaine J. ⭐️⭐️⭐️⭐️⭐️</div>
          <img className="testImg" alt="yellowAvatar" src={Elaine} />
          <div className="text">"Kona loves Julie - We love Julie!"</div>
        </div>

        <div class="mySlides">
          <div class="nametext">Anna P. ⭐️⭐️⭐️⭐️⭐️</div>
          <span className="two-cats">
            <img
              className="pumpkin"
              alt="yellowAvatar"
              src={Anna}
              width={250}
            />
            <img
              className="testImg"
              alt="yellowAvatar"
              src={Anna2}
              width={80}
            />
          </span>
          <div className="text">
            "Julie is always doing a great job taking care of our cats!"
          </div>
        </div>

        <div class="mySlides">
          <div class="nametext">Jill M. ⭐️⭐️⭐️⭐️⭐️</div>
          <img className="testImg" alt="yellowAvatar" src={Jill} />
          <div className="text">
            "Julie stepped in when another sitter canceled within a few days of
            my trip. My very anxious 50lb dog gave Julie a sniff and let her pay
            her during the meet and greet which was a huge win. Julie was
            wonderful while I was away and will user her again."
          </div>
        </div>

        <div class="mySlides">
          <div class="nametext">Lina P. ⭐️⭐️⭐️⭐️⭐️</div>
          <img className="testImg" alt="yellowAvatar" src={Lina} />
          <div className="text">
            "Thank you for taking great care of Coco and doing extra things for
            us. We greatly appreciate your help! Coco is always so happy and is
            lucky to have an awesome caretaker!"
          </div>
        </div>

        <div class="mySlides">
          <div class="nametext">Jay P. ⭐️⭐️⭐️⭐️⭐️</div>
          <img className="testImg" alt="yellowAvatar" src={Jay} />
          <div className="text">
            "The best ever to do it! Always available and always go beyond and
            over."
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Testimonials;
