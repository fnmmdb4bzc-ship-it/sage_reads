/*
 * ReadIT picture library: simple line drawings, 200 x 200, MathIT colours.
 * Each entry is the inner SVG. svgPic(key) wraps it with the shared ink style.
 */
const K = '#3A3A3A';
const C = {
  sand: '#FBBF24', coral: '#FB7185', red: '#E5484D', ocean: '#38BDF8', sky: '#7DD3FC',
  green: '#3BA55D', lime: '#A3E635', brown: '#C08A55', dark: '#8B5E34', pink: '#F9A8D4',
  rose: '#F472B6', purple: '#C084FC', grey: '#CBD5E1', white: '#FFFFFF', orange: '#FB923C',
  yellow: '#FDE047', skin: '#FCD9B6', ginger: '#FDBA74', navy: '#1E3A8A', cream: '#FFF7E0',
};
const dot = (x, y, r = 4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}" stroke="none"/>`;
const eyes = (x1, x2, y, r = 4) => dot(x1, y, r) + dot(x2, y, r);

const ILLUS = {
  sun: `<g fill="none"><line x1="100" y1="22" x2="100" y2="42"/><line x1="100" y1="158" x2="100" y2="178"/><line x1="22" y1="100" x2="42" y2="100"/><line x1="158" y1="100" x2="178" y2="100"/><line x1="45" y1="45" x2="59" y2="59"/><line x1="141" y1="141" x2="155" y2="155"/><line x1="155" y1="45" x2="141" y2="59"/><line x1="59" y1="141" x2="45" y2="155"/></g>
    <circle cx="100" cy="100" r="44" fill="${C.sand}"/>${eyes(86, 114, 94, 3)}<path d="M84 110 Q100 124 116 110" fill="none"/>`,

  apple: `<path d="M100 62 C80 48 42 52 40 98 C38 140 70 172 100 160 C130 172 162 140 160 98 C158 52 120 48 100 62 Z" fill="${C.red}"/>
    <path d="M100 62 Q98 44 108 30" fill="none"/><path d="M106 44 C118 28 142 30 148 38 C138 52 116 54 106 44 Z" fill="${C.green}"/>
    <path d="M62 92 Q64 76 78 70" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/>`,

  nest: `<ellipse cx="74" cy="92" rx="18" ry="24" fill="${C.sky}"/><ellipse cx="126" cy="92" rx="18" ry="24" fill="${C.sky}"/><ellipse cx="100" cy="86" rx="18" ry="24" fill="${C.sky}"/>
    <path d="M30 100 C30 168 170 168 170 100 C150 116 50 116 30 100 Z" fill="${C.brown}"/>
    <g fill="none" stroke-width="3.5"><path d="M44 122 Q80 134 120 124"/><path d="M58 142 Q100 152 150 128"/><path d="M86 116 Q124 124 158 112"/><path d="M80 154 Q110 156 134 146"/></g>`,

  tent: `<line x1="18" y1="160" x2="182" y2="160"/><path d="M30 160 L100 46 L170 160 Z" fill="${C.orange}"/>
    <path d="M78 160 L100 104 L122 160 Z" fill="${C.dark}"/><line x1="100" y1="46" x2="100" y2="22"/><path d="M100 22 L126 30 L100 38 Z" fill="${C.coral}"/>`,

  pig: `<path d="M52 70 L46 36 L80 54 Z" fill="${C.pink}"/><path d="M148 70 L154 36 L120 54 Z" fill="${C.pink}"/>
    <circle cx="100" cy="106" r="58" fill="${C.pink}"/>${eyes(78, 122, 88, 5)}
    <ellipse cx="100" cy="124" rx="26" ry="18" fill="${C.rose}"/>${dot(91, 124, 4)}${dot(109, 124, 4)}`,

  insect: `<g fill="none"><line x1="58" y1="96" x2="34" y2="86"/><line x1="56" y1="118" x2="30" y2="120"/><line x1="62" y1="140" x2="40" y2="154"/><line x1="142" y1="96" x2="166" y2="86"/><line x1="144" y1="118" x2="170" y2="120"/><line x1="138" y1="140" x2="160" y2="154"/>
    <path d="M90 50 Q84 34 74 30"/><path d="M110 50 Q116 34 126 30"/></g>
    <circle cx="100" cy="62" r="20" fill="${K}"/><circle cx="100" cy="116" r="48" fill="${C.red}"/><line x1="100" y1="70" x2="100" y2="164"/>
    ${dot(78, 100, 8)}${dot(122, 100, 8)}${dot(80, 134, 7)}${dot(120, 134, 7)}`,

  mug: `<path d="M138 82 C170 82 170 132 138 132" fill="none" stroke-width="10"/><path d="M138 82 C170 82 170 132 138 132" fill="none" stroke="${C.ocean}" stroke-width="3"/>
    <rect x="52" y="62" width="88" height="100" rx="12" fill="${C.ocean}"/><path d="M80 52 Q72 40 80 28 M104 52 Q96 40 104 28" fill="none"/>`,

  dog: `<ellipse cx="54" cy="96" rx="18" ry="34" fill="${C.dark}" transform="rotate(18 54 96)"/><ellipse cx="146" cy="96" rx="18" ry="34" fill="${C.dark}" transform="rotate(-18 146 96)"/>
    <circle cx="100" cy="100" r="50" fill="${C.ginger}"/>${eyes(82, 118, 90, 5)}<ellipse cx="100" cy="114" rx="11" ry="8" fill="${K}"/>
    <path d="M86 128 Q100 140 114 128" fill="none"/><path d="M100 122 L100 130" fill="none"/>`,

  gift: `<rect x="44" y="90" width="112" height="76" rx="6" fill="${C.coral}"/><rect x="36" y="68" width="128" height="26" rx="6" fill="${C.coral}"/>
    <rect x="90" y="68" width="20" height="98" fill="${C.sand}"/><path d="M100 66 C76 34 52 52 68 66 Z M100 66 C124 34 148 52 132 66 Z" fill="${C.sand}"/>`,

  orange: `<circle cx="100" cy="108" r="60" fill="${C.orange}"/><path d="M100 50 L104 36" fill="none"/>
    <path d="M104 44 C116 26 140 30 146 38 C134 50 114 52 104 44 Z" fill="${C.green}"/>
    ${dot(80, 96, 2)}${dot(118, 118, 2)}${dot(92, 136, 2)}${dot(130, 92, 2)}<path d="M66 96 Q70 80 82 74" stroke="#fff" stroke-width="6" fill="none" opacity=".6"/>`,

  cat: `<path d="M48 82 L52 34 L88 60 Z" fill="${C.ginger}"/><path d="M152 82 L148 34 L112 60 Z" fill="${C.ginger}"/>
    <ellipse cx="100" cy="108" rx="60" ry="52" fill="${C.ginger}"/>${eyes(78, 122, 98, 5)}
    <path d="M94 116 L106 116 L100 124 Z" fill="${C.rose}"/><path d="M100 124 Q92 134 84 128 M100 124 Q108 134 116 128" fill="none"/>
    <g fill="none" stroke-width="3"><line x1="66" y1="118" x2="30" y2="112"/><line x1="66" y1="126" x2="32" y2="132"/><line x1="134" y1="118" x2="170" y2="112"/><line x1="134" y1="126" x2="168" y2="132"/></g>`,

  kite: `<path d="M100 20 L150 80 L100 140 L50 80 Z" fill="${C.coral}"/><path d="M100 20 L100 140 M50 80 L150 80" fill="none"/>
    <path d="M100 140 Q86 158 100 170 Q114 182 104 194" fill="none"/><path d="M90 158 L80 150 L82 164 Z M108 178 L118 172 L118 186 Z" fill="${C.sand}"/>`,

  egg: `<path d="M100 30 C142 30 160 96 158 124 C156 156 132 174 100 174 C68 174 44 156 42 124 C40 96 58 30 100 30 Z" fill="${C.cream}"/>
    <path d="M70 80 Q74 62 86 54" stroke="${C.grey}" stroke-width="6" fill="none"/>`,

  umbrella: `<path d="M24 104 C24 46 176 46 176 104 C164 92 150 92 138 104 C126 92 112 92 100 104 C88 92 74 92 62 104 C50 92 36 92 24 104 Z" fill="${C.purple}"/>
    <path d="M100 104 L100 164 Q100 180 86 180 Q74 180 74 168" fill="none"/><line x1="100" y1="44" x2="100" y2="30"/>`,

  ring: `<circle cx="100" cy="122" r="46" fill="none" stroke-width="16"/><circle cx="100" cy="122" r="46" fill="none" stroke="${C.sand}" stroke-width="7"/>
    <path d="M80 62 L90 46 L110 46 L120 62 L100 84 Z" fill="${C.sky}"/><path d="M80 62 L120 62" fill="none"/>`,

  hat: `<ellipse cx="100" cy="130" rx="82" ry="22" fill="${C.sand}"/><path d="M54 128 C54 70 146 70 146 128 Z" fill="${C.sand}"/>
    <path d="M56 116 C80 124 120 124 144 116 L146 128 C120 136 80 136 54 128 Z" fill="${C.coral}"/>`,

  ball: `<circle cx="100" cy="100" r="64" fill="${C.ocean}"/><path d="M36 100 Q100 60 164 100" fill="none"/><path d="M48 136 Q100 104 152 136" fill="none"/>
    <path d="M100 36 Q72 100 100 164" fill="none"/><path d="M68 64 Q74 54 86 50" stroke="#fff" stroke-width="6" fill="none" opacity=".6"/>`,

  fish: `<path d="M140 100 L178 70 L178 130 Z" fill="${C.orange}"/><ellipse cx="94" cy="100" rx="64" ry="40" fill="${C.orange}"/>
    ${dot(58, 92, 6)}<path d="M80 74 Q96 60 112 72" fill="none"/><path d="M104 88 Q114 100 104 112" fill="none"/>`,

  leaf: `<path d="M40 160 C40 80 100 30 168 32 C170 100 120 160 40 160 Z" fill="${C.green}"/>
    <path d="M40 160 L150 50 M80 120 L80 92 M80 120 L110 120 M110 90 L108 66 M110 90 L134 90" fill="none"/>`,

  jam: `<rect x="50" y="70" width="100" height="100" rx="14" fill="#BE185D"/><rect x="44" y="44" width="112" height="28" rx="6" fill="${C.coral}"/>
    <g stroke="none" fill="#fff" opacity=".8"><rect x="58" y="48" width="12" height="10"/><rect x="82" y="48" width="12" height="10"/><rect x="106" y="48" width="12" height="10"/><rect x="130" y="48" width="12" height="10"/><rect x="70" y="58" width="12" height="10"/><rect x="94" y="58" width="12" height="10"/><rect x="118" y="58" width="12" height="10"/></g>
    <rect x="64" y="100" width="72" height="40" rx="6" fill="${C.cream}"/>`,

  van: `<path d="M20 140 L20 70 Q20 58 32 58 L130 58 Q142 58 150 70 L176 104 L180 140 Z" fill="${C.white}"/>
    <path d="M132 70 L150 70 L170 102 L132 102 Z" fill="${C.sky}"/><rect x="34" y="70" width="40" height="30" rx="4" fill="${C.sky}"/><rect x="82" y="70" width="40" height="30" rx="4" fill="${C.sky}"/>
    <line x1="20" y1="116" x2="178" y2="116" stroke="${C.ocean}" stroke-width="10"/>
    <circle cx="56" cy="144" r="18" fill="${K}"/><circle cx="144" cy="144" r="18" fill="${K}"/><circle cx="56" cy="144" r="7" fill="${C.grey}"/><circle cx="144" cy="144" r="7" fill="${C.grey}"/>`,

  web: `<g fill="none" stroke-width="3.5"><line x1="100" y1="20" x2="100" y2="180"/><line x1="20" y1="100" x2="180" y2="100"/><line x1="44" y1="44" x2="156" y2="156"/><line x1="156" y1="44" x2="44" y2="156"/>
    <path d="M100 76 L117 83 L124 100 L117 117 L100 124 L83 117 L76 100 L83 83 Z"/><path d="M100 52 L134 66 L148 100 L134 134 L100 148 L66 134 L52 100 L66 66 Z"/><path d="M100 30 L150 50 L170 100 L150 150 L100 170 L50 150 L30 100 L50 50 Z"/></g>
    <line x1="134" y1="66" x2="134" y2="40" stroke-width="2"/><circle cx="134" cy="74" r="9" fill="${K}"/>`,

  fox: `<path d="M44 40 L60 100 L92 72 Z" fill="${C.orange}"/><path d="M156 40 L140 100 L108 72 Z" fill="${C.orange}"/>
    <path d="M40 80 Q100 56 160 80 Q156 130 100 170 Q44 130 40 80 Z" fill="${C.orange}"/>
    <path d="M60 110 Q80 120 100 170 Q120 120 140 110 Q120 140 100 170 Q80 140 60 110 Z" fill="#fff"/>
    ${eyes(78, 122, 102, 5)}<ellipse cx="100" cy="162" rx="9" ry="7" fill="${K}"/>`,

  yoyo: `<path d="M100 20 L100 66" fill="none"/><circle cx="100" cy="16" r="8" fill="none"/><circle cx="100" cy="116" r="54" fill="${C.coral}"/>
    <circle cx="100" cy="116" r="24" fill="${C.sand}"/>${dot(100, 116, 6)}`,

  zip: `<path d="M64 20 L64 180 M136 20 L136 180" fill="none"/><path d="M64 20 L92 20 L92 180 L64 180 Z M136 20 L108 20 L108 180 L136 180 Z" fill="${C.ocean}"/>
    <g stroke="none" fill="${K}"><rect x="92" y="96" width="8" height="8"/><rect x="100" y="106" width="8" height="8"/><rect x="92" y="116" width="8" height="8"/><rect x="100" y="126" width="8" height="8"/><rect x="92" y="136" width="8" height="8"/><rect x="100" y="146" width="8" height="8"/><rect x="92" y="156" width="8" height="8"/><rect x="100" y="166" width="8" height="8"/></g>
    <path d="M84 70 L116 70 L112 92 L88 92 Z" fill="${C.grey}"/><rect x="90" y="38" width="20" height="34" rx="8" fill="${C.grey}"/>`,

  queen: `<path d="M56 110 C50 160 64 182 70 186 L130 186 C136 182 150 160 144 110 Z" fill="${C.dark}"/>
    <circle cx="100" cy="112" r="40" fill="${C.skin}"/>${eyes(86, 114, 108, 4)}<path d="M88 126 Q100 136 112 126" fill="none"/>
    <path d="M62 78 L60 36 L80 58 L100 30 L120 58 L140 36 L138 78 Z" fill="${C.sand}"/>${dot(100, 52, 5)}`,

  /* ---------- word pictures ---------- */
  bat: `<rect x="88" y="20" width="24" height="56" rx="8" fill="${C.dark}"/><path d="M84 76 L116 76 L124 168 Q100 184 76 168 Z" fill="${C.ginger}"/>
    <circle cx="156" cy="156" r="16" fill="${C.red}"/><path d="M146 146 Q156 156 146 166" fill="none" stroke-width="3"/>`,

  map: `<path d="M24 52 L72 36 L128 52 L176 36 L176 150 L128 166 L72 150 L24 166 Z" fill="${C.cream}"/><path d="M72 36 L72 150 M128 52 L128 166" fill="none"/>
    <path d="M44 132 Q70 100 98 112 Q126 124 140 90" fill="none" stroke-dasharray="2 12" stroke="${C.coral}"/><path d="M140 70 L156 86 M156 70 L140 86" stroke="${C.red}" fill="none"/>`,

  pan: `<ellipse cx="80" cy="104" rx="62" ry="40" fill="${K}"/><ellipse cx="80" cy="100" rx="50" ry="30" fill="#64748B" stroke="none"/>
    <path d="M138 96 L188 84 L190 100 L140 112 Z" fill="${C.dark}"/>`,

  fan: `<line x1="100" y1="120" x2="100" y2="168"/><path d="M64 176 L136 176 Q136 162 100 162 Q64 162 64 176 Z" fill="${C.grey}"/>
    <circle cx="100" cy="80" r="58" fill="${C.sky}"/>
    <path d="M100 80 C80 50 100 30 112 40 C120 50 110 68 100 80 Z M100 80 C136 76 150 98 138 110 C126 118 110 100 100 80 Z M100 80 C80 112 56 108 56 92 C58 80 80 76 100 80 Z" fill="${C.white}"/>${dot(100, 80, 8)}`,

  can: `<path d="M56 50 L56 160 Q100 180 144 160 L144 50" fill="${C.grey}"/><ellipse cx="100" cy="50" rx="44" ry="14" fill="#E2E8F0"/>
    <path d="M56 80 Q100 96 144 80 L144 130 Q100 146 56 130 Z" fill="${C.red}"/>`,

  man: `<circle cx="100" cy="52" r="26" fill="${C.skin}"/><path d="M76 40 Q100 14 124 40 Q110 30 100 32 Q88 32 76 40 Z" fill="${C.dark}"/>${eyes(91, 109, 52, 3)}
    <path d="M62 136 L66 92 Q100 76 134 92 L138 136 Z" fill="${C.ocean}"/><path d="M76 136 L76 182 M124 136 L124 182 M100 136 L100 182" fill="none" stroke-width="8"/>
    <rect x="70" y="134" width="60" height="14" fill="${C.navy}"/>`,

  rat: `<path d="M150 130 Q180 120 186 150 Q190 172 160 176" fill="none"/><ellipse cx="108" cy="128" rx="52" ry="36" fill="${C.grey}"/>
    <path d="M60 118 L20 132 L60 146 Z" fill="${C.grey}"/><circle cx="62" cy="104" r="16" fill="${C.grey}"/><circle cx="62" cy="104" r="7" fill="${C.pink}" stroke="none"/>${dot(40, 128, 4)}${dot(20, 132, 4)}`,

  bag: `<path d="M74 70 Q74 32 100 32 Q126 32 126 70" fill="none" stroke-width="8"/><path d="M40 70 L160 70 L150 170 L50 170 Z" fill="${C.coral}"/><rect x="88" y="100" width="24" height="16" rx="4" fill="${C.sand}"/>`,

  cap: `<path d="M44 118 C40 58 150 50 150 112 Z" fill="${C.red}"/><path d="M146 108 Q186 108 190 124 Q170 132 120 124 Z" fill="${C.red}"/>
    <path d="M44 118 Q96 126 150 112" fill="none"/>${dot(98, 60, 6)}`,

  mat: `<rect x="30" y="60" width="140" height="90" rx="6" fill="${C.green}"/><rect x="46" y="74" width="108" height="62" rx="4" fill="none"/>`,

  bun: `<path d="M30 140 C30 70 170 70 170 140 Z" fill="${C.ginger}"/><rect x="30" y="134" width="140" height="18" rx="8" fill="${C.sand}"/>
    <g stroke="none" fill="#fff"><ellipse cx="80" cy="104" rx="4" ry="2.5"/><ellipse cx="104" cy="92" rx="4" ry="2.5"/><ellipse cx="126" cy="108" rx="4" ry="2.5"/><ellipse cx="96" cy="118" rx="4" ry="2.5"/></g>`,

  nut: `<path d="M100 30 C138 30 140 70 124 96 C112 114 140 132 136 156 C130 186 70 186 64 156 C60 132 88 114 76 96 C60 70 62 30 100 30 Z" fill="${C.brown}"/>
    <g fill="none" stroke-width="3"><path d="M84 56 L92 60 M108 52 L116 56 M90 78 L98 82 M80 148 L88 152 M106 140 L114 144 M96 164 L104 168"/></g>`,

  cup: `<path d="M144 82 C178 82 178 128 144 128" fill="none" stroke-width="9"/><path d="M48 70 L152 70 L142 140 Q100 156 58 140 Z" fill="${C.white}"/>
    <ellipse cx="100" cy="164" rx="70" ry="12" fill="${C.sky}"/><path d="M80 56 Q72 44 80 32 M110 56 Q102 44 110 32" fill="none"/>`,

  bus: `<rect x="14" y="44" width="172" height="104" rx="14" fill="${C.sand}"/>
    <g fill="${C.sky}"><rect x="26" y="58" width="30" height="34" rx="4"/><rect x="64" y="58" width="30" height="34" rx="4"/><rect x="102" y="58" width="30" height="34" rx="4"/><rect x="140" y="58" width="34" height="50" rx="4"/></g>
    <line x1="14" y1="118" x2="186" y2="118"/><circle cx="54" cy="150" r="18" fill="${K}"/><circle cx="146" cy="150" r="18" fill="${K}"/>`,

  bug: `<g fill="none"><line x1="62" y1="100" x2="36" y2="90"/><line x1="60" y1="122" x2="34" y2="126"/><line x1="66" y1="142" x2="44" y2="158"/><line x1="138" y1="100" x2="164" y2="90"/><line x1="140" y1="122" x2="166" y2="126"/><line x1="134" y1="142" x2="156" y2="158"/><path d="M92 54 Q86 38 76 34"/><path d="M108 54 Q114 38 124 34"/></g>
    <circle cx="100" cy="66" r="18" fill="${K}"/><ellipse cx="100" cy="120" rx="44" ry="50" fill="${C.green}"/><line x1="100" y1="74" x2="100" y2="168"/>${dot(80, 112, 6)}${dot(120, 136, 6)}`,

  rug: `<ellipse cx="100" cy="104" rx="84" ry="56" fill="${C.purple}"/><ellipse cx="100" cy="104" rx="58" ry="36" fill="${C.sand}"/><ellipse cx="100" cy="104" rx="30" ry="18" fill="${C.coral}"/>`,

  tub: `<g fill="none"><path d="M60 94 L60 40 Q60 26 76 26 Q90 26 90 40"/></g><circle cx="80" cy="62" r="12" fill="${C.sky}"/><circle cx="104" cy="70" r="9" fill="${C.sky}"/><circle cx="124" cy="62" r="13" fill="${C.sky}"/>
    <path d="M20 94 L180 94 L170 140 Q164 160 140 160 L60 160 Q36 160 30 140 Z" fill="${C.white}"/><path d="M58 160 L52 178 M142 160 L148 178" fill="none" stroke-width="7"/>`,

  hut: `<rect x="50" y="96" width="100" height="74" fill="${C.brown}"/><path d="M28 104 L100 30 L172 104 Z" fill="${C.sand}"/>
    <g fill="none" stroke-width="3"><path d="M64 88 L100 50 M86 100 L118 66 M118 100 L140 78"/></g><path d="M86 170 L86 130 Q100 116 114 130 L114 170" fill="${C.dark}"/>`,

  wig: `<path d="M50 150 C30 110 40 50 100 40 C160 50 170 110 150 150 C140 140 136 120 132 100 C110 110 90 110 68 100 C64 120 60 140 50 150 Z" fill="${C.yellow}"/>
    <g fill="none" stroke-width="3"><path d="M70 64 Q80 74 90 64 Q100 74 110 64 Q120 74 130 64"/></g>`,

  pin: `<line x1="100" y1="110" x2="100" y2="182"/><path d="M70 110 L130 110 L120 90 L120 50 L132 30 L68 30 L80 50 L80 90 Z" fill="${C.red}"/>`,

  bin: `<path d="M50 64 L150 64 L138 178 L62 178 Z" fill="${C.green}"/><rect x="40" y="46" width="120" height="20" rx="6" fill="${C.green}"/><rect x="86" y="34" width="28" height="14" rx="4" fill="none"/>
    <path d="M78 88 L84 160 M100 88 L100 160 M122 88 L116 160" fill="none" stroke-width="3"/>`,

  lip: `<path d="M30 100 Q60 64 86 80 Q100 88 114 80 Q140 64 170 100 Q140 148 100 148 Q60 148 30 100 Z" fill="${C.red}"/><path d="M30 100 Q100 116 170 100" fill="none"/>`,

  six: `<rect x="34" y="34" width="132" height="132" rx="22" fill="${C.white}"/>${dot(70, 66, 11)}${dot(70, 100, 11)}${dot(70, 134, 11)}${dot(130, 66, 11)}${dot(130, 100, 11)}${dot(130, 134, 11)}`,

  fig: `<path d="M72 46 C80 70 116 96 112 128 C110 156 92 168 72 168 C52 168 34 156 32 128 C30 96 64 70 72 46 Z" fill="#7E22CE"/><path d="M72 46 L76 30" fill="none"/>
    <path d="M150 74 C158 94 186 114 184 140 C182 164 166 174 150 174 C134 174 118 164 116 140 C114 114 142 94 150 74 Z" fill="#7E22CE"/>
    <path d="M150 92 C156 108 174 124 172 142 C170 158 160 164 150 164 C140 164 130 158 128 142 C126 124 144 108 150 92 Z" fill="${C.pink}" stroke="none"/>
    <g fill="${C.cream}" stroke="none"><circle cx="146" cy="130" r="2.5"/><circle cx="156" cy="138" r="2.5"/><circle cx="144" cy="146" r="2.5"/><circle cx="158" cy="152" r="2.5"/><circle cx="150" cy="120" r="2.5"/></g>
    <path d="M52 110 Q56 92 66 84" stroke="${C.purple}" stroke-width="6" fill="none"/>`,

  dig: ``,

  log: `<path d="M44 70 L156 70 Q176 70 176 104 Q176 138 156 138 L44 138" fill="${C.brown}"/><ellipse cx="44" cy="104" rx="22" ry="34" fill="${C.ginger}"/>
    <ellipse cx="44" cy="104" rx="11" ry="18" fill="none"/><path d="M80 90 L130 90 M96 118 L150 118" fill="none" stroke-width="3"/>`,

  pot: `<rect x="36" y="80" width="18" height="12" rx="4" fill="${K}"/><rect x="146" y="80" width="18" height="12" rx="4" fill="${K}"/>
    <path d="M50 76 L150 76 L146 160 Q100 172 54 160 Z" fill="#64748B"/><path d="M42 70 L158 70 L158 82 L42 82 Z" fill="#94A3B8"/><rect x="88" y="54" width="24" height="16" rx="6" fill="${K}"/>`,

  top: `<path d="M100 186 L40 104 Q100 70 160 104 Z" fill="${C.coral}"/><path d="M40 104 Q100 138 160 104" fill="none"/><path d="M58 128 Q100 150 142 128" fill="${C.sand}"/>
    <rect x="92" y="40" width="16" height="50" rx="6" fill="${C.dark}"/>`,

  box: `<path d="M30 80 L100 56 L170 80 L170 160 L100 184 L30 160 Z" fill="${C.ginger}"/><path d="M30 80 L100 104 L170 80 M100 104 L100 184" fill="none"/>
    <path d="M30 80 L14 56 L84 32 L100 56 M170 80 L186 56 L116 32 L100 56" fill="${C.sand}"/>`,

  mop: `<line x1="130" y1="20" x2="96" y2="120" stroke-width="8"/><path d="M72 116 L118 128 L124 140 L66 126 Z" fill="${C.grey}"/>
    <g fill="none" stroke-width="6" stroke="${C.sky}"><path d="M70 130 Q60 160 52 178"/><path d="M84 134 Q78 160 74 182"/><path d="M98 136 Q96 162 96 184"/><path d="M112 138 Q114 160 118 180"/></g>`,

  bed: `<rect x="20" y="70" width="18" height="100" rx="4" fill="${C.dark}"/><rect x="162" y="100" width="18" height="70" rx="4" fill="${C.dark}"/>
    <rect x="38" y="112" width="124" height="34" fill="${C.ocean}"/><rect x="42" y="90" width="44" height="24" rx="10" fill="${C.white}"/><path d="M86 108 L162 108 L162 146 L86 146 Z" fill="${C.coral}"/>`,

  net: `<line x1="40" y1="180" x2="96" y2="110" stroke-width="8"/><ellipse cx="124" cy="74" rx="48" ry="44" fill="none" stroke-width="6"/>
    <g fill="none" stroke-width="2.5"><path d="M86 52 L156 108 M100 38 L168 92 M80 74 L136 116 M162 50 L96 112 M146 36 L80 92 M168 72 L118 116"/></g>`,

  pen: `<path d="M150 30 L170 50 L70 150 L44 156 L50 130 Z" fill="${C.ocean}"/><path d="M50 130 L70 150" fill="none"/><path d="M44 156 L36 164" fill="none"/><path d="M130 50 L150 70" fill="none"/>`,

  ten: `<circle cx="100" cy="100" r="72" fill="${C.sand}"/><path d="M66 70 L78 62 L78 138" fill="none" stroke-width="10"/><ellipse cx="124" cy="100" rx="24" ry="38" fill="none" stroke-width="10"/>`,

  hen: `<path d="M150 110 C150 160 60 168 46 120 C40 98 56 78 76 80 C88 80 96 100 112 100 C130 100 150 90 150 110 Z" fill="${C.white}"/>
    <circle cx="70" cy="70" r="24" fill="${C.white}"/><path d="M60 46 Q64 34 72 44 Q78 32 84 46 Z" fill="${C.red}"/><path d="M46 72 L34 78 L46 82 Z" fill="${C.sand}"/>
    ${dot(64, 66, 4)}<path d="M146 104 L170 80 L164 112 Z" fill="${C.white}"/><path d="M84 160 L84 182 M106 160 L106 182" fill="none"/><path d="M74 182 L94 182 M96 182 L116 182" fill="none"/>`,

  leg: `<path d="M80 20 L120 20 L118 132 L162 150 Q176 160 166 174 L84 174 Q76 174 78 160 Z" fill="${C.skin}"/><path d="M80 110 L118 110 L118 132 L162 150 Q176 160 166 174 L84 174 Q76 174 78 160 Z" fill="${C.coral}"/>`,

  jet: `<path d="M20 108 Q20 92 40 92 L160 92 Q186 100 160 116 L40 116 Q20 116 20 108 Z" fill="${C.white}"/>
    <path d="M80 92 L122 44 L134 44 L118 92 Z M80 116 L122 164 L134 164 L118 116 Z" fill="${C.ocean}"/><path d="M28 92 L22 64 L38 64 L50 92 Z" fill="${C.ocean}"/>
    <g fill="${C.sky}"><circle cx="70" cy="104" r="4"/><circle cx="90" cy="104" r="4"/><circle cx="110" cy="104" r="4"/><circle cx="130" cy="104" r="4"/></g>`,

  jug: `<path d="M138 72 C178 72 178 136 132 140" fill="none" stroke-width="10"/><path d="M60 40 L140 40 L132 70 Q150 110 140 170 L60 170 Q50 110 68 70 Z" fill="${C.sky}"/>
    <path d="M60 40 L40 32 L64 54" fill="${C.sky}"/><path d="M58 100 Q100 110 144 100" fill="none" stroke-width="3"/>`,

  /* ---------- Level 2 ---------- */
  ship: `<path d="M100 30 L100 120" fill="none"/><path d="M104 36 L150 104 L104 104 Z" fill="${C.white}"/><path d="M96 50 L60 104 L96 104 Z" fill="${C.coral}"/>
    <path d="M24 120 L176 120 L156 160 L44 160 Z" fill="${C.dark}"/><path d="M14 174 Q40 162 66 174 Q92 186 118 174 Q144 162 170 174 Q180 178 186 176" fill="none" stroke="${C.ocean}"/>
    <circle cx="70" cy="140" r="6" fill="${C.sky}"/><circle cx="100" cy="140" r="6" fill="${C.sky}"/><circle cx="130" cy="140" r="6" fill="${C.sky}"/>`,

  chick: `<path d="M150 116 C150 166 54 170 50 120 C48 96 68 84 84 92 C92 70 112 60 128 66 C150 74 150 96 150 116 Z" fill="${C.yellow}"/>
    <path d="M90 118 Q110 140 128 120" fill="none"/>${dot(118, 86, 5)}<path d="M146 88 L166 96 L146 102 Z" fill="${C.orange}"/>
    <path d="M86 162 L82 182 M110 164 L114 182" fill="none"/><path d="M106 64 Q112 50 120 60" fill="none"/>`,

  thumb: `<path d="M64 96 Q60 70 84 66 L96 64 L96 36 Q96 18 112 20 Q126 22 124 40 L122 72 L150 74 Q168 76 166 94 L160 160 Q156 176 138 176 L82 176 Q64 176 64 158 Z" fill="${C.skin}"/>
    <path d="M100 30 Q110 26 118 30 L117 42 Q108 46 100 42 Z" fill="${C.cream}"/><path d="M90 100 L158 100 M90 126 L156 126 M90 150 L154 150" fill="none" stroke-width="3"/>`,

  whale: `<path d="M24 120 C24 70 110 60 150 96 L176 70 Q186 84 178 98 Q190 104 186 118 L156 112 C140 150 24 160 24 120 Z" fill="${C.ocean}"/>
    <path d="M30 128 Q80 140 140 120" fill="none"/>${dot(58, 106, 5)}<path d="M62 64 Q60 40 70 30 M62 64 Q50 44 40 40 M62 64 Q74 46 86 44" fill="none" stroke="${C.sky}" stroke-width="5"/>`,

  duck: `<path d="M40 112 Q40 168 108 168 Q170 168 172 120 Q150 130 128 120 Q120 100 98 104 Q70 108 40 112 Z" fill="${C.yellow}"/>
    <circle cx="70" cy="80" r="30" fill="${C.yellow}"/><path d="M38 80 L14 88 L40 96 Z" fill="${C.orange}"/>${dot(66, 74, 5)}
    <path d="M96 130 Q120 146 146 128" fill="none"/><path d="M20 182 Q60 172 100 182 Q140 192 180 182" fill="none" stroke="${C.ocean}"/>`,

  bell: `<path d="M100 32 C62 32 56 70 54 104 C52 130 40 138 34 146 L166 146 C160 138 148 130 146 104 C144 70 138 32 100 32 Z" fill="${C.sand}"/>
    <circle cx="100" cy="160" r="14" fill="${C.dark}"/><circle cx="100" cy="26" r="8" fill="none"/><path d="M74 60 Q70 80 70 100" stroke="#fff" stroke-width="6" fill="none" opacity=".6"/>`,

  king: `<path d="M56 112 C50 162 64 182 70 186 L130 186 C136 182 150 162 144 112 Z" fill="${C.purple}"/>
    <circle cx="100" cy="114" r="40" fill="${C.skin}"/>${eyes(86, 114, 108, 4)}<path d="M84 130 Q100 142 116 130 Q100 152 84 130 Z" fill="${C.dark}"/>
    <path d="M60 82 L58 40 L80 62 L100 34 L120 62 L142 40 L140 82 Z" fill="${C.sand}"/>${dot(100, 58, 5)}`,

  sink: `<path d="M120 40 L120 26 L84 26 Q72 26 72 38 L72 54" fill="none" stroke-width="10"/><path d="M60 54 L84 54" fill="none" stroke-width="8"/>
    <path d="M24 70 L176 70 L162 132 Q156 150 136 150 L64 150 Q44 150 38 132 Z" fill="${C.white}"/><ellipse cx="100" cy="76" rx="70" ry="8" fill="${C.sky}"/>
    <rect x="86" y="150" width="28" height="34" fill="${C.grey}"/><path d="M72 58 L72 66" stroke="${C.ocean}" stroke-width="5" fill="none"/>`,

  dish: `<ellipse cx="100" cy="116" rx="84" ry="40" fill="${C.white}"/><ellipse cx="100" cy="108" rx="58" ry="22" fill="${C.sky}"/>
    <path d="M70 104 Q100 90 130 106" stroke="${C.ocean}" stroke-width="4" fill="none"/>`,

  shell: `<path d="M100 170 L30 96 C30 46 170 46 170 96 Z" fill="${C.pink}"/><path d="M100 170 L58 70 M100 170 L100 56 M100 170 L142 70 M100 170 L36 106 M100 170 L164 106" fill="none" stroke-width="3.5"/>
    <path d="M86 170 L114 170 L108 182 L92 182 Z" fill="${C.rose}"/>`,

  shed: `<rect x="40" y="90" width="120" height="84" fill="${C.green}"/><path d="M28 96 L100 40 L172 96 Z" fill="${C.dark}"/>
    <rect x="82" y="116" width="36" height="58" fill="${C.brown}"/>${dot(110, 146, 3)}<rect x="52" y="106" width="22" height="20" fill="${C.sky}"/><rect x="128" y="106" width="22" height="20" fill="${C.sky}"/>`,

  bath: `<circle cx="66" cy="70" r="16" fill="${C.white}"/><circle cx="96" cy="58" r="20" fill="${C.white}"/><circle cx="130" cy="66" r="16" fill="${C.white}"/>
    <path d="M18 94 L182 94 L172 140 Q166 162 140 162 L60 162 Q34 162 28 140 Z" fill="${C.sky}"/><path d="M58 162 L52 180 M142 162 L148 180" fill="none" stroke-width="7"/>
    <path d="M18 94 L182 94" fill="none" stroke-width="8"/>`,

  moth: `<path d="M100 96 C80 50 20 50 26 100 C30 124 70 118 100 104 Z M100 96 C120 50 180 50 174 100 C170 124 130 118 100 104 Z" fill="${C.grey}"/>
    <path d="M100 106 C80 116 50 140 66 158 C80 168 96 140 100 112 Z M100 106 C120 116 150 140 134 158 C120 168 104 140 100 112 Z" fill="#E2E8F0"/>
    <ellipse cx="100" cy="112" rx="8" ry="36" fill="${C.dark}"/><path d="M96 78 Q80 52 66 50 M104 78 Q120 52 134 50" fill="none"/>${dot(60, 90, 6)}${dot(140, 90, 6)}`,

  sock: `<path d="M70 24 L132 24 L132 112 L156 136 Q172 156 150 172 Q132 182 112 166 L76 132 Q66 122 70 108 Z" fill="${C.coral}"/>
    <rect x="66" y="20" width="70" height="22" rx="4" fill="${C.white}"/><path d="M70 64 L132 64 M70 86 L132 86" fill="none" stroke="${C.white}" stroke-width="8"/>`,

  lock: `<path d="M64 92 L64 62 Q64 30 100 30 Q136 30 136 62 L136 92" fill="none" stroke-width="16"/><path d="M64 92 L64 62 Q64 30 100 30 Q136 30 136 62 L136 92" fill="none" stroke="${C.grey}" stroke-width="7"/>
    <rect x="44" y="88" width="112" height="88" rx="12" fill="${C.sand}"/><circle cx="100" cy="122" r="10" fill="${K}"/><rect x="96" y="124" width="8" height="26" fill="${K}"/>`,

  rock: `<path d="M20 160 L34 112 L70 74 L118 66 L156 92 L180 160 Z" fill="#94A3B8"/><path d="M70 74 L86 120 L34 112 M86 120 L118 66 M86 120 L132 132 L156 92 M132 132 L180 160 M86 120 L64 160" fill="none" stroke-width="3"/>
    <path d="M14 162 L186 162" fill="none"/><path d="M118 66 L156 92 L132 132 L86 120 Z" fill="#CBD5E1"/>`,

  doll: `<path d="M64 120 L136 120 L150 176 L50 176 Z" fill="${C.coral}"/><circle cx="100" cy="82" r="38" fill="${C.skin}"/>
    <path d="M62 82 C58 36 142 36 138 82 C130 64 116 56 100 56 C84 56 70 64 62 82 Z" fill="${C.dark}"/>${eyes(86, 114, 84, 4)}<path d="M90 100 Q100 108 110 100" fill="none"/>
    <circle cx="78" cy="96" r="6" fill="${C.pink}" stroke="none"/><circle cx="122" cy="96" r="6" fill="${C.pink}" stroke="none"/>`,

  hill: `<circle cx="150" cy="50" r="18" fill="${C.sand}"/><path d="M10 170 Q60 60 110 80 Q150 96 190 170 Z" fill="${C.green}"/><path d="M60 120 Q66 110 72 120 M110 110 Q116 100 122 110" fill="none" stroke-width="3"/>`,

  wing: `<path d="M30 140 C40 70 110 40 176 44 C170 70 150 80 130 82 C150 90 160 96 162 106 C140 110 120 108 104 106 C118 116 126 126 126 136 C90 140 60 140 30 140 Z" fill="${C.white}"/>
    <path d="M60 128 Q100 100 150 64 M70 134 Q100 120 120 112" fill="none" stroke-width="3"/>`,

  /* ---------- anchor words chosen by Debby (October 2026) ---------- */
  ant: `<g fill="none"><path d="M78 118 L60 150 L46 156 M96 120 L96 156 L86 166 M118 118 L136 150 L150 156 M84 112 L60 96 L44 100 M116 112 L140 96 L156 100"/>
    <path d="M44 72 Q36 50 22 46 M56 70 Q60 48 72 40"/></g>
    <ellipse cx="148" cy="108" rx="34" ry="26" fill="${K}"/><ellipse cx="100" cy="110" rx="18" ry="15" fill="${K}"/><circle cx="54" cy="94" r="22" fill="${K}"/>
    <circle cx="46" cy="88" r="5" fill="#fff" stroke="none"/>`,

  in: `<path d="M40 100 L60 76 L140 76 L160 100 Z" fill="${C.dark}"/><circle cx="100" cy="98" r="28" fill="${C.coral}"/>
    <rect x="40" y="100" width="120" height="80" fill="${C.ginger}"/><path d="M40 100 L22 80 M160 100 L178 80" fill="none" stroke-width="6"/>
    <path d="M100 20 L100 52 M86 38 L100 54 L114 38" fill="none" stroke="${C.ocean}" stroke-width="7"/>`,

  on: `<path d="M30 112 L100 136 L170 112 L170 180 L100 196 L30 180 Z" fill="${C.ginger}"/><path d="M30 112 L100 88 L170 112 L100 136 Z" fill="${C.sand}"/>
    <path d="M100 112 L100 136" fill="none"/><circle cx="100" cy="72" r="30" fill="${C.coral}"/><path d="M76 60 Q86 50 96 50" stroke="#fff" stroke-width="5" fill="none" opacity=".6"/>`,

  gum: `<circle cx="104" cy="88" r="58" fill="${C.pink}"/><path d="M72 66 Q80 52 94 48" stroke="#fff" stroke-width="7" fill="none" opacity=".7"/>
    <path d="M58 150 Q80 140 100 148" fill="none"/><circle cx="72" cy="160" r="36" fill="${C.skin}"/>${eyes(60, 84, 152, 4)}<circle cx="96" cy="152" r="10" fill="${C.pink}"/>`,

  kit: `<rect x="30" y="64" width="140" height="104" rx="14" fill="${C.green}"/><path d="M78 64 L78 48 Q78 40 86 40 L114 40 Q122 40 122 48 L122 64" fill="none" stroke-width="8"/>
    <rect x="88" y="88" width="24" height="60" rx="3" fill="#fff"/><rect x="70" y="106" width="60" height="24" rx="3" fill="#fff"/>`,

  end: `<line x1="40" y1="186" x2="40" y2="20" stroke-width="8"/><rect x="44" y="24" width="120" height="84" fill="#fff"/>
    <g stroke="none" fill="${K}"><rect x="44" y="24" width="20" height="21"/><rect x="84" y="24" width="20" height="21"/><rect x="124" y="24" width="20" height="21"/><rect x="64" y="45" width="20" height="21"/><rect x="104" y="45" width="20" height="21"/><rect x="144" y="45" width="20" height="21"/><rect x="44" y="66" width="20" height="21"/><rect x="84" y="66" width="20" height="21"/><rect x="124" y="66" width="20" height="21"/><rect x="64" y="87" width="20" height="21"/><rect x="104" y="87" width="20" height="21"/><rect x="144" y="87" width="20" height="21"/></g>
    <rect x="44" y="24" width="120" height="84" fill="none"/>`,

  up: `<path d="M120 54 C120 20 172 20 172 54 C172 82 150 98 146 102 C142 98 120 82 120 54 Z" fill="${C.coral}"/><path d="M146 102 Q140 130 150 150 Q158 170 146 190" fill="none" stroke-width="3"/>
    <path d="M60 180 L60 50" fill="none" stroke="${C.ocean}" stroke-width="16"/><path d="M28 82 L60 40 L92 82 Z" fill="${C.ocean}" stroke="${C.ocean}"/>`,

  red: `<path d="M100 34 C120 54 150 46 150 72 C150 92 176 96 168 120 C160 146 132 132 126 156 C118 180 82 178 76 154 C70 132 34 142 32 114 C30 90 56 90 56 68 C56 44 84 52 100 34 Z" fill="${C.red}"/>
    <circle cx="170" cy="56" r="9" fill="${C.red}"/><circle cx="34" cy="158" r="7" fill="${C.red}"/><circle cx="160" cy="166" r="5" fill="${C.red}"/>`,

  yam: `<path d="M30 118 C26 86 64 62 104 62 C148 62 178 84 172 112 C166 140 128 150 96 148 C62 146 34 144 30 118 Z" fill="#B45309"/>
    <path d="M52 100 L60 104 M96 82 L104 86 M138 96 L146 100 M84 124 L92 128 M128 128 L136 132" fill="none" stroke-width="3"/>
    <path d="M30 118 Q20 128 14 126 M172 108 Q184 104 190 108" fill="none" stroke-width="3"/>`,

  /* ---------- Level 0 extras ---------- */
  rabbit: `<ellipse cx="78" cy="56" rx="14" ry="40" fill="${C.white}"/><ellipse cx="122" cy="56" rx="14" ry="40" fill="${C.white}"/><ellipse cx="78" cy="56" rx="6" ry="28" fill="${C.pink}" stroke="none"/><ellipse cx="122" cy="56" rx="6" ry="28" fill="${C.pink}" stroke="none"/>
    <circle cx="100" cy="124" r="52" fill="${C.white}"/>${eyes(82, 118, 116, 5)}<path d="M94 132 L106 132 L100 140 Z" fill="${C.rose}"/><path d="M100 140 L100 148" fill="none"/>`,

  pencil: `<path d="M150 26 L174 50 L70 154 L46 130 Z" fill="${C.sand}"/><path d="M46 130 L70 154 L34 166 Z" fill="${C.cream}"/><path d="M34 166 L40 148 L52 160 Z" fill="${K}"/>
    <path d="M150 26 L174 50 L184 40 Q176 22 160 16 Z" fill="${C.pink}"/>`,

  banana: `<path d="M40 60 C40 140 120 170 170 130 C150 130 120 140 96 120 C70 100 62 80 60 56 Z" fill="${C.yellow}"/><path d="M40 60 L44 44 L58 50" fill="${C.dark}"/>`,

  butterfly: `<path d="M100 96 C80 40 20 40 30 90 C36 116 70 110 100 100 Z M100 96 C120 40 180 40 170 90 C164 116 130 110 100 100 Z" fill="${C.purple}"/>
    <path d="M100 104 C76 110 46 130 62 154 C76 170 96 140 100 110 Z M100 104 C124 110 154 130 138 154 C124 170 104 140 100 110 Z" fill="${C.sky}"/>
    <ellipse cx="100" cy="110" rx="8" ry="40" fill="${K}"/><path d="M96 72 Q86 50 78 46 M104 72 Q114 50 122 46" fill="none"/>`,

  elephant: `<rect x="76" y="128" width="22" height="44" rx="6" fill="${C.grey}"/><rect x="136" y="128" width="22" height="44" rx="6" fill="${C.grey}"/>
    <ellipse cx="120" cy="114" rx="58" ry="42" fill="${C.grey}"/><path d="M176 108 Q190 120 184 132" fill="none"/>
    <path d="M70 92 C70 126 44 140 34 168 Q30 178 40 176" fill="none" stroke-width="18"/><path d="M70 92 C70 126 44 140 34 168 Q30 178 40 176" fill="none" stroke="${C.grey}" stroke-width="9"/>
    <circle cx="70" cy="86" r="34" fill="${C.grey}"/><path d="M84 62 C120 50 128 116 92 112 Z" fill="#B6C2D2"/>${dot(60, 80, 5)}`,

  tomato: `<circle cx="100" cy="112" r="62" fill="${C.red}"/><path d="M100 54 L80 46 L92 62 L70 70 L96 70 L100 86 L104 70 L130 70 L108 62 L120 46 Z" fill="${C.green}"/>
    <path d="M66 100 Q70 84 84 78" stroke="#fff" stroke-width="6" fill="none" opacity=".6"/>`,

  octopus: `<g fill="${C.coral}"><path d="M50 110 Q40 150 20 164 Q46 162 64 130 Z"/><path d="M72 120 Q66 160 52 182 Q80 172 88 130 Z"/><path d="M112 130 Q120 172 148 182 Q134 160 128 120 Z"/><path d="M136 130 Q154 162 180 164 Q160 150 150 110 Z"/></g>
    <path d="M44 110 C40 50 160 50 156 110 Q100 140 44 110 Z" fill="${C.coral}"/>${eyes(80, 120, 96, 6)}<path d="M90 114 Q100 122 110 114" fill="none"/>`,
};
delete ILLUS.dig;

function svgPic(key, cls) {
  const inner = ILLUS[key];
  if (!inner) return '';
  return `<svg class="${cls || 'pic'}" viewBox="0 0 200 200" role="img" aria-label="${key}" xmlns="http://www.w3.org/2000/svg"><g stroke="${K}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${inner}</g></svg>`;
}

if (typeof module !== 'undefined') module.exports = Object.assign(ILLUS, { __svgPic: svgPic });
