import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import Img from "../utils/images";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row ">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <div className="flex-center-center mt-8 flex-wrap gap-2">
            <div>
              <a href="mailto:talent.dev0216@gmail.com">
                <Button variant="outlined" endIcon={<Email />}>
                  Email
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/richard-p-09b86724a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<LinkedIn />}>
                  LinkedIn
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/talent-dev216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<GitHub />}>
                  GitHub
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://discord.com/users/talentdev_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<FaDiscord />}>
                  Discord
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://t.me/richardcheung1216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<FaTelegramPlane />}>
                  Telegram
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src={Img.contact}
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");