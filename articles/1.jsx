import React from 'react';
import Highlight from 'react-highlight';

export default function HTMLEntry() {
  return (<div>
    <p>HTML - язык разметки документа. С помощью этого языка создается каркас веб-страницы.</p>
    <p>Разметка пишется с помощью тегов. Например, div, span, em, strong, img, br, hr и тд.</p>
    <p>Каждый тег может иметь атрибуты. Важнейшие атрибуты это id и class.</p>

    <Highlight language="javascript">
      {`function foo() { return 'bar' }`}
    </Highlight>
    <Highlight language="css">
      {`#a, .red, h1 {
        color: red;
      }`}
    </Highlight>
    <Highlight language="html">
      {`<div id="try">asdasd</div>`}
    </Highlight>
  </div>);
};
