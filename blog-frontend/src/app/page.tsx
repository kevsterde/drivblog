import "../style/scss/style.scss";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

import Comment from "./components/Comment";

export default function Home() {
  return (
    <div className="blog-single">
      <div className="blog-single-header">
        <div className="blog-single-header-overlay"></div>
        <div className="blog-single-header-breadcrumbs">
          <a href="#">BLOG</a> | <a href="#">Category</a>
        </div>
        <div className="blog-single-header-title">
          <h1>
            The Next Big Thing in Truck Safety: Automatic Emergency Braking
          </h1>
          <div className="entry-meta  align-center">
            <div className="readtime align-center">
              <AccessTimeFilledIcon />
              <span>10 Min Read</span>
            </div>

            <div className="published align-center">
              <CalendarMonthIcon />
              <span>October 20, 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-post-content">
        <div className="single-post-content-banner">
          <Image
            src="/content.png"
            alt="Truck braking"
            width={1400} // Specify the width of the image
            height={400} // Specify the height of the image
            layout="responsive" // Optional: makes the image responsive
          />
        </div>

        <div className="blog-single-content">
          <div className="blog-content">
            <div className="blog-content-body">
              <p>
                Ever had a close call on the highway where you had to slam on
                the brakes? It’s moments like these that have the FMCSA looking
                to make{" "}
                <a
                  href="https://www.kia.com/ph/discover-kia/ask/what-is-autonomous-emergency-braking.html#:~:text=Autonomous%20Emergency%20Braking%20(AEB)%20is,driver%20fails%20to%20take%20action."
                  target="_blank"
                  rel="noopener"
                  title="Automatic Emergency Braking"
                >
                  {" "}
                  Automatic Emergency Braking
                </a>
                (AEB) a standard feature in all new trucks. And while it might
                sound like something out of a sci-fi movie, AEB is coming to a
                truck near you sooner than you might think.
              </p>
              <p>
                The FMCSA and NHTSA are pushing to mandate AEB systems on all
                trucks weighing over 10,000 pounds, which includes most of the
                rigs on the road today. These systems automatically kick in when
                they sense a collision coming, applying the brakes if the driver
                doesn’t react fast enough. The goal? To prevent accidents and
                make the road a little safer for everyone.
              </p>
              <p>
                But what does this mean for you? For one, it’s all about safety.
                AEB can help reduce rear-end collisions, especially in
                high-traffic areas where sudden stops are common. Plus, it’s one
                less thing for you to worry about when you’re navigating tricky
                roads or dealing with unpredictable drivers.
              </p>
              <p>
                That said, some drivers have concerns. After all, trusting a
                computer to hit the brakes for you might feel a little unnerving
                at first. And while the technology is designed to make the roads
                safer, there’s always the question of how it will perform in
                real-world situations, like on icy roads or when towing heavy
                loads.
              </p>
              <p>
                The bottom line is that AEB systems are likely to become a new
                industry standard, helping to prevent accidents and improve
                safety on the road. As with any new technology, there will be a
                learning curve, but in the long run, it’s a tool designed to
                keep you and your cargo safe.
              </p>
              <p>
                So, whether you’re a fan of tech or a little skeptical, keep an
                eye out for AEB systems in the near future. They might just save
                your rig (and your day) when it counts most! Stay safe out
                there!
              </p>
              <p>
                Check in with&nbsp;
                <a href="https://drivers1st.com/">drivers1st.com</a>&nbsp;for
                the latest market trends and tips to keep you on the road and
                earning.
              </p>
            </div>
            <div className="blog-content-footer">
              <div className="blog-social">
                <h4>Share this post:</h4>
                <div className="blog-social-sharing">
                  <a href="#" className="btn-share">
                    <FacebookIcon />
                  </a>
                  <a href="#" className="btn-share">
                    <XIcon />
                  </a>
                  <a href="#" className="btn-share">
                    <PinterestIcon />
                  </a>
                  <a href="#" className="btn-share">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <div className="blog-navigation">
                <a href="" className="prev">
                  Previous
                </a>
                <a href="" className="next">
                  Next
                </a>
              </div>
            </div>

            <Comment />
          </div>
          <div className="blog-sidebar">
            <div className="blog-sidebar-category">
              <h3 className="heading3">Categories</h3>
              <ul className="nostyle">
                <li>
                  <a href="#">Entertainment </a>
                </li>
                <li>
                  <a href="#">Laws & Regulations </a>
                </li>
                <li>
                  <a href="#">News </a>
                </li>
              </ul>
            </div>
            <div className="blog-sidebar-relatedPost">
              <h3 className="heading3">Related Posts</h3>
              <section className="blog-sidebar-card">
                <Image
                  src="https://drivers1st.com/wp-content/uploads/2024/10/10.13.24-Blogpost-Banner-2-1024x576.jpg"
                  alt="Truck"
                  width={380} // Specify the width of the image
                  height={250} // Specify the height of the image
                  layout="responsive" // Optional: makes the image responsive
                />
                <div className="content">
                  <div className="tag">
                    <a href="#">Entertainment</a>
                  </div>
                  <a href="#" className="card-title">
                    <h4 className="heading4">
                      2024 Safety Focus: Why Drivers Need Better Training Than
                      Ever
                    </h4>
                  </a>
                </div>
              </section>

              <section className="blog-sidebar-card">
                <Image
                  src="https://drivers1st.com/wp-content/uploads/2024/10/10.13.24-Blogpost-Banner-2-1024x576.jpg"
                  alt="Truck"
                  width={380} // Specify the width of the image
                  height={250} // Specify the height of the image
                  layout="responsive" // Optional: makes the image responsive
                />
                <div className="content">
                  <div className="tag">
                    <a href="#">Entertainment</a>
                  </div>
                  <a href="#" className="card-title">
                    <h4 className="heading4">
                      2024 Safety Focus: Why Drivers Need Better Training Than
                      Ever
                    </h4>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
