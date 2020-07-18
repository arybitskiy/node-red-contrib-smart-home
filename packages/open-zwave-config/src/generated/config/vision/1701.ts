import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0620:2006",
            name: "OzwInfoPage",
          },
          { text: "images/vision/1701.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/632/",
            id: "0620",
            name: "ZWProductPage",
            type: "2006",
          },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_192.html",
            name: "ProductPage",
          },
          {
            text: "Z-Wave Certification - Vision Security Door Lock - EU",
            name: "Name",
          },
          {
            text: "CEPT (Europe)",
            id: "0620",
            name: "FrequencyName",
            type: "2006",
          },
          {
            text:
              "Use AES encryption to Lock/Unlock Door,have User Code management. Logging and schedule setting.HM 1701-SSX03 (Polished Brass)\n\nThis is a radio frequency remote control electronic deadbolt with water proof design, easy to install and operate. Fit most standard door preps, no need to drill additional holes. \n\nUser friendly for elder and young children, remote with simple icon lock and unlock, or choose manual locking, and remote can be used from indoor. The keypad buttons glow in the dark for night time visibility. \n\nEasily and quickly add and delete user codes right at the keypad, so it is convenient to provide a user code for temporary access.\n \n\tFeatures:\n*13 sets of user codes/Code numbers can be any combination from 4~10 digits \n*Schedule Setting/Logging\n*AES encryption for Z-wave Door Lock\n*Keypad shuts down after 4 incorrect code attempts. It will return to standard mode after 15 sec.\n*Z-Wave 4.51 SDK\n100ft line of sight\n*LED visual and audible (warning sounds) feedback message definitions\n*Operating temp: -10oC~50oC\n*Working Voltage: 6V\n*Dimensions: 150*70*57mm",
            name: "Description",
          },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_192.html",
            name: "ProductSupport",
          },
          { text: "1701", id: "0620", name: "Identifier", type: "2006" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/632/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
