import { useState } from 'react'

// ─── STYLE CONSTRAINTS (10 styles) ───────────────────────────────────────────

const STYLE_CONSTRAINTS = {
  anime: {
    artStyle: `Modern Digital Anime/Manga Webtoon style. Sharp dynamic black ink outlines with varying line weight to indicate depth and motion. Realistic anime proportions — expressive detailed eyes, distinct facial structures. High-quality Cel Shading with sharp shadows and dramatic highlights. Clean, professional, dynamic aesthetic similar to high-budget manhwa or digital manga.`,
    colorPalette: `Vibrant and high-contrast. Dramatic lighting — sunset glows, cool monitor blues — to set emotional mood.`,
    effects: {
      E1: `Blue gradient on upper half of face, white pupil-less eyes, vertical gloom lines, sweat drops flying off`,
      E2: `White eye effect (eyes turn pure white circles), jaw drops, jagged impact background`,
      E3: `Bishie sparkles (stars and bubbles), flowery background pattern, soft focus vignette`,
      E4: `Heavy black cross-hatching over character, character huddled in corner, depressed spirit leaving mouth`,
      FX1: `Dense speed lines converging on center, bold Malay sound effects (ZASS! GEDEBUK!), high contrast black/white flashes`,
      FX2: `Sharp ink lightbulb with flash starburst behind it`,
      FX3: `Abstract swirls and jagged lines representing confusion, no distinct background`,
    },
    imageIntegration: `Method A: As 2D drawing inside the world (sketch on notepad, image on manga-style smartphone screen). Method B: Completely redrawn as detailed anime/manga illustration within the panel.`,
    bubbles: `Standard white oval speech bubbles with clean black borders. Thought bubbles: cloud-style. Action/scream bubbles: jagged explosive.`,
  },

  chibi: {
    artStyle: `Cute Chibi anime style — large expressive heads, small bodies. Thick clean dark outlines (sticker art feel). Soft Cel Shading with simple gradients for smooth 3D look.`,
    colorPalette: `Bright soft pastel color palettes with gentle gradient backgrounds.`,
    effects: {
      E1: `Giant waterfalls of sweat drops, purple forehead veins, shaking lines`,
      E2: `Jaw dropping to the floor, eyes popping out of sockets completely, soul leaving the body`,
      E3: `Giant sparkling tink-tank eyes, floating flowers and hearts background aura`,
      E4: `Dark purple depressive aura, rain cloud over head, character shriveled up`,
      FX1: `Thick speed lines converging on action, WOOSH/BAM Malay sound text (ZASS! GEDEBUK!), dust clouds on impact`,
      FX2: `Comically large glowing lightbulb radiating holy light rays`,
      FX3: `Swirling vortex of messy papers, question marks, and confusion symbols`,
    },
    imageIntegration: `Method A: Inside comic world (on chibi character's phone screen, framed on wall), stylized to match cel-shading. Method B: Completely redrawn as central chibi element in a panel.`,
    bubbles: `Round puffy speech bubbles with thick outlines. Thought bubbles: fluffy clouds. Scream bubbles: jagged star-burst shape.`,
  },

  western: {
    artStyle: `Classic American Superhero comic (Golden/Silver Age, 1940s-1970s). Bold confident black ink outlines. Anatomically idealized proportions — dynamic heroic poses (hands on hips, flying fists, standing atop buildings). Limited vibrant four-color palette (cyan, magenta, yellow, black) that sometimes looks slightly misaligned. CRUCIAL: Visible Ben-Day dot patterns used for shading and skin tones. Dramatic chiaroscuro lighting with heavy solid black shadows. Gritty yet optimistic retro comic book feel. Panel frames thick with slightly rough borders.`,
    colorPalette: `Primary colors dominate — heroic reds, blues, yellows, contrasted with deep shadow blacks. Ben-Day dot texture throughout.`,
    effects: {
      E1: `Heavy brow shadows obscuring eyes, large cartoonish sweat droplets, teeth clenched in grimace, wavy lines radiating from head`,
      E2: `Eyes bulging out of head, jaw unhinged dropping to floor, massive jagged sound effect bubble (HAH?!)`,
      E3: `Chest puffed out, gleaming smile with star "ting" effect on teeth, sunburst background pattern`,
      E4: `Character entirely silhouetted in black against rainy gray background, sad rain cloud hovering overhead`,
      FX1: `Dense motion lines on impact point, massive blocky 3D sound effects filled with Ben-Day dots (GEDEBUK! ZASSS!), explosive starbursts`,
      FX2: `Glowing lightbulb with distinct filament and radiating shine lines`,
      FX3: `Swirling fight cloud of dust and debris with stars, spirals, occasional limbs poking out`,
    },
    imageIntegration: `Method A: In retro newspaper headline, CRT monitor screen, or "Secret File" folder held by hero. Method B: Completely redrawn in bold muscular Ben-Day dot superhero style.`,
    bubbles: `Classic rectangular yellow/colored caption boxes for narration. Round speech bubbles with bold black borders. Jagged explosive bubbles for exclamations.`,
  },

  cartoon: {
    artStyle: `Classic Hand-Drawn Cartoon style (think The Simpsons or early Disney). Simplified shapes and exaggerated features prioritized for comedy and readability. Bold clean UNIFORM black outlines. Flat saturated colors, minimal to NO shading — mimics traditional 2D cel animation. Panels divided by thick black lines.`,
    colorPalette: `Limited bright highly saturated primary and secondary colors. Simple solid backgrounds or classic cartoon patterns (halftone dots, radiating lines).`,
    effects: {
      E1: `Steam blowing out of ears (train whistle), eyes bulging out on springs, tongue unrolling like carpet`,
      E2: `Jaw drops all the way to floor with metallic KLANG sound effect, body freezes mid-air`,
      E3: `Character floats in air, radiating lines, classic cartoon hearts and stars, giant toothy grin`,
      E4: `Personal dark rain cloud hovering directly over character drenching only them, character slumped and grayed out`,
      FX1: `Thick motion blur lines, giant jagged starburst on impact, bold Malay sound text (ZASS! GEDEBUK! BOOM!), puffy opaque dust clouds`,
      FX2: `Comically large old-fashioned filament lightbulb with thick wavy holy light rays, loud TING sound effect`,
      FX3: `Swirling vortex of messy objects, question marks, spirals indicating confusion`,
    },
    imageIntegration: `Method A: On chunky retro television screen or held as physical photograph, stylized to match flat color bold outline look. Method B: Completely redrawn as central exaggerated cartoon element.`,
    bubbles: `Classic white oval speech bubbles with thick black borders. Thought bubbles: puffy clouds. Scream bubbles: jagged explosive bursts.`,
  },

  manhwa: {
    artStyle: `Premium Digital Manhwa / Korean Webtoon style blended with Malaysian cultural soul. Clean thin confident ink strokes (G-Pen aesthetic), no sketchiness. Full color high saturation — Webtoon coloring (cel-shading mixed with soft airbrush gradients for skin and hair). Cinematic rim lighting, bloom effects, dramatic shadows. "Manhwa Gloss" — shiny highlights on hair and eyes. 3D-modeled backgrounds painted to look 2D. Panels can bleed into white negative space ("borderless" style).`,
    colorPalette: `Dual mode — Lighthearted: soft pinks, mint greens, sky blues. Dramatic: high contrast dark purples, neon rim lights.`,
    effects: {
      E1: `Dark blue vertical gradient overlay on face, character staring at phone/bill in dim lighting (Depression/Stress)`,
      E2: `"Dead Fish" blank white eyes (Krik Krik moment), deadpan frozen expression`,
      E3: `"Shoujo" sparkle — flowers and bubbles appearing behind character when they see something beautiful or pious`,
      E4: `"Dark Aura" — purple flame-like energy radiating from character (Anger or Determination)`,
      FX1: `ZASS! GEDEBUK! BOOM! in Malay context, motion lines in Webtoon style`,
      FX2: `TING! floating text, holographic screen materializing next to character`,
      FX3: `Floating UI elements, mindmap nodes with glowing neural lines, chaos of overlapping info`,
    },
    imageIntegration: `Method A: Shown on smartphone or holographic screen inside comic world. Method B: Completely redrawn in full Manhwa digital painting style.`,
    bubbles: `Standard: white oval, clean sans-serif. Inner monologue: square box no tail, grey/semi-transparent. Scream: spiky explosive red text. Whisper: dotted outline, small opacity text.`,
    settings: `Urban Malaysian: KL skyline, MRT stations, mamak stalls. Rural: Kampung houses on stilts, palm oil greenery. Domestic: tiled floors, ceiling fans, prayer mats on railing.`,
  },

  pixar: {
    artStyle: `Pixar/Disney 3D Animation style. Fully rendered 3D computer graphics — NO black outlines, NO cel-shading. Pure 3D render look. High-fidelity textures: visible fabric weave on clothes, skin pores, subsurface scattering on skin, glossy eyes. Cinematic lighting with soft shadows, rim lighting to separate characters from backgrounds, ambient occlusion for depth. Soft friendly round shapes, highly polished and vibrant. Backgrounds: detailed 3D environments, slightly out of focus (depth of field) to emphasize characters.`,
    colorPalette: `Rich saturated colors with cinematic color grading. Lighting shifts mood — warm and golden for joy, cool blue for sadness/conflict.`,
    effects: {
      E1: `Realistic sweat beads on forehead, flushed red skin, disheveled hair, messy dramatic lighting`,
      E2: `Exaggerated 3D facial rig stretching (jaw very low, eyes wide), dolly zoom camera effect`,
      E3: `High-key lighting, volumetric "god rays" shining down, eyes reflecting bright warm light source`,
      E4: `Desaturated blue color grading, localized rain particle system over character, isolation spotlight`,
      FX1: `Motion blur on limbs, 3D particle debris (dust, sparks) flying toward camera, impact frame styling`,
      FX2: `Physical glowing 3D lightbulb prop appearing above head, illuminating character's face with warm light`,
      FX3: `Messy 3D room with objects (papers, trash) floating or scattered in whirlwind particle system`,
    },
    imageIntegration: `Method A: As 3D prop — texture on smartphone screen held by character, or framed picture on 3D wall. Method B: Subject completely remodeled as central 3D Pixar-style character.`,
    bubbles: `Semi-transparent 3D glass-morphism UI boxes overlaid on the render. Clean rounded sans-serif font.`,
  },

  realistic: {
    artStyle: `Realistic Digital Painting — Malaysia Edition. Hand-painted aesthetic with visible brushwork, blending digital precision with traditional oil/acrylic feel. Strong chiaroscuro, volumetric lighting (God rays), cinematic rim lighting, ambient occlusion for depth and mass. High detail on faces and focal points; painterly/impressionistic backgrounds. NOT cartoonish or cel-shaded. Malaysian context throughout: tropical greenery, local architecture, Batik/Songket textures on clothing.`,
    colorPalette: `Cinematic color grading. Dark stormy tones for conflict, golden hour warmth for hope, warm inviting tones for resolution. Canvas grain and visible brush strokes emphasize hand-painted quality.`,
    effects: {
      E1: `High contrast shadows on face, glistening realistic sweat, thousand-yard stare`,
      E2: `Soft diffuse lighting, relaxed facial muscles, slight genuine smile (Serenity/Tenang)`,
      E3: `Head bowed, face obscured by shadow, single realistic tear track with fluid physics (Regret/Insaaf)`,
      E4: `Strong rim light on profile, focused eyes, clenched jaw (Determination)`,
      FX1: `Sunlight piercing through clouds/trees/windows as God Rays (Cahaya Ilahi) highlighting subject`,
      FX2: `Beautiful background bokeh blur (depth of field) focusing entirely on character/object`,
      FX3: `Heavy tropical rain (hujan lebat) for sadness, harsh midday sun for hardship, visible weather atmosphere`,
    },
    imageIntegration: `Method A: Photorealistic integration — appears as painting on wooden wall, or glowing screen in dark room. Method B: Subject completely repainted in high-contrast hand-painted style with dramatic lighting.`,
    bubbles: `Semi-transparent textured speech boxes or floating text integrated into painted scene — NOT stark white vector bubbles. Panel dividers: diagonal slashes or soft gradients, NOT thick black lines.`,
  },

  gothic: {
    artStyle: `Gothic Noir & Dramatic Ink — Malaysian Edition. Heavy jagged black ink strokes with cross-hatching for texture. Sharp angular ELONGATED character features (NOT cute or round). Dramatic Chiaroscuro lighting — extreme high contrast between light and dark. Strong shadows casting over faces and objects. Moody, macabre, serious, mysterious, solemn atmosphere. Inspired by dark graphic novels and noir cinema fused with Malaysian folklore aesthetics.`,
    colorPalette: `Desaturated — dominant charcoal, slate grey, deep sepia, midnight blue. SPOT COLORS used ONLY for key focal points: Crimson (danger/evil), Gold (sacred/divine), Emerald (hope/nature). Texture overlays: noise grain, ink splatters, paper texture, scratches.`,
    effects: {
      E1: `Vertical gloom lines, face obscured by deep shadow, hollow white eyes (Despair/Dread)`,
      E2: `Pupils constricted to pinpoints, background turns pitch black, jagged white lines radiating outward (Shock/Horror)`,
      E3: `Soft holy rays of light (Nur) breaking through dark clouds, serene expression, warm gold spot color (Enlightenment)`,
      E4: `Black aura flames radiating from body, gritted teeth, sharp angular contour lines intensifying (Anger/Intensity)`,
      FX1: `DENTUMAN! GEDEBUK! rendered in jagged cracked stone/broken fonts`,
      FX2: `ZASSS! SHHHH rendered in flowing smoky fonts`,
      FX3: `TIK...TOK... GURUH (rumble) in thin atmospheric fonts, texture overlays of grain and ink splatter`,
    },
    imageIntegration: `Method A: As physical artifact — old photograph, reflection in broken mirror, hologram. Method B: Subject redrawn as darker grittier Gothic Noir version.`,
    bubbles: `Rough-edged speech boxes with slight paper texture. Caption boxes framed by ornate Islamic geometry or gothic borders. Minimal bubbles — prefer floating caption text integrated into shadows.`,
    settings: `Kampung Night: traditional wooden houses on stilts, banana leaves in silhouette, mist rolling on ground. Urban Decay: KL alleyways, wet pavement reflecting neon, loose hanging wires. Islamic Geometry: intricate geometric tessellations as abstract background.`,
  },

  ghibli: {
    artStyle: `Studio Ghibli-inspired Hand-Drawn Animation. Soft expressive linework with gentle varying line weight. Lush highly detailed painterly backgrounds — hand-painted watercolor/gouache feel. Characters have simple round features with large soulful eyes — warm, approachable, sincere expressions. Sense of wonder, nostalgia, and spiritual warmth throughout. Nature elements (wind, light, leaves, water) feel alive and breathing. Characters clean and simple contrasted against rich detailed backgrounds.`,
    colorPalette: `Warm earthy tones — soft amber, sage green, dusty rose, sky blue. Natural golden hour lighting. Muted cool tones shift in during sad/longing moments.`,
    effects: {
      E1: `Drooping eyes, slumped shoulders, small worry lines, soft grey clouds gathering gently above (Worry/Stress)`,
      E2: `Wide round eyes, hands on cheeks (Home Alone pose), soft radial lines expanding gently outward (Surprise)`,
      E3: `Eyes sparkling with tiny star reflections, warm golden light washing over face, floating petals or leaves around character (Wonder/Joy)`,
      E4: `Profile shot, eyes downcast, soft rain or falling leaves in background, muted cool tones (Sadness/Longing)`,
      FX1: `Gentle flowing speed lines, leaves/petals carried by wind, soft WOOSH in rounded friendly font`,
      FX2: `Warm glowing orb of light (like a forest spirit) appearing near character, soft TING`,
      FX3: `Swirling wind carrying scattered papers/objects, question marks in soft rounded style`,
    },
    imageIntegration: `Method A: As gentle sketch or painting within the world (character's sketchbook, framed watercolor art on wall). Method B: Subject redrawn in soft Ghibli watercolor illustration style.`,
    bubbles: `Soft rounded speech bubbles with thin gentle outlines. Thought bubbles: wispy cloud clusters. Minimal sound effects — atmosphere conveyed through visuals rather than text.`,
    settings: `Lush tropical forest with dappled sunlight through canopy. Kampung at golden hour — wooden houses, dirt paths, chickens. Riverside or paddy field at dawn. Old masjid courtyard with large shady trees and flower beds.`,
  },

  cyberpunk: {
    artStyle: `Cyberpunk Neo-Futuristic Anime. Sharp dynamic linework with glowing neon edge highlights. High-tech dystopian aesthetic fused with Islamic/Malaysian cultural elements. Characters have sleek modern designs with modest Islamic attire reimagined in futuristic materials — smart fabrics, tech-enhanced hijab, tactical jubah with LED trim. Detailed mechanical urban backgrounds with layered depth: foreground grit and rust, midground neon signs, background megastructures piercing smoggy skies.`,
    colorPalette: `Deep midnight black and dark navy base. Electric neon accents: cyan, magenta, violet, acid green. Warm amber and gold ONLY for Islamic sacred elements — contrasting against cold neon to create visual tension. High contrast, cinematic.`,
    effects: {
      E1: `Glitch effects fragmenting face, digital static lines across panel, red warning HUD elements around head, sweat rendered as data drops (Stress/Overload)`,
      E2: `Screen glitch freeze frame effect, pixelated distortion radiating outward, ERROR text overlay in red (Shock)`,
      E3: `Neon aura intensifying around body, eyes glowing with inner cyan/gold light, HUD targeting reticle activating (Determination/Power)`,
      E4: `Flickering failing neon, power-down visual effect, character desaturated and dim against vivid glowing background (Defeat/Gloom)`,
      FX1: `Dense electric speed lines, neon particle explosion, bold glitch-style Malay sound text (ZASSS! KRAKK! GEDEBUK!) in broken digital font`,
      FX2: `Holographic screen materializing from thin air, flowing green/cyan data streams with Malay characters, TING in pixel/digital font`,
      FX3: `Overlapping glitch layers, corrupted background pixels, static interference patterns, floating red warning symbols and ERROR codes`,
    },
    imageIntegration: `Method A: Displayed on holographic screen, neon-framed digital billboard, or AR overlay projected in space. Method B: Subject redrawn in sleek cyberpunk anime style with neon highlights and tech overlays.`,
    bubbles: `Holographic HUD-style speech boxes with neon borders and slight glow. Inner monologue: dark semi-transparent rectangular boxes with thin neon outline. System alerts: angular rectangular with blinking corners.`,
    settings: `Neo-KL: Petronas Towers wrapped in neon advertisements, holographic Jawi calligraphy on building facades. Underground Masjid: traditional Islamic architecture with neon geometric patterns on walls. Pasar Malam 2099: street stalls with holographic menus, vendors in smart traditional attire. Futuristic MRT: high-speed transit with Malaysian cultural motifs on tiles.`,
  },
}

// ─── STYLES LIST ──────────────────────────────────────────────────────────────

const STYLES = [
  { id:'anime',     name:'Anime Style',                file:'anime.png',     desc:'Dynamic expressive anime. Sharp ink lines, dramatic cel shading. Great for emotional youth dakwah.' },
  { id:'chibi',     name:'Chibi',                      file:'chibi.png',     desc:'Cute oversized heads, small bodies. Soft pastel colours. Perfect for light-hearted dakwah.' },
  { id:'ghibli',    name:'Ghibli-inspired',            file:'ghibli.png',    desc:'Painterly watercolor warmth. Rich nature backgrounds. Great for wonder-filled spiritual stories.' },
  { id:'western',   name:'Western Comic',              file:'western.png',   desc:'Classic superhero boldness. Ben-Day dots, heroic poses. Good for dramatic dakwah narratives.' },
  { id:'pixar',     name:'3D Pixar Style',             file:'pixar.png',     desc:'Polished 3D render. Soft round shapes, cinematic lighting. Great for family dakwah topics.' },
  { id:'cyberpunk', name:'Cyberpunk',                  file:'cyberpunk.png', desc:'Neon futuristic with Islamic elements. Tech-enhanced hijab, neo-KL. Youth urban dakwah.' },
  { id:'manhwa',    name:'Man Hwa Style',              file:'manhwa.png',    desc:'Korean Webtoon polish with Malaysian soul. Cinematic rim lighting, mamak settings.' },
  { id:'gothic',    name:'Gothic Noir Style',          file:'gothic.png',    desc:'Dark dramatic ink. High contrast shadows, moody Malaysian settings. Serious dakwah themes.' },
  { id:'cartoon',   name:'Classic Cartoon Style',      file:'cartoon.png',   desc:'Flat colour animation (Simpsons/Disney). Bold outlines, slapstick effects. All-ages dakwah.' },
  { id:'realistic', name:'Realistic Digital Painting', file:'realistic.png', desc:'Hand-painted cinematic realism. Malaysian cultural textures. Impactful serious narratives.' },
]

const ASPECT_RATIOS = [
  { id:'16:9', label:'16:9', desc:'Landscape',         w:56, h:32 },
  { id:'9:16', label:'9:16', desc:'Vertical / Webtoon', w:32, h:56 },
  { id:'4:3',  label:'4:3',  desc:'Standard',           w:50, h:38 },
  { id:'3:4',  label:'3:4',  desc:'Portrait',           w:38, h:50 },
  { id:'1:1',  label:'1:1',  desc:'Square',             w:44, h:44 },
]

const TONE_TO_SIZE = (tone='') => {
  const t = tone.toLowerCase()
  if (/hook|open|climax|clos|impact|resol|reveal|penutup|pembukaan|intro|final/.test(t)) return 'Large'
  if (/small|react|transit|brief|cutaway/.test(t)) return 'Small'
  return 'Medium'
}
const SIZE_CLASS = { Large:'size-large', Medium:'size-medium', Small:'size-small' }
const STEPS_BM = ['Gaya','Topik','Cerita','Watak','Storyboard','Pengarang','Prompt']
const STEPS_EN = ['Style','Topic','Story','Characters','Storyboard','Author','Prompts']
const SYSTEM_FOOTER = "Da'wah Comic Studio by Thinkerz Solution | v2.0"

const detectLang = (text='') => {
  const malayWords = ['kenapa','mengapa','kerana','sebab','dengan','yang','dan','untuk','dalam','tidak','boleh','nak','kita','saya','dia','mereka','apa','bagaimana','bila','mana','perlu','sudah','dah','lah','pun','je','ni','tu','itu','ini','ada','tak','buat','kata','tapi','atau','juga','kalau','macam','rasa','hati','Allah','solat','masjid','ustaz','pemuda','duduk','berdiri','wajah','mata','kepada']
  const words = text.toLowerCase().split(/\s+/)
  const malayCount = words.filter(w => malayWords.includes(w)).length
  return malayCount >= 2 ? 'bm' : 'en'
}

const parseScript = (script, numPages, panelCounts) => {
  const pageBlocks = script.split(/===\s*HALAMAN\s*\d+\s*===|===\s*PAGE\s*\d+\s*===/i)
  const pageContents = pageBlocks.length > 1 ? pageBlocks.slice(1) : [script]
  return Array.from({length: numPages}, (_, pi) => {
    const pageText = pageContents[pi] || pageContents[0] || ''
    const pc = panelCounts[pi] || 6
    const panelBlocks = pageText.split(/PANEL\s+\d+\s*[—–-]/i).filter(b => b.trim())
    return {
      pageNum: pi + 1,
      panels: Array.from({length: pc}, (_, pni) => {
        const block = panelBlocks[pni] || ''
        const toneMatch = block.match(/(?:Tone\s*&\s*Emotional\s*Cue|Tone\s*&\s*Emosi|Tone)[:\s]+([^\n]+(?:\n(?!Visual|Dialog|PANEL)[^\n]+)*)/i)
        const tone = toneMatch ? toneMatch[1].trim() : ''
        const visualMatch = block.match(/(?:Visual\s*Description|Deskripsi\s*Visual|Visual)[:\s]+([^\n]+(?:\n(?!Tone|Dialog|PANEL)[^\n]+)*)/i)
        const visualDesc = visualMatch ? visualMatch[1].trim() : ''
        const dialogues = []
        const dialogSection = block.match(/(?:Dialog|Dialogue)[:\s]*([\s\S]*?)(?=PANEL|\n\n\n|$)/i)
        if (dialogSection) {
          const lines = dialogSection[1].match(/([A-Za-z\u00C0-\u017E][A-Za-z\u00C0-\u017E\s]*)\s*:\s*[""]?([^"":\n]+)[""]?/g)
          if (lines) lines.slice(0,2).forEach(line => {
            const m = line.match(/^([^:]+):\s*[""]?([^""]+)[""]?$/)
            if (m) dialogues.push({ char: m[1].trim(), speech: m[2].trim().replace(/^[""]|[""]$/g,'') })
          })
        }
        return { panelNum: pni+1, size: TONE_TO_SIZE(tone), tone, visualDesc, dialogues: dialogues.length ? dialogues : [{char:'',speech:''}] }
      })
    }
  })
}

const AI_PROMPT_TEMPLATE = (topic, chars, location, numPages, panelCounts, lang) => {
  const isBM = lang === 'bm'
  return isBM
    ? `Saya ingin hasilkan skrip komik dakwah. Tolong hasilkan dalam format berikut SAHAJA:

TOPIK: ${topic}
WATAK: ${chars}
LOKASI & SUASANA: ${location}

${Array.from({length:numPages},(_,pi)=>`=== HALAMAN ${pi+1} ===

${Array.from({length:panelCounts[pi]||6},(_,pni)=>`PANEL ${pni+1} — [NAMA PANEL]
Visual Description:
[Huraikan adegan, posisi watak, ekspresi, latar belakang dalam Bahasa Melayu]
Tone & Emotional Cue:
[Nyatakan emosi dan suasana panel ini]
Dialog:
[Nama Watak 1]: "[dialog dalam Bahasa Melayu]"
[Nama Watak 2]: "[dialog dalam Bahasa Melayu]"`).join('\n\n')}`).join('\n\n')}

Pastikan:
- Semua teks dalam Bahasa Melayu Malaysia
- Arc emosi: rasa ingin tahu → refleksi → faham → tenang
- Pakaian Islamic-modest (hijab untuk wanita, sopan untuk lelaki)
- Dialog natural, tidak menggurui
- Watak konsisten di semua panel`
    : `I want to create a dakwah comic script. Please generate in the following format ONLY:

TOPIC: ${topic}
CHARACTERS: ${chars}
LOCATION & ATMOSPHERE: ${location}

${Array.from({length:numPages},(_,pi)=>`=== PAGE ${pi+1} ===

${Array.from({length:panelCounts[pi]||6},(_,pni)=>`PANEL ${pni+1} — [PANEL NAME]
Visual Description:
[Describe the scene, character positions, expressions, background in English]
Tone & Emotional Cue:
[Describe the emotion and atmosphere of this panel in English]
Dialogue:
[Character 1 Name]: "[dialogue in English]"
[Character 2 Name]: "[dialogue in English]"`).join('\n\n')}`).join('\n\n')}

Ensure:
- All text in English
- Emotional arc: curiosity → reflection → understanding → peace
- Islamic-modest clothing throughout
- Natural non-preachy dialogue
- Consistent characters across all panels`
}

const buildPagePrompt = (pg, pages, styleId, location, comicTitle, authorName, charDescs, inputLang, aspectRatio) => {
  const styleData = STYLES.find(s=>s.id===styleId)
  const constraints = STYLE_CONSTRAINTS[styleId] || {}
  const style = styleData?.name || 'Comic'
  const credit = `By ${authorName}`
  const isBM = inputLang === 'bm'
  const large = pg.panels.filter(p=>p.size==='Large').length
  const medium = pg.panels.filter(p=>p.size==='Medium').length
  const small = pg.panels.filter(p=>p.size==='Small').length
  const panelDetails = pg.panels.map(pn => {
    const dlg = pn.dialogues.filter(d=>d.speech.trim()).map(d=>`${d.char}: "${d.speech}"`).join('\n')
    return isBM
      ? `Panel ${pn.panelNum} [${pn.size}]:\n${pn.visualDesc}\nDialog:\n${dlg||'(tiada dialog)'}`
      : `Panel ${pn.panelNum} [${pn.size}]:\n${pn.visualDesc}\nDialogue:\n${dlg||'(no dialogue)'}`
  }).join('\n\n')

  if (isBM) {
    return `TAJUK: "${comicTitle}"
NISBAH ASPEK: ${aspectRatio}

GAYA VISUAL: ${style}
${constraints.artStyle ? 'ARAHAN GAYA:\n'+constraints.artStyle : ''}
${constraints.colorPalette ? '\nPALET WARNA: '+constraints.colorPalette : ''}

LOKASI & SUASANA: ${location}${constraints.settings ? '\nSETTING KHUSUS: '+constraints.settings : ''}

WATAK (kekalkan konsisten di SEMUA panel):
${charDescs}

HALAMAN ${pg.pageNum} DARIPADA ${pages.length} — ${pg.panels.length} PANEL
Susun atur dinamik asimetrik: ${large} panel besar, ${medium} panel sederhana, ${small} panel kecil

${panelDetails}

KREDIT: ${credit}
SISTEM: ${SYSTEM_FOOTER}

ARAHAN PENJANAAN VISUAL:
Cipta komik dakwah Islam 1 halaman (Halaman ${pg.pageNum}/${pages.length}) dengan nisbah aspek ${aspectRatio}. ${pg.panels.length} panel dalam SUSUN ATUR ASIMETRIK DINAMIK — panel berbeza saiz mengikut kepentingan emosi (besar untuk momen utama, kecil untuk reaksi/transisi). Sesekali biarkan watak sedikit terkeluar dari sempadan panel untuk tenaga komik yang dinamik.

Tajuk komik "${comicTitle}" dipaparkan menonjol di atas Panel 1 Halaman 1 — besar, berani, mudah dibaca pada skrin mobile.

${constraints.bubbles ? 'BUBBLE DIALOG: '+constraints.bubbles+'\n' : ''}PENTING — DIALOG VERBATIM (WAJIB): Teks dialog dalam setiap bubble MESTI 100% sama persis dengan apa yang ditulis di atas. DILARANG KERAS menterjemah, meringkas, mengubah perkataan, atau menukar bahasa dialog. Jika dialog dalam Bahasa Melayu — kekalkan Bahasa Melayu. Jika dalam Bahasa Inggeris — kekalkan Bahasa Inggeris. Jika dalam bahasa lain — kekalkan bahasa asal. Salin SEBIJIK-SEBIJIK tanpa sebarang perubahan.

Hanya tunjukkan teks dalam bubble dialog — JANGAN tulis label "Panel", "Tone", atau sebarang teks lain di luar bubble.

Kredit "${credit}" dan "${SYSTEM_FOOTER}" dalam teks kecil di bahagian bawah panel terakhir.

PEMATUHAN SYARIAH (WAJIB): Semua pakaian sopan sepenuhnya — tudung menutup rambut/leher/dada untuk wanita Muslim, tiada dada terdedah untuk lelaki. Tiada berhala, salib, atau simbol agama bukan Islam. Nada penuh hormat. Kualiti tinggi, bubble percakapan jelas dan boleh dibaca.`
  } else {
    return `TITLE: "${comicTitle}"
ASPECT RATIO: ${aspectRatio}

VISUAL STYLE: ${style}
${constraints.artStyle ? 'STYLE DIRECTION:\n'+constraints.artStyle : ''}
${constraints.colorPalette ? '\nCOLOR PALETTE: '+constraints.colorPalette : ''}

LOCATION & ATMOSPHERE: ${location}${constraints.settings ? '\nSPECIFIC SETTINGS: '+constraints.settings : ''}

CHARACTERS (maintain consistency across ALL panels):
${charDescs}

PAGE ${pg.pageNum} OF ${pages.length} — ${pg.panels.length} PANELS
Dynamic asymmetric layout: ${large} large, ${medium} medium, ${small} small panel(s)

${panelDetails}

CREDIT: ${credit}
SYSTEM: ${SYSTEM_FOOTER}

VISUAL GENERATION PROMPT:
Create a 1-page Islamic dakwah comic (Page ${pg.pageNum}/${pages.length}) with aspect ratio ${aspectRatio}. ${pg.panels.length} panels in a DYNAMIC ASYMMETRIC LAYOUT — panels vary in size for emotional impact (large for key moments, small for reactions/transitions). Occasionally allow character figures to slightly overflow panel borders for dynamic energy.

Comic title "${comicTitle}" displayed prominently ABOVE the first panel — large, bold, mobile-readable.

${constraints.bubbles ? 'SPEECH BUBBLES: '+constraints.bubbles+'\n' : ''}CRITICAL — VERBATIM DIALOGUE (MANDATORY): The dialogue text inside every speech bubble MUST be 100% identical to what is written above. STRICTLY PROHIBITED: translating, summarizing, paraphrasing, or changing the language of any dialogue. If dialogue is in Bahasa Melayu — keep it in Bahasa Melayu. If in English — keep it in English. If in another language — keep the original language. Copy WORD FOR WORD without any changes whatsoever.

Show ONLY speech bubble text — DO NOT write "Panel", "Tone", or any labels outside speech bubbles.

Credit "${credit}" and "${SYSTEM_FOOTER}" as small text at the bottom of the final panel.

SYARIAH COMPLIANCE (MANDATORY): All clothing fully modest — hijab covering hair/neck/chest for Muslim women, no exposed chest for men. No idols, crosses, or non-Islamic symbols. Respectful tone. High quality, clear readable speech bubbles, professional dakwah illustration.`
  }
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState('bm')
  const T = lang === 'bm'
  const [mode, setMode] = useState(null)
  const [step, setStep] = useState(0)
  const [styleId, setStyleId] = useState(null)
  const [previewStyle, setPreviewStyle] = useState(null)
  const [aspectRatio, setAspectRatio] = useState('9:16')
  const [topic, setTopic] = useState('')
  const [comicTitle, setComicTitle] = useState('')
  const [titleEdited, setTitleEdited] = useState(false)
  const [mainMessage, setMainMessage] = useState('')
  const [dalil, setDalil] = useState('')
  const [copiedCustomGPT, setCopiedCustomGPT] = useState(false)
  const [narrativeType, setNarrativeType] = useState('')
  const [narrativeDesc, setNarrativeDesc] = useState('')
  const [numPages, setNumPages] = useState(1)
  const [numChars, setNumChars] = useState(2)
  const [panelCounts, setPanelCounts] = useState([6])
  const [chars, setChars] = useState(Array.from({length:3},()=>({name:'',role:'',trait:'',gender:''})))
  const [location, setLocation] = useState('')
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(0)
  const [openPanel, setOpenPanel] = useState(null)
  const [pastedScript, setPastedScript] = useState('')
  const [showAiPrompt, setShowAiPrompt] = useState(false)
  const [copiedTemplate, setCopiedTemplate] = useState(false)
  const [parsedFromScript, setParsedFromScript] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const [prompts, setPrompts] = useState([])
  const [copied, setCopied] = useState(null)
  const [inputLang, setInputLang] = useState('bm')

  const styleData = STYLES.find(s=>s.id===styleId)
  const updateChar = (i,field,val) => setChars(prev=>prev.map((c,ci)=>ci===i?{...c,[field]:val}:c))
  const setNumPagesVal = (n) => { setNumPages(n); setPanelCounts(Array.from({length:n},(_,i)=>panelCounts[i]||6)) }
  const setPagePanelCount = (i,val) => setPanelCounts(prev=>{const a=[...prev];a[i]=val;return a})
  const charListStr = chars.slice(0,numChars).map(c=>`${c.name}${c.role?' ('+c.role+')':''}`).filter(c=>c.trim()!='()').join(', ')
  const charDescsStr = chars.slice(0,numChars).map(c=>`${c.name}: ${c.role}${c.trait?', '+c.trait:''}${c.gender?', '+c.gender:''}`).join('; ')

  const handleTopicChange = (val) => {
    setTopic(val)
    if (!titleEdited) setComicTitle(val)
    setInputLang(detectLang(val))
  }

  const canNext = () => {
    if (step===0) return !!styleId
    if (step===1) return topic.trim()
    if (step===2) return !!narrativeType
    if (step===3) return chars.slice(0,numChars).every(c=>c.name.trim()) && location.trim()
    if (step===3) {
      if (mode==='easy') return pages.length > 0
      if (mode==='advanced') return pastedScript.trim().length > 50
    }
    if (step===4) return authorName.trim()
    return true
  }

  const goNext = () => {
    if (step===2) initPages()
    if (step===4 && mode==='advanced' && !parsedFromScript) parseAndFill()
    if (step===5) buildPrompts()
    setStep(s=>s+1); window.scrollTo(0,0)
  }
  const goBack = () => { setStep(s=>s-1); window.scrollTo(0,0) }
  const copyText = (text,id) => { navigator.clipboard.writeText(text); setCopied(id); setTimeout(()=>setCopied(null),2000) }

  const initPages = () => {
    setPages(Array.from({length:numPages},(_,i)=>({
      pageNum:i+1,
      panels:Array.from({length:panelCounts[i]||6},(_,j)=>({panelNum:j+1,size:'Medium',tone:'',visualDesc:'',dialogues:[{char:'',speech:''}]}))
    })))
    setActivePage(0); setOpenPanel(null); setParsedFromScript(false)
  }

  const parseAndFill = () => {
    if (!pastedScript.trim()) return
    setInputLang(detectLang(pastedScript))
    setPages(parseScript(pastedScript, numPages, panelCounts))
    setParsedFromScript(true)
  }

  const updatePanel = (pi,pni,field,val) => setPages(prev=>prev.map((pg,pgi)=>{
    if(pgi!==pi)return pg
    return {...pg,panels:pg.panels.map((pn,pnii)=>{
      if(pnii!==pni)return pn
      const u={...pn,[field]:val}
      if(field==='tone')u.size=TONE_TO_SIZE(val)
      return u
    })}
  }))

  const updateDialogue = (pi,pni,di,field,val) => setPages(prev=>prev.map((pg,pgi)=>{
    if(pgi!==pi)return pg
    return {...pg,panels:pg.panels.map((pn,pnii)=>{
      if(pnii!==pni)return pn
      return {...pn,dialogues:pn.dialogues.map((d,dii)=>dii===di?{...d,[field]:val}:d)}
    })}
  }))

  const addDialogue = (pi,pni) => setPages(prev=>prev.map((pg,pgi)=>{
    if(pgi!==pi)return pg
    return {...pg,panels:pg.panels.map((pn,pnii)=>{
      if(pnii!==pni||pn.dialogues.length>=2)return pn
      return {...pn,dialogues:[...pn.dialogues,{char:'',speech:''}]}
    })}
  }))

  const removeDialogue = (pi,pni,di) => setPages(prev=>prev.map((pg,pgi)=>{
    if(pgi!==pi)return pg
    return {...pg,panels:pg.panels.map((pn,pnii)=>{
      if(pnii!==pni)return pn
      const d=pn.dialogues.filter((_,dii)=>dii!==di)
      return {...pn,dialogues:d.length?d:[{char:'',speech:''}]}
    })}
  }))

  const buildPrompts = () => {
    const allText = topic+' '+narrativeDesc+' '+location+' '+pastedScript
    const finalLang = detectLang(allText)
    setInputLang(finalLang)
    setPrompts(pages.map(pg=>({
      pageNum:pg.pageNum,
      text:buildPagePrompt(pg,pages,styleId,location,comicTitle||topic,authorName,charDescsStr,finalLang,aspectRatio)
    })))
  }

  const copyTemplate = () => {
    navigator.clipboard.writeText(AI_PROMPT_TEMPLATE(topic||'[topik]',charListStr||'[watak]',location||'[lokasi]',numPages,panelCounts,inputLang))
    setCopiedTemplate(true); setTimeout(()=>setCopiedTemplate(false),2000)
  }

  const startMode = (m) => { setMode(m); setStep(0); window.scrollTo(0,0) }
  const resetToLanding = () => { setMode(null); setStep(0); setStyleId(null); setPreviewStyle(null); window.scrollTo(0,0) }

  const renderPanelEditor = (editable=true) => (
    <>
      <div className="page-tabs">
        {pages.map((pg,i)=>(
          <div key={i} className={`page-tab${activePage===i?' active':''}`} onClick={()=>{setActivePage(i);setOpenPanel(null)}}>
            {T?`Halaman ${pg.pageNum}`:`Page ${pg.pageNum}`} ({pg.panels.length})
          </div>
        ))}
      </div>
      {pages[activePage]&&(
        <div className="panel-list">
          {pages[activePage].panels.map((pn,pni)=>{
            const isOpen=openPanel===pni
            return(
              <div key={pni} className="panel-card">
                <div className={`panel-header${isOpen?' open':''}`} onClick={()=>setOpenPanel(isOpen?null:pni)}>
                  <div className="panel-title">
                    <span>{T?`Panel ${pn.panelNum}`:`Panel ${pn.panelNum}`}</span>
                    <span className={`panel-size-badge ${SIZE_CLASS[pn.size]||'size-medium'}`}>{pn.size}</span>
                    {pn.tone&&<span style={{fontSize:11,color:'var(--text2)',fontWeight:400,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:160}}>{pn.tone}</span>}
                  </div>
                  <span style={{color:'var(--accent2)',fontSize:11,flexShrink:0}}>{isOpen?'▲':'▼'}</span>
                </div>
                {isOpen&&(
                  <div className="panel-body">
                    <div>
                      <div className="sub-lbl">{T?'Ton & Emosi':'Tone & Emotion'}</div>
                      <input type="text" placeholder={T?'Cth: Hook - Pembukaan penuh rasa ingin tahu':'e.g. Hook - Opening full of curiosity'} value={pn.tone} onChange={e=>updatePanel(activePage,pni,'tone',e.target.value)}/>
                      <div className="text-muted" style={{marginTop:5,fontSize:11}}>{T?'Auto-saiz: Hook/Opening/Climax/Closing → Large · Reaction/Transition → Small':'Auto-size: Hook/Opening/Climax/Closing → Large · Reaction/Transition → Small'}</div>
                    </div>
                    <div>
                      <div className="sub-lbl">{T?'Deskripsi Visual':'Visual Description'}</div>
                      <textarea placeholder={T?'Huraikan adegan, posisi watak, ekspresi, latar belakang...':'Describe scene, positions, expressions, background...'} value={pn.visualDesc} onChange={e=>updatePanel(activePage,pni,'visualDesc',e.target.value)} style={{minHeight:88}}/>
                    </div>
                    <div>
                      <div className="sub-lbl">{T?'Dialog (Max 2 baris)':'Dialogue (Max 2 lines)'}</div>
                      {pn.dialogues.map((d,di)=>(
                        <div key={di} className="dialog-row mb8">
                          <div style={{display:'flex',gap:6,alignItems:'center',marginBottom:5}}>
                            <input type="text" placeholder={T?'Nama watak':'Character'} value={d.char} onChange={e=>updateDialogue(activePage,pni,di,'char',e.target.value)} style={{width:130,flex:'0 0 130px'}}/>
                            {pn.dialogues.length>1&&<button className="remove-btn" onClick={()=>removeDialogue(activePage,pni,di)}>×</button>}
                          </div>
                          <textarea placeholder={T?'Teks dialog...':'Dialogue text...'} value={d.speech} onChange={e=>updateDialogue(activePage,pni,di,'speech',e.target.value)} style={{minHeight:50}}/>
                        </div>
                      ))}
                      {pn.dialogues.length<2&&<button className="add-dialog-btn" onClick={()=>addDialogue(activePage,pni)}>+ {T?'Tambah dialog':'Add dialogue'}</button>}
                    </div>
                    <div>
                      <div className="sub-lbl">{T?'Saiz Panel':'Panel Size'}</div>
                      <div className="chips" style={{marginBottom:0}}>
                        {['Large','Medium','Small'].map(sz=>(
                          <div key={sz} className={`chip${pn.size===sz?' sel':''}`} onClick={()=>updatePanel(activePage,pni,'size',sz)}>{sz}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )

  if (!mode) return (
    <div className="wrap">
      <div className="header">
        <div className="header-top">
          <div className="badge">{T?'Studio Komik Dakwah':"Da'wah Comic Studio"}</div>
          <div className="lang-toggle">
            <button className={lang==='bm'?'active':''} onClick={()=>setLang('bm')}>BM</button>
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
          </div>
        </div>
        <h1>{T?"Studio Komik Dakwah":"Da'wah Comic Studio"}</h1>
        <p>{T?'Penjana Prompt Komik Dakwah Bertenaga AI':'AI-Powered Da\'wah Comic Prompt Generator'}</p>
      </div>
      <div className="card" style={{textAlign:'center',padding:'32px 20px'}}>
        <p style={{fontSize:14,color:'var(--text2)',marginBottom:24}}>{T?'Pilih cara anda ingin mulakan:':'Choose how you want to start:'}</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:20}}>
          <div className="mode-card" onClick={()=>startMode('easy')}>
            <div className="mode-icon">🟢</div>
            <div className="mode-title">{T?'Mod Mudah':'Easy Mode'}</div>
            <div className="mode-desc">{T?'Isi panel komik step by step. Sistem akan pandu anda dari mula hingga akhir.':'Fill comic panels step by step. Guided from start to finish.'}</div>
            <div className="mode-tag">{T?'Sesuai untuk pemula':'Best for beginners'}</div>
          </div>
          <div className="mode-card advanced" onClick={()=>startMode('advanced')}>
            <div className="mode-icon">🔵</div>
            <div className="mode-title">{T?'Mod Lanjutan':'Advanced Mode'}</div>
            <div className="mode-desc">{T?'Dah ada skrip dari ChatGPT/Gemini/Claude? Paste sini, sistem auto-isi panel.':'Have a script from ChatGPT/Gemini/Claude? Paste it, system auto-fills panels.'}</div>
            <div className="mode-tag">{T?'Sesuai untuk pengguna mahir':'Best for advanced users'}</div>
          </div>
        </div>
        <div className="hint"><span>💡</span><span>{T?'Kedua-dua mod percuma sepenuhnya. Tiada API Key diperlukan.':'Both modes are completely free. No API Key required.'}</span></div>
      </div>
      <div className="footer">
        <div className="footer-brand">Thinkerz Solution</div>
        <div className="footer-tag">Empowering Trainers with AI Tools</div>
        <div className="footer-url">www.ThinkerzSolution.com</div>
        <div className="footer-div"/>
        <div className="footer-copy">© 2026 Thinkerz Solution. All rights reserved.</div>
        <div className="footer-ver">● v2.0 ● Da'wah Comic Studio</div>
      </div>
    </div>
  )

  return (
    <div className="wrap">
      <div className="header">
        <div className="header-top">
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button onClick={resetToLanding} style={{background:'none',border:'none',cursor:'pointer',fontSize:12,color:'var(--text2)',padding:'4px 8px',borderRadius:8}}>← {T?'Tukar Mod':'Change Mode'}</button>
            <div className={`mode-pill ${mode==='easy'?'easy':'adv'}`}>{mode==='easy'?(T?'🟢 Mod Mudah':'🟢 Easy'):(T?'🔵 Mod Lanjutan':'🔵 Advanced')}</div>
          </div>
          <div className="lang-toggle">
            <button className={lang==='bm'?'active':''} onClick={()=>setLang('bm')}>BM</button>
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
          </div>
        </div>
        <h1>{T?"Studio Komik Dakwah":"Da'wah Comic Studio"}</h1>
        <p>{T?'Penjana Prompt Komik Dakwah Bertenaga AI':'AI-Powered Da\'wah Comic Prompt Generator'}</p>
      </div>

      <div className="progress">
        <div className="prog-bars">
          {(T?STEPS_BM:STEPS_EN).map((_,i)=><div key={i} className={`prog-bar${i===step?' active':i<step?' done':''}`}/>)}
        </div>
        <div className="prog-labels">
          {(T?STEPS_BM:STEPS_EN).map((lbl,i)=><div key={i} className={`prog-lbl${i===step?' active':''}`}>{lbl}</div>)}
        </div>
      </div>

      <div className="card">

        {/* STEP 0 — STYLE + ASPECT RATIO */}
        {step===0&&(
          <div className="gap12">
            <div className="lbl">{T?'Pilih Gaya Visual Komik':'Select Comic Visual Style'}</div>
            <div className="style-grid-new">
              {STYLES.map(s=>(
                <div key={s.id} className={`style-thumb${styleId===s.id?' sel':''}`}
                  onClick={()=>{setStyleId(s.id);setPreviewStyle(s.id)}}
                  onMouseEnter={()=>setPreviewStyle(s.id)}
                  onMouseLeave={()=>setPreviewStyle(styleId)}>
                  <img src={`/images/${s.file}`} alt={s.name} className="style-thumb-img"/>
                  <div className="style-thumb-name">{s.name}</div>
                  {styleId===s.id&&<div className="style-thumb-check">✓</div>}
                </div>
              ))}
            </div>
            {previewStyle&&(()=>{
              const s=STYLES.find(x=>x.id===previewStyle)
              return(
                <div className="style-preview-panel">
                  <img src={`/images/${s.file}`} alt={s.name} className="style-preview-img"/>
                  <div className="style-preview-info">
                    <div className="style-preview-name">{s.name}</div>
                    <div className="style-preview-desc">{s.desc}</div>
                    {styleId===s.id&&<div className="style-selected-badge">✅ {T?'Dipilih':'Selected'}</div>}
                  </div>
                </div>
              )
            })()}
            <div className="divider"/>
            <div className="lbl">{T?'Pilih Orientasi Imej':'Select Image Orientation'}</div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:14}}>
              {ASPECT_RATIOS.map(ar=>(
                <div key={ar.id}
                  onClick={()=>setAspectRatio(ar.id)}
                  style={{
                    display:'flex',flexDirection:'column',alignItems:'center',gap:8,
                    padding:'12px 10px',borderRadius:'var(--radius-lg)',cursor:'pointer',
                    border: aspectRatio===ar.id ? '1.5px solid var(--accent)' : '.5px solid var(--border2)',
                    background: aspectRatio===ar.id ? 'var(--accent-glow)' : 'var(--surface2)',
                    transition:'all .2s',flex:'1',minWidth:70,
                  }}>
                  <div style={{
                    width:ar.w, height:ar.h,
                    border: aspectRatio===ar.id ? '2px solid var(--accent2)' : '1.5px solid var(--border3)',
                    borderRadius:4,
                    background: aspectRatio===ar.id ? 'var(--accent-dim)' : 'var(--surface3)',
                  }}/>
                  <div style={{fontSize:13,fontWeight:700,color:aspectRatio===ar.id?'var(--accent2)':'var(--text2)'}}>{ar.label}</div>
                  <div style={{fontSize:10,color:'var(--text3)',textAlign:'center',lineHeight:1.3}}>{ar.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1 — TOPIC */}
        {step===1&&(
          <div className="gap12">
            <div>
              <div className="lbl">{T?'Topik Dakwah':'Da\'wah Topic'}</div>
              <input type="text" placeholder={T?'Cth: Kenapa Muslim wajib solat 5 waktu sehari?':'e.g. Why must Muslims pray 5 times a day?'} value={topic} onChange={e=>handleTopicChange(e.target.value)}/>
              <div className="hint mt8"><span>💡</span><span>{T?'Tajuk komik akan sama dengan topik. Edit di bawah kalau nak tukar.':'Comic title matches topic. Edit below to change.'}</span></div>
            </div>
            {(titleEdited||(comicTitle&&comicTitle!==topic))&&(
              <div>
                <div className="lbl">{T?'Tajuk Komik (diedit)':'Comic Title (edited)'}</div>
                <input type="text" value={comicTitle} onChange={e=>{setComicTitle(e.target.value);setTitleEdited(true)}}/>
              </div>
            )}
            <div>
              <div className="lbl">{T?'Mesej Utama yang Ingin Disampaikan':'Main Message to Convey'}</div>
              <textarea
                placeholder={T?'Apakah nilai, pengajaran, atau refleksi yang anda mahu pembaca rasa atau fikirkan selepas membaca komik ini?':'What value, lesson, or reflection do you want readers to feel or think about after reading this comic?'}
                value={mainMessage}
                onChange={e=>setMainMessage(e.target.value)}
                style={{minHeight:72}}
              />
            </div>
            <div>
              <div className="lbl">{T?'Dalil Al-Quran / Hadis (pilihan)':'Quranic Verse / Hadith (optional)'}</div>
              <textarea
                placeholder={T?'Contoh: QS Al-Baqarah [2:45] atau Hadis Riwayat Bukhari... Tinggalkan kosong jika tiada.':'e.g. QS Al-Baqarah [2:45] or Hadith narrated by Bukhari... Leave empty if none.'}
                value={dalil}
                onChange={e=>setDalil(e.target.value)}
                style={{minHeight:60}}
              />
              <div className="hint mt8"><span>⚠️</span><span>{T?'Pastikan dalil adalah sahih dan sesuai dengan konteks. AI dalam CustomGPT akan semak ketepatan dalil anda.':'Ensure the reference is authentic and contextually appropriate. The CustomGPT AI will verify accuracy.'}</span></div>
            </div>
          </div>
        )}

        {/* STEP 2 — STORY STRUCTURE */}
        {step===2&&(
          <div className="gap12">
            <div>
              <div className="lbl">{T?'Jenis Komik':'Comic Type'}</div>
              <div className="chips">
                <div className={`chip${narrativeType==='dialogue'?' sel':''}`} onClick={()=>setNarrativeType('dialogue')}>
                  {T?'Dialog':'Dialogue'}
                </div>
                <div className={`chip${narrativeType==='monologue'?' sel':''}`} onClick={()=>setNarrativeType('monologue')}>
                  {T?'Monolog':'Monologue'}
                </div>
                <div className={`chip${narrativeType==='action'?' sel':''}`} onClick={()=>setNarrativeType('action')}>
                  {T?'Aksi & Peristiwa':'Action-driven'}
                </div>
              </div>
              <div style={{background:'var(--surface2)',border:'.5px solid var(--border)',borderRadius:'var(--radius)',padding:'10px 13px',fontSize:12,color:'var(--text2)',lineHeight:1.7}}>
                {narrativeType==='dialogue'&&<span>💬 <strong>{T?'Dialog':'Dialogue'}</strong> — {T?'Cerita disampaikan melalui perbualan antara dua atau lebih watak. Paling sesuai untuk topik soal-jawab dan perbincangan.':'Story told through conversation between two or more characters. Best for Q&A and discussion topics.'}</span>}
                {narrativeType==='monologue'&&<span>🧠 <strong>{T?'Monolog':'Monologue'}</strong> — {T?'Seorang watak berfikir, merenung, atau bercerita sendiri. Sesuai untuk topik refleksi diri dan perasaan dalaman.':'One character thinks, reflects, or narrates alone. Suitable for self-reflection and inner feelings.'}</span>}
                {narrativeType==='action'&&<span>⚡ <strong>{T?'Aksi & Peristiwa':'Action-driven'}</strong> — {T?'Cerita disampaikan melalui kejadian dan aksi, bukan dialog. Sesuai untuk topik yang bercorak dramatik atau visual.':'Story told through events and action, not dialogue. Best for dramatic or visually driven topics.'}</span>}
                {!narrativeType&&<span style={{color:'var(--text3)'}}>{T?'Pilih jenis komik di atas untuk lihat penerangan.':'Select a comic type above to see description.'}</span>}
              </div>
            </div>
            <div>
              <div className="lbl">{T?'Penerangan Jalan Cerita Komik':'Comic Story Description'}</div>
              <textarea
                placeholder={T?'Ceritakan secara ringkas apa yang berlaku dalam komik ini. Contoh: Seorang pemuda bertanya kepada ustaznya kenapa perlu solat, dan ustaz menerangkan dengan analogi bateri telefon...':'Briefly describe what happens in this comic. Example: A young man asks his ustaz why prayer is necessary, and the ustaz explains using a phone battery analogy...'}
                value={narrativeDesc}
                onChange={e=>setNarrativeDesc(e.target.value)}
                style={{minHeight:90}}
              />
            </div>
            <div className="divider"/>

                      </div>
        )}

        {/* STEP 3 — CHARACTERS */}
        {step===3&&(
          <div className="gap12">
            <div>
              <div className="lbl">{T?'Bilangan Watak':'No. of Characters'}</div>
              <div className="chips">
                {[1,2,3].map(n=>(
                  <div key={n} className={`chip${numChars===n?' sel':''}`} onClick={()=>setNumChars(n)}>
                    {n} {T?'watak':'character'}{n>1?T?'':'s':''}
                  </div>
                ))}
              </div>
            </div>
            <div className="lbl">{T?'Maklumat Watak':'Character Details'}</div>
            <div className="char-cards">
              {Array.from({length:numChars},(_,i)=>(
                <div key={i} className="char-card">
                  <div className="char-num">{T?`Watak ${i+1}`:`Character ${i+1}`}</div>
                  <input type="text" placeholder={T?'Nama':'Name'} value={chars[i]?.name||''} onChange={e=>updateChar(i,'name',e.target.value)}/>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                    <input type="text" placeholder={T?'Peranan':'Role'} value={chars[i]?.role||''} onChange={e=>updateChar(i,'role',e.target.value)}/>
                    <input type="text" placeholder={T?'Ciri Utama':'Key Trait'} value={chars[i]?.trait||''} onChange={e=>updateChar(i,'trait',e.target.value)}/>
                  </div>
                  <div className="chips" style={{marginBottom:0}}>
                    {[[T?'Lelaki':'Male','male'],[T?'Perempuan':'Female','female']].map(([lbl,val])=>(
                      <div key={val} className={`chip${chars[i]?.gender===val?' sel':''}`} onClick={()=>updateChar(i,'gender',val)}>{lbl}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="lbl">{T?'Lokasi & Suasana':'Location & Atmosphere'}</div>
              <textarea placeholder={T?'Cth: Perkarangan masjid waktu Maghrib. Cahaya warm dan lembut. Suasana tenang.':'e.g. Mosque courtyard at Maghrib. Warm soft lighting. Calm atmosphere.'} value={location} onChange={e=>setLocation(e.target.value)} style={{minHeight:80}}/>
            </div>

            <div className="divider"/>

            {/* COPY FOR CUSTOMGPT BUTTON — after all info collected */}
            <div>
              <div className="lbl">{T?'Guna CustomGPT untuk Hasilkan Skrip?':'Using CustomGPT to Generate Script?'}</div>
              <div className="hint mb8">
                <span>🤖</span>
                <span>{T?'Semua maklumat di atas akan dimasukkan dalam template. Copy dan paste ke dalam CustomGPT AI Dakwah Comic Script Generator untuk hasilkan skrip dialog komik anda.':'All info above will be included in the template. Copy and paste into CustomGPT AI Dakwah Comic Script Generator to generate your comic dialogue script.'}</span>
              </div>
              <button
                className={`btn-copy${copiedCustomGPT?' copied':''}`}
                onClick={()=>{
                  const nl = '\n'
                  const charList = chars.slice(0,numChars).map((c,i)=>
                    'Watak '+(i+1)+': '+(c.name||'[nama]')+' — '+(c.role||'[peranan]')+(c.trait?' — '+c.trait:'')+(c.gender?' — '+(c.gender==='male'?'Lelaki':'Perempuan'):'')
                  ).join(nl)
                  const isBM = inputLang==='bm'
                  const jenis = narrativeType==='dialogue'?(isBM?'Dialog':'Dialogue'):narrativeType==='monologue'?(isBM?'Monolog':'Monologue'):(isBM?'Aksi & Peristiwa':'Action-driven')
                  const template = isBM
                    ? '=== MAKLUMAT KOMIK DAKWAH ==='+nl
                      +'Topik: '+(topic||'[belum diisi]')+nl
                      +'Tajuk: '+(comicTitle||topic||'[belum diisi]')+nl
                      +'Mesej Utama: '+(mainMessage||'[belum diisi]')+(dalil?nl+'Dalil: '+dalil:'')+nl
                      +'Jenis Komik: '+jenis+nl
                      +'Penerangan Jalan Cerita: '+(narrativeDesc||'[belum diisi]')+nl
                      +'Bahasa: Bahasa Melayu Malaysia'+nl+nl
                      +'=== WATAK ==='+nl+(charList||'[watak belum diisi]')+nl+nl
                      +'=== LOKASI & SUASANA ==='+nl+(location||'[belum diisi]')+nl+nl
                      +'=== ARAHAN ==='+nl
                      +'Tolong hasilkan skrip komik dakwah berdasarkan maklumat di atas. Semak dalil jika ada, cadangkan struktur (bilangan pages dan panel), bincang dengan saya, kemudian hasilkan skrip draft dalam canvas pertama. Tunggu pengesahan saya sebelum hasilkan output akhir.'
                    : '=== DAKWAH COMIC INFO ==='+nl
                      +'Topic: '+(topic||'[not filled]')+nl
                      +'Title: '+(comicTitle||topic||'[not filled]')+nl
                      +'Main Message: '+(mainMessage||'[not filled]')+(dalil?nl+'Reference: '+dalil:'')+nl
                      +'Comic Type: '+jenis+nl
                      +'Story Description: '+(narrativeDesc||'[not filled]')+nl
                      +'Language: English'+nl+nl
                      +'=== CHARACTERS ==='+nl+(charList||'[characters not filled]')+nl+nl
                      +'=== LOCATION & ATMOSPHERE ==='+nl+(location||'[not filled]')+nl+nl
                      +'=== INSTRUCTIONS ==='+nl
                      +'Please generate a dakwah comic script based on the above. Verify reference if any, suggest structure (pages and panels), discuss with me, then generate draft in first canvas. Wait for my confirmation before final output.'
                  navigator.clipboard.writeText(template)
                  setCopiedCustomGPT(true)
                  setTimeout(()=>setCopiedCustomGPT(false),2000)
                }}
              >
                {copiedCustomGPT?(T?'✅ Disalin! Paste ke CustomGPT sekarang.':'✅ Copied! Paste into CustomGPT now.'):(T?'📋 Copy Maklumat untuk CustomGPT':'📋 Copy Info for CustomGPT')}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — STORYBOARD */}
        {step===4&&mode==='easy'&&(
          <div className="gap12">
            <div className="hint"><span>📝</span><span>{T?'Isi deskripsi visual, ton emosi, dan dialog untuk setiap panel.':'Fill in visual description, emotional tone, and dialogue for each panel.'}</span></div>
            {renderPanelEditor()}
          </div>
        )}

        {step===4&&mode==='advanced'&&(
          <div className="gap12">
            <button className="btn-ghost" style={{width:'100%',padding:'10px'}} onClick={()=>setShowAiPrompt(v=>!v)}>
              {showAiPrompt?(T?'▲ Sorokkan Template':'▲ Hide Template'):(T?'▼ Dapatkan Template Prompt untuk AI':'▼ Get AI Prompt Template')}
            </button>
            {showAiPrompt&&(
              <div style={{background:'var(--surface2)',border:'.5px solid var(--border2)',borderRadius:'var(--radius)',padding:14}}>
                <div className="sub-lbl" style={{marginBottom:8}}>{T?'Copy ke ChatGPT / Gemini / Claude:':'Copy to ChatGPT / Gemini / Claude:'}</div>
                <div className="prompt-box" style={{maxHeight:180}}>{AI_PROMPT_TEMPLATE(topic||'[topik]',charListStr||'[watak]',location||'[lokasi]',numPages,panelCounts,inputLang)}</div>
                <button className={`btn-copy${copiedTemplate?' copied':''}`} style={{marginTop:8}} onClick={copyTemplate}>
                  {copiedTemplate?(T?'✅ Disalin!':'✅ Copied!'):(T?'Salin Template':'Copy Template')}
                </button>
              </div>
            )}
            <div>
              <div className="lbl">{T?'Paste Skrip dari AI di Sini':'Paste AI Script Here'}</div>
              <textarea
                placeholder={T?'Paste skrip komik dari ChatGPT / Gemini / Claude di sini...\n\nFormat:\nPANEL 1 — [nama panel]\nVisual Description:\n...\nTone & Emotional Cue:\n...\nDialog:\nWatak: "..."':'Paste your comic script from ChatGPT / Gemini / Claude here...\n\nFormat:\nPANEL 1 — [panel name]\nVisual Description:\n...\nTone & Emotional Cue:\n...\nDialogue:\nCharacter: "..."'}
                value={pastedScript} onChange={e=>{setPastedScript(e.target.value);setParsedFromScript(false)}}
                style={{minHeight:220,fontFamily:'var(--font-mono)',fontSize:12,lineHeight:1.6}}
              />
            </div>
            {pastedScript.trim().length>=50&&(
              <button className="btn" style={{width:'100%',padding:'11px'}} onClick={parseAndFill}>
                {parsedFromScript?(T?'✅ Panel dah diisi — edit di bawah':'✅ Panels filled — edit below'):(T?'⚡ Auto-Isi Panel dari Skrip':'⚡ Auto-Fill Panels from Script')}
              </button>
            )}
            {parsedFromScript&&pages.length>0&&(
              <div className="gap12">
                <div className="status-ok">✅ {T?'Panel berjaya diisi! Semak dan edit di bawah.':'Panels filled! Review and edit below.'}</div>
                <div className="divider"/>
                {renderPanelEditor()}
              </div>
            )}
          </div>
        )}

        {/* STEP 4 — AUTHOR */}
        {step===6&&(
          <div className="gap12">
            <div className="lbl">{T?'Nama Penulis / NGO / Organisasi':'Author / NGO / Organization'}</div>
            <input type="text" placeholder={T?'Cth: Bro Hafizi  /  Pertubuhan Dakwah XYZ  /  @NamaPage':'e.g. Bro Hafizi  /  Dakwah XYZ  /  @YourPage'} value={authorName} onChange={e=>setAuthorName(e.target.value)}/>
            <div className="hint"><span>💡</span><span>{T?`Akan terpapar di panel terakhir: "By ${authorName||'Nama Anda'}"`:
            `Will appear in last panel: "By ${authorName||'Your Name'}"`}</span></div>
          </div>
        )}

        {/* STEP 5 — PROMPTS */}
        {step===6&&(
          <div className="gap12">
            <div className="status-ok">✅ {T?`${prompts.length} prompt dijana — satu per halaman.`:`${prompts.length} prompt(s) generated — one per page.`}</div>
            <div className="hint">
              <span>{inputLang==='bm'?'🇲🇾':'🇬🇧'}</span>
              <span>{T?`Bahasa: ${inputLang==='bm'?'Bahasa Melayu Malaysia':'English'} · Gaya: ${styleData?.name||'-'} · Aspek: ${aspectRatio}`:
              `Language: ${inputLang==='bm'?'Bahasa Melayu':'English'} · Style: ${styleData?.name||'-'} · Ratio: ${aspectRatio}`}</span>
            </div>
            {prompts.map((pr,i)=>(
              <div key={i} className="prompt-page">
                <div className="prompt-page-label">{T?`Halaman ${pr.pageNum}`:`Page ${pr.pageNum}`}</div>
                <div className="prompt-box">{pr.text}</div>
                <button className={`btn-copy${copied===i?' copied':''}`} onClick={()=>copyText(pr.text,i)}>
                  {copied===i?(T?'✅ Disalin!':'✅ Copied!'):(T?`Salin Prompt Halaman ${pr.pageNum}`:`Copy Page ${pr.pageNum} Prompt`)}
                </button>
              </div>
            ))}
            {prompts.length>1&&<>
              <div className="divider"/>
              <button className={`btn-copy${copied==='all'?' copied':''}`} onClick={()=>copyText(prompts.map(p=>`=== ${inputLang==='bm'?'HALAMAN':'PAGE'} ${p.pageNum} ===\n\n${p.text}`).join('\n\n\n'),'all')}>
                {copied==='all'?(T?'✅ Semua disalin!':'✅ All copied!'):(T?'Salin Semua Prompt':'Copy All Prompts')}
              </button>
            </>}
          </div>
        )}
      </div>

      <div className="nav">
        <button className="btn-sec" onClick={goBack} disabled={step===0}>{T?'← Kembali':'← Back'}</button>
        <div className="nav-info">{T?'Langkah':'Step'} {step+1}/7</div>
        {step<6
          ?<button className="btn" onClick={goNext} disabled={!canNext()}>{T?'Seterusnya →':'Next →'}</button>
          :<button className="btn-sec" onClick={()=>setStep(4)}>{T?'← Edit Semula':'← Edit Again'}</button>
        }
      </div>

      <div className="footer">
        <div className="footer-brand">Thinkerz Solution</div>
        <div className="footer-tag">Empowering Trainers with AI Tools</div>
        <div className="footer-url">www.ThinkerzSolution.com</div>
        <div className="footer-div"/>
        <div className="footer-copy">© 2026 Thinkerz Solution. All rights reserved.</div>
        <div className="footer-ver">● v2.0 ● Da'wah Comic Studio</div>
      </div>
    </div>
  )
}
