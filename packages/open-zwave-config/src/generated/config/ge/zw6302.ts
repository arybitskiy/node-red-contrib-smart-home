import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3133:4953",
            name: "OzwInfoPage",
          },
          { text: "images/ge/zw6302.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1902/",
            id: "3133",
            name: "ZWProductPage",
            type: "4953",
          },
          {
            text: "34193/ZW6302",
            id: "3133",
            name: "Identifier",
            type: "4953",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2124/34194 QSG and Parameter List.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3133",
            name: "FrequencyName",
            type: "4953",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n 2. Once the controller is ready to exclude your device, press and release the program button to exclude it from the network.",
            name: "ExclusionDescription",
          },
          { text: "Portable Smart Motion Sensor", name: "Name" },
          {
            text:
              "Make the move toward convenience with the Z-Wave Portable Smart Motion Sensor for your home. \nThis Z-Wave compatible device boosts the safety of your home by working with your home’s gateway \nto wirelessly trigger scenes and send alerts to your smartphone or tablet whenever motion is detected. \nUse the included batteries for easy placement anywhere, plug into the wall using a AC adapter and \nUSB cable – never replace batteries again.",
            name: "Description",
          },
          {
            text:
              "1. Press the program button 10 times within 6 seconds. \n2. The blue LED will blink for 3 seconds. \nNote: This should only be done in the event your primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network. \n2. Once the controller is ready to include your device, press and release the program button to include it in the network. \n3. The blue LED will activate for 3 seconds to confirm it has been included.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2124/",
            id: "3134",
            name: "ZWProductPage",
            type: "4953",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3134",
            name: "FrequencyName",
            type: "4953",
          },
          {
            text: "34194/ZW6302",
            id: "3134",
            name: "Identifier",
            type: "4953",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1902/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2124/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Update min/max PIR parameter https://github.com/OpenZWave/open-zwave/issues/2041",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "22 Dec 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "13",
            label: "PIR Sensitivity Setting",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "PIR Sensitivity Setting",
            Item: [
              { label: "Low", value: "1" },
              { label: "Medium", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "18",
            label: "PIR Timeout Duration",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n                1 to 60 => 1 min to 60 min.\n                255 => 5 seconds.\n            ",
          },
          {
            genre: "config",
            index: "20",
            label: "Report type",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Motion Sensor will send out",
            Item: [
              { label: "Notification", value: "1" },
              { label: "Basic Set", value: "2" },
              { label: "Basic Report", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "28",
            label: "LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Enable or Disable the LED indication when PIR is triggered",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
