import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3030:4450",
            name: "OzwInfoPage",
          },
          { text: "images/act/zdp100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/154/",
            id: "3030",
            name: "ZWProductPage",
            type: "4450",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3030",
            name: "FrequencyName",
            type: "4450",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          {
            text:
              "Provides wireless dimming of lights 300 watt max Incandescent Only\n- Includes a 3 prong pass through outlet.\n- Lamp outlet is 2 prong.\n- Supports load sensing. If the attached lamp is turned on manually, the module will detect the load change and turn itself on. This allows lamps to operated manually or through automation.\n- Programmable ramp rates. Supports different ramp rates when controlled locally, or remotely. ON/OFF control of lights connected to the Plug-In Lamp Module. \n- Plugs directly into wall outlet and provides a switched 120 VAC source.",
            name: "Description",
          },
          { text: "ZDP100 - Scene Capable Dimmer Module", name: "Name" },
          { text: "ZDP100", id: "3030", name: "Identifier", type: "4450" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/154/xml",
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
