import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3030:5250",
            name: "OzwInfoPage",
          },
          { text: "images/ge/45604.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/671/",
            id: "3030",
            name: "ZWProductPage",
            type: "5250",
          },
          { text: "Appliance Module for Schlage", name: "Name" },
          {
            text:
              "http://www.nexiahome.com/SupportCenter/Pages/supportcenter.aspx?page=support",
            name: "ProductSupport",
          },
          {
            text:
              "http://www.nexiahome.com/Products/ProductDetail.aspx?model=043156296347",
            name: "ProductPage",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3030",
            name: "FrequencyName",
            type: "5250",
          },
          {
            text:
              "Schlage It’s easy to remotely operate appliances, lamps and other electronics with Nexia™ Home Intelligence and this simple plug-in module. A Nexia outlet on one end and a regular outlet on the other end mean you don’t sacrifice any plug-in space for your other electrical devices. Nexia makes it easy to manage lights and many other plug-in devices from most web-connected computers, tablets or smart phones.\n \n\n·         Remote control appliance module is plug-in simple in any AC outlet.\n·         Activate incandescent and fluorescent floor and table lamps alike.\n·         Remotely operate or schedule small compatible appliances too—like fans, video games and stereo components—by plugging into the Nexia compatible module.\n·         Use Nexia to easily set lighting schedules, creating the appearance that someone’s home when the house is empty.\n·         On your way home, make lights come on to greet you.\n·         Forget to turn off a light? Pick up your smart phone and save electricity with one touch.\n·         Set Nexia to conveniently turn on lights when you enter your access code on your Schlage Home Keypad Lock.\n \n \nRemote management with a Nexia™ Home Intelligence system requires the Nexia Bridge and a monthly subscription of $8.99.",
            name: "Description",
          },
          {
            text: "043156296347",
            id: "3030",
            name: "Identifier",
            type: "5250",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/655/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/671/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
