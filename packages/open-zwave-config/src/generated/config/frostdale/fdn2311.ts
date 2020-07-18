import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0110:0001:2411",
            name: "OzwInfoPage",
          },
          { text: "images/frostdale/fdn2311.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/599/",
            id: "0001",
            name: "ZWProductPage",
            type: "2411",
          },
          {
            text: "http://www.frostdale.com/products/switch_2-4_buttons.html",
            name: "ProductPage",
          },
          { text: "FDN2311", id: "0001", name: "Identifier", type: "2411" },
          {
            text:
              "The nanogrid™ three button switch provides complete control over three independent light fixtures, with a maximum load rating of 600 watts. No additional wiring or configuration is needed to replace existing switches, and it is easily included in a Z-Wave network. Built-in temperature sensors can deliver room temperature to a Z-Wave gateway or thermostat, and may be used to trigger climate control events. The ESM (Energy Saving Mode) feature is activated by pressing and holding the switch’s top button and helps to reduce electricity usage. The switch’s unique design is available in five elegant finishes, with LEDs available in white, blue, or green.",
            name: "Description",
          },
          { text: "http://www.frostdale.com/faq.html", name: "ProductSupport" },
          { text: "nanogrid™ Wireless Light Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "2411",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/599/xml",
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
