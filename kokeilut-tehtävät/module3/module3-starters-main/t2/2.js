'use strict'

const div = document.querySelector('#target');

const i = document.createElement('i');
i.innerHTML =
    `<ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
    </ul>`;

const t = document.createTextNode('');

const p = document.createElement('p');
p.appendChild(t);
p.appendChild(i);

div.appendChild(p);

const second = document.querySelectorAll('li')[1];
second.setAttribute('class','my-item')