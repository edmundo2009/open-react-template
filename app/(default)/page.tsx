import Navbar from '@/components/navbar';
export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import SectionDivider from "@/components/section-divider";
import Hero from "@/components/p0-hero";
import Greetings from "@/components/p1-greetings";
import Profile from "@/components/p2-profile";
import Timeline from "@/components/p3-timeline";
import Story from "@/components/p4-story";
import EventsAndConcerts from "@/components/p5-eventsAndConcerts";
import Discography from "@/components/p6-discography";
import FanClub from "@/components/p7-fan-club";
import SupportShiga from "@/components/p8-supportShiga";
import ShigaNoUmashingers from "@/components/p9-shigaNoUmashingers";
import Contest from "@/components/p10-contest";
import Cta from "@/components/cta";


export default function Home() {
  return (
    <>
      <Navbar />
      <section id="Hero"><Hero /></section>
      <section id="Greetings"><Greetings /></section>
      <section id="profile"><Profile /></section>
      <section id="timeline"><Timeline /></section>
      <section id="story"><Story /></section>
      <section id="events"><EventsAndConcerts /></section>
      <section id="discography"><Discography /></section>
      <section id="fanclub"><FanClub /></section>
      <section id="supportshiga"><SupportShiga /></section>
      <section id="shigano"><ShigaNoUmashingers /></section>
      <section id="contest"><Contest /></section>
      <section id="cta"><Cta /></section>
    </>
  );
}
