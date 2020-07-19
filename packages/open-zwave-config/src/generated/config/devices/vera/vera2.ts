import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008C:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/vera/vera2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/961/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "SG200", id: "0001", name: "Identifier", type: "0001" },
          { text: "http://www.actiontec.com/246.html", name: "ProductPage" },
          {
            text:
              "You're on a beach in Tahiti. You turn on your phone and check in on a live feed from your security camera - or turn on porch lights. Maybe you're watching TV and flip on your pool heater and lights to get ready for a swim. Maybe from your office computer you schedule your thermostat to the right temperatures for day and night. These aren't applications of the future. They're here today, with the SG200 service gateway. \n\nThe SG200 Service Gateway is engineered to be a lifeline to the connected home. It's loaded with all the latest connectivity standards to tie together devices and services in the home: WiFi (802.11n), Z-Wave home control standards, and Ethernet. \n\nAnd if you are a carrier, your customers will appreciate the ability to pick and choose the home automation applications they want, instead of being saddled with a static set of capabilities. The Device comes loaded with Java and OSGi, allowing you to deliver applications at your customer's purchase request (and bill monthly, if desired), providing you with additional revenue streams.",
            name: "Description",
          },
          {
            text: "http://www.micasaverde.com/setting-up.php",
            name: "ProductSupport",
          },
          { text: "Actiontec SG-200", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/118/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/119/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/961/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
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
