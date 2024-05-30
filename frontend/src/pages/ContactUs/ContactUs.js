import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Contactus.module.css";
import Input from "../../components/Input/input";
import Button from "../../Ui/Button/Button";
import { ButtonTypes } from "../../Ui/Button/ButtonTypes";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className={styles.contanier}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "20px",
          }}
        >
          <h2 className={styles.subheading}>Get in touch with us!</h2>
          <Input variant="outlined" label="Name" />
          <Input variant="outlined" label="Email" />
          <Input variant="outlined" label="Message" />
          <Button type={ButtonTypes.SEND}  btnText="Send"/>
          <div>Phone number: <b>+355123456789</b></div>
          <div>Email: <b>petexpo@pet.com</b></div>
        </div>
        <img
          alt="pets"
          src="/assets/contact-img.png"
          style={{ width: "600px", height: "600px", marginTop: "20px" }}
        />
      </div>
      <div className={styles.footer}>
        <p>Love your pets!</p>
      </div>
    </div>
  );
}
