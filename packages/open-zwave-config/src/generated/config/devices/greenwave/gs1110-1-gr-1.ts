import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0099:0002:0001",
            name: "OzwInfoPage",
          },
          { text: "images/greenwave/gs1110-1-gr-1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/834/",
            id: "0002",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "GS1110-1-GR-1",
            id: "0002",
            name: "Identifier",
            type: "0001",
          },
          {
            text:
              "The GreenWave Reality Home Energy Management service provides robust monitoring and control of devices in the home. The initial installation typically includes a Gateway, intelligent power strips (PowerNodes), and integration with third-party smart thermostats. Consumers can extend conservation efforts and further simplify their lives by creating easy-to-configure Smart Controls that can be executed by the push of a button – or at scheduled times – to turn devices or entire rooms on or off.\n\nGreenWave Reality’s focus on the consumer begins with a guided out-of-box experience that includes videos, an Energy Coach and a range of patented technologies that enable users to quickly get up and running on their own. After connecting the Gateway and plugging devices into the PowerNodes, the DeviceDNA feature automatically helps identify the type of each device for simple configuration of the system.",
            name: "Description",
          },
          { text: "http://www.greenwavereality.com/", name: "ProductPage" },
          { text: "OneGateway", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/834/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
