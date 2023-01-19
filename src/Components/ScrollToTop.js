import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} style={{ visibility: visibility ? "visible" : "hidden" }}>
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
