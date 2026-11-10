/**
 * wedding-data.js — Customer-facing editable data layer for ever-after-bloom
 * Edit this file to update couple names, wedding date, story, chapters, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Dr. Manvitha",
    groom: "Shesnag",
    initials: "M & S",
  },
  dateISO: "2026-12-02T11:00:00+05:30",
  dateLabel: "Wednesday & Thursday, 2 & 3 December 2026",
  timeLabel: "Varapooja 11:00 AM · Reception 6:00 PM · Muhurtham 8:40 AM",
  venue: {
    name: "SHUBH CONVENTION",
    address: "6th Main, Puttenahalli, Kothnor Main Road, J. P. Nagar 7th Phase, Bengaluru - 560 078",
    mapsQuery: "SHUBH CONVENTION 6th Main Puttenahalli Kothnor Main Road J. P. Nagar 7th Phase Bengaluru 560078",
    mapsUrl: "https://maps.app.goo.gl/2czRJv4tSdUU3dQE8",
  },
  dressCode: "Traditional Indian & Festive Elegance",
  hero: {
    kicker: "Together with our families",
    scrollLabel: "Scroll Down",
    blessing: "Two souls, one beautiful journey",
  },
  bgm: {
    src: "./editable/assets/bgm.mp3",
    youtubeUrl: "https://youtu.be/xhnD6t3uI2E",
    title: "Kaanunna Kalyanam (Veena)",
    volume: 0.65,
  },
  story: {
    title: "The Two of Them",
    subtitle: "A story of adventure, rhythm, and love",
    bride: {
      name: "Dr. Manvitha Dandi",
      role: "The Bride",
      text: "Caring by nature, with a love for dancing, bringing warmth and joy to life's little moments. She finds laughter in the smallest things and carries a little rhythm wherever she goes.",
    },
    groom: {
      name: "Shesnag Guptta",
      role: "The Groom",
      text: "Adventurous by nature, happiest with a trail under his feet and a new place on the horizon. He finds joy in exploring the world, with a ready smile and a curiosity that keeps him wandering.",
    },
  },
  chaptersSection: {
    eyebrow: "Chapter Three",
    title: "Wedding Celebrations",
    note: "Celebrating together",
  },
  chapters: [
    {
      no: "I",
      title: "Varapooja",
      when: "Wednesday, 2 December 2026 · 11:00 AM",
      text: "Welcoming the groom and his family with heartfelt traditional honors, prayers, and sacred rituals as our wedding celebrations begin.",
    },
    {
      no: "II",
      title: "Reception & Dinner",
      when: "Wednesday, 2 December 2026 · 6:00 PM Onwards",
      text: "An enchanting evening of celebration, music, and cherished memories with our dearest family and friends, followed by a grand dinner.",
    },
    {
      no: "III",
      title: "Wedding Muhurtham",
      when: "Thursday, 3 December 2026 · 8:40 AM",
      text: "Under the sacred canopy, Dr. Manvitha and Shesnag unite their hearts and lives in holy matrimony amidst the sacred chanting of mantras and blessings.",
    },
    {
      no: "IV",
      title: "The Beginning of Forever",
      when: "SHUBH CONVENTION, Bengaluru",
      text: "Surrounded by laughter, love, and the blessings of our elders and loved ones, we step together into this beautiful new chapter of our lives.",
    },
  ],
  footer: {
    line1: "Come celebrate with us.",
    line2: "Bless our new beginning.",
    signoff: "With all our love, Dr. Manvitha & Shesnag",
  },
  images: {
    seal: "./editable/assets/invite-seal.png",
    openVideo: "./editable/assets/invite-open.mp4",
    lantern: "./editable/assets/lantern.png",
    heroPalace: "./editable/assets/hero-palace.jpg",
    bougainvillea: "./editable/assets/bougainvillea.png",
    goldFlourish: "./editable/assets/gold-flourish.png",
    portraitBride: "./editable/assets/portrait-bride.jpg",
    portraitGroom: "./editable/assets/portrait-groom.jpg",
    mapPlate: "./editable/assets/map-plate.jpg",
    weddingCar: "./editable/assets/wedding-car.png",
    gardenCourtyard: "./editable/assets/garden-courtyard.jpg",
    sceneDancing: "./editable/assets/scene-dancing.jpg",
    sceneWalking: "./editable/assets/scene-walking.jpg",
    sceneHands: "./editable/assets/scene-hands.jpg",
    coupleLanterns: "./editable/assets/couple-lanterns.png",
    sunsetSky: "./editable/assets/sunset-sky.jpg",
  },
};
