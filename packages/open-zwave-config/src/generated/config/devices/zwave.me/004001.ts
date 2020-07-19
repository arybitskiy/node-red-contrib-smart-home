import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0201:0100",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/004001.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1405/",
            id: "0201",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text:
              "This products consists of a standard photo electric Smoke detector with a pluggable Z-Wave wireless interface module.\nThe Smoke detector will also work as a stand alone product and is certified by VDS according to EN 14604. The\nsmoke chamber of the detector has a stainless steel reel with antistatic plastic chamber.\nA button allows on-device test of smoke chamber, electronics and battery. The device also offers a built-in self test and\nan electronic smoke chamber test to avoid the use of test aerosol. A low battery warning will last for 30 days but full\nfunction of the detector is guaranteed during this time.\nThe Z-Wave module allows to report the smoke and low battery alarm wirelessly to a central controller. The detector can\nalso be used as a wireless siren for alarm system or other applications. The wireless module is operated by the 9V battery\nof the smoke detector. An optional external power supply allows external powering the unit.\nAccording to VdS 3515 (Smoke Detectors with Wireless Communication) this device will send alarm signals to all other\nsmoke detectors registered in association group 2 to turn on their siren. This function ensures that all smoke detectors\nwill issue noise if one of them detected a smoke.",
            name: "Description",
          },
          { text: "004001", id: "0201", name: "Identifier", type: "0100" },
          {
            text:
              "To reset the device keep the button pushed for 10 seconds. After 5 seconds the led starts flashing and after another 5\nseconds there is a short beep signaling the successful reset back to factory defaults. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "Hit the little button on the wireless module for 1 second",
            name: "ExclusionDescription",
          },
          { text: "Smoke Detector and Siren", name: "Name" },
          {
            text: "Hit the little button on the wireless module for 1 second",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1405/004001_fixedmanual.docx",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "0201",
            name: "FrequencyName",
            type: "0100",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1405/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
