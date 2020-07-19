import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0116:0001:0010",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/hac01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/694/",
            id: "0001",
            name: "ZWProductPage",
            type: "0010",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0010",
          },
          { text: "Small Z-Wave In-Wall Remote Module", name: "Name" },
          {
            text:
              "This in-wall remote module is a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Mini size design let the module can easily put into the wall box and still have enough space to install the traditional wall switch. There are many application for the module , one application is connect the 2 wire of manual switch input to most of the wall switch sell in the market , while the connected wall switch been switched ON or OFF , the module will send the correspond signal to the associated devices like Z-Wave switch module HAN01 or any Z-Wave ON/OFF or dimmer module。Another application is connect this module to any traditional wire sensor which has NC/NO manual switch input output, and this will easily convert those wire sensors into wireless Z-wave sensors. \nWith the external antenna let this module have excellent  communicate RF range, and this will let the module not only send signal to the associated device by itself easily but also act as a good routing node in the z-wave mesh network.\nSM103.HSM02\n\nThe Module can be connected to resistive load – 2990 watts for U.K. and Denmark, and 3500 watts for Germany, France and Italy.",
            name: "Description",
          },
          { text: "http://www.everspring.com/HAC01.aspx", name: "ProductPage" },
          { text: "HAC01", id: "0001", name: "Identifier", type: "0010" },
          {
            text: "http://www.ctc-chromagic.com/?q=contact",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/23/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/694/xml",
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
