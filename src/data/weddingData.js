export const weddingData = {
  couple: {
    bride: "Malki",
    groom: "Sanju",
    displayName: "Malki & Sanju",
  },

  wedding: {
    date: "2026-12-20",
    time: "10:00",
    utcOffset: "+05:30", // Sri Lanka time, no daylight saving
  },

  hero: {
    image: "/images/wedding_firstday02.jpg",
    // mobileImage: "/images/hero/hero-mobile.jpg",
    // video: "/videos/hero-loop.mp4",
    tagline: "We are getting married",
  },

  invitation: {
    title: "Together with their families",
    message: "We warmly invite you to celebrate our special day with us.",
    image: "/images/wedding_firstday02.jpg",
  },

  venue: {
    name: "Grand Ballroom",
    address: "Colombo, Sri Lanka",
    mapUrl: "https://maps.google.com/?q=Colombo", // paste the real Google Maps link
    embedUrl: "", // optional: Google Maps → Share → Embed a map → copy the src
  },

  events: [
    { title: "Wedding Ceremony", time: "10:00 AM", location: "Grand Ballroom", image: "/images/wedding_firstday02.jpg" },
    { title: "Reception", time: "12:30 PM", location: "Grand Ballroom", image: "/images/wedding_firstday03.jpg" },
    { title: "Dinner & Dancing", time: "7:00 PM", location: "Grand Ballroom", description: "Join us for an evening of celebration.", image: "/images/weddingfirstday05.jpg" },
  ],

  story: [
    { year: "2019", title: "The Beginning", description: "We met and everything changed.", image: "/images/wedding_firstday02.jpg" },
    { year: "2022", title: "Growing Together", description: "Adventures, laughter and a lot of tea.", image: "/images/wedding_firstday03.jpg" },
    { year: "2025", title: "The Proposal", description: "A quiet evening, a big question, a yes.", image: "/images/weddingfirstday06.jpg" },
  ],

  // videoHighlight: {
  //   title: "Our Moment",
  //   src: "/videos/our-moment.mp4",
  //   poster: "/videos/our-moment-poster.jpg",
  //   caption: "A little glimpse of our journey",
  // },

  gallery: [
    { type: "image", src: "/images/couple-image01.jpg", alt: "Malki and Sanju together" },
    { type: "image", src: "/images/couple-image02.jpg", alt: "Malki and Sanju celebrating" },
    { type: "image", src: "/images/couple-image03.jpg", alt: "A portrait of Malki and Sanju" },
    { type: "video", src: "/videos/WhatsApp%20Video%202026-10-02%20at%2020.31.25.mp4", alt: "A video from Malki and Sanju's celebration" },
    { type: "video", src: "/videos/WhatsApp%20Video%202026-10-02%20at%2020.38.47.mp4", alt: "Another video from Malki and Sanju's celebration" },
    { type: "video", src: "/videos/WhatsApp%20Video%202026-10-02%20at%2020.42.18.mp4", alt: "A third video from Malki and Sanju's celebration" },
  ],

  contacts: {
    bridePhone: "+94700000001",
    groomPhone: "+94700000002",
    brideWhatsapp: "+94700000001",
    groomWhatsapp: "+94700000002",
  },

  // music: { src: "/music/wedding-song.mp3", title: "Wedding song" },
};