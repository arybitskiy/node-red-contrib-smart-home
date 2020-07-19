import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/015D:231C:0111",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen21.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1945/",
            id: "231C",
            name: "ZWProductPage",
            type: "0111",
          },
          {
            text:
              "1. Press and hold the top button for at least 3 seconds while you apply AC power to this device.\n2. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press up and release the front button to exclude it from the network.",
            name: "ExclusionDescription",
          },
          { text: "In-wall Smart Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "231C",
            name: "FrequencyName",
            type: "0111",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press up and release the toggle to include it in the network.\n3. Once your controller has confirmed that the device has been included, refresh the Z-Wave network to optimize performance.\n4. The device is associated in the same group when it included in setting process. \nNow you can control your Z-Wave device according to groups, scenes, schedules and automation programmed.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2348/ZW30manual170412.pdf",
            name: "ProductManual",
          },
          { text: "ZEN21", id: "231C", name: "Identifier", type: "0111" },
          {
            text:
              "It is an In-wall type device controlled by Z-Wave controller and can be configured in Z-Wave sensor network, if Z-Wave certified controller features remote access, you can control lights at home from your mobile phone separately, and manual On/Off light by push button .",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/2348/",
            id: "1E1C",
            name: "ZWProductPage",
            type: "B111",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "1E1C",
            name: "FrequencyName",
            type: "B111",
          },
          { text: "ZW30", id: "1E1C", name: "Identifier", type: "B111" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1945/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2348/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
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
            index: "1",
            label: "Orientation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Controls the on/off orientation of the rocker switch",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "LED Indicator Control",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Choose if you want the LED indicator to turn on when switch is on or off",
            Item: [
              { label: "LED on when switch is off", value: "0" },
              { label: "LED on when switch is on", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "LED Indicator",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable or disable LED indicator so it stays off at all times",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
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
