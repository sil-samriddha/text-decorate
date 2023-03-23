import React from 'react'

export default function Footer(props) {
  return (
    <footer id="sticky-footer" className={`flex-shrink-0 py-2 bg-${props.mode}`}>
      <div className={`container text-center text-${props.mode === "light"?"dark":"light"}`}>
        <small>Made by {props.madeby} with &#10084;</small>
      </div>
    </footer>
  );
}
