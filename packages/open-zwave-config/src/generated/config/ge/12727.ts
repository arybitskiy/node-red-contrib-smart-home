import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3033:4952",
            name: "OzwInfoPage",
          },
          { text: "images/ge/12727.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1200/",
            id: "3033",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text:
              '"Transform any home into a smart home with the GE Z-Wave Smart Lighting Control Smart Toggle Switch.  The in-wall GE Z-Wave Smart Lighting Control Toggle Switch replaces your current switch, uses existing wiring and remotely controls the On/Off functions of your permanently installed lighting and ceiling fans. The toggle switch can be used in groups of multiple lights or turned on and off within ambient interior lighting scenes and and provides your home with ultimate flexibility, capable of being used by itself or with up to four GE add-on switching in three, four, five and six-way wiring configurations. Three-way wiring configuration turns the light or appliance on/off from two separate locations. Four-way wiring configuration turns the light or appliance on/off from three separate locations. The GE Z-Wave Smart Lighting Control Toggle Switch is compatible with any Z-Wave certified gateway, providing access to many popular home automation systems and application. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!\n\nZ-Wave is the world’s largest ecosystem of interoperable smart home products. Z-Wave lighting controls provide an easy-to-install and affordable system to control lighting and small appliances in your home. Add GE Z-Wave lighting controls to a Z-Wave certified gateway to access and control your home from anywhere in the world using your smartphone, tablet or computer as a home automation command center. Never worry if you accidentally left the lights on because you can turn them off remotely or program your lights to go on/off at specific times. Create customized lighting scenes for any occasion such as a “go to sleep” scene or a “movie night” scene. Give the illusion that someone is home by programming the lights to turn on/off while you are away—perfect for deterring crime and adding additional security!"',
            name: "Description",
          },
          { text: "GE Z-Wave In-Wall Smart Switch (Toggle)", name: "Name" },
          {
            text: "12727 / ZW4003",
            id: "3033",
            name: "Identifier",
            type: "4952",
          },
          { text: "http://www.ezzwave.com", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1200/xml",
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
