import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
};

export default function About() {
  return (
    <div className="bx_cont flex-col">
      <h2 className="text-3xl mb-5">About Us</h2>
      <div className="desc">
        Welcom to the offical explorer for The New York Times Best Seller List explorer <br />
        we hope you enjoy your stay!
      </div>
    </div>
  );
}
