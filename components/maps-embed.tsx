"use client"

import { motion } from "framer-motion"

export default function MapsEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4654891234567!2d112.75123456789!3d-7.2654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9123456789a%3A0x9876543210abcdef!2sJl.%20Manyar%20Sambongan%20No.30%2C%20Kertajaya%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060282!5e0!3m2!1sen!2sid!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Momo Florist"
      />
    </motion.div>
  )
}
