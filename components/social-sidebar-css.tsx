"use client"

import { motion } from "framer-motion"
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone,
  FaTiktok,
  FaFacebook
} from "react-icons/fa"
import WhatsAppButton from "./whatsapp-button"
import styles from "./SocialSidebar.module.css"

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/Momoflorist01/",
    className: styles.instagram
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@momoflorist99",
    className: styles.tiktok
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "",
    className: styles.facebook
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/6281213142558",
    className: styles.whatsapp
  },
  {
    name: "Telepon",
    icon: FaPhone,
    url: "tel:081213142558",
    className: styles.phone
  }
]

export default function SocialSidebarCSS() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={styles.socialSidebar}
    >
      {/* Single Elongated Card with Background Blur */}
      <div className={styles.unifiedCard}>
        {/* Social Media Icons */}
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            social.url ? (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.socialIcon} ${social.className}`}
                title={social.name}
              >
                <social.icon />
                <div className={styles.tooltip}>
                  {social.name}
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className={`${styles.socialIcon} ${social.className} ${styles.disabled}`}
                title={`${social.name} - Coming Soon`}
              >
                <social.icon />
                <div className={styles.tooltip}>
                  {social.name} - Coming Soon
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* Separator Line */}
        <div className={styles.separator}></div>

        {/* Order Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <WhatsAppButton
            message="Halo, saya ingin memesan bunga dari Momo Florist"
            className={styles.orderButtonContent}
            hideIcon
          >
            <div className={styles.orderText}>
              ORDER NOW
            </div>
          </WhatsAppButton>
        </motion.div>
      </div>
    </motion.div>
  )
}
