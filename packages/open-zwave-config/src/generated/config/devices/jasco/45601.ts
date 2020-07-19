import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0020:1391:8007",
            name: "OzwInfoPage",
          },
          { text: "images/jasco/45601.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/289/",
            id: "1391",
            name: "ZWProductPage",
            type: "8007",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "1391",
            name: "FrequencyName",
            type: "8007",
          },
          {
            text: "http://www.jascoproducts.com/support",
            name: "ProductSupport",
          },
          {
            text:
              "Jasco LCD Z-Wave Remote. The GE Advanced Remote turns on/off and adjusts the brightness level of Z-Wave enabled lights, as well as operates the on/off functions of Z-Wave enabled small appliances. Users create and manage custom lighting schemes by controlling up to 18 individual lights, 18 groups, and 18 scenes. The LCD menu screen allows for quick navigation of remote features and easy-to-read command feedback, while the timer function allows for up to nine timed events to be automatically activated in the home. The remote also works with Z-Wave enabled thermostats. To find out more how GE Z-Wave can help you save energy, take control and feel safe.\nFeatures:\nControl your entire home from one remote\nTurn on/off and adjust the brightness of Z-Wave enabled lights\nOperates the on/off functions of Z-Wave enabled small appliances\nManage up to 18 individual lights, 18 groups, and 18 scenes\nCreate custom lighting groups and scenes\nOn-screen LCD menu provides easy navigation of features and command feedback\nProgram up to nine timed events with advanced timer\nLabel function allows you to name lights, groups, and scenes",
            name: "Description",
          },
          {
            text:
              "Lighting Control Advanced Remote, Thermostat Control, 18 Lights/Groups/Scenes",
            name: "Name",
          },
          { text: "45601", id: "1391", name: "Identifier", type: "8007" },
          { text: "www.ezzwave.com", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/289/xml",
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
