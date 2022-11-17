'use strict'
document.querySelector('#target').classList.toggle('my-list');
const div = document.querySelector('#target');
const html =
    `<ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
</ul>`;
div.innerHTML = html;