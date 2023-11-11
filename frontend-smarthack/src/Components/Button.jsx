import "./Button.css";
import "../index.css";

/**
 *  Generates a button
 *  @param text: Displayed text on the button
 *  @param link: What the button links to
 *  @param style: Style of button. Use: "violet" or "green1" or "green2"
 *  @param target: Target for link. Use _blank to open in new page
 *
 */

const Button = ({ text, link, style, target, handleSubmit }) => {
  return (
    <a
      className={"button button__" + style}
      href={link}
      target={`${target ? target : ""}`}
      onClick={handleSubmit}
    >
      <span className="button-text">{text}</span>
      <svg
        width="5"
        height="4"
        viewBox="0 0 5 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-svg"
      >
        <g className={"arrow-" + style} clipPath="url(#clip0_1_2)">
          <rect
            className="arrow-body"
            y="1.66957"
            width="3.47826"
            height="0.695652"
            rx="0.347826"
          />
          <g className="arrow-tip">
            <rect
              className="arrow-tip-up"
              x="1.5666"
              y="0.491913"
              width="0.695652"
              height="2.78261"
              rx="0.347826"
              transform="rotate(-45 1.5666 0.491913)"
            />
            <rect
              className="arrow-tip-down"
              x="3.55388"
              y="1.54082"
              width="0.695652"
              height="2.78261"
              rx="0.347826"
              transform="rotate(45 3.55388 1.54082)"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="4.04591" height="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};

export default Button;
