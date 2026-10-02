import { weddingData as data } from "../data/weddingData.js";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/hero/HeroSection.jsx";
import InvitationSection from "../components/invitation/InvitationSection.jsx";
import CountdownTimer from "../components/countdown/CountdownTimer.jsx";
import EventSection from "../components/events/EventSection.jsx";
import VenueSection from "../components/venue/VenueSection.jsx";
import StorySection from "../components/story/StorySection.jsx";
import VideoSection from "../components/media/VideoSection.jsx";
import GallerySection from "../components/gallery/GallerySection.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import MusicControl from "../components/media/MusicControl.jsx";

export default function WeddingHome() {
  return (
    <>
      <Navbar name={data.couple.displayName} />
      <main>
        <HeroSection data={data} />
        <InvitationSection data={data} />
        <CountdownTimer data={data} />
        <EventSection data={data} />
        <VenueSection data={data} />
        <StorySection data={data} />
        <VideoSection data={data} />
        <GallerySection data={data} />
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
      {data.music && <MusicControl src={data.music.src} title={data.music.title} />}
    </>
  );
}