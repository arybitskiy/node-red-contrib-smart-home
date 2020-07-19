import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/007A:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/merten/508244.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/268/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "Battery powered pushbutton devices that controls other devices.\n\n(1 Key Device) (5080xx)Move - Mobile switching and dimming of lighting\n\nMove is for anyone who wants to be even more fl exible. The new little round radio push-button can be easily removed from its respective wall bracket and used as a radio remote control. And you can snap it back into the frame when you're done.",
            name: "Description",
          },
          { text: "508244 - CONNECT MOVE", name: "Name" },
          {
            text: "http://www.merten.com/Info-Centre.59.0.html",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "http://www.merten.com/Radio-transmitter-and-radio-receiver.148.0.html?&L=3%3Fq%3Dplus%20lin",
            name: "ProductPage",
          },
          { text: "508244", id: "0001", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/268/xml",
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
