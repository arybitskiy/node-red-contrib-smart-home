import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3030:5250",
            name: "OzwInfoPage",
          },
          { text: "images/act/zrp100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/357/",
            id: "3030",
            name: "ZWProductPage",
            type: "5250",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          { text: "ZRP100 (V3.30)", name: "Name" },
          {
            text:
              'US Plug In Relay•\t Provides wireless ON/OFF control of lamps and other electrical appliances connected to the Plug-In Appliance Module. \n•\t The wall hugging design plugs into a wall outlet and provides a grounded switched 120 VAC outlet on one side and a grounded pass thru "always powered" 120 VAC outlet on the other. Controlled outlet also has sense feature that turns it on when load is turned on. \n•\t Each Plug-In Appliance Module functions as automatic repeater to other HomePro Modules to ensure full home coverage. \n•\t Can request updates from a designated Static Update Controller (SUC). A Static Controller is one that is not moved after its addition to the network. The Static Controller can act as a gateway in the system, since other nodes always know its position. The “always listening” advantage of the Static Controller is that other nodes can transmit information frames to it whenever needed.',
            name: "Description",
          },
          { text: "ZRP100", id: "3030", name: "Identifier", type: "5250" },
          {
            text: "http://www.act-remote.com/HPW/Specs/ZRP100-S200_spec.pdf",
            name: "ProductSupport",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3030",
            name: "FrequencyName",
            type: "5250",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/152/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/194/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/357/xml",
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
